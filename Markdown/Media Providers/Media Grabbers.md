## Media Grabber Endpoints [/media/grabbers]

Media grabbers provide ways for media to be obtained for a given protocol. The simplest ones are `stream` and `download`. More complex grabbers can have associated devices.

### Get available grabbers [GET /media/grabbers{?protocol}]

+ Parameters
    + protocol: `livetv` (optional) - Only return grabbers providing this protocol.

+ Response 200 (application/xml)

        <MediaContainer size="3">
            <MediaGrabber identifier="tv.plex.grabbers.hdhomerun" protocol="livetv" title="HDHomerun" />
            <MediaGrabber identifier="tv.plex.grabbers.stream" protocol="stream" title="Stream" />
            <MediaGrabber identifier="tv.plex.grabbers.download" protocol="download" title="Download" />
        </MediaContainer>

### Get all devices [GET /media/grabbers/devices]

+ Response 200 (application/xml)

        <MediaContainer size="2">
            <Device key="1053C0CA" lastSeenAt="1461450473" make="Silicondust" model="HDHomeRun EXTEND" modelNumber="HDTC-2US" protocol="livetv" tuners="2" sources="Antenna,Cable" uri="http://10.0.0.164" uuid="1053C0CA" />
            <Device key="141007E7" lastSeenAt="1461450479" make="Silicondust" model="HDHomeRun EXPAND" modelNumber="HDHR3-4DC" protocol="livetv" tuners="4" sources="Cable" uri="http://home.techconnect.nl:8822" uuid="141007E7" />
        </MediaContainer>

### Tell grabbers to discover devices [POST /media/grabbers/devices/discover]

+ Response 200 (application/xml)

        <?xml version="1.0" encoding="UTF-8"?>
        <MediaContainer size="1">
            <Device key="1053C0CA" lastSeenAt="1461450473" make="Silicondust" model="HDHomeRun EXTEND" modelNumber="HDTC-2US" protocol="livetv" tuners="2" uri="http://10.0.0.164" uuid="1053C0CA" />
        </MediaContainer>

### Add a device  [POST /media/grabbers/devices{?uri}]

This endpoint adds a device to an existing grabber. The device is identified, and added to the correct grabber.

+ Parameters
    + uri: `http://10.0.0.5` - the URI of the device.

+ Response 200 (application/xml)

        <MediaContainer size="1">
            <Device key="1053C0CA" lastSeenAt="1461450473" make="Silicondust" model="HDHomeRun EXTEND" modelNumber="HDTC-2US" protocol="livetv" tuners="2" uri="http://10.0.0.5" uuid="1053C0CA" />
        </MediaContainer>

### Remove a device [DELETE /media/grabbers/devices/{device}]

+ Parameters
    + device: `42` - the ID of the device.

+ Response 200 (application/xml)

        <MediaContainer message="" size="0" status="0" />

+ Response 404

## Device Endpoints [/media/grabbers/devices]


### Get device details [GET /media/grabbers/devices/{device}]

+ Parameters
    + device: `42` - the ID of the device.

+ Response 200 (application/xml)

        <MediaContainer size="1">
            <Device key="6" lastSeenAt="1461737032" make="Silicondust" model="HDHomeRun EXPAND" modelNumber="HDHR3-4DC" protocol="livetv" sources="Cable" state="1" status="1" tuners="4" uri="http://home.techconnect.nl:8822" uuid="141007E7">
                <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3c634df507001fefcad0" deviceIdentifier="46.3" enabled="1" lineupIdentifier="002" />
                <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3d20d30eca001db32922" deviceIdentifier="48.9" enabled="0" lineupIdentifier="004" />
                <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3d07771bb2001ef88f72" deviceIdentifier="49.12" enabled="1" lineupIdentifier="011" />
                <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3c63de29da001cf021c2" deviceIdentifier="49.3" enabled="0" lineupIdentifier="008" />
                <ChannelMapping channelKey="5cc83d73af4a72001e9b16d7-5cab3c63e3ef4d001d05ba70" deviceIdentifier="10.4" enabled="1" />
            </Device>
        </MediaContainer>

### Enable or disable a device [PUT /media/grabbers/devices/{device}{?enabled}]

+ Parameters
    + device: `42` - the ID of the device.

+ Response 200 (application/xml)

        <MediaContainer message="" size="0" status="0" />

### Get a device's channels [GET /media/grabbers/devices/{device}/channels]

+ Parameters
    + device: `42` - the ID of the device.

+ Response 200 (application/xml)

        <MediaContainer size="48">
            <DeviceChannel drm="0" hd="0" identifier="46.1" name="KPXO HD" />
            <DeviceChannel drm="0" hd="0" identifier="46.3" name="KHON HD" />
        </MediaContainer>

### Get metadata item for tuned channel [GET /media/grabbers/devices/{device}/channels/{channel}]

This endpoint can be used with the transcoder start and decision endpoints.

+ Parameters
    + device: `42` - the ID of the device.
    + channel: `2.1` - the channel ID to retrieve

+ Response 200 (application/xml)

        <?xml version="1.0" encoding="UTF-8"?>
        <MediaContainer size="1">
            <Video genuineMediaAnalysis="1" live="1">
                <Media uuid="dc30f95e-6379-44f7-8168-172ffc820496">
                    <Part>
                        <Stream codec="h264" frameRate="29.970" height="1080" index="0" level="40" pixelAspectRatio="1:1" profile="high" scanType="interlaced" streamType="1" width="1920" />
                        <Stream audioChannelLayout="5.1(side)" channels="6" codec="ac3" index="1" samplingRate="48000" streamType="2" />
                    </Part>
                </Media>
            </Video>
        </MediaContainer>

+ Response 404: Channel not currently tuned

### Tune a channel on a device [POST /media/grabbers/devices/{device}/channels/{channel}/tune]

+ Parameters
    + device: `42` - the ID of the device.
    + channel: `2.1` - the channel ID to tune

+ Response 200 (application/xml)
    Identical to the GET above
+ Response 500: Tuning failed

### Set a device's channel mapping [PUT /media/grabbers/devices/{device}/channelmap{?channelMapping,channelsEnabled}]

+ Parameters
    + device: `42` - the ID of the device.
    + channelMapping: `channelMapping[46.3]=002&channelMapping[48.9]=004` - the mapping of changes, passed as a map.
    + channelsEnabled: `46.1,44.1,45.1` - the channels which are enabled.

+ Response 200 (application/xml)

        <MediaContainer message="" size="0" status="0" />

### Tell a device to scan for channels [POST /media/grabbers/devices/{device}/scan{?source}]

+ Parameters
    + device: `42` - the ID of the device.
    + source: `Cable` - a valid source for the scan.

+ Response 200 (application/xml)

    + Headers

            X-Plex-Activity: 7e650c37-1639-4f60-9866-09b8eaf35a7a

    + Body

            <MediaContainer message="" size="0" status="0" />

### Tell a device to stop scanning for channels [DELETE /media/grabbers/devices/{device}/scan]

+ Parameters
    + device: `42` - the ID of the device.

+ Response 200 (application/xml)

        <MediaContainer message="" size="0" status="0" />
