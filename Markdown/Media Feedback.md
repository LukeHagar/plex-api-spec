## Media Feedback [/:/]

This group of endpoints correspond to client feedback around an item.

### Report media timeline [GET /:/timeline{?hasMDE,key,ratingKey,state,playQueueItemID,time,duration,continuing,updated,offline,timeToFirstFrame,timeStalled,bandwidth,bufferedTime,bufferedSize,location}]

This endpoint is hit during media playback for an item. It must be hit whenever the play state changes, or in the absense of a play state change, in a regular fashion (generally this means every 10 seconds on a LAN/WAN, and every 20 seconds over cellular).

In order to identify the client, the following headers are used:

- `X-Plex-Client-Identifier`: Required, unique per client.
- `X-Plex-Session-Identifier`: Optional, unique per client playback session.

Respones contains a `MediaContainer` top level XML element.  This may contain a full decision result as seen in the `video/:/transcode/universal/decision` endpoint.  If this is returned, client must stop playback and restart playback as directed by the decision.

Additional attributes include:

- `terminationCode` - Optional, a code describing why the session was terminated by the server.  See `decision` endpoint for more details.
- `terminationText` - Optional, a user friendly and localized text describing why the session was terminated by the server.

Additional child elements include:
- `Bandwidths` - Optional, an element containing one or more `Bandwidth` elements.
  - `Bandwidth` - Optional, an element containing the attribute `time` as the time of bandwidth change in milliseconds, `bandwidth` as the new bandwidth in Kbps, and `resolution` as a user presentable string indicating the new resolution.

+ Parameters
    + key: `/foo` - The details key for the item.
    + ratingKey: `xyz` - The rating key attribute for the item.
    + state: `playing` - The current state of the media.
        + Members
            + `stopped`
            + `buffering`
            + `playing`
            + `paused`
    + playQueueItemID: `123` (string, optional) - If playing media from a play queue, the play queue's ID.
    + time: `0` (milliseconds) - The current time offset of playback.
    + duration: `10000` (milliseconds) - The total duration of the item.
    + continuing: `1` - When state is `stopped`, a flag indicating whether or not the client is going to continue playing anothe item.
    + updated: `14200000` (epoch seconds) - Used when a sync client comes online and is syncing media timelines, holds the time at which the playback state was last updated.
    + offline: `1` - Also used by sync clients, used to indicate that a timeline is being synced from being offline, as opposed to being "live".
    + timeToFirstFrame: `1000` - Optional, time in seconds till first frame is displayed.  Sent only on the first playing timeline request.
    + timeStalled: `1000` (number, optional) - Time in seconds spent buffering since last request.
    + bandwidth: `100` (number, optional) - Bandwidth in kbps as estimated by the client.
    + bufferedTime: `100` (number, optional) - Amount of time in seconds buffered by client.  Omit if computed by `bufferedSize` below.
    + bufferedSize: `1024` (number, optional) - Size in kilobytes of data buffered by client.  Omit if computed by `bufferedTime` above

+ Response 200 (text/xml;charset=utf-8)

    + Body

            Normal response:
            <MediaContainer size="0"  />

            Admin terminated session:
            <MediaContainer size="0" terminationCode="2006" terminationText="Admin terminated playback with reason: Go Away" />
            
            Bandwidth changes included:
            <MediaContainer size="1">
              <Bandwidths>
                <Bandwidth time="0" bandwidth="15000" resolution="1080p" />
                <Bandwidth time="1050008" bandwidth="12000" resolution="1080p" />
                <Bandwidth time="1053011" bandwidth="8000" resolution="1080p" />
                <Bandwidth time="1098014" bandwidth="4000" resolution="720p" />
                <Bandwidth time="1101017" bandwidth="2000" resolution="SD" />
                <Bandwidth time="1104020" bandwidth="1000" resolution="SD" />
                <Bandwidth time="1107023" bandwidth="750" resolution="SD" />
                <Bandwidth time="1110026" bandwidth="350" resolution="SD" />
                <Bandwidth time="1113029" bandwidth="750" resolution="SD" />
                <Bandwidth time="1116032" bandwidth="1000" resolution="SD" />
                <Bandwidth time="1119035" bandwidth="4000" resolution="720p" />
                <Bandwidth time="1122038" bandwidth="10000" resolution="1080p" />
              </Bandwidths>
            </MediaContainer>

### Marking items watched [GET /:/scrobble{?key,uri,identifier}]

This endpoint is used to mark items watched. It may be applied to ancestor items (e.g. show or a season), in which case all descendent items are marked watched as well. A general media URI specifier may be used in advanced cases (e.g. multi-select).

+ Parameters
    + key: `/foo` - The rating key for the item.
    + uri: `library://...` - The media URI specifier. Either `key` or `uri` must be used, but not both.
    + identifier: `com.something` - The identifier for the item's provider. Allows multiplexing between multiple providers at a single endpoint.

+ Response 200


### Marking items unwatched [GET /:/unscrobble{?key,uri,identifier}]

+ Parameters
    + key: `/foo` - The rating key for the item.
    + uri: `library://...` - The media URI specifier. Either `key` or `uri` must be used, but not both.
    + identifier: `com.something` - The identifier for the item's provider. Allows multiplexing between multiple providers at a single endpoint.

+ Response 200


### Rating items [GET /:/rate{?key,identifier,rating}]

+ Parameters
    + key: `/foo` - The rating key for the item.
    + identifier: `com.something` - The identifier for the item's provider.
    + rating: `2.4` - The rating for the item.

+ Response 200

