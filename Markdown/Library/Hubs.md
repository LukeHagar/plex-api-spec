## Group Hubs

Hubs are a structured two-dimensional container for media, generally represented by multiple horizontal rows. Hubs have the following attributes:

- `key`: The URL for the full list of items for the hub, used to page in more data, when available.
- `hubKey`: Represents the URL for the exact items returned in the hub request (used, e.g. as a key for generating a play queue). [Editor: is this right?]
- `type`: The type of the items in the hub (same format as metadata item type, e.g. `movie`). Can also be `mixed` to indicate heterogeneous types present.
- `hubIdentifier`: A unique identifier for the hub, used to distinguish it from all other hubs in the group.
- `size`: The number of items returned with the hub.
- `title`: The localized title of the hub.
- `more`: (0/1) Whether or not there are more items beyond those returned. If so, the `key` can be used to obtain them.

When requesting hubs, the following parameters are generally accepted. Note that other common library parameters may be used as well, e.g. `excludeFields`:

- `count`: The number of items to return with each hub.
- `onlyTransient`: Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added)

### Get global hubs [GET /hubs]

+ Response 200

### Get library specific hubs [GET /hubs/sections/{section}]

+ Response 200