## Events

The server can notify clients in real-time of a wide range of events, from library scanning, to preferences being modified, to changes to media, and many other things. This is also the mechanism by which activity progress is reported.

Two protocols for receiving the events are available: EventSource (also known as SSE), and WebSocket.

By default, all events except logs are sent. A rich filtering mechanism is provided to allow clients to opt into or out of each event type using the `filters` parameter. For example:

- `filters=-log`: All event types except logs (the default).
- `filters=foo,bar`: Only the foo and bar event types.
- `filters=`: All events types.
- `filters=-foo,bar`: All event types except foo and bar.

### Connect to WebSocket [GET /:/websocket/notifications{?filters}]

+ Parameters
    + filters: `log` - A comma-separated list of event types to send. If the first character is a `-`, then a comma-separated list of event types not to send.

+ Response 200 (application/octet-stream)

### Connect to EventSource [GET /:/eventsource/notifications{?filters}]

+ Parameters
    + filters: `log` - Same as above.

+ Response 200 (text/event-stream)

