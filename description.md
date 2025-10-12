# API Info

## Content Types

The API supports responses in both XML and JSON, and clients can request one
or the other using the standard `Accept` HTTP header. The default is XML, so
JSON will only be returned if it's explicitly requested (`Accept:
application/json`).  New applications should use JSON.


Throughout the docs, it's common for a examples to be given in JSON only
since the JSON response would be preferred for new applications.


## Headers


PMS accept a variety of custom headers that follow the pattern
`X-Plex-{name}`. The full set of headers isn't enumerated here since some
may only apply to certain endpoints, but common headers that can be included
on all requests include:


| Header | Description | Sample |
| --- | --- | --- |
| X-Plex-Client-Identifier | An opaque identifier unique to the client | abc123 |
| X-Plex-Token | An authentication token, obtained from plex.tv | XXXXXXXXXXXX |
| X-Plex-Product | The name of the client product | Plex for Roku |
| X-Plex-Version | The version of the client application | 2.4.1 |
| X-Plex-Platform | The platform of the client | Roku |
| X-Plex-Platform-Version | The version of the platform | 4.3 build 1057 |
| X-Plex-Device | A relatively friendly name for the client device | Roku 3 |
| X-Plex-Model | A potentially less friendly identifier for the device model | 4200X |
| X-Plex-Device-Vendor | The device vendor | Roku |
| X-Plex-Device-Name | A friendly name for the client | Living Room TV |
| X-Plex-Marketplace | The marketplace on which the client application is distributed | googlePlay |

`X-Plex-Client-Identifier` is typically required, as is `X-Plex-Token` for
authentication.

There's no standard way to send non-ASCII values as HTTP headers. We attempt
to recognize and parse UTF-8 and ISO-8859-1. If you're sending something
that may include non-ASCII characters (often `X-Plex-Device-Name`), use
UTF-8 if possible.

These are referred to as headers throughout documentation, but all `X-Plex-`
headers can also be sent as query string arguments.

## Auth

Most endpoints require token based authentication, and the token is expected
to be sent in the `X-Plex-Token` header. Tokens are obtained from plex.tv. 
See the <a href="#section/API-Info/Authenticating-with-Plex">Authenticating
with Plex</a> section.


## Paths and Keys


Many parts of the API reference things that can be fetched by their `key`.
These keys follow a sort of relative URL resolution pattern. Some examples
will help clarify.


- For a request to `/library/sections` that includes an item with a `key` of
`home` in the response, that item can be fetched at
`/library/sections/home`.

- For a request to `/library/sections/home` that includes an item with a
`key` of `/library/metadata/deadbeef` in the response, that item can be
fetched at `/library/metadata/deadbeef`.


We say this follows a "sort of" relative URL resolution pattern because all
requests are treated as though they have a trailing slash.


```

/library/sections/ + home => /library/sections/home

/library/sections + home => /library/sections/home

/library/sections + /library/sections/home => /library/sections/home

```


Just like URL resolution, keys may contain absolute URLs as well, especially
absolute `https://...` URLs or custom `view://...` URLs. In these cases the
key resolved by simply using it, the parent is irrelevant.


Also note that the features described in this API can generally be present
at a different paths. The `/media/providers` path defines where all features
can be found.  Note that a PMS can contain multiple providers which will be
enumerated here.  For simplicity, these docs use the most common, default
paths. But when we say that `/library/sections/{id}` is part of the API,
what we really mean is that a endpoint exists which is composed of the key
for the `content` feature and the key for the library section.


Finally, it's worth noting that many paths can potentially be discovered by
walking API responses and fetching `key`s, but paths that aren't documented
here aren't part of the API contract, they just happen to exist for a
particular provider. For example, a particular content directory might
include a directory with `key={baseLibraryPath}/genre`. That's not an
official part of the API that's guaranteed to exist for every content
directory, it's just a `key` that happened to exist within that content
directory.


## Types


Many elements throughout the API have a `type` attribute. These types are
meant to give helpful information, such as whether something is a movie
library or a TV show library.  Some API elements rely on a type number so
both are provided below


### List of Metadata Types


| Type Name | Type Number |

| -- | -- |

| `movie` | 1 |

| `show` | 2 |

| `season` | 3 |

| `episode` | 4 |

| `trailer` | 5 |

| `person` | 7 |

| `artist` | 8 |

| `album` | 9 |

| `track` | 10 |

| `clip` | 12 |

| `photo` | 13 |

| `photoalbum` | 14 |

| `playlist` | 15 |

| `playlistfolder` | 16 |

| `collection` | 18 |


When an element has both `type` and `key` attributes, the type describes
what will be returned when fetching that key. Some types will return a list
of other elements. That list may have a `Meta` element describing the
specific types within the list. Consider the following examples:


```json

[
    {
    "key": "/foo",
    "type": "movie",
    "title": "A Movie"
    },
    {
    "key": "/bar",
    "type": "collection",
    "title": "My Favorite Movies"
    },
    {
    "key": "/baz",
    "type": "show",
    "title": "A Show"
    }
]

```


In each case, the `type` describes what will be returned when fetching the
key. One exception is the `/children` key for parents like shows and
seasons. It will return a list of children even though the `type` describes
the parent.


Some elements may also include an optional `subtype` attribute. The subtype
is meant to be a refinement of the type, not a completely different type.
One test is trying to explain the type in natural language. `type="clip"
subtype="news"` passes the test that "This is a clip, a news clip
specifically." Another test is considering the client UI. A client should be
functional if it ignores the subtype, and optimized if it respects it. If
`type="track" subtype="podcast"`, a client can successfully play the podcast
in an audio player based purely on the type, but it may tweak the display or
which advanced playback controls are visible based on the subtype.


### List of Metadata Subtypes


- `podcast`

- `webshow`

- `news`

- `photo`


#### Collection Subtypes


- `movie`

- `show`

- `artist`

- `album`


#### Extras Subtypes


- `trailer`

- `deletedScene`

- `interview`

- `musicVideo`

- `behindTheScenes`

- `sceneOrSample`

- `liveMusicVideo`

- `lyricMusicVideo`

- `concert`

- `featurette`

- `short`

- `other`


## Sources


Source URIs and attributes make it possible to uniquely reference content
outside the local server context without requiring a fixed url. This might
be desirable when showing related albums from a friend's shared media
server, building a universal play queue, or returning aggregated hubs that
span multiple providers. Source components are immutable and act as pointers
to a single item or directory in the Plex ecosystem.


A source URI from a media server uses the `server` scheme while a cloud
provider uses the `provider` scheme.


```

server://{SERVER_ID}/{PROVIDER_ID}/{PATH}

provider://{PROVIDER_ID}/{PATH}

```


As a single regular expression, that's:


```

/^(server|provider):\/\/([a-fA-F0-9-]+)?\/?([^/]+)([^\?]+)\??(.*)?/

```


The server id is the server's `machineIdentifier`. The provider id is the
provider's `identifier`. The rest of the path represents the path of the
content at the provider and may include additional query parameters like
`X-Plex-` headers or media query syntax for sorts and filters.


Some examples may be helpful:


```

server://546684a3d18ac5c39037360ec9ce900b7af9cc36/com.plexapp.plugins.library/library/metadata/2814936

provider://tv.plex.provider.podcasts/library/sections/audio/all

```


The `source` attribute has the same structure as the source URI, but omits
the path.


```

{SOURCE_TYPE}://{SOURCE_ID}/{PROVIDER_ID?}

```

```

/^(server|provider):\/\/([a-fA-F0-9-]+)?\/?([^/]+)$/

```


```

source="server://546684a3d18ac5c39037360ec9ce900b7af9cc36/com.plexapp.plugins.library"

source="provider://tv.plex.provider.podcasts"

```


Source attributes can be used as a base and combined with `key` or other
root-relative path components to construct unique source URIs.


## Pagination


Many endpoints that return a list of items support pagination.  Additionally
some endpoints will force pagination and limit number of elements returned
if the client attempts to request all items. To request a specific subset of
data, add two headers to specify the starting offset and the number of
desired items.


- **X-Plex-Container-Start** - The desired starting offset

- **X-Plex-Container-Size** - The desired number of items


Both headers should be sent in order to request paginated content. Note that
it's possible to request a size of 0 on supported endpoints in order to
learn the total size without actually getting any content.


The response **must** be checked to see if the response is in fact
paginated. The response might not be paginated at all, or it might include a
different number of items than what was requested. A paginated response will
include the headers:


- **X-Plex-Container-Start** - The offset of the first returned item

- **X-Plex-Container-Total-Size** - The **total** size of the collection
(optional but typically present)


The response body will also typically include pagination info. If the
response is a `MediaContainer`, then it will have `offset` and `size`
attributes representing the start index and the number of items in the
current response along with an optional `totalSize` attribute for the total
number of elements in the collection.


```

HTTP/1.1 200 OK

X-Plex-Container-Start: 2

X-Plex-Container-Total-Size: 5

Content-Type: application/xml


{
    "MediaContainer": {
    "size": 3,
    "totalSize": 5,
    "offset": 2,
    "Metadata" : [
        …
    ]
    }
}

```


Rather than requesting a page starting at an index, it is also possible in
some lists to request a page centered on a specific item in the list.


- **X-Plex-Container-Focus-Key** - The key of an item to center on

- **X-Plex-Container-Size** - The desired number of items


The requested size is respected regardless of the position of the focus item
in the list. If the item is at the start of the list and 10 items are
requested, 9 items in the response will be after the item. If the item is in
the middle of the list and 10 items are requested, 4 items will be before
the item and 5 items will be after.


Endpoints that support rich media queries also have a `limit` parameter that
interacts with pagination. Sending `limit` in a query string limits the
desired number of items, much like the `X-Plex-Container-Size` header. There
are two major differences:


1. When using `limit`, the total size of the collection is not returned. The
minimum of the limit and the actual total size will be returned as the total
size.

2. The request may be more efficient when using `limit`, since the total
size doesn't have to be known.


If the total size of the collection isn't needed, use `limit`, since the
request may be more efficient.


Note that `limit` and `X-Plex-Container-Size` aren't mutually exclusive. You
can page within the results that are bounded by the limit. If you want a
total of 1000 items from a collection of many thousands of items, but you
want to page through them 20 at a time, you'd use
`limit=1000&X-Plex-Container-Size=20&X-Plex-Container-Start=0`.


## API Versioning


PMS has never used API versioning before the creation of this document.  The
first published API is considered `1.0` with the API prior to publication
considered `0.0`.  A client species its version via the
`X-Plex-Pms-Api-Version` header on requests.  If no header is provided, the
version `0.0` is assumed.


