## The Media Hierarchy

Plex uses a consistent media hierarchy across all media types, from photos to movies to TV shows.

**Metadata Item**: This is the root of the hierarchy, representing the metadata layer (as opposed to more media-focused details). In here, for example, we'll find the title and summary of the movie, episode number for a TV episode, etc.

**Media Item**: The metadata item can have 1 or more media items (unless it's a container type, read more below). Each of these represents an alternative source for the media. For example, a user might have 1080p and 720p versions of a movie. In the cloud, alternate items might be offered via HLS or direct MP4 download. The items are generally listed in quality order, with the highest quality one listed first.

**Media Part**:  Each media item can have 1 or more media parts. Each of these represents a sequential piece of the media which must be played in sequence. For example an AVI split across two CD1/CD2 parts. Split parts are generally confined to video files. In the future, it's possible we may choose to allow things like pre-roll and post-roll clips via this mechanism as well.

**Media Stream**: Each media part can have 1 or more media streams. These represent the elementary components of a media file. There are a few types of streams (video, audio, subtitle, and lyric), and they can either represent streams internal to a media part, or "sidecar" files (e.g. an SRT subtitle file). Note that photos do not have streams (mostly as an optimization).

In some cases, metadata items themselves live in a hierarchy. For example artists have albums, and albums have tracks. TV shows have seasons, which have episodes. These container items are still metadata items, but they don't have any media items.

When items at other levels of the hierarchy are referred to, we generally use relative or absolute nomenclature. For example, "leaves" is used to refer to any item in the hierarchy which has media items (e.g. movies, episodes, audio tracks). At the show level, seasons are "children" and episodes are "grandchildren". At the episode level, seasons are "parents" and shows are "grandparents".

Depending on the set of items being passed back, they can have additional ancestor data. The general rule for this is whether or not the set of items is coming from mixed ancestors or not. For example, when returning a season's worth of episodes from the same show, the container itself would have references to parent and grandparent data. However, when returning a list of recently added episodes, these would _each_ contain references to ancestral data.

## Metadata and Media Attributes

In this section we'll examine the attributes present with each object in the media hierarchy, and discuss their format and purpose. Many of the attributes are common across the entire hierarchy from grandparents to grandchildren, which makes their consumption greatly simplified. Here is a list of the attributes in a metadata item:

- `key`: A URL (absolute, or relative) for obtaining item "details". In many cases, when you encounter a metadata item, it has less than full details, because those would be prohibitively expensive to retrieve and send back at all times. The details endpoint returns all data associated with the item (including some which is opted into via the various `includeXXX` query string options).
- `ratingKey`: This is an opaque string which is used to pass back to timeline, scrobble, and rating endpoints, to uniquely identify the item.
- `type`: A string representing the type of the item, with the following possible values: movie, show, season, episode, trailer, artist, album, track, photo, playlist, clip, directory.
- `title`: The title (e.g. "300" or "The Simpsons").
- `titleSort`: (optional) This is the string used for sorting the item. It's usually the title with any leading articles removed (e.g. "Simpsons").
- `originalTitle`: (optional) When present, used to indicate an item's original title, e.g. a movie's foreign title.
- `year`: (optional) The year associated with the item's release (e.g. release year for a movie).
- `index`: (optional) This represents the episode number for episodes, season number for seasons, or track number for audio tracks.
- `absoluteIndex` (optional): When present, contains the disc number for a track on multi-disc albums.
- `originallyAvailableAt`: (optional) In the format `YYYY-MM-DD [HH:MM:SS]` (the hours/minutes/seconds part is not always present). The air date, or a higher resolution release date for an item, depending on type. For example, episodes usually have air date like `1979-08-10` (we don't use epoch seconds because items can pre-date the epoch). In some cases, recorded over-the-air content has higher resolution air date which includes a time component. Albums and movies may have day-resolution release dates as well.
- `duration`: (Optional) The duration for the item, in units of milliseconds.
- `summary`: (optional) Extended textual information about the item (e.g. movie plot, artist biography, album review).
- `tagline`: (optional) Pithy one-liner about the item (usually only seen for movies).
- `thumb`: (optional) The URL for the poster or thumbnail for the item. When available for types like movie, it will be the poster graphic, but fall-back to the extracted media thumbnail.
- `art`: (optional) The URL for the background artwork for the item.
- `banner`: (optional) The URL for a banner graphic for the item.
- `hero`: (optional) The URL for a hero image for the item.
- `theme`: (optional) The URL for theme music for the item (usually only for TV shows).
- `composite`: (optional) When present, the URL for a composite image for descendent items (e.g. photo albums).
- `studio`: (optional) The studio or label which produced an item (e.g. movie studio for movies, record label for albums).
- `contentRating` (optional): If known, the content rating (e.g. MPAA) for an item.
- `rating` (optional): The rating, representing as a floating point number from 0 to 10 for the item. The exact meaning and representation depends on where the rating was sourced from.
- `ratingImage` (optional): When present, indicates an image to be shown with the rating. This is passed back as a small set of defined URI values, e.g. `rottentomatoes://image.rating.rotten`.
- `audienceRating` (optional): Some rating systems separate reviewer ratings from audience ratings. Expressed as a floating point number from 0 to 10.
- `audienceRatingImage`: (optional) A URI representing the image to be shown with the audience rating (e.g. `rottentomatoes://image.rating.spilled`).
- `userRating`: (optional) When the user has rated an item, this contains the user rating (floating point number from 0 to 10).
- `viewOffset`: (optional) When a user is in the process of viewing or listening to this item, this attribute contains the current offset, in units of milliseconds.
- `viewCount`: (optional) When a users has completed watched or listened to an item, this attribute contains the number of consumptions.
- `lastViewedAt`: (optional) When a user has watched or listened to an item, this contains a timestamp (epoch seconds) for that last consumption time.
- `addedAt`: (optional) In units of seconds since the epoch, returns the time at which the item was added to the library.
- `updatedAt`: (optional) In units of seconds since the epoch, returns the time at which the item was last changed (e.g. had its metadata updated).
- `chapterSource`: (optional) When present, indicates the source for the chapters in the media file. Can be `media` (the chapters were embedded in the media itself), `agent` (a metadata agent computed them), or `mixed` (a combination of the two).
- `primaryExtraKey`: (optional) Indicates that the item has a primary extra; for a movie, this is a trailer, and for a music track it is a music video. The URL points to the metadata details endpoint for the item.
- `skipChildren`: (optional) When found on a show item, indicates that the children (seasons) should be skipped in favor of the grandchildren (episodes). Useful for mini-series, etc.
- `skipParent`: (optional) When present on an episode or track item, indicates parent should be skipped in favor of grandparent (show).
- `leafCount`: For shows and seasons, contains the number of total episodes.
- `viewedLeafCount`: For shows and seasons, contains the number of viewed episodes.

### Ancestor Attributes

As explained above, items can contain ancestral attributes used to facilitate browsing up the tree as well as full display of an item without needing to request additional data. These can include: `parentKey`, `grandparentKey`, `parentRatingKey`, `grandparentRatingKey`, `parentThumb`, `grandparentThumb`, `grandparentArt`, `parentHero`, `grandparentHero`, `grandparentTheme`, `parentTitle`, `grandparentTitle`, `parentIndex`.

## Common Request Parameters

There are some common query string parameters which can be passed to almost all library endpoints. It is generally considered a hint to the server or media provider, and clients should not rely on the data being filtered from the response.

- `excludeFields`: This option is used to elide data in responses. The value is a comma-separated list of fields to avoid returning. The only supported fields are currently `summary`, `tagline` and `file`.
- `excludeElements`: This option is used to elide entire elements from the response. Supported values are `Media`, `Part`, `Mood`, and any tag fields (e.g. `Genre`, `Role`, or `Director`).

