## Auto-Updates [/updater]

This describes the API for searching and applying updates to the Plex Media Server.
Updates to the status can be observed via the Event API.

### Querying status of updates [GET /updater/status]

+ Response 200 (application/xml;charset=utf-8)

    + Body

            <MediaContainer size="1" canInstall="0" autoUpdateVersion="1" checkedAt="1486011538" downloadURL="https://plex.tv/downloads/..." status="0">
              <Release key="https://plex.tv/updater/releases/121" version="1.3.4.3285-b46e0ea" added="(Web) Updated Plex Web to 2.12.9.&#xD;&#xA;(Media Flags) Updated bundle to 2016-12-22 (#6033)" fixed="(DLNA) Crash browsing to certain photo library sections. (#5874)&#xD;&#xA;(Streaming Brain) Certain videos might transcode instead even when enough bandwidth was available to direct play. (#6085) (#6216)" downloadURL="https://plex.tv/downloads/latest/..." state="notify" />
            </MediaContainer>

### Checking for updates [PUT /updater/check]

+ Parameters
  + download: `0` (bool, optional) - Indicate that you want to start download any updates found.

+ Response 200

### Applying updates [PUT /updater/apply{?tonight/skip}]

+ Parameters
  + tonight: `1` (bool, optional) - Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install immediately.
  + skip: `0` (bool, optional) - Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.

Note that these two parameters are effectively mutually exclusive. The `tonight` parameter takes precedence and `skip` will be ignored if `tonight` is also passed.

+ Response 200
  If the update process started correctly
  + Body

+ Response 500
  If the update process failed to start
  + Body
