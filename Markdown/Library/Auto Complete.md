## Autocomplete [/library/sections/{sectionId}/autocomplete{?type,field%2Equery,filters}]

The field to autocomplete on is specified by the {field}.query parameter.
For example `genre.query` or `title.query`.

Returns a set of items from the filtered items whose {field} starts with {field}.query.
- Todo:
    - As implemented the endpoint does not seem to be reflecting the tag type in the element at the moment
    - Find all supported filters for autocomplete (We may have missing joins for some filters)

+ Parameters
    + sectionId: 1 (number, required) - Section identifier
    + type: 1 (number, required) - Item type
    + field%2Equery (string, required) - "field" stands in for any field, the value is a partial string for matching
    + filters (string, optional) - This fake parameter stands in for the various filter parameters

### Retrieve matching tags or items [GET]

+ Request With title.query=a (text/xml)

+ Response 200 (text/xml;charset=utf-8)
Example returning items

    + Body

            <?xml version="1.0" encoding="UTF-8"?>
            <MediaContainer allowSync="0" art="/:/resources/movie-fanart.jpg" content="secondary" identifier="com.plexapp.plugins.library" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1436742334" size="2" thumb="/:/resources/movie.png" title1="Movies" viewGroup="secondary" viewMode="65592">
                <Video addedAt="1408492156" art="/library/metadata/1024/art/1434341159" chapterSource="media" contentRating="R" duration="6627200" key="/library/metadata/1024" originallyAvailableAt="2002-12-06" primaryExtraKey="/library/metadata/1051" rating="7.1" ratingKey="1024" studio="Columbia Pictures" summary="A love-lorn script writer grows increasingly desperate in his quest to adapt the book 'The Orchid Thief'." tagline="Charlie Kaufman writes the way he lives... With Great Difficulty. His Twin Brother Donald Lives the way he writes... with foolish abandon. Susan writes about life... But can't live it. John's life is a book... Waiting to be adapted. One story... Four Lives... A million ways it can end." thumb="/library/metadata/1024/thumb/1434341159" title="Adaptation." title.queryRange="0,0" type="movie" updatedAt="1434341159" year="2002">
                    <Media aspectRatio="1.78" audioChannels="6" audioCodec="ac3" bitrate="5421" container="mkv" duration="6627200" height="576" id="802" videoCodec="mpeg2video" videoFrameRate="PAL" videoResolution="576" width="720">
                        <Part container="mkv" duration="6627200" file="O:\fatboy\Media\Ripped\Movies\Adaptation (2002).mkv" id="802" key="/library/parts/802/file.mkv" size="4490974984" />
                    </Media>
                    <Genre tag="Comedy" />
                    <Genre tag="Crime" />
                    <Writer tag="Charlie Kaufman" />
                    <Writer tag="Donald Kaufman" />
                    <Director tag="Spike Jonze" />
                    <Country tag="USA" />
                    <Role tag="Nicolas Cage" />
                    <Role tag="Meryl Streep" />
                    <Role tag="Chris Cooper" />
                </Video>
                <Video addedAt="1407669060" art="/library/metadata/1025/art/1434341158" chapterSource="media" duration="5165210" key="/library/metadata/1025" originalTitle="Neco z Alenky" originallyAvailableAt="1988-08-03" rating="6.9" ratingKey="1025" studio="Channel Four Films" summary="A memorably bizarre screen version of Lewis Carroll's novel 'Alice's Adventures in Wonderland'. The original story is followed reasonably faithfully, though those familiar with this director's other films won't be the least bit surprised by the numerous digressions into Svankmajer territory, living slabs of meat and all. As the opening narration says, it's a film made for children... perhaps?" thumb="/library/metadata/1025/thumb/1434341158" title="Alice" title.queryRange="0,0" type="movie" updatedAt="1434341158" year="1988">
                    <Media aspectRatio="1.33" audioChannels="2" audioCodec="ac3" bitrate="6672" container="mkv" duration="5165210" height="480" id="803" videoCodec="mpeg2video" videoFrameRate="NTSC" videoResolution="480" width="720">
                        <Part container="mkv" duration="5165210" file="O:\fatboy\Media\Ripped\Movies\Alice (1988).mkv" id="803" key="/library/parts/803/file.mkv" size="4308069440" />
                    </Media>
                    <Genre tag="Animation" />
                    <Genre tag="Fantasy" />
                    <Writer tag="Jan ?vankmajer" />
                    <Director tag="Jan ?vankmajer" />
                    <Country tag="Switzerland" />
                    <Country tag="Czech Republic" />
                    <Role tag="Krist?na Kohoutov?" />
                </Video>
            </MediaContainer>

+ Request With genre.query=a (text/xml)

+ Response 200 (text/xml;charset=utf-8)
Example returning tags

    + Headers

            Accept: text/xml

    + Body

            <?xml version="1.0" encoding="UTF-8"?>
            <MediaContainer allowSync="0" art="/:/resources/movie-fanart.jpg" content="secondary" identifier="com.plexapp.plugins.library" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1436742334" size="3" thumb="/:/resources/movie.png" title1="Movies" viewGroup="secondary" viewMode="65592">
                <Directory id="190" tag="Action" tagType="1" />
                <Directory id="98" tag="Adventure" tagType="1" />
                <Directory id="135" tag="Animation" tagType="1" />
            </MediaContainer>
