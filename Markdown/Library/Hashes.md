## Hashes [/library/hashes{?url,type}]

This resource returns hash values for local files.

### Get the hash values [GET]

+ Parameters
    + url (string, required) - This is the path to the local file, must be prefixed by `file://`
    + type: 1 (number, required) - Item type

+ Request url=file://C:\Image.png&type=13 (text/xml)

+ Response 200 (text/xml;charset=utf-8)

    + body

            <?xml version="1.0" encoding="UTF-8"?>
            <MediaContainer size="1" identifier="com.plexapp.plugins.library" mediaTagPrefix="/system/bundle/media/flags/" mediaTagVersion="1519299020">
                <Photo>
                    <Media>
                        <Part file="file://C:\Image.png" size="12038" hash="12038d462e114dbf98dc0b8feccdc134367540f1eb068"></Part>
                    </Media>
                </Photo>
            </MediaContainer>
