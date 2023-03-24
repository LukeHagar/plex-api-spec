## EPG Endpoints [/livetv/epg]

These endpoint detail the EPG portion of the interface.

### Get all countries [GET /livetv/epg/countries]

This endpoint returns a list of countries which EPG data is available for. There are three flavors, as specfied by the `flavor` attribute:

- `0`: The country is divided into regions, and following the key will lead to a list of regions.
- `1`: The county is divided by postal codes, and an example code is returned in `example`.
- `2`: The country has a single postal code, returned in `example`.

+ Response 200 (application/xml)

        <MediaContainer size="3">
            <Country key="aia/tv.plex.providers.epg.onconnect/lineups" type="country" title="Anguilla" code="aia" language="eng" languageTitle="English" example="AI-2640" flavor="2"/>
            <Country key="atg/tv.plex.providers.epg.onconnect/lineups" type="country" title="Antigua and Barbuda" code="atg" language="eng" languageTitle="English" example="AG" flavor="2"/>
            <Country key="arg/tv.plex.providers.epg.onconnect/lineups" type="country" title="Argentina" code="arg" language="spa" languageTitle="Español" example="A4190" flavor="1"/>
        </MediaContainer>

### Get all languages [GET /livetv/epg/languages]

Returns a list of all possible languages for EPG data.

+ Response 200 (application/xml)

        <MediaContainer size="3">
            <Language code="aar" title="Afaraf"/>
            <Language code="abk" title="аҧсуа"/>
            <Language code="afr" title="Afrikaans"/>
        </MediaContainer>

### Get regions for a country [GET /livetv/epg/countries/{country}/{epgIdentifier}/regions]

+   Parameters
    + country: `usa` - The ISO country code.
    + epgIdentifier: `tv.plex.providers.epg.eyeq` ~ The EPG identifier.

+   Response 200 (application/xml)

            <MediaContainer size="2">
                <Region key="132718/lineups" type="region" title="Bruxelles"/>
                <Region key="116043/lineups" type="region" title="Région wallonne"/>
            </MediaContainer>

### Get lineups for a region [GET /livetv/epg/countries/{country}/{epgIdentifier}/regions/{region}/lineups{?country,region}]

Returns the list of lineups for a given country, EPG provider, and region. There are four types of lineups returned in `lineupType`:

- `0`: Over the air
- `1`: Cable
- `2`: Satellite
- `3`: IPTV
- `4`: Virtual

+ Parameters
  + country: `bhr` - The ISO country code.
  + epgIdentifier: `tv.plex.providers.epg.eyeq` ~ The EPG identifier.
  + region: `134535`

+ Response 200 (application/xml)

          <MediaContainer size="1" uuid="lineup-group://tv.plex.providers.epg.eyeq/bhr/134535">
          <Lineup uuid="lineup://tv.plex.providers.epg.eyeq/410357488-CE9BE5630D077FE397F3B42E984AC8DD/bhr#OSN" type="lineup" title="OSN" lineupType="2"/>
          </MediaContainer>

### Get lineups for a country via postal code [GET /livetv/epg/countries/{country}/{epgIdentifier}/lineups{?postalCode}]

Returns a list of lineups for a given country, EPG provider and postal code.

+   Parameters
    + postalCode: `AI-2640` - The postal code.
    + country: `aia` - The ISO country code.
    + epgIdentifier: `tv.plex.providers.epg.onconnect` ~ The EPG identifier.

+   Response 200 (application/xml)

            <MediaContainer size="3" uuid="lineup-group://tv.plex.providers.epg.onconnect/aia/AI-2640">
            <Lineup uuid="lineup://tv.plex.providers.epg.onconnect/AIA-0000040-DEFAULT#Caribbean%20Cable%20Communications%20-%20Anguilla" type="lineup" title="Caribbean Cable Communications - Anguilla" lineupType="1" location="The Valley"/>
            <Lineup uuid="lineup://tv.plex.providers.epg.onconnect/AIA-0000040-X#Caribbean%20Cable%20Communications%20-%20Anguilla%20-%20Digital" type="lineup" title="Caribbean Cable Communications - Anguilla - Digital" lineupType="1" location="The Valley"/>
            <Lineup uuid="lineup://tv.plex.providers.epg.onconnect/AIA-0002293-X#DirecTV%20Anguilla%20-%20Digital" type="lineup" title="DirecTV Anguilla - Digital" lineupType="1" location="The Valley"/>
            </MediaContainer>

### Get channels for a lineup [GET /livetv/epg/channels{?lineup}]

+   Parameters
    + lineup: `lineup://tv.plex.providers.epg.onconnect/CAN-OTAV4R2G5` - The URI describing the lineup.

+   Response 200 (application/xml)

            <MediaContainer size="2">
                <Channel callSign="BBC1SCO" identifier="001" thumb="http://plex.tmsimg.com/h3/NowShowing/21439/s21439_h3_aa.png" />
                <Channel callSign="BBC2SCO" identifier="002" />
            </MediaContainer>

### Compute the best channel map, given device and lineup [GET /livetv/epg/channelmap{?device,lineup}]

+   Parameters
    + device: `device://tv.plex.grabbers.hdhomerun/1053C0CA` - The device.
    + lineup: `lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT` - The lineup.

+   Response 200 (application/xml)

            <MediaContainer size="1">
                <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3c634df507001fefcad0" deviceIdentifier="48.9" lineupIdentifier="103" />
            </MediaContainer>

### Compute the best lineup, given lineup group and device [GET /livetv/epg/lineup{?device,lineupGroup}]

+   Parameters
    + device: `device://tv.plex.grabbers.hdhomerun/1053C0CA` - The device.
    + lineupGroup: `lineup-group://onconnect/usa/96708` - The lineup group.

+   Response 200 (application/xml)

    + Headers

            X-Plex-Activity: 7e650c37-1639-4f60-9866-09b8eaf35a7a

    + Body

            <MediaContainer />
        
