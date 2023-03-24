## Media Providers [/media/providers]

Media providers are general purpose entities which supply media to Plex clients. Their API is a subset of the full Plex server API, and the subset is defined via a set of features on the "root" endpoint of the provider. Media provider can be hosted by a media server (which can be very useful for development work) or in the cloud, linked to a specific Plex account. This section explains media providers generally, and then provides the specific server-hosted APIs around media providers.

The top level of a provider definition returns some basic information:

- `identifier`: A unique identifier for the provider, e.g. `tv.plex.podcast`.
- `title`: The title of the provider.
- `types`: This attribute contains a comma-separated list of the media types exposed by the provider (e.g. `video, audio`).
- `protocols`: A comma-separated list of default protocols for the provider, which can be:
  - `stream`: The provider allows streaming media directly from the provider (e.g. for Vimeo).
  - `download`: The provider allows downloading media for offline storage, sync, etc. (e.g. Podcasts).
  - `livetv`: The provider provides live content which is only available on a schedule basis.

```xml
<MediaProvider identifier="tv.plex.awesome" title="Program Guide" types="video" protocols="livetv">
```

The list of supported features, along with the API endpoints each feature represents is shown in the following list. Note that each feature can define a custom endpoint URL, so it doesn't have to match the server API exactly.

- **search**: This feature implies that it supports the server `/hubs/search` endpoint.

- **metadata**: This feature implies that it supports the server endpoints: `/library/metadata/X`, `/library/metadata/X/children` and `/library/metadata/X/grandchildren`. This endpoint family allows browsing a hierarchical tree of media (e.g. show to episodes, or artist to tracks).

- **content**: This feature implies that the provider exposes a content catalog, in the form of libraries to browse (grid of content), or discover (via hubs). Each entry in the content feature can contain:

  - `hubKey`: This implies it supports a discovery endpoint with hubs.
  - `key`: This implies it supports a content catalog.

  Each content feature can contain one or both of these keys, depending on the structure. More details on the various combinations are provided below.

- **match**: The match feature is used to match a piece of media to the provider's content catalog via a set of hints. As a specific example, you might pass in a title hint of "Attack of the 50 Foot Woman" and a year hint of 1958 for the movie type. The provider would then use all the hints to attempt to match to entries in its catalog).

- **manage**: The manage feature implies a whole host of endpoints around _changing_ data inside a library (e.g. editing fields, customizing artwork, etc.). This feature is generally only available on an actual server.

- **timeline**: The timeline feature implies that the provider wants to receive timeline (playback notifications) requests from a client as the server does under `/:/timeline`. The feature may additionally specify the `scrobbleKey` and `unscrobbleKey` attributes, which represent the server `/:/scrobble` and `/:/unscrobble` endpoints which allow marking a piece of media watched or unwatched.

- **rate**: This feature implies the provider supports the server `/:/rate` endpoint which allows rating content.

- **playqueue**: This feature implies the provider supports the play queue family of endpoints. The `flavor` attribute further specifies the subset; the only supported flavor is currently `full`.

- **playlist**: This feature implies the provider supports the playlist family of endpoints. If `readonly` is set, that means that the provider only allows listing and playing playlists (via play queue API), not actually creating or editing them.

- **subscribe**: This provider allows media subscriptions to be created, and subsequently used to "record" into a library.

- **promoted**: This feature allows the provider to supply an endpoint that will return a collection of "promoted" hubs that many clients show on a user's home screen.

- **continuewatching**: This feature allows the provider to supply an endpoint that will return a hub for merging into a global Continue Watching hub.

Here's a full example provider definition:

```xml
<MediaProvider identifier="tv.plex.providers.epg.onconnect:292" title="Program Guide" types="video" protocols="livetv">
  <Feature type="content">
    <Directory icon="/icons/foo.png" hubKey="/tv.plex.providers.epg.onconnect:292/hubs/discover" title="Discover"/>
    <Directory icon="/icons/foo.png" key="/tv.plex.providers.epg.onconnect:292/sections/1" type="movie" title="Movies"/>
    <Directory icon="/icons/foo.png" key="/tv.plex.providers.epg.onconnect:292/sections/4" type="show" title="News"/>
    <Directory icon="/icons/foo.png" key="/tv.plex.providers.epg.onconnect:292/sections/2" type="show" title="Shows"/>
    <Directory icon="/icons/foo.png" key="/tv.plex.providers.epg.onconnect:292/sections/3" type="show" title="Sports"/>
  </Feature>
  <Feature key="/tv.plex.providers.epg.onconnect:292/hubs/search" type="search"></Feature>
  <Feature key="/tv.plex.providers.epg.onconnect:292/matches" type="match"></Feature>
  <Feature key="/tv.plex.providers.epg.onconnect:292/metadata" type="metadata"></Feature>
  <Feature type="subscribe"></Feature>
</MediaProvider>
```