### API Changes
    - 1.0.0 (Supported in PMS >= 1.41.9)
    - Added `/downloadQueue` endpoints.
    - Public release of API.
    - The `includeFields` parameter has been renamed to `includeOptionalFields`.  The `includeFields` parameter now means "include only these fields" where in the past it meant "please add these fields you wouldn't normally include."  This was changed to be consistent with the cloud provider API.


- 1.1.0 (Supported in PMS >= 1.42.0)
    - Added ability to filter '/media/providers/metadata' endpoint by metadata types (PM-3702)
    - Changed `types` in `/playlists/{playlistId}/items` to array of integers.
    - Document the `/photo/:/transcode` endpoints
    - Fixed serialization of MetadataType objects for '/media/providers/metadata' calls.


- 1.1.1 (Supported in PMS >= 1.42.2)
    - Added 'metadataAgentProviderGroupId' query param to create and edit library section (PM-3577)
    - Fixed Add library section method type.

## Response Customization


Many endpoints allow the data that is included in the response to be
tailored to exactly what the client wants. This is possible by either
specifying things that should be excluded or the set of things that should
be included.  PMS's ability to include/exclude elements and fields is
currently limited but expanding so this should be used with care.


Attributes can be customized by using a query string arg of either
`excludeFields` or `includeFields`. This single parameter should be a
comma-separated list of attribute names. For example, a request with
`excludeFields=summary,tagline` is asking for the summary and title
attributes to be left off any metadata items while the `includeFields`
parameter indicated that only the specified fields should be included.


Child elements can be customized by using a query string arg of either
`excludeElements` or `includeElements`. This single parameter should be a
comma-separated list of element names. For example, a request with
`excludeElements=Media` is asking for the `Media` elements to be omitted
while the `includeElements` parameter indicated that only the specified
elements should be included.


In addition to the above are the parameters `includeOptionalFields` and
`includeOptionalElements`.  These indicate that the fields/elements which
are not normally included should be included in this request.  One example
is `includeOptionalElements=musicAnalysis` on metadata will include the
`musicAnalysis` parameter which can be large and typically not needed by a
client.


Trimming the response to only include what a client will actually use can
result in much better performance, especially in large collections. 
Increasingly these are being used to select which data is fetched from the
database.  So if a client knows it will only ever use a few parameters from
a request, it should specify those with `includeFields`.


Note that these inclusions/exclusions are treated as requests, not
guarantees. Some endpoints will disregard them completely, and others may
ignore them for specific items and insist on returning data that the client
didn't necessarily ask for.


## Media Providers


Media providers are general purpose entities which supply media to Plex
clients. Their API describes the Plex Media Server API, via a set of
features on the "root" endpoint of the provider. Media provider can be
hosted by a media server or in the cloud, linked to a specific Plex account.
This section explains media providers generally, and then provides the
specific server-hosted APIs around media providers.


### Client Guide to Media Providers


The philosophy behind media providers in general is to allow a common API
between cloud servers and PMS, since the APIs are nearly identical to a
normal PMS. The general guidelines are:

- Consume `/media/providers` instead of `/library/sections`

    The new providers endpoint give you a list of all providers exported by a server and their features. Remember that the library itself is considered a (very rich) provider! This change will also require changing the client to not hardwire paths on the server, but rather read them from the feature keys directly (e.g. scrobble and rating endpoints).

- Gate management functionality on the `manage` feature

    Server libraries allow management (e.g. media deletion). The correct way to gate this functionality is via the manage feature.

- Make sure key construction is correct for things like genre lists

    For example, `/library/sections/x/genre` returns a relative key for each genre, but there's nothing which says that the `key` can't be an absolute URL. This is why servers pass back `fastKey` separately so as to not break clients which don't do key construction correctly. Media providers do not pass back `fastKey`, but assume clients will be doing correct key construction.

- Don't call `/library/sections/X/filters|sorts`

    You can get all that information (and more) in a single call by hitting `/library/sections/X?includeDetails=1`. Media providers include the extra information by default.

- Respect the Type keys in `/library/sections/x`

    The top-level type pivots have their own keys, which should be used over the old "just append `/all` to the path and add the type" approach. Not only is this more flexible, it also allows for "virtual" pivots, like music videos inside a music library.

- Look for the `skipChildren`/`skipParent` attributes for shows

    Because of things like Podcasts, single-season shows can now be made to skip seasons. This is indicated by a `skipChildren` attribute on the show, or a `skipParent` attribute on an episode. If this is set on a show, the client should use `/grandchildren` instead of `/children` in the show's key.

### Features


The list of supported features, along with the API endpoints each feature
represents is shown in the following list. Note that each feature can define
a custom endpoint URL, so it doesn't have to match the server API exactly.


- **search**: This feature implies that it supports search via the provided
key.


- **metadata**: This feature implies that it supports metadata endpoint. 
For example, if the `key` were `/library/metadata` then the endpoints
`/library/metadata/X`, `/library/metadata/X/children` and
`/library/metadata/X/grandchildren` would be supported. This endpoint family
allows browsing a hierarchical tree of media (e.g. show to episodes, or
artist to tracks).


- **content**: This feature implies that the provider exposes a content
catalog, in the form of libraries to browse (grid of content), or discover
(via hubs). Each entry in the content feature can contain:

    - `hubKey`: This implies it supports a discovery endpoint with hubs.
    - `key`: This implies it supports a content catalog.
    - `icon`: Optional, specifies the icon used for a content directory.

    Each content feature can contain one or both of these keys, depending on the structure. More details on the various combinations are provided below.

