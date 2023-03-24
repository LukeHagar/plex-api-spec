## Live TV

So you want to stream Live TV? You've come to the right place. Live TV sessions are handled by "rolling" subscriptions, which are like normal media subscriptions, except that they move over time. Live TV subscriptions start by allocating a 5 minute segment of time, and then every minute, extend by a minute. This means that you will learn about conflicts 5 minutes before they happen, and the user has the opportunity to kill/cancel something else before the subscription's grab operation (recording) is terminated.

### Start a live TV session [POST /livetv/dvrs/{dvr}/channels/{channel}/tune]

This requests kicks off a Live TV session, by creating a rolling subscription. If it cannot allocate at least 5 minutes of session time, it will return a subscription with conflicts. Otherwise, it will return the rolling subscription, which has a few special features returned:

- The `MediaGrabOperation`'s video contains a `Media` element which reflects the actual media characteristics of the live stream.
- A `Timeline` object which contains N `Video` elements, reflecting all of the metadata along the Live TV session, from the start, to the item airing next. Generally speaking there will be two items at the beginning (the currently airing item, and the thing next airing).
- An `AlsoAiring` object which contains N `Video` elements, reflecting the items currently aring on different channels.

The client is required to pass either `X-Plex-Session-Identifier` or `X-Plex-Client-Identifier` header to this request.

Note that when successfully started, the reply will also include an Activity header, to allow a client to easily track the Live TV rolling subscription. If a rolling subscription ever enters into conflict (with a 5 minute warning, as mentioned earlier), the Activity context will be updated with `conflicts: true`; if the item loses its conflict status (because something else is cancelled), the Activity will be updated again with the loss of the `conflicts` attribute.

+ Parameters
    + dvr: `324` - The ID of the DVR.
    + channel: `008` (string) - The channel identifier.

+ Response 200 (application/xml)

        <MediaContainer size="1">
            <MediaSubscription key="886" title="This Episode" type="4">
                <MediaGrabOperation deviceID="334" grabberIdentifier="tv.plex.grabbers.hdhomerun" grabberProtocol="livetv" key="/media/grabbers/operations/005-555wew" mediaIndex="0" mediaSubscriptionID="886" rolling="1" status="inprogress">
                    <Video genuineMediaAnalysis="1" grandparentTitle="Live TV" key="/livetv/sessions/c1e26483-946b-4f8a-8120-bd498bd31386" live="1" title="Live Session 555wew">
                        <Media beginsAt="1493108074" channelIdentifier="005" container="mpegts" endsAt="1493108374" protocol="hls" uuid="c1e26483-946b-4f8a-8120-bd498bd31386">
                            <Part container="mpegts" key="/livetv/sessions/c1e26483-946b-4f8a-8120-bd498bd31386/555wew/index.m3u8" protocol="hls">
                                <Stream codec="h264" frameRate="29.970" height="1080" index="0" level="40" pixelAspectRatio="1:1" profile="high" scanType="interlaced" streamType="1" width="1920" />
                                <Stream audioChannelLayout="5.1(side)" bitrate="384" channels="6" codec="ac3" index="1" languageCode="eng" samplingRate="48000" streamType="2" />
                            </Part>
                        </Media>
                    </Video>
                </MediaGrabOperation>
                <Timeline>
                    <Video addedAt="1493065214" contentRating="TV-14" duration="1800000" grandparentKey="/library/metadata/301" grandparentRatingKey="301" grandparentThumb="/library/metadata/301/thumb/1493065214" grandparentTitle="2 Broke Girls" index="4" key="/library/metadata/303" originallyAvailableAt="2012-10-15" parentIndex="2" parentKey="/library/metadata/302" parentRatingKey="302" parentTitle="Season 2" ratingKey="303" summary="Max and Caroline audition to be on the reality show &quot;Cupcake Wars.&quot;" title="And the Cupcake War" type="episode" year="2012">
                        <Media audioChannels="2" beginsAt="1493107500" channelID="5" channelIdentifier="005" channelThumb="http://tmsimg.plex.tv/h3/NowShowing/51307/s51307_h3_aa.png" channelTitle="005 KFVE (MNT)" duration="1800000" endsAt="1493109300" id="116" onAir="1" protocol="livetv" videoResolution="576" />
                    </Video>
                    <Video addedAt="1493065214" contentRating="TV-PG" duration="1800000" grandparentKey="/library/metadata/304" grandparentRatingKey="304" grandparentThumb="/library/metadata/304/thumb/1493065214" grandparentTitle="Seinfeld" index="5" key="/library/metadata/306" originallyAvailableAt="1995-10-19" parentIndex="7" parentKey="/library/metadata/305" parentRatingKey="305" parentTitle="Season 7" ratingKey="306" summary="Jerry tries to ensure that Elaine's houseguest (Jeremiah Birkett) doesn't sleep through the New York Marathon." title="The Hot Tub" titleSort="Hot Tub" type="episode" year="1995">
                        <Media audioChannels="2" beginsAt="1493109300" channelID="5" channelIdentifier="005" channelThumb="http://tmsimg.plex.tv/h3/NowShowing/51307/s51307_h3_aa.png" channelTitle="005 KFVE (MNT)" duration="1800000" endsAt="1493111100" id="117" protocol="livetv" videoResolution="576" />
                    </Video>
                </Timeline>
                <AlsoAiring>
                    <Video addedAt="1493065214" duration="2100000" grandparentKey="/library/metadata/260" grandparentRatingKey="260" grandparentThumb="/library/metadata/260/thumb/1493065214" grandparentTitle="KHON2 News at 10" key="/library/metadata/262" originallyAvailableAt="2017-04-24" parentIndex="2017" parentKey="/library/metadata/261" parentRatingKey="261" parentTitle="Season 2017" ratingKey="262" summary="" title="Episode 04-24" type="episode" year="2017">
                        <Media audioChannels="2" beginsAt="1493107200" channelID="2" channelIdentifier="002" channelThumb="http://tmsimg.plex.tv/h3/NowShowing/10212/s10212_h3_aa.png" channelTitle="002 KHON (FOX)" duration="2100000" endsAt="1493109300" id="99" onAir="1" premiere="1" protocol="livetv" videoResolution="576" />
                    </Video>
                    <Video addedAt="1493065214" duration="3600000" grandparentKey="/library/metadata/281" grandparentRatingKey="281" grandparentThumb="/library/metadata/281/thumb/1493065214" grandparentTitle="KITV Island News at 10:00" key="/library/metadata/283" originallyAvailableAt="2017-04-24" parentIndex="2017" parentKey="/library/metadata/282" parentRatingKey="282" parentTitle="Season 2017" ratingKey="283" summary="" title="Episode 04-24" type="episode" year="2017">
                        <Media audioChannels="2" beginsAt="1493107200" channelID="4" channelIdentifier="004" channelThumb="http://tmsimg.plex.tv/h3/NowShowing/10003/s10003_h3_aa.png" channelTitle="004 KITV (ABC)" duration="3600000" endsAt="1493110800" id="107" onAir="1" premiere="1" protocol="livetv" videoResolution="576" />
                    </Video>
                    <Video addedAt="1493065214" duration="2040000" grandparentKey="/library/metadata/317" grandparentRatingKey="317" grandparentThumb="/library/metadata/317/thumb/1493065214" grandparentTitle="Hawaii News Now at Ten" key="/library/metadata/319" originallyAvailableAt="2017-04-24" parentIndex="2017" parentKey="/library/metadata/318" parentRatingKey="318" parentTitle="Season 2017" ratingKey="319" summary="" title="Episode 04-24" type="episode" year="2017">
                        <Media audioChannels="2" beginsAt="1493107200" channelID="7" channelIdentifier="008" channelThumb="http://tmsimg.plex.tv/h3/NowShowing/10991/s10991_h3_aa.png" channelTitle="008 KHNL (NBC)" duration="2040000" endsAt="1493109240" id="123" onAir="1" premiere="1" protocol="livetv" videoResolution="576" />
                    </Video>
                    <Video addedAt="1493065214" duration="2100000" grandparentKey="/library/metadata/339" grandparentRatingKey="339" grandparentThumb="/library/metadata/339/thumb/1493065214" grandparentTitle="Hawaii News Now at 10:00" key="/library/metadata/341" originallyAvailableAt="2017-04-24" parentIndex="2017" parentKey="/library/metadata/340" parentRatingKey="340" parentTitle="Season 2017" ratingKey="341" summary="" title="Episode 04-24" type="episode" year="2017">
                        <Media audioChannels="2" beginsAt="1493107200" channelID="8" channelIdentifier="009" channelThumb="http://tmsimg.plex.tv/h3/NowShowing/10098/s10098_h3_aa.png" channelTitle="009 KGMB (CBS)" duration="2100000" endsAt="1493109300" id="132" onAir="1" premiere="1" protocol="livetv" videoResolution="576" />
                    </Video>
                </AlsoAiring>
            </MediaSubscription>
        </MediaContainer>

### Cancel an existing grab [DELETE /media/grabbers/operations/{uuid}]

This endpoint cancels an existing media grab (recording). It can be used to resolve a conflict which exists for a rolling subscription. N.B. this cancellation does not persist across a server restart, but neither does a rolling subscription itself, so hey.

+ Parameters
    + uuid: `1742b85795` - The UUID if the grab.

+ Response 200 (application/xml)

## Live sessions [/livetv/sessions]

### Get all sessions [GET /livetv/sessions]

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

### Get particular session [GET /livetv/sessions/{session}]

+ Response 200
