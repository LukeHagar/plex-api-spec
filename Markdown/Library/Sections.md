## Library Sections [/library/sections]

A library section (commonly referred to as just a library) is a collection of media. Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media. For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.

Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts. This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).

### Get library section details [GET /library/sections/{section}{?includeDetails}]

Returns details for the library. This can be thought of as an interstitial endpoint because it contains information about the library, rather than content itself. These details are:

- A list of `Directory` objects: These used to be used by clients to build a menuing system. There are four flavors of directory found here:
  - Primary: (e.g. all, On Deck) These are still used in some clients to provide "shortcuts" to subsets of media. However, with the exception of On Deck, all of them can be created by media queries, and the desire is to allow these to be customized by users.
  - Secondary: These are marked with `secondary="1"` and were used by old clients to provide nested menus allowing for primative (but structured) navigation.
  - Special: There is a By Folder entry which allows browsing the media by the underlying filesystem structure, and there's a completely obsolete entry marked `search="1"` which used to be used to allow clients to build search dialogs on the fly.
- A list of `Type` objects: These represent the types of things found in this library, and for each one, a list of `Filter` and `Sort` objects. These can be used to build rich controls around a grid of media to allow filtering and organizing. Note that these filters and sorts are optional, and without them, the client won't render any filtering controls. The `Type` object contains:
  - `key`: This provides the root endpoint returning the actual media list for the type.
  - `type`: This is the metadata type for the type (if a standard Plex type).
  - `title`: The title for for the content of this type (e.g. "Movies").
- Each `Filter` object contains a description of the filter. Note that it is not an exhaustive list of the full media query language, but an inportant subset useful for top-level API.
  - `filter`: This represents the filter name used for the filter, which can be used to construct complex media queries with.
  - `filterType`: This is either `string`, `integer`, or `boolean`, and describes the type of values used for the filter.
  - `key`: This provides the endpoint where the possible range of values for the filter can be retrieved (e.g. for a "Genre" filter, it returns a list of all the genres in the library). This will include a `type` argument that matches the metadata type of the Type element.
  - `title`: The title for the filter.
- Each `Sort` object contains a description of the sort field.
  - `defaultDirection`: Can be either `asc` or `desc`, and specifies the default direction for the sort field (e.g. titles default to alphabetically ascending).
  - `descKey` and `key`: Contains the parameters passed to the `sort=...` media query for each direction of the sort.
  - `title`: The title of the field.

+ Parameters
  + section: `1000` (string) - The section identifier.
  + includeDetails: `1` (boolean, optional) - Whether or not to include details for a section (types, filters, and sorts). Only exists for backwards compatibility, media providers other than the server libraries have it on always.
      + Default: `0`

+ Response 200 (application/xml)

        <MediaContainer size="20" allowSync="0" art="/:/resources/movie-fanart.jpg" content="secondary" identifier="com.plexapp.plugins.library" librarySectionID="1" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1484125920" sortAsc="1" thumb="/:/resources/movie.png" title1="Movies" viewGroup="secondary" viewMode="65592">
          <Directory key="all" title="All Movies"/>
          <Directory key="unwatched" title="Unwatched"/>
          <Directory key="newest" title="Recently Released"/>
          <Directory key="recentlyAdded" title="Recently Added"/>
          <Directory key="recentlyViewed" title="Recently Viewed"/>
          <Directory key="onDeck" title="On Deck"/>
          <Directory secondary="1" key="collection" title="By Collection"/>
          <Directory secondary="1" key="genre" title="By Genre"/>
          <Directory secondary="1" key="year" title="By Year"/>
          <Directory secondary="1" key="decade" title="By Decade"/>
          <Directory secondary="1" key="director" title="By Director"/>
          <Directory secondary="1" key="actor" title="By Starring Actor"/>
          <Directory secondary="1" key="country" title="By Country"/>
          <Directory secondary="1" key="contentRating" title="By Content Rating"/>
          <Directory secondary="1" key="rating" title="By Rating"/>
          <Directory secondary="1" key="resolution" title="By Resolution"/>
          <Directory secondary="1" key="firstCharacter" title="By First Letter"/>
          <Directory key="folder" title="By Folder"/>
          <Directory prompt="Search Movies" search="1" key="search?type=1" title="Search..."/>
          <Type key="/library/sections/1/all?type=1" type="1" title="Movies">
            <Filter filter="genre" filterType="string" key="/library/sections/1/genre" title="Genre" type="filter"/>
            <Filter filter="year" filterType="integer" key="/library/sections/1/year" title="Year" type="filter"/>
            <Filter filter="decade" filterType="integer" key="/library/sections/1/decade" title="Decade" type="filter"/>
            <Filter filter="contentRating" filterType="string" key="/library/sections/1/contentRating" title="Content Rating" type="filter"/>
            <Filter filter="collection" filterType="string" key="/library/sections/1/collection" title="Collection" type="filter"/>
            <Filter filter="director" filterType="string" key="/library/sections/1/director" title="Director" type="filter"/>
            <Filter filter="actor" filterType="string" key="/library/sections/1/actor" title="Actor" type="filter"/>
            <Filter filter="country" filterType="string" key="/library/sections/1/country" title="Country" type="filter"/>
            <Filter filter="studio" filterType="string" key="/library/sections/1/studio" title="Studio" type="filter"/>
            <Filter filter="resolution" filterType="string" key="/library/sections/1/resolution" title="Resolution" type="filter"/>
            <Filter filter="unwatched" filterType="boolean" key="/library/sections/1/unwatched" title="Unwatched" type="filter"/>
            <Filter filter="label" filterType="string" key="/library/sections/1/label" title="Labels" type="filter"/>
            <Sort defaultDirection="desc" descKey="addedAt:desc" key="addedAt" title="Date Added"/>
            <Sort defaultDirection="desc" descKey="originallyAvailableAt:desc" key="originallyAvailableAt" title="Release Date"/>
            <Sort defaultDirection="desc" descKey="lastViewedAt:desc" key="lastViewedAt" title="Date Viewed"/>
            <Sort default="asc" defaultDirection="asc" descKey="titleSort:desc" key="titleSort" title="Name"/>
            <Sort defaultDirection="desc" descKey="rating:desc" key="rating" title="Rating"/>
            <Sort defaultDirection="asc" descKey="mediaHeight:desc" key="mediaHeight" title="Resolution"/>
            <Sort defaultDirection="desc" descKey="duration:desc" key="duration" title="Duration"/>
          </Type>
        </MediaContainer>