The `content` directories describe the navigation structure for the provider. Each directory contains either a `hubKey`, a `key`, or both attributes.

- `hubKey`: Implies that following the key leads to a container of hubs.
- `key`: Implies that following the key leads to a browse container (the interstitial between a library and its content which contains types, filters, sorts, etc.).
- `icon`: Optional, specifies the icon used for a content directory.

Let's see how the `content` feature specifically can be used to define a wide variety of different media providers.

#### Home discovery and browsable libraries (e.g. EPG)

Shown in the example above, in this media provider the first content directory is an item with only `hubKey`, meaning it only providers discovery hubs. This is where we show airings which start soon, are in progress, and a few other hubs with recommendations, upcoming movies, etc. It's essentially "landing page" for the provider.

The subsequent directories have only a browse `key`, which means there is no discovery page associated for them, but instead, they provide a grid view of the content with options for filtering and sorting. We split these directories by type, so we have one for Movies, one for Shows, one for Sports, and one for News.

#### Home discovery and libraries with browse and discovery (e.g. "classic")

This is the hierarchy we have in a regular Plex server. There's a home screen (a content directory with just discovery) and then for each library, there's a content directory with both browse and discovery capabilities.

#### Minimal provider

There's no requirement to provide the content feature, given that there are two other ways to access content within a provider: search and match. The former can contribute to global search, whereas the latter is used for things like the DVR engine; once media subscriptions are set up, they look for matching content using the match feature, and examined using the metadata feature.

#### Deeper Hierarchies

If you examine an app like Spotify, you'll see many of the concepts here apply to their content hierarchy. Their content screens are either grids or hubs. But one notable difference is that the content hierarchy runs a bit deeper than the examples we've examined thus far. For example, one of the top-level selections is "Genres & Moods". Diving into one of the genres leads to a discovery area with different hubs for popular playlists, artists, and albums from the genre. Selecting a mood leads to a grid with popular playlists for the mood. In order to support this sort of hierarchy, we need an extension to the regular library, which is a *content directory*. This allows us to nest content, without losing any of the power and features—for example, the grid with popular playlists could list filters and sorts specific for that grid. This is power you simply don't have with the old channel architecture.

#### Extensions to regular libraries

This section examines extensions to plain libraries which content providers can use, and which clients need to be aware of.

- **Nested content directories**: In regular libraries, there are fixed types of directories (e.g. shows, or music albums). In content providers, we want to have the ability to display other types of things (e.g. stations, or moods, or genres) as first-class things in a grid or discovery layout. Here's an example of what a nested content directory looks like. Given the `type` of content, the client knows that this directory should be treated like a content directory feature entry.

```xml
<Directory key="foo" hubKey="foo2" type="content" aspectRatio="1:1" title="Genres and Moods" />
```

- **Aspect ratio hint**: Because the entities listed in content directories can be arbitrary, it's important to tell the client some information about how they should be displayed. The `thumb` attribute contains no information about aspect ratio, so clients make assumptions based upon known types (e.g. movies are 2:3, episode thumbs are 16:9, etc.). This attributes allows the provider to specify exactly the aspect ratio of the thing being displayed.

### Get all providers [GET /media/providers]

Returns a list of the available media providers. This endpoint can also be used as the "connection test" to check if the server can be reached.

+ Response 200 (application/xml)

```xml
<MediaContainer size="2" allowCameraUpload="1" allowChannelAccess="1" ... version="1.13.5.5291-6fa5e50a8" voiceSearch="1">
  <MediaProvider ... />
  <MediaProvider ... />
</MediaContainer>
```

### Add a media provider [POST /media/providers{?url}]

This endpoint registers a media provider with the server. Once registered, the media server acts as a reverse proxy to the provider, allowing both local and remote providers to work.

+ Parameters
    + url: `http://localhost:10000` - The URL of the media provider to add.

+ Response 200

### Refresh media providers [POST /media/providers/refresh]

Refresh all known media providers. This is useful in case a provider has updated features, e.g. during local development.

+ Response 200

### Delete a media provider [DELETE /media/providers/{provider}]

+ Parameters
    + provider: `47` (number) - The ID of the media provider to delete.

+ Response 200