- **match**: The match feature is used to match a piece of media to the
provider's content catalog via a set of hints. As a specific example, you
might pass in a title hint of "Attack of the 50 Foot Woman" and a year hint
of 1958 for the movie type. The provider would then use all the hints to
attempt to match to entries in its catalog.


- **manage**: The manage feature implies a whole host of endpoints around
_changing_ data inside a library (e.g. editing fields, customizing artwork,
etc.). This feature is generally only available on an actual server and
generally only to the admin.


- **timeline**: The timeline feature implies that the provider wants to
receive timeline (playback notifications) requests from a client at the
endpoint defined by `key`. The feature may additionally specify the
`scrobbleKey` and `unscrobbleKey` attributes, which represent the endpoints
which allow marking a piece of media played or unplayed.


- **rate**: This feature implies the provider supports the endpoint which
allows rating content.


- **playqueue**: This feature implies the provider supports the play queue
family of endpoints. The `flavor` attribute further specifies the subset;
the only supported flavor is currently `full`.


- **playlist**: This feature implies the provider supports the playlist
family of endpoints. If `readonly` is set, that means that the provider only
allows listing and playing playlists (via play queue API), not actually
creating or editing them.


- **subscribe**: This provider allows media subscriptions to be created.  If
the flavor is `record` then media can be recorded from this library (such as
DVR).  If the flavor is `download` then the user is allowed to download from
this library.


- **promoted**: This feature allows the provider to supply an endpoint that
will return a collection of "promoted" hubs that many clients show on a
user's home screen.


- **continuewatching**: This feature allows the provider to supply an
endpoint that will return a hub for merging into a global Continue Watching
hub.


- **collection**: This feature implies the provider supports the collection
family of endpoints.


- **actions**
    - **removeFromContinueWatching** - Action to remove an item from continue watching

- **imagetranscoder** - This feature implies the provider supports the image
transcoder endpoints used to scale images for clients where memory and
processor is at a premium


- **queryParser** - This feature implies the provider supports the media
queries language below


- **grid** - This feature implies the provider supports displaying metadata
in a grid over time (such as live TV)


##### Home discovery and browsable libraries


Shown in the example in
[/media/providers](#tag/Provider/operation/getMediaProviders), in this media
provider the first content directory is an item with only `hubKey`, meaning
it only providers discovery hubs. This is the set of hubs covering the whole
library which contains continue watching, recently added, recommendations,
etc. It's essentially "landing page" for the provider.


The subsequent directories also have a browse `key`, which means they
provide a list view of the content with options for filtering and sorting. 
EPG providers may have only the `key` and no `hubKey`.


##### Minimal provider


There's no requirement to provide the content feature, given that there are
two other ways to access content within a provider: search and match. The
former can contribute to global search, whereas the latter is used for
things like the DVR engine; once media subscriptions are set up, they look
for matching content using the match feature, and examined using the
metadata feature.


##### Deeper Hierarchies


If you examine an app like Spotify, you'll see many of the concepts here
apply to their content hierarchy. Their content screens are either grids or
hubs. But one notable difference is that the content hierarchy runs a bit
deeper than the examples we've examined thus far. For example, one of the
top-level selections is "Genres & Moods". Diving into one of the genres
leads to a discovery area with different hubs for popular playlists,
artists, and albums from the genre. Selecting a mood leads to a grid with
popular playlists for the mood. In order to support this sort of hierarchy,
we need an extension to the regular library, which is a *content directory*.
This allows us to nest content, without losing any of the power and
features—for example, the grid with popular playlists could list filters and
sorts specific for that grid. This is power you simply don't have with the
old channel architecture.


##### Extensions to regular libraries


This section examines extensions to plain libraries which content providers
can use, and which clients need to be aware of.


- **Nested content directories**: In regular libraries, there are fixed
types of directories (e.g. shows, or music albums). In content providers, we
want to have the ability to display other types of things (e.g. stations, or
moods, or genres) as first-class things in a grid or discovery layout.
Here's an example of what a nested content directory looks like. Given the
`type` of content, the client knows that this directory should be treated
like a content directory feature entry.

    ```json
    {
    "Directory":[
        {
        "key":"foo",
        "hubKey":"foo2",
        "type":"content",
        "aspectRatio":"1:1",
        "title":"Genres and Moods"
        }
    ]
    }
    ```

- **Aspect ratio hint**: Because the entities listed in content directories
can be arbitrary, it's important to tell the client some information about
how they should be displayed. The `thumb` attribute contains no information
about aspect ratio, so clients make assumptions based upon known types (e.g.
movies are 2:3, episode thumbs are 16:9, etc.). This attributes allows the
provider to specify exactly the aspect ratio of the thing being displayed.


## Media Queries


Media queries are a querystring-based filtering language used to select
subsets of media. The language is rich, and can express complex expressions
for media selection, as well as sorting and grouping.


### Fields


Queries reference fields, which can be of a few types:

    - *integer*: numbers
    - *boolean*: true/false
    - *tag*: integers representing tag IDs.
    - *string*: strings
    - *date*: epoch seconds
    - *language*: string in ISO639-2b format.

These fields are detailed in `Field` elements in the section description
endpoint (e.g. `/library/sections/X?includeDetails=1`).


### Operators


Given that media queries are expressible using querystrings, the operator
syntax might look a bit quirky, because a) they have to include the `=`
character, and b) characters to the left of the equal sign usually have to
be URI encoded.


