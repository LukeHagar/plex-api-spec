## Group Ingest

### Ingest a transient item [POST /library/file{?url,computeHashes}]

This endpoint takes a file path specified in the `url` parameter, matches it using the UMP, downloads rich metadata, and then ingests the item as a transient item (without a library section). In the case where the file represents an episode, the entire tree (show, season, and episode) is added as transient items. At this time, movies and episodes are the only supported types, which are gleaned automatically from the file path.

Note that any of the parameters passed to the metadata details endpoint (e.g. `includeExtras=1`) work here.

+ Parameters
    + url: `file:///storage%2Femulated%2F0%2FArcher-S01E01.mkv` - The file of the file to ingest.
    + virtualFilePath: `/Avatar.mkv` - A virtual path to use when the url is opaque.
    + computeHashes: `1` (boolean, optional) - Whether or not to compute Plex and OpenSubtitle hashes for the file. Defaults to 0.
    + ingestNonMatches: `1` (boolean, optional) - Whether or not non matching media should be stored. Defaults to 0.

+ Response 200 (application/xml)

         <MediaContainer size="1">
           <Video ...>
         </MediaContainer>
