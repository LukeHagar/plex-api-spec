## Common [/library/sections/{sectionId}/common{?type,filters}]

Represents a "Common" item. It contains only the common
attributes of the items selected by the provided filter

+ Parameters
    + sectionId: 1 (number, required) - Section identifier
    + type: 1 (number, required) - Item type
    + filters (string, optional) - This fake parameter stands in for the various filter parameters

### Retrieve the common item [GET]

+ Request No common items in filter set (text/xml)

+ Response 200 (text/xml;charset=utf-8)

    + Body

            <?xml version="1.0" encoding="UTF-8"?>
            <MediaContainer allowSync="0" art="/:/resources/movie-fanart.jpg" content="secondary" identifier="com.plexapp.plugins.library" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1436742334" size="1" thumb="/:/resources/movie.png" title1="Movies" title2="Common" viewGroup="secondary" viewMode="65592">
                <Common guid="" index="1" mixedFields="title,ratingKey,titleSort,tagline,rating,summary,year,studio,originallyAvailableAt,originalTitle,contentRating" ratingCount="0" titleSort="" type="common">
                </Common>
            </MediaContainer>

+ Request All filtered items are common (text/xml)

+ Response 200 (text/xml;charset=utf-8)

    + Body

            <?xml version="1.0" encoding="UTF-8"?>
            <MediaContainer allowSync="0" art="/:/resources/movie-fanart.jpg" content="secondary" identifier="com.plexapp.plugins.library" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1436742334" size="1" thumb="/:/resources/movie.png" title1="M
            ovies" title2="Common" viewGroup="secondary" viewMode="65592">
                <Common guid="" index="1" key="/library/metadata/1025/children" mixedFields="" originalTitle="Neco z Alenky" originallyAvailableAt="1988-08-03" rating="6.9" ratingCount="0" ratingKey="1025" studio="Channel Four Films" summary="A memorably bizarre
             screen version of Lewis Carroll's novel 'Alice's Adventures in Wonderland'. The original story is followed reasonably faithfully, though those familiar with this director's other films won't be the least bit surprised by the numerous digressions int
            o Svankmajer territory, living slabs of meat and all. As the opening narration says, it's a film made for children... perhaps?" title="Alice" titleSort="Alice" type="common" year="1988">
                    <Genre id="135" tag="Animation" />
                    <Genre id="136" tag="Fantasy" />
                    <Genre id="42" tag="Science Fiction" />
                    <Writer id="133" tag="Jan ?vankmajer" />
                    <Director id="132" tag="Jan ?vankmajer" />
                    <Country id="137" tag="Switzerland" />
                    <Country id="138" tag="Czech Republic" />
                    <Country id="130" tag="Germany" />
                    <Country id="139" tag="United Kingdom" />
                    <Role id="134" role="Alice" tag="Krist?na Kohoutov?" />
                </Common>
            </MediaContainer>

+ Response 400 (text/html)
In response to missing the type parameter.

    + Body

            <html><head><title>Bad Request</title></head><body><h1>400 Bad Request</h1></body></html>

+ Response 404 (text/html)
In response to a non-existant sectionId.

    + Body

            <html><head><title>Not Found</title></head><body><h1>404 Not Found</h1></body></html>
