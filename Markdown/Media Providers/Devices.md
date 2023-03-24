## Group Device Endpoints

### Get device details [GET /media/grabbers/devices/{device}]

+   Parameters
    + device: `42` - the ID of the device.

+   Response 200 (application/xml)

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

+   Parameters
    + device: `42` - The ID of the device.
    + enabled: `1` - Whether to enable the device.

+   Response 200 (application/xml)

          <MediaContainer message="" size="0" status="0" />

### Set device preferences [PUT /media/grabbers/devices/{device}/prefs{?name}]

+   Parameters
    + device: `1` - The ID of the DVR.
    + name: `value` - The preference names and values.

+   Response 200 (application/xml)

### Get a device's channels [GET /media/grabbers/devices/{device}/channels]

+   Parameters
    + device: `42` - the ID of the device.

+   Response 200 (application/xml)

          <MediaContainer size="48">
              <DeviceChannel drm="0" hd="0" identifier="46.1" name="KPXO HD" />
              <DeviceChannel drm="0" hd="0" identifier="46.3" name="KHON HD" />
          </MediaContainer>

### Set a device's channel mapping [PUT /media/grabbers/devices/{device}/channelmap{?channelMapping,channelsEnabled}]

+   Parameters
    + device: `42` - the ID of the device.
    + channelMapping: `channelMapping[46.3]=002&channelMapping[48.9]=004` - the mapping of changes, passed as a map of device channel to lineup VCN.
    + channelMappingByKey: `channelMappingByKey[46.3]=5cc83d73af4a72001e9b16d7-5cab3c634df507001fefcad0&channelMappingByKey[48.9]=5cc83d73af4a72001e9b16d7-5cab3c63ec158a001d32db8d` - the mapping of changes, passed as a map of device channel to lineup key.
    + channelsEnabled: `46.1,44.1,45.1` - the channels which are enabled.

+   Response 200 (application/xml)

          <MediaContainer message="" size="0" status="0" />

### Tell a device to scan for channels [POST /media/grabbers/devices/{device}/scan{?source}]

+   Parameters
    + device: `42` - the ID of the device.
    + source: `Cable` - a valid source for the scan.

+   Response 200 (application/xml)

    + Headers

            X-Plex-Activity: 7e650c37-1639-4f60-9866-09b8eaf35a7a

    + Body

            <MediaContainer message="" size="0" status="0" />

### Tell a device to stop scanning for channels [DELETE /media/grabbers/devices/{device}/scan]

+   Parameters
    + device: `42` - the ID of the device.

+   Response 200 (application/xml)

          <MediaContainer message="" size="0" status="0" />
