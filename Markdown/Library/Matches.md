### Get library matches [GET /library/matches{?type,includeFullMetadata,includeAncestorMetadata,includeAlternateMetadataSources}]

The matches endpoint is used to match content external to the library with content inside the library. This is done by passing a series of semantic "hints" about the content (its type, name, or release year). Each type (e.g. movie) has a canonical set of minimal required hints.

This ability to match content is useful in a variety of scenarios. For example, in the DVR, the EPG uses the endpoint to match recording rules against airing content. And in the cloud, the UMP uses the endpoint to match up a piece of media with rich metadata.

The endpoint response can including multiple matches, if there is ambiguity, each one containing a `score` from 0 to 100. For somewhat historical reasons, anything over 85 is considered a positive match (we prefer false negatives over false positives in general for matching).

The `guid` hint is somewhat special, in that it generally represents a unique identity for a piece of media (e.g. the IMDB `ttXXX`) identifier, in contrast with other hints which can be much more ambiguous (e.g. a title of `Jane Eyre`, which could refer to the 1943 or the 2011 version).

#### Movies

The following hints are allowed:

- `guid`: allowed for various URI schemes, to be defined.
- `title`: required if `path` is not specified.
- `year`: optional.
- `path`: the full path to the movie file, used for "cloud-scanning" an item.

#### Shows

The following hints are allowed:

- `guid`: for URI schemes to be defined.
- `title`: required if `guid` is not passed.
- `year`: optional.

#### Episodes

Episodes require either a season/episode pair, or an air date (or both). Either the path must be sent, or the show title. The following hints are allowed:

- `grandparentTitle`: the title of the show. Required if `path` isn't passed.
- `grandparentYear`: the year of the show.
- `parentIndex`: the season.
- `index`: the episode.
- `originallyAvailableAt`: in the format `YYYY-MM-DD`.
- `path`: the full path to the episode file, can be provided in lieu of all other hints.

#### Artists

The following hints are allowed:

- `guid`: for URI schemes to be defined.
- `title`: the artist name.

#### Albums

The following hints are allowed:

- `guid`: for URI schemes to be defined.
- `parentTitle`: the artist name.
- `title`: the album name.
- `year`: the album year.

#### Tracks

The following hints are required:

- `guid`: for URI schemes to be defined.
- `grandparentTitle`: the artist name.
- `parentTitle`: the album name.
- `title`: the track name.
- `index`: the track index.
- `parentIndex`: the disc index for multi-disc albums.
- `path`: the full path to the track, can be provided in lieu of all other hints.

#### Podcasts

The following hints is required:

- `url`: the URL for the podcast feed.

#### Podcast Episodes

The following hints are required:

- `url`: the URL for the podcast feed.
- `originallyAvailableAt`: The air date for the episode.

+ Parameters

  + type: `1` (integer) - The metadata type we're attempting to match.
  + includeFullMetadata: `1` (boolean, optional) - Whether or not to include full metadata on a positive match. When set, and the best match exceeds a score threshold of 85, metadata as rich as possible is sent back.
      + Default: `0`
  + includeAncestorMetadata: `1` (boolean, optional) - Whether or not to include metadata for the item's ancestor (e.g. show and season data for an episode).
      + Default: `0`
  + includeAlternateMetadataSources: `1` (boolean, optional) - Whether or not to return all sources for each metadata field, which results in a different structure being passed back.
      + Default: `0`

+ Response 200 (application/xml)

  ```
    <MediaContainer size="1">
        <Video score="100" ratingKey="667573" key="/library/metadata/667573" studio="Shamley Productions" type="movie" title="Psycho" />
    </MediaContainer>
  ```