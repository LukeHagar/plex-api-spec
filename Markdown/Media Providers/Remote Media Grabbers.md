## Remote Media Grabbers

This interface is used against remote media grabbers. Among others, the Plex Tuner Service implements this interface. Responses generally consist of a `MediaContainer` element, even when there is nothing to return, containing status and message in order to convey response codes and error messages. In order to manually make requests for any of these endpoints, you will need to know the port number for the device. This is generally conveyed in the SSDP data, as described at the end of this document.

```xml
<MediaContainer status="0" message="...">
```

### Media Grabber Identification [GET /]

Provides general information about the media grabber, including:

- `identifier`: A unique string used to distinguish different media grabbers, usually specified in reverse domain format.
- `title`: The friendly name of the media grabber.
- `icon`: (optional) An icon representing the grabber.
- `protocols`: The protocols supported by the grabber. This is used to match up media providers with media grabbers.

+ Response 200 (application/xml)

        <MediaContainer>
            <MediaGrabber identifier="tv.plex.dvblink" title="DVBLink" protocols="livetv">
        </MediaContainer>

### Device Discovery [POST /devices/discover]

Devices with `livetv` protocol have devices associated with them. This endpoint requests the grabber attempt to discover any devices it can, and it returns zero or more devices.

The response consists of a list of devices, with the following attributes:
-  `key`: The endpoint to request device details. This is the `devicekey` to be used in all other requests.
-  `make`, `model`,` modelNumber` are optional and describe the device as best as possible (e.g. a make of `Silicondust`, model of `hdhomeruntc_atsc` and model number of `HDTC-2US`).
 -  `tuners` is the number of tuners the device has.
 -  `status` represents the known status of the device, and can either be `dead` or `alive`. If a grabber doesn't do any caching, this value will always be `alive` as it will only return devices it knows about.
 -  `protocol` is aways `livetv` for devices at the moment.
 -  `title` represents a user-friendly title for the device.
 -  `uri` (optional) represents the address of a network-accessible tuner.
 -  `uuid` holds the unique identifier for a device, in special URI format `device://com.vendor/xxx`. Note that in some cases, devices may not have serial  numbers (which is usually the `xxx` part of the URI), and something appropriate must be synthesized based on PCI bus, USB identifier, etc. Care must be taken to ensure it's as universally unique as possible.
 -  `thumb` (optional) a path relative to the `uri` of an icon for the device. These icons will be displayed on the settings screen when creating a DVR. Icons should be in PNG format and be 560 pixels x 560 pixels in order to display correctly. The path to this file should be relative to the tuner, and be hosted by the tuner itself.
  - `interface`: The physical interface that the device is connected to. This will be used to set a generic thumbnail for the tuner if a `thumb` attribute is not passed. Possible values are `usb`, `pcie`, and `network`.

- Devices can also provide device-specific preferences that can be set by the user. These are passed in `<Preference>` elements as part of a Device description, with the following attributes:

  - `id`: A string identifier for the preference. No two Preference elements may have the same identifier since this is what is passed back when PMS returns the values via the `/device/key/prefs` endpoint.
  - `label`: A string label that will be displayed on the device settings in the Plex DVR Setup UI.
  - `summary`: (optional) A longer description of the setting that will be displayed below the preference on the Plex DVR Setup UI.
  - `type`: The data type for the preference. Possible values are `int`, `bool`, and `text`.
  - `value`: The current value for the preference. This will be one of the keys in the `enumValues` attribute.
  - `enumValues`: A pipe-separated list of options for the preference. Each option is a colon-separated entry with the form of `value:display-string`.

+   Response 200 (application/xml)

        <MediaContainer size="1">
             <Device key="123123" make="Silicondust" model="HDHomeRun CONNECT" modelNumber="HDHR4-2DT"
                     protocol="livetv" status="alive" title="HDHomeRun CONNECT" tuners="1"
                     uri="http://192.168.1.30:80" uuid="device://tv.plex.grabbers.hdhomerun/1230984C"
                     thumb="url/to/thumb.png" interface=`usb`>
                <Preference id="resolution" label="Stream Resolution"
                            summary="This is the video resolution returned by the tuner" type="int"
                            default="0" value="0" enumValues="0:720|1:1080" />
             </Device>
        </MediaContainer>

### Device Probe [POST /devices/probe{?uri}]

Probes a specific URI for a network device, and returns a device, if it exists at the given URI.

+   Parameters
    + uri: http://10.0.0.100:10000 (string) - URI for the device. Can be either HTTP or HTTPS.

+   Response 200 (application/xml)

        <MediaContainer size="1">
            <Device ... />
        </MediaContainer>

### Get identity and capabilities [GET /devices/{devicekey}]

Returns the identity, capabilities, and current status of the devices and each of its tuners.

- Tuner status can be one of the following:
  - `idle`: The device isn't doing anything.
  - `streaming`: The device is currently streaming media.
  - `scanning`: The device is scanning for channels.
  - `networksScanned`: The device has scanned for networks and is awaiting being scanned for channels, given a specific network.
  - `error`: The device is unhappy.

- If the status is `streaming`, the following attributes should be included:
  - `signalStrength`: A signal strength metric normalized to a 0-100 scale.
  - `signalQuality`: A signal quality metric normalized to a 0-100 scale.
  - `symbolQuality`: (optional) A symbol quality metric normalized to a 0-100 scale.
  - `channelIdentifier`: The identifier for the channel currently being tuned. This should be the same format as the identifiers in the `/devices/{devicekey}/channels` endpoint.
  - `lock`: A 0 or 1 value denoting that the tuner has a signal lock.

- If the status is `scanning`, the following attributes should be included:
  - `progress`: A percentage indicating how complete the scanning process is.
  - `channelsFound`: The number of channels found so far.

+   Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.

+   Response 200 (application/xml)

        <MediaContainer size="1">
            <Device key="dvb%23hdhr%230%23305174604" make="Silicondust" model="hdhomerun4_dvbt"
                    modelNumber="HDHR4-2DT" protocol="livetv" status="alive"
                    title="HDHomeRun 1230984C (192.168.1.30) - 0" tuners="1" uri="http://192.168.1.30:80"
                    uuid="device://tv.plex.grabbers.hdhomerun/1230984C">
                <Tuner index="0" status="streaming" channelIdentifier="triplet://0:209:4" lock="1" signalStrength="40" signalQuality="91"/>
                <Tuner index="1" status="idle"/>
                <Tuner index="2" status="scanning" progress="50" channelsFound="10"/>
            </Device>
        </MediaContainer>

### Get a device's channels [GET /devices/{devicekey}/channels]

Returns the current channels. This list is updated after a complete channel scan, and should not be assumed to persist beyond that.

The response contains zero or more channels, with the following attributes:

- `drm`: If known, whether or not a channel contains Digital Rights Management. When enabled, these channels are mostly unusable by the media server.
- `channelIdentifier`: This is a unique identifier for the channel, represented by an URI. This can either be:
  - `id://xxx`: The channel identifier is a channel number (e.g. 12 or 46.3).
  - `tuple://x:y:z`: The channel identifier is a DVT tuple.
- `name`: The name for the channel. This is the string that will be displayed for the channel on the client.
- `origin`: (optional) This is the broadcaster that made this channel available on its TV distribution infrastructure. On DVB-C and DVB-T networks it is (usually) the same as the TV provider.  The added value of this information is to help user during channel selection phase.
- `number`: (optional) is a suggested channel number in a guide lineup as sent by TV provider
- `type`: (optional) is either `tv` or `radio`.
- `param`: (optional) denotes channel tuning parameters that have to be passed back to `/media` endpoint.
- `signalStrength`: (optional) denotes the signal strength of the channel when it was scanned.
- `signalQuality`: (optional) denotes the signal quality of the channel when it was scanned.

+   Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.

+   Response 200 (application/xml)

        <MediaContainer size="1">
            <Channel drm="0" channelIdentifier="triplet://10:1123:201" name="NOS 1 HD" origin="Canal Digitaal"
                     param="xxxxxxx" number="10" type="tv|radio" />
        </MediaContainer>

### Get channel scan providers [GET /devices/{devicekey}/scanners{?type}]

Before scanning a device for channels, it must be queried to ascertain which type of scanners are supported. Each scanner may have custom configuration which is passed back in the form of preferences. These preferences must be shown the user, and the values round-tripped back when the scan is kicked off. The response includes one or more scanners, defined below.

If the response's media container has `simultaneousScanners="1"`, this implies that the device supports channels via multiple scanners simultaneously. HDHR devices, by contrast, can support either over-the-air or cable channels, for example, but not both simultaneously.

+   Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.
    + type: 5 (string, optional) - The filter on broadcast standard type, which can be: `0` (atsc), `1` (cqam), `2` (dvb-s), `3` (iptv), `4` (virtual), `5` (dvb-t), `6` (dvb-c), `7` (isdbt)

+   Response 200 (application/xml)

        <MediaContainer size="3" simultaneousScanners="1">
            <Scanner type="dvb-t">
                <Setting id="provider" enumValues="1:DVB-T Netherlands|2:Digitenne (DVB-T, Netherlands)..." />
            </Scanner>
            <Scanner type="dvb-c">
                <Setting id="provider"enumValues="1:Ziggo (DVB-C, Netherlands)|2:Caiway (DVB-C, Netherlands)..." />
            </Scanner>
            <Scanner type="dvb-s">
                <Setting id="provider" enumValues="190:Astra 19.0|230:Astra 23.5|047:Eutelsat 4.7..." />
                <Setting id="diseqcType" enumValues="none:None|mini_a:Mini-,..." />
                <Setting id="lnbType" enumValues="ku_linear:Ku-linear|ku_circular:Ku-circular..." />
            </Scanner>
        </MediaContainer>

#### Scanners

Defines a scanner that can be used to search for channels. They will have the following attributes:

- `type`: One of the broadcast standard types: `atsc`, `cqam`, `dvb-s`, `iptv`, `virtual`, `dvb-t`, `dvb-c`, `isdbt`
- `country`: (optional) Defines a scanner to use based on the country chosen by the user during DVR setup. If there isn't a scanner with the country chosen by user, PMS will prefer to use the scanner without a country defined.

Each `<Scanner>` element will have one or more `<Setting>` elements, which defines the settings for that particular scanner. These settings are displayed to the user when configuring the device before scanning for channels. At least one setting must exist with the `provider`. `<Setting>` elements have the following attributes:

- `id`: The ID of the setting to be displayed. This will be used internally by PMS.
- `type`: The type of the setting. This is used internally by PMS. The valid values for this attribute are `text`, `int`, `double`, and `bool`. This type should match the first element of each colon-separated value described below. Prefer `text` if in doubt.
- `enumValues`: A pipe-separated list of colon-separated items to show to the user for this type of setting. For example, for `provider` settings and cable/OTA scanners, this is list of networks that provide the scanning data. Each colon-separated item has two parts: a unique identifier and a label. The ID will be passed in the request to `/scan` as the `source` parameter and the label will be displayed to users on a preference panel during device setup.

### Get scanned networks [GET /devices/{devicekey}/networks]

In some cases, channel scanning is a two-step process, where the first stage consists of scanning for networks (this is called "fast scan"). This is communicated to the client by entering the `networksScanned` state after a scan is kicked off. When encountering this state, the client must call this endpoint to retrieve the list of networks to scan. The user-selected network is then passed back to a second `/scan` request to scan channels for this network with the `network` parameter set.

+   Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.

+   Response 200 (application/xml)

        <MediaContainer size="2">
            <Network key="43136" title="Noord Holland" />
            <Network key="43138" title="Flevoland" />
        </MediaContainer>

### Start a channel scan for network [POST /devices/{devicekey}/scan{?network,source,provider}]

Starts a background channel scan. Updates are received via querying the device details endpoint (`/devices/x`). The response will have the following attributes:

- `status`: The current status of the scanning operation.

+   Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.
    + network: 10 (string, optional) - only valid if the device is in the `networksScanned` state, and specifies the network to scan.
    + source: 1 (integer, optional) - only valid when not performing a network scan. Specifies the type of scanner, as noted above.
    + provider: 1 (integer) - the key of the scanner to use when scanning.

+   Response 200 (application/xml)

        <MediaContainer status="0" message="...">

### Cancel channel scan [DELETE /devices/{devicekey}/scan]

Cancels an ongoing background channel scan.

+   Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.

+   Response 200 (application/xml)

        <MediaContainer status="0" message="..." />

### Stream media from a tuner [GET /devices/{devicekey}/media/{channel}{?param}]

+ Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.
    + channel: 5.1 (string, required) - the channel identifier passed back with each channel.
    + param: parm (string, optional) - If params were passed back with the channel from the `/device/x/channels` endpoint, they should be round-tripped into this endpoint.

+   Response 200 (application/octet-stream)

        Media

### Provide preference values to the tuner [PUT /devices/{devicekey}/prefs]

These preferences are originally provided by the device in the `/devices/discover` endpoint.

+ Parameters
    + devicekey: 12323213 (string, required) - key referring to tuner device, as originally reported in the `/devices/discover` endpoint.
    + Any number of key-value pairs corresponding to values set by the user for the preferences provided by the tuner.

+ Response 200 (no data)

### SSDP Discovery support

Network tuners can present themselves on the network using the Simple Service Discovery Protocol and Plex Media Server will discover them. The following XML is an example of the data returned from SSDP. The `deviceType`, `serviceType`, and `serviceId` values must remain as they are in the example in order for PMS to properly discover the device. Other less-obvious fields are described in the parameters section below.

+ Example SSDP output

        <root xmlns="urn:schemas-upnp-org:device-1-0">
            <specVersion>
                <major>1</major>
                <minor>0</minor>
            </specVersion>
            <device>
                <deviceType>urn:plex-tv:device:Media:1</deviceType>
                <friendlyName>Turing Hopper 3000</friendlyName>
                <manufacturer>Plex, Inc.</manufacturer>
                <manufacturerURL>https://plex.tv/</manufacturerURL>
                <modelDescription>Turing Hopper 3000 Media Grabber</modelDescription>
                <modelName>Plex Media Grabber</modelName>
                <modelNumber>1</modelNumber>
                <modelURL>https://plex.tv</modelURL>
                <UDN>uuid:42fde8e4-93b6-41e5-8a63-12d848655811</UDN>
                <serviceList>
                    <service>
                        <URLBase>http://10.0.0.5:8088</URLBase>
                        <serviceType>urn:plex-tv:service:MediaGrabber:1</serviceType>
                        <serviceId>urn:plex-tv:serviceId:MediaGrabber</serviceId>
                    </service>
                </serviceList>
            </device>
        </root>

+ Parameters
    + UDN: (string) A UUID for the device. This should be unique across models of a device at minimum.
    + URLBase: (string) The base HTTP URL for the device from which all of the other endpoints are hosted.
