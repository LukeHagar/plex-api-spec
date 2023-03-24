## Group Search

### Perform a search [GET /hubs/search{?query,sectionId,limit}]

This endpoint performs a search across all library sections, or a single section, and returns matches as hubs, split up by type. It performs spell checking, looks for partial matches, and orders the hubs based on quality of results. In addition, based on matches, it will return other related matches (e.g. for a genre match, it may return movies in that genre, or for an actor match, movies with that actor).

In the response's items, the following extra attributes are returned to further describe or disambiguate the result:

- `reason`: The reason for the result, if not because of a direct search term match; can be either:
  - `section`: There are multiple identical results from different sections.
  - `originalTitle`: There was a search term match from the original title field (sometimes those can be very different or in a foreign language).
  - `<hub identifier>`: If the reason for the result is due to a result in another hub, the source hub identifier is returned. For example, if the search is for "dylan" then Bob Dylan may be returned as an artist result, an a few of his albums returned as album results with a reason code of `artist` (the identifier of that particular hub). Or if the search is for "arnold", there might be movie results returned with a reason of `actor`
- `reasonTitle`: The string associated with the reason code. For a section reason, it'll be the section name; For a hub identifier, it'll be a string associated with the match (e.g. `Arnold Schwarzenegger` for movies which were returned because the search was for "arnold").
- `reasonID`: The ID of the item associated with the reason for the result. This might be a section ID, a tag ID, an artist ID, or a show ID.

This request is intended to be very fast, and called as the user types.

+ Parameters
    + query: `dog` - The query term.
    + sectionId: `1` (number, optional) - This gives context to the search, and can result in re-ordering of search result hubs.
    + limit: `5` (number, optional) - The number of items to return per hub.
    	+ Default: `3`

+ Response 200 (application/xml)

          <MediaContainer size="12">
            <Hub type="show" hubIdentifier="show" size="1" title="Shows" more="0">
              <Directory title="The Simpsons" titleSort="Simpsons" type="show" ... />
            </Hub>
            <Hub type="movie" hubIdentifier="movie" size="1" title="Movies" more="0">
              <Video type="movie" title="The Simpsons Movie" ... />
            </Hub>
          </MediaContainer>

### Perform a search tailored to voice input [GET /hubs/search/voice{?query,type,limit}]

This endpoint performs a search specifically tailored towards voice or other imprecise input which may work badly with the substring and spell-checking heuristics used by the `/hubs/search` endpoint. It uses a [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) heuristic to search titles, and as such is much slower than the other search endpoint. Whenever possible, clients should limit the search to the appropriate type.

Results, as well as their containing per-type hubs, contain a `distance` attribute which can be used to judge result quality.

+ Parameters
    + query: `dead+poop` - The query term.
    + type: `8` (number, optional) - The type of thing to limit the search to.
    + limit: `5` (number, optional) - The number of items to return per hub.
    	+ Default: `3`

+ Response 200 (application/xml)

          <MediaContainer size="2">
            <Hub distance="3" type="movie" hubIdentifier="results.search.1" size="2" title="movie">
              <Video distance="3" type="movie" title="Deadpool" />
              <Video distance="4" type="movie" title="Dead Snow" />
            </Hub>
            <Hub distance="4" type="show" hubIdentifier="results.search.2" size="1" title="show">
              <Directory distance="4" type="show" title="Deadwood" />
            </Hub>
          </MediaContainer>
