## DVRs [/livetv/dvrs]

Once you have configured devices and picked a lineup, you can create a DVR.

### Create a DVR [POST /livetv/dvrs{?lineup,device,language}]

+ Parameters
    + lineup: `lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT` - The EPG lineup.
    + device: `device[]=device://tv.plex.grabbers.hdhomerun/1053C0CA` (array) - The device.
    + language: `eng` - The language.

+ Response 200

### Get DVRs [GET /livetv/dvrs]

+ Response 200 (application/xml)

        <MediaContainer size="1">
            <Dvr key="28" language="eng" lineup="lineup://tv.plex.providers.epg.onconnect/USA-HI51418-X" uuid="811e2e8a-f98f-4d1f-a26a-8bc26e4999a7">
                <Device key="17" lastSeenAt="1463297728" make="Silicondust" model="HDHomeRun EXTEND" modelNumber="HDTC-2US" protocol="livetv" sources="0,1" state="1" status="1" tuners="2" uri="http://10.0.0.42" uuid="device://tv.plex.grabbers.hdhomerun/1053C0CA">
                    <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3c634df507001fefcad0" deviceIdentifier="46.3" enabled="1" lineupIdentifier="002" />
                    <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3d20d30eca001db32922" deviceIdentifier="48.1" enabled="1" lineupIdentifier="009" />
                </Device>
            </Dvr>
        </MediaContainer>

### Get a single DVR [GET /livetv/dvrs/{dvr}]

+   Parameters
    + dvr: `1` - The ID of the DVR.

+   Response 200 (application/xml)

            <MediaContainer size="1">
                <Dvr />
            </MediaContainer>

### Delete a DVR [DELETE /livetv/dvrs/{dvr}]

+   Parameters
    + dvr: `1` - The ID of the DVR.

+   Response 200 (application/xml)

### Add a device to an existing DVR [PUT /livetv/{dvr}/devices/{device}]

+   Parameters
    + dvr: `1` - The ID of the DVR.
    + device: `1223` - The ID of the device to add.

+   Response 200 (application/xml)

            <MediaContainer size="1">
                <Dvr />
            </MediaContainer>

### Remove a device from an existing DVR [DELETE /livetv/dvrs/{dvr}/devices/{device}"]

+   Parameters
    + dvr: `1` - The ID of the DVR.
    + device: `1223` - The ID of the device to add.

+   Response 200 (application/xml)

            <MediaContainer size="1">
                <Dvr />
            </MediaContainer>

### Set DVR preferences [PUT /livetv/dvrs/{dvr}/prefs{?name}]

+   Parameters
    + dvr: `1` - The ID of the DVR.
    + name: `value` - The preference names and values.

+   Response 200 (application/xml)

            <MediaContainer size="1">
                <Dvr key="28" language="eng" lineup="lineup://tv.plex.providers.epg.onconnect/USA-HI51418-X" uuid="811e2e8a-f98f-4d1f-a26a-8bc26e4999a7">
                    <Device key="17" lastSeenAt="1463896924" make="Silicondust" model="HDHomeRun EXTEND" modelNumber="HDTC-2US" parentID="28" protocol="livetv" sources="0,1" state="1" status="1" tuners="2" uri="http://10.0.0.42" uuid="device://tv.plex.grabbers.hdhomerun/1053C0CA">
                        <ChannelMapping deviceIdentifier="46.1" enabled="1" />
                    </Device>
                </Dvr>
            </MediaContainer>

### Tell a DVR to reload program guide [POST /livetv/dvrs/{dvr}/reloadGuide]

+   Parameters
    + dvr: `1` - The ID of the DVR.

+   Response 200

    + Headers

            X-Plex-Activity: d391ddb0-b29b-4e20-a57a-46b15b4e4318

### Tell a DVR to stop reloading program guide [DELETE /livetv/dvrs/{dvr}/reloadGuide]

+   Parameters
    + dvr: `1` - The ID of the DVR.

+   Response 200