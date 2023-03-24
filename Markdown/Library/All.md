## All [/library/sections/{sectionId}/all{?type,filters}]

This resource represents the set of items matching the provided filter parameters.



### Get the filtered items [GET]
Description for GET method (action) placeholder.

+ Parameters
    + sectionId: 1 (number, required) - Section identifier
    + type: 1 (number, optional) - Item type
    + filters (string, optional) - This fake parameter stands in for the various filter parameters

+ Request title=Zoolander (text/xml)

+ Response 200 (text/xml;charset=utf-8)

    + body

            <?xml version="1.0" encoding="UTF-8"?>
            <MediaContainer allowSync="1" art="/:/resources/movie-fanart.jpg" identifier="com.plexapp.plugins.library" librarySectionID="26" librarySectionTitle="Movies" librarySectionUUID="70cb5089-b165-429b-809a-9e0a31493abf" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1436742334" size="1" thumb="/:/resources/movie.png" title1="Movies" title2="All Movies" viewGroup="movie" viewMode="65592">
                <Video addedAt="1408525217" art="/library/metadata/1049/art/1434341184" chapterSource="media" contentRating="PG-13" duration="5129000" key="/library/metadata/1049" originallyAvailableAt="2001-09-27" primaryExtraKey="/library/metadata/1073" rating="6.0" ratingKey="1049" studio="Paramount Pictures" summary="FunnyStuff" tagline="3% Body Fat. 1% Brain Activity." thumb="/library/metadata/1049/thumb/1434341184" title="Zoolander" type="movie" updatedAt="1434341184" year="2001">
                    <Media aspectRatio="1.78" audioChannels="6" audioCodec="ac3" bitrate="6564" container="mkv" duration="5129000" height="576" id="827" videoCodec="mpeg2video" videoFrameRate="PAL" videoResolution="576" width="720">
                        <Part container="mkv" duration="5129000" file="O:\fatboy\Media\Ripped\Movies\Zoolander (2001).mkv" id="827" key="/library/parts/827/file.mkv" size="4208219125" />
                    </Media>
                    <Genre tag="Comedy" />
                    <Writer tag="Drake Sather" />
                    <Writer tag="Ben Stiller" />
                    <Director tag="Ben Stiller" />
                    <Country tag="Australia" />
                    <Country tag="Germany" />
                    <Role tag="Ben Stiller" />
                    <Role tag="Owen Wilson" />
                    <Role tag="Christine Taylor" />
                </Video>
            </MediaContainer>

### Set the fields of the filtered items [PUT /library/sections/{sectionId}/all{?type,filters,field%2Evalue,field%2Elocked,title%2Evalue,artist%2Etitle%2Evalue,artist%2Etitle%2Eid,album%2Etitle%2Evalue,album%2Etitle%2Eid}]

N.B. `field` in a parameter, represents any valid field for an item.

- **Parameters, extra documentation**
    - artist.title.value
        - When used with track, both artist.title.value and album.title.value need to be specified
    - title.value usage
        - Summary
            - Tracks always rename and never merge
            - Albums and Artists
                - if single item and item without title does not exist, it is renamed.
                - if single item and item with title does exist they are merged.
                - if multiple they are always merged.
        - Tracks
            - Works as expected will update the track's title
            - Single track:    `/library/sections/{id}/all?type=10&id=42&title.value=NewName`
            - Multiple tracks: `/library/sections/{id}/all?type=10&id=42,43,44&title.value=NewName`
            - All tracks:      `/library/sections/{id}/all?type=10&title.value=NewName`
        - Albums
            - Functionality changes depending on the existence of an album with the same title
            - Album exists
                - Single album: `/library/sections/{id}/all?type=9&id=42&title.value=Album 2`
                    - Album with id 42 is merged into album titled "Album 2"
                - Multiple/All albums: `/library/sections/{id}/all?type=9&title.value=Moo Album`
                    - All albums are merged into the existing album titled "Moo Album"
            - Album does not exist
                - Single album: `/library/sections/{id}/all?type=9&id=42&title.value=NewAlbumTitle`
                    - Album with id 42 has title modified to "NewAlbumTitle"
                - Multiple/All albums: `/library/sections/{id}/all?type=9&title.value=NewAlbumTitle`
                    - All albums are merged into a new album with title="NewAlbumTitle"
        - Artists
            - Functionaly changes depending on the existence of an artist with the same title.
            - Artist exists
                - Single artist: `/library/sections/{id}/all?type=8&id=42&title.value=Artist 2`
                    - Artist with id 42 is merged into existing artist titled "Artist 2"
                - Multiple/All artists: `/library/sections/{id}/all?type=8&title.value=Artist 3`
                    - All artists are merged into the existing artist titled "Artist 3"
            - Artist does not exist
                - Single artist: `/library/sections/{id}/all?type=8&id=42&title.value=NewArtistTitle`
                    - Artist with id 42 has title modified to "NewArtistTitle"
                - Multiple/All artists: `/library/sections/{id}/all?type=8&title.value=NewArtistTitle`
                    - All artists are merged into a new artist with title="NewArtistTitle"

- **Notes**
    - Technically square brackets are not allowed in an URI except the Internet Protocol Literal Address
    - RFC3513: A host identified by an Internet Protocol literal address, version 6 [RFC3513] or later, is distinguished by enclosing the IP literal within square brackets ("[" and "]"). This is the only place where square bracket characters are allowed in the URI syntax.
    - Escaped square brackets are allowed, but don't render well

- **Todo**
    - Check if `tagtype[].tag.tag-` syntax is currently correct


- **Parameters not representable in Api Blueprint**
    - **tagtype[idx].tag.tag** (string, optional) - Creates tag and adds it as a tagging on each item in the set. - [idx] links the.tag.tag and .tagging.* parameters together)
    - **tagtype[idx].tagging.object** (string, optional) - `object` may be text/thumb/art/theme - Optionally used in conjunction with tag.tag, to update tagging info across the set.
    - **tagtype[].tag.tag-** (string, optional) - Remove comma separated tags from the set of items
    - **tagtype[].tag** (string, optional) - Remove all taggings of this type (e.g. genre) from the set of items

+ Parameters
    + sectionId: 1 (number, required) - Section identifier
    + type: 1 (number, required) - Item type
    + filters (string, optional) - This fake parameter stands in for the various filter parameters.
    + field%2Evalue (string, optional) - Updates `field` across the filtered set of items.
    + field%2Elocked: 1 (number, optional) - Updates the locked state of `field` across the set. Valid values: 0 or 1.
    + title%2Evalue (string, optional) - This field is treated specially by albums or artists and may be used for implicit reparenting.
    + artist%2Etitle%2Evalue (string, optional) - Reparents set of Tracks or Albums - used with album.title.* in the case of tracks
    + artist%2Etitle%2Eid (string, optional) - Reparents set of Tracks or Albums - used with album.title.* in the case of tracks
    + album%2Etitle%2Evalue (string, optional) - Reparents set of Tracks - Must be used in conjunction with artist.title.value or id
    + album%2Etitle%2Eid (string, optional) - Reparents set of Tracks - Must be used in conjunction with artist.title.value or id


+ Request Example put (text/xml)
Description for request placeholder.
    + body

+ Response 200 (text/html)
Description for response placeholder.
    + body

+ Response 400 (text/html)

        <html><head><title>Bad Request</title></head><body><h1>400 Bad Request</h1></body></html>