Operators are defined per type:

    - *integer*: `=` (equals), `!=` (not equals), `>>=` (greater than), `<<=` (less than), `<=` (less than or equals), `>=` (greater than or equals)
    - *boolean*: `=0` (false) and `=1` (true)
    - *tag*: `=` (is) and `!=` (is not)
    - *string*: `=` (contains), `!=` (does not contain), `==` (equals), `!==` (does not equal), `<=` (begins with), `>=` (ends with)
    - *date*:  `=` (equals), `!=` (not equals), `>>=` (after), `<<=` (before)
    - *language*:  `=` (equals), `!=` (not equals)

### Relative Values and Units


For some types, values can be specified as relative. For dates, epoch
seconds can be specified as relative to “now” as follows: `+N` (in N seconds
from now and `-N` (N seconds ago).


In addition, the following unit suffixes can be used on date values:

    - *m*: minutes
    - *h*: hours
    - *d*: days
    - *w*: weeks
    - *mon*: months
    - *y*: years

For example, `>>=-3y` means “within the last 3 years”.


### Field Scoping


Some media is organized hierarchically (e.g. shows), and in those cases,
many fields are common to different elements in the hierarchy (e.g. show
title vs episode title). The following rules are used to resolve field
references.

    - A `type` parameter must be included to specify the result type.
    - Any non-qualified field is defaulted to refer to the result type.
    - In order to refer to other levels of the hierarchy, use the scoping operator, e.g. `show.title` or `episode.year`. A query may be comprised of multiple fields from different levels of the hierarchy.
    - the `sourceType` parameter may be used to change the default level to which fields refer. For example, `type=4&sourceType=2&title==24` means “all episodes where the show title is 24”.

### Sorting


The `sort` parameter is used to indicate an ordering on results. Typically,
the sort value is a field (including optional scoping). The `:` character is
used to indicate additional features of the sort, and the `,` character is
used to include multiple fields to the sort.


For example, `sort=title,index` means “sort first by title ascending, then
by index”.  Sort features are:

    - *desc*: indicates a descending sort.
    - *nullsLast*: indicates that null values are sorted last.

Sort features may be mixed and matched, e.g. `sort=title,index:desc`.


### Grouping


The `group` parameter is used to group results by a field, similar to the
SQL feature `group by`. For example, when listing popular tracks, we use the
query `type=10&sort=ratingCount:desc&group=title`, because we don't want
multiple tracks with the same name (e.g. same track on different albums)
showing up.


### Limits


The `limit` parameter is used to limit the number of results returned.
Because it's implemented on top of the SQL `limit` operator, it currently
only operates at the level of the type returned. In other words,
`type=10&limit=100` will return at most 100 tracks, but you can't select
tracks from a limit of 10 _albums_.


### Boolean Operators


Given the nature of querystrings, it makes a lot of sense to interpret the
`&` character as a boolean AND operator. For example `rating=10&index=5`
means “rating is 10 AND index is 5”.


We leverage the `,` operator to signify the boolean OR operator. SO
`rating=1,2,3` means “rating is 1 OR 2 OR 3. Given standard precedence
rules, `rating=1,2,3&index=5` is parsed as `(rating = 1 or rating = 2 or
rating = 3) and index = 5)`.


### Complex Expressions


There's only so many expressions you can form using vanilla
querystring-to-boolean mapping (essentially, “ANDs of ORs”). In order to
fully represent complex boolean expressions, there are a few synthetic
additions:

    - *push=1* and *pop=1*:  These are the equivalent of opening and closing parenthesis.
    - *or=1*: These is an explicit OR operator.

As an example: `push=1&index=1&or=1&rating=2&pop=1&duration=10` parses into
`(index = 1 OR rating = 2) AND duration = 10`. This could not be expressed
by the simplified syntax above.


Happy query building!


## Profile Augmentations


The universal transcode endpoint supports the following header or query
string parameter: ```X-Plex-Client-Profile-Extra```.


The value of this parameter is url-encoded.  When url-decoded, it consists
of a string expressed in the following (poor man's) BNF grammar:


```

<ProfileExtension> ::= <Directive> "+" <Directive>*

<Directive> :: = <Verb> <Arguments>

<Verb> ::= "add-direct-play-profile" | "add-limitation" |
"add-transcode-target-codec" | "append-transcode-target-codec" |
"add-transcode-target" | "add-settings"

<Arguments> ::= "(" (<Name> "=" <Value>) "&")*

<Name> ::= <Text>

<Value> ::= <Text>

```


### add-direct-play-profile

This directive augments the set of Direct Play profiles in the client
profile. The following parameters are required:


- `type` = "videoProfile" | "musicProfile" | "photoProfile" |
"subtitleProfile"

- `container` = * or a comma-separated list of containers

- `videoCodec` = * or a comma-separated list of video codecs

- `audioCodec` = * or a comma-separated list of audio codecs

- `subtitleCodec` = * or a comma-separated list of subtitle formats


`*` means to use all existing matching values in the profile. At least one
of the `videoCodec`, `audioCodec` and `subtitleCodec` parameters must not be
`*`.



#### add-direct-play-profile example

To add `ac3` as a video audio codec for mp4 and mov containers:


```

add-direct-play-profile(type=videoProfile&container=mp4,mov&videoCodec=*&audioCodec=ac3&subtitleCodec=*)

```


### add-limitation

This directive adds a scoped limitation to the profile. The following
parameters are required:


- `scope` = "videoContainer" | "musicContainer" | "photoContainer" |
"videoCodec" | "videoAudioCodec" | "musicCodec" | "subtitleCodec" |
"transcodeTarget"

- `scopeName` = the name of the relevant container or codec

- `type` = "match" | "notMatch" | "upperBound" | "lowerBound"

- `name` = the name of the limitation


The following parameters are optional:

- `isRequired` = true|false (default is false)

- `allStreams` = true|false (default is false)

- `replace` = true|false (default is false)


If the `replace` parameter is true, the limitation will replace any
similarly scoped limitations (i.e. identical `scope` and `scopeName`. If
false, the new limitation will simply add itself to the list of limitations.


Exactly one of the following three parameters is required:

- `value` = the value of the limitation

- `substring` = the substring of the limitation

- `regex` = the regex of the limitation


The `transcodeTarget` scope exists to attach a limitation to a transcode
target.  This allows clients to  tell the MDE to select a specific transcode
target for a context/protocol pair, based on specific information about the
media itself.  When multiple transcode targets match, the first one in the
profile will be selected.



#### add-limitation examples

To add a limitation on ac3 audio tracks in video media specifying a maximum
of 6 channels:

```

add-limitation(scope=videoAudioCodec&scopeName=ac3&type=upperBound&name=audio.channels&value=6)

```


To add a limitation on ac3 audio tracks in video media specifying a maximum
bitrate:

```

add-limitation(scope=videoAudioCodec&scopeName=ac3&type=upperBound&name=audio.bitrate&value=160)

```


To add a limitation on h264 video specifying a maximum level:

```

add-limitation(scope=videoCodec&scopeName=h264&type=upperBound&name=video.level&value=40&isRequired=true)

```


To add a limitation to a transcode target:

```

add-limitation(scope=transcodeTarget&scopeName=MyTranscodeProfile&type=upperBound&name=audio.channels&value=2)

```


### add-transcode-target-codec

This directive adds additional codecs to the beginning of the audioCodec
and/or subtitleCodec lists for the specified transcode target. The following
parameters are required:


- `type` = "videoProfile" | "musicProfile" | "photoProfile" |
"subtitleProfile"


Either `id` or `context` and `protocol` are required:


- `id` = a transcode target identifier

- `context` = a transcode context ("streaming" | "static")

- `protocol` = a protocol ("hls" | "http" | "slss" ... )


At least one of the following parameters are also required:


- `videoCodec` = a comma-separated list of videoCodecs, which are added to
the set of video codecs on the target.

- `audioCodec` = a comma-separated list of audioCodecs, which are added to
the set of audio codecs on the target.

- `subtitleCodec` = a comma-separated list of audioCodecs, which are added
to the set of subtitle codecs on the target.


#### add-transcode-target-codec example

To add `ac3` as an additional transcode target option to a HTTP Live
Streaming target:


```

add-transcode-target-codec(type=videoProfile&context=streaming&protocol=hls&audioCodec=ac3)

```


### append-transcode-target-codec

This directive appends additional codecs to the end of the audioCodec and/or
subtitleCodec lists for the specified transcode target.  The parameters are
the same as for `add-transcode-target-codec`.


```

append-transcode-target-codec(type=videoProfile&context=streaming&protocol=hls&audioCodec=dca)

```


### add-transcode-target

This directive adds a new transcode target.  If a transcode target matching
the type/context/profile already exists in the profile, then this directive
is ignored.  The following parameters are required:


- `type` = "videoProfile" | "musicProfile" | "photoProfile" |
"subtitleProfile"

- `context` = a transcode context ("streaming" | "static")

- `protocol` = a protocol ("hls" | "http" | "slss" ... )

- `container` = a container


The following parameters are optional:


- `id` = a transcode target identifier

- `replace` = true|false (default is false)


If the `replace` parameter is true, the transcode target will replace any
similarly scoped transcode target (i.e. identical `type`, `context` and
`protocol`. If false, the augmentation will fail if there is an existing
transcode target.


The following parameters are required, depending on the type:


- `videoCodec` = a video codec (required for video) or a comma-separated
list of video codecs

- `audioCodec` = an audio codec (required for music and video) or a
comma-separated list of audio codecs

- `subtitleCodec` = an subtitle codec (required for subtitles and optional
for video) or a comma-separated list of subtitle codecs


#### add-transcode-target examples


```

add-transcode-target(type=videoProfile&context=streaming&protocol=http&container=mkv&videoCodec=h264&audioCodec=aac,ac3&subtitleCodec=srt)

```


```

add-transcode-target(type=musicProfile&context=streaming&protocol=http&container=flac&audioCodec=flac)

```


```

add-transcode-target(type=subtitleProfile&context=all&protocol=http&container=webvtt&subtitleCodec=webvtt)

```


### add-settings

This directive overrides global settings for the profile.  The parameters
are name/value pairs matching existing client profile settings.


```

add-settings(DirectPlayStreamSelection=false&RandomAccessDataModel=limited)

```


## Authenticating with Plex


Plex supports two authentication methods:


### JWT Authentication (Recommended)


Plex now supports JSON Web Token (JWT) authentication that provides better
security, shorter token lifespans, and improved protection against potential
security breaches.


#### Why JWT Authentication?


The new JWT system addresses security concerns by:

- **Short-lived tokens**: Tokens expire after 7 days

- **Public-key cryptography**: Uses modern cryptographic standards (ED25519)
for enhanced security

- **Better clock synchronization**: Built-in timestamp validation helps
devices stay in sync


#### How JWT Authentication Works


The new system uses a public-key authentication model where each device
uploads a public key (JWK) and then requests short-lived JWT tokens. Here's
the flow:


**1. Device Key Registration**

First, your device needs to register its public key with Plex.tv:


```bash

POST https://clients.plex.tv/api/v2/auth/jwk

Headers:
    X-Plex-Client-Identifier: your-device-identifier
    X-Plex-Token: your-existing-token

Body:

{
    "jwk": {
    "kty": "OKP",
    "crv": "Ed25519",
    "x": "your-public-key-data",
    "use": "sig",
    "alg": "EdDSA"
    }
}

```


**2. Token Refresh Process**

Once registered, your device can refresh its token every 7 days using this
three-step process:


**Step 1: Get a Nonce**

```bash

GET https://clients.plex.tv/api/v2/auth/nonce

Headers:
    X-Plex-Client-Identifier: your-device-identifier
```


This returns a unique nonce valid for 5 minutes:

```json

{
    "nonce": "7c415b56-8f48-488a-98ab-847ef4460442"
}

```


**Step 2: Create a Device JWT**

Your device creates a JWT containing:

- The nonce from step 1

- Required scope permissions (see Scope Details below)

- Audience set to `plex.tv`

- Issuer set to your `client_identifier`

- Signed with your device's private key


**Scope Details:**

The scope field in your device JWT should contain comma-separated values for
the user data you need included in the JWT:

- `username` - Access to the user's username

- `email` - Access to the user's email address

- `friendly_name` - Access to the user's friendly name

- `restricted` - Access to the user's restricted status

- `anonymous` - Access to the user's anonymous status

- `joinedAt` - Access to the user's account creation timestamp


**Example Device JWT Payload:**

```json

{
    "nonce": "7c415b56-8f48-488a-98ab-847ef4460442",
    "scope": "username,email,friendly_name",
    "aud": "plex.tv",
    "iss": "your-client-identifier",
    "iat": 1705785603,
    "exp": 1705789203
}

```


**Step 3: Exchange for Plex Token**

```bash

POST https://clients.plex.tv/api/v2/auth/token

Headers:
    X-Plex-Client-Identifier: your-device-identifier

Body:

{
    "jwt": "your-device-signed-jwt"
}

```


This returns a new Plex.tv JWT valid for 7 days:

```json

{
    "auth_token": "eyJraWQiOiJYeVRRN21seXFtVmhJcEo0U1pDZGltdXo3ZjdEYXU1Ym9MLXU2MG5JeEdJIiwidHlwIjoiSldUIiwiYWxnIjoiRWREU0EifQ..."
}

```


**Using Your JWT Token**

Once you have a JWT token, use it exactly like the old tokens in the
`X-Plex-Token` header:


```bash

GET https://clients.plex.tv/api/v2/library/sections

Headers:
    X-Plex-Token: your-jwt-token
```


#### JWT Authentication Benefits


**Security Features:**

- **Token Rotation**: Automatic expiration every 7 days

- **Individual Revocation**: Each device can be individually disabled

- **Cryptographic Verification**: Uses industry-standard ED25519 signatures

- **Nonce Protection**: Prevents replay attacks


**Developer Experience:**

- **Familiar Interface**: Same `X-Plex-Token` header usage

- **Automatic Clock Sync**: Built-in timestamp validation

- **Clear Error Codes**: Specific error responses for different failure
modes

- **Rate Limiting**: Built-in protection against abuse


#### Error Handling


The JWT system provides clear error responses with specific HTTP status
codes:

- **498 Token Expired**: Your JWT has expired and needs refresh

- **422 Signature Verification Failed**: Invalid device signature or JWT
structure

- **422 Thumbprint Already Taken**: JWK already registered by another device

- **400 Bad Request**: Invalid request format or missing required fields

- **429 Too Many Requests**: Rate limit exceeded (nonce requests are
rate-limited)


#### Migration Guide


**For New Applications:**

1. Generate an ED25519 key pair for your device

2. Register your public key using `POST
https://clients.plex.tv/api/v2/auth/jwk`

3. Implement the token refresh flow

4. Use the returned JWT in your `X-Plex-Token` header


**For Existing Applications:**

1. Continue using your current token for now

2. Implement JWT authentication alongside existing auth

3. Test the new system thoroughly

4. Switch over when ready


### Traditional Token Authentication (Legacy)


You're developing an app that needs access to a user's Plex account. To do
this, you'll need to get access to the user's Access Token. This document
details how to check whether an Access Token is valid, and how to obtain a
new one.


#### High-level Steps


1. Choose a unique app name, like "My Cool App"

2. Check storage for your app's Client Identifier; generate and store one if
none is present.

3. Check storage for the user's Access Token; if present, verify its
validity and carry on.

4. If an Access Token is missing or invalid, generate a PIN, and store its
`id`.

5. Construct an Auth App url and send the user's browser there to
authenticate.

6. After authentication, check the PIN's `id` to obtain and store the user's
Access Token.


#### Detailed Steps


1. Choose a unique app name

    The app name you choose will be visible in the user's Authorized Devices view. The name you choose should be different from any existing Plex products.

1. Generate a Client Identifier

    The Client Identifier identifies the specific instance of your app. A random string or UUID is sufficient here. There are no hard requirements for Client Identifier length or format, but once one is generated the client should store and re-use this identifier for subsequent requests.

1. Verify stored Access Token validity

    You can check whether a user's stored Access Token is valid by requesting user info from the plex.tv API and examining the HTTP status code of the response.

    ```
    $ curl -X GET https://plex.tv/api/v2/user \
        -H 'Accept: application/json' \
        -H 'X-Plex-Product: My Cool App' \
        -H 'X-Plex-Client-Identifier: <clientIdentifier>' \
        -H 'X-Plex-Token: <userToken>'
    ```

    | HTTP Status Code | |
    |-|-|
    | `200` | Access Token is valid |
    | `401` | Access Token is invalid |

    If an Access Token is invalid, it should be discarded, and new one should be obtained through the authentication process.

    If plex.tv cannot be reached, or if you receive any other status code it indicates an error state, but does not indicate an invalid Access Token.


1. Generate a PIN

    To sign a user in, the app must create a time-limited PIN. The user is then led through a process to "claim" the PIN, associating it with their account and granting the app access to the user's plex.tv account.

    ```
    $ curl -X POST https://plex.tv/api/v2/pins?strong=true \
        -H 'Accept: application/json' \
        -H 'X-Plex-Product: My Cool App' \
        -H 'X-Plex-Client-Identifier: <clientIdentifier>'
    ```

    Note: the `strong=true` header provides a longer length pin which will have a longer lifetime.  This is useful in cases where the user is not expected to type in the pin themselves.  If not specified, a shorter pin is created but will have a much shorter lifetime.

    The response will be a JSON payload; the two important properties are `id` and `code`. Store the `id` locally, and use the `code` to construct the Auth App url.

    ```
    {
        "id": 564964751,
        "code": "8lzjqnq8lye02n52jq3fqxf8e",
        …
    }
    ```

1. Checking the PIN

    There are two primary ways apps interact with the Auth App and the PIN-claiming process; **Forwarding** and **Polling**.

    **Forwarding** is used by web-based apps. A user visits your app in their web browser, leaves your app to authenticate with Plex, and returns to your app via a `forwardUrl` your app provides.

    **Polling** is used by native apps running outside of a web browser. A user indicates their intention to sign-in from within your app, and your app opens a web browser pointing to the Auth App where the user completes sign-in. Your app will periodically poll on the generated PIN until it is claimed, or it expires.

1. Construct the Auth App url

    The user will authenticate with the plex.tv Auth App through their web browser.

    If you're using the **Forwarding** flow, the user will be returned to your app after authenticating where you'll be able to check the created PIN to determine the user's Access Token. The `forwardUrl` to which the user will be returned can carry the PIN `id` which needs to be checked on their return to the app.

    Auth App urls are encoded as parameters to the url fragment. Practically, this means that your Auth App url will be prefixed with `https://app.plex.tv/auth#?`; the `#?` at the end indicates the beginning of the url fragment, and that the content of the fragment afterwards is encoded as url parameter key-values pairs.

    Append these parameters to construct the final URL.

    | Parameter                        |                                                                 |
    |----------------------------------|-----------------------------------------------------------------|
    | `clientID`                         | Your client identifier                                          |
    | `code`                             | The `code` from the generated PIN                               |
    | `forwardUrl`                       | The url to which the user will be returned after authenticating. |
    | `context%5Bdevice%5D%5Bproduct%5D` | The name of your App; ex "My Cool App"                     |

    *Example*

    ```
    https://app.plex.tv/auth#?clientID=<clientIdentifier>&code=<pinCode>&context%5Bdevice%5D%5Bproduct%5D=My%20Cool%20Plex%20App&forwardUrl=https%3A%2F%2Fmy-cool-plex-app.com
    ```

    You can use the [`qs`](https://www.npmjs.com/package/qs) module to encode all necessary parameters, including the nested `context` parameter.


    ```js
    const authAppUrl =
        'https://app.plex.tv/auth#?' +
        require('qs').stringify({
        clientID: '<clientIdentifier>',
        code: '<pinCode>',
        forwardUrl: 'https://my-cool-plex-app.com',
        context: {
            device: {
            product: 'My Cool App',
            },
        },
        });
    ```

1. Send user's browser to constructed Auth App url

    Once the Auth App URL has been constructed, send the user's browser there to authenticate.

1. Check PIN

    If you're using the **Polling** flow, your app should periodically (once per second) check the PIN `id` to determine when the user has signed-in.

    If you're using the **Forwarding** flow, check the stored PIN `id` from the PIN creation step. If the PIN has been claimed, the `authToken` field in the response will contain the user's Access Token you need to make API calls on behalf of the user. If authentication failed, the `authToken` field will remain `null`.

    ```
    $ curl -X GET 'https://plex.tv/api/v2/pins/<pinID>' \
        -H 'Accept: application/json' \
        -H 'X-Plex-Client-Identifier: <clientIdentifier>'
    ```
### Talking to PMS


Once you have a token to talk to plex.tv, you will need to obtain a
different set of tokens used to talk to PMS instances.


```

$ curl
https://clients.plex.tv/api/v2/resources?includeHttps=1&includeRelay=1&includeIPv6=1
\
    -H 'Accept: application/json' \
    -H 'X-Plex-Product: My Cool App' \
    -H 'X-Plex-Client-Identifier: <clientIdentifier>' \
    -H 'X-Plex-Token: <userToken>'
```


The response will be a JSON document which will contain available PMS
instances, the `accessToken` used in communication with this PMS, and the
list of connection URLs where the PMS may be contacted.  Connections labeled
as `local` should be preferred over those that are not, and `relay` should
only be used as a last resort as bandwidth on relay connections is limited.