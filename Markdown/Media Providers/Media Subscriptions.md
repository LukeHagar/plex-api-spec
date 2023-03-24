## Media Subscriptions [/media/subscriptions]

### Get the subscription template [GET /media/subscriptions/template{?type}]

+   Parameters
    + type: `2` - The type of the thing we're subscribing too (e.g. show, season).

+   Response 200 (application/xml)

          <MediaContainer size="7">
              <Setting id="newnessPolicy" label="" default="0" summary="" type="int" value="-1" hidden="0" advanced="0" group=""/>
              <Setting id="replacementPolicy" label="" default="0" summary="" type="int" value="-1" hidden="0" advanced="0" group=""/>
              <Setting id="minVideoQuality" label="" default="0" summary="" type="int" value="-1" hidden="0" advanced="0" group=""/>
              <Setting id="lineupChannel" label="" default="" summary="" type="text" value="" hidden="0" advanced="0" group=""/>
              <Setting id="startOffsetSeconds" label="" default="0" summary="" type="int" value="-1" hidden="0" advanced="0" group=""/>
              <Setting id="endOffsetSeconds" label="" default="0" summary="" type="int" value="-1" hidden="0" advanced="0" group=""/>
              <Setting id="recordPartials" label="" default="true" summary="" type="bool" value="false" hidden="0" advanced="0" group=""/>
          </MediaContainer>

### Create a subscription [POST /media/subscriptions/{?targetLibrarySectionID,targetSectionLocationID,type,hints,prefs}]

+   Parameters
    + targetLibrarySectionID: `1` - The library section into which we'll grab the media.  Not actually required when the subscription is to a playlist.
    + targetSectionLocationID: `3` (optional) - The section location into which to grab.
    + type: `2` - The type of the thing we're subscribing too (e.g. show, season).
    + hints: `hints[title]=Family+Guy` (array) - Hints describing what we're looking for.  Note: The hint `ratingKey` is required for downloading from a PMS remote.
    + prefs: `prefs[minVideoQuality]=720` (array) - Subscription preferences.
    + params: (array) - Subscription parameters.
       + `params[mediaProviderID]=1`  Required for downloads to indicate which MP the subscription will download into
       + `params[source]=server://0123456789abcdef0123456789abcdef01234567/com.plexapp.plugins.library`: Required for downloads to indicate the source of the downloaded content.

+   Response 200 (application/xml)

          <MediaContainer size="1">
              <MediaSubscription key="18" metadataType="2" targetLibrarySectionID="2" title="Family Guy">
                  <MediaGrabOperation beginsAt="1465814100" endsAt="1465815900" grandparentTitle="Family Guy" index="1" mediaSubscriptionID="19" parentIndex="1" status="1" title="Death Has a Shadow">
                      <Video addedAt="1464994517" contentRating="TV-14" duration="1800000" grandparentTitle="Family Guy" index="1" key="/tv.plex.providers.epg.onconnect-811e2e8a-f98f-4d1f-a26a-8bc26e4999a7/metadata/2214" originallyAvailableAt="1999-01-31" parentIndex="1" parentKey="/tv.plex.providers.epg.onconnect-811e2e8a-f98f-4d1f-a26a-8bc26e4999a7/metadata/2213" parentRatingKey="2213" ratingKey="com.gracenote.onconnect://episode/EP002960010001" summary="After Peter gets fired following a riotous bachelor party, he receives a check for $150,000 from the welfare department." title="Death Has a Shadow" type="episode" year="1999">
                          <Media audioChannels="2" beginsAt="1465814100" channelID="32" channelIdentifier="005" duration="1800000" endsAt="1465815900" id="2052" protocol="livetv" videoResolution="480">
                              <Part id="2052" key="/library/parts/2052/0/file">
                              </Part>
                          </Media>
                      </Video>
                  </MediaGrabOperation>
                  <Setting advanced="0" default="0" enumValues="0:all episodes|1:only new episodes" group="" hidden="0" id="newnessPolicy" label="Record" summary="" type="int" value="0" />
                  <Setting advanced="0" default="0" enumValues="0:never|1:with higher resolution recordings" group="" hidden="0" id="replacementPolicy" label="Replacement existing media" summary="" type="int" value="0" />
                  <Setting advanced="0" default="0" enumValues="0:none|720:HD" group="" hidden="0" id="minVideoQuality" label="Minimum resolution" summary="" type="int" value="720" />
                  <Setting advanced="0" default="" group="" hidden="0" id="lineupChannel" label="Channel to record from" summary="" type="text" value="" />
                  <Setting advanced="0" default="0" group="" hidden="0" id="startOffsetSeconds" label="Padding before show starts" summary="" type="int" value="0" />
                  <Setting advanced="0" default="0" group="" hidden="0" id="endOffsetSeconds" label="Padding after show ends" summary="" type="int" value="0" />
                  <Setting advanced="0" default="true" group="" hidden="0" id="recordPartials" label="Record partial media" summary="" type="bool" value="true" />
              </MediaSubscription>
          </MediaContainer>

### Get all subscriptions [GET /media/subscriptions/{?includeGrabs}]

+   Parameters
    + includeGrabs: `1` (optional) - Whether or not to include all the scheduled grabs for each subcription.

+   Response 200 (application/xml)

          <MediaContainer size="1">
              <MediaSubscription key="1" metadataType="2" targetLibrarySectionID="2" title="fresh off the boat">
                  <Setting advanced="0" default="0" enumValues="0:all episodes|1:only new episodes" group="" hidden="0" id="newnessPolicy" label="Record" summary="" type="int" value="0" />
              </MediaSubscription>
          </MediaContainer>

### Get a single subscription [GET /media/subscriptions/{subscription}{?includeGrabs}]

+   Parameters
    + subscription: `42` - The ID of the subscription.
    + includeGrabs: `1` (optional) - Whether or not to include all the scheduled grabs for each subcription.

+   Response 200 (application/xml)

          <MediaContainer size="1">
              <MediaSubscription key="1" metadataType="2" targetLibrarySectionID="2" title="fresh off the boat">
                  <Setting advanced="0" default="0" enumValues="0:all episodes|1:only new episodes" group="" hidden="0" id="newnessPolicy" label="Record" summary="" type="int" value="0" />
              </MediaSubscription>
          </MediaContainer>

### Delete a subscription [DELETE /media/subscriptions/{subscription}]

+ Parameters
    + subscription: `42` - The ID of the subscription.

+ Response 200

### Edit a subscription [PUT /media/subscriptions/{subscription?prefs}]

+   Parameters
    + prefs: `prefs[minVideoQuality]=720` (array) - Subscription preferences.

+   Response 200 (application/xml)

          <MediaContainer size="1">
              <MediaSubscription key="1" metadataType="2" targetLibrarySectionID="2" title="fresh off the boat">
                  <Setting advanced="0" default="0" enumValues="0:all episodes|1:only new episodes" group="" hidden="0" id="newnessPolicy" label="Record" summary="" type="int" value="0" />
              </MediaSubscription>
          </MediaContainer>

### Get all scheduled recordings [GET /media/subscriptions/scheduled]

+ Response 200 (application/xml)

        <MediaContainer size="1">
            <MediaGrabOperation beginsAt="1466060400" endsAt="1466062200" grandparentTitle="Fresh Off the Boat" index="5" mediaSubscriptionID="1" parentIndex="2" status="1" title="Miracle on Dead Street">
                <Video addedAt="1464994564" contentRating="TV-PG" duration="1800000" grandparentTitle="Fresh Off the Boat" index="5" key="/tv.plex.providers.epg.onconnect-811e2e8a-f98f-4d1f-a26a-8bc26e4999a7/metadata/2543" originallyAvailableAt="2015-10-27" parentIndex="2" parentKey="/tv.plex.providers.epg.onconnect-811e2e8a-f98f-4d1f-a26a-8bc26e4999a7/metadata/2542" parentRatingKey="2542" ratingKey="com.gracenote.onconnect://episode/EP019218760019" summary="Louis wants to make his street a prime trick-or-treat destination." title="Miracle on Dead Street" type="episode" year="2015">
                    <Media audioChannels="2" beginsAt="1466060400" channelID="21" channelIdentifier="004" duration="1800000" endsAt="1466062200" id="2581" protocol="livetv" videoResolution="480">
                        <Part id="2581" key="/library/parts/2581/0/file">
                        </Part>
                    </Media>
                </Video>
            </MediaGrabOperation>
        </MediaContainer>

### Process all subscriptions [POST /media/subscriptions/process]

+   Response 200

    + Headers

            X-Plex-Activity: d391ddb0-b29b-4e20-a57a-46b15b4e4318
