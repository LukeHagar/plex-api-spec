## Activities [/activities]

Activities are awesome. They provide a way to monitor and control asynchronous operations on the server. In order to receive real-time updates for activities, a client would normally subscribe via either EventSource or Websocket endpoints.

Activities are associated with HTTP replies via a special `X-Plex-Activity` header which contains the UUID of the activity.

Activities are optional cancellable. If cancellable, they may be cancelled via the `DELETE` endpoint. Other details:

- They can contain a `progress` (from 0 to 100) marking the percent completion of the activity.
- They must contain an `type` which is used by clients to distinguish the specific activity.
- They may contain a `Context` object with attributes which associate the activity with various specific entities (items, libraries, etc.)
- The may contain a `Response` object which attributes which represent the result of the asynchronous operation.

### Get all activities [GET /activities]

+ Response 200 (application/xml)

        <MediaContainer size="1">
            <Activity uuid="d6199ba1-fb5e-4cae-bf17-1a5369c1cf1e" cancellable="0" progress="7" subtitle="Downloaded 173 airings" title="Refreshing EPG" type="provider.epg.load" userID="1">
            	<Context name="value" />
            	<Response name="value" />
            </Activity>
        </MediaContainer>

### Cancel a running activity [DELETE /activities/{activity}]

+ Parameters
    + activity: `d6199ba1-fb5e-4cae-bf17-1a5369c1cf1e` - The UUID of the activity to cancel.

+ Response 200