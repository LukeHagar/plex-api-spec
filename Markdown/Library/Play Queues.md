## Play queues [/playQueues]

A play queue represents the current list of media for playback. Although queues are persisted by the server, they should be regarded by the user as a fairly lightweight, an ephemeral list of items queued up for playback in a session.  There is generally one active queue for each type of media (music, video, photos) that can be added to or destroyed and replaced with a fresh queue.

Play Queues has a region, which we refer to in this spec (partially for historical reasons) as "Up Next". This region is defined by `playQueueLastAddedItemID` existing on the media container. This follows iTunes' terminology. It is a special region after the currently playing item but before the originally-played items. This enables "Party Mode" listening/viewing, where items can be added on-the-fly, and normal queue playback resumed when completed. 

You can visualize the play queue as a sliding window in the complete list of media queued for playback. This model is important when scaling to larger play queues (e.g. shuffling 40,000 audio tracks). The client only needs visibility into small areas of the queue at any given time, and the server can optimize access in this fashion.

All created play queues will have an empty "Up Next" area - unless the item is an album and no `key` is provided. In this case the "Up Next" area will be populated by the contents of the album. This is to allow queueing of multiple albums - since the 'Add to Up Next' will insert after all the tracks. This means that If you're creating a PQ from an album, you can only shuffle it if you set `key`. This is due to the above implicit queueing of albums when no `key` is provided as well as the current limitation that you cannot shuffle a PQ with an "Up Next" area.

The play queue window advances as the server receives timeline requests. The client needs to retrieve the play queue as the “now playing” item changes. There is no play queue API to update the playing item.

### Create a play queue [POST /playQueues{?uri,playlistID,type,key,shuffle,repeat,continuous,limit,extrasPrefixCount,recursive,ondeck}]

Makes a new play queue for a device. The source of the playqueue can either be a URI, or a playlist. The response is a media container with the initial items in the queue. Each item in the queue will be a regular item but with `playQueueItemID` - a unique ID since the queue could have repeated items with the same `ratingKey`.

The media container itself has a few special attributes:

- `playQueueID`: The ID of the play queue, which is used in subsequent requests.
- `playQueueSelectedItemID`: The queue item ID of the currently selected  item.
- `playQueueSelectedItemOffset`: The offset of the selected item in the play queue, from the beginning of the queue.
- `playQueueSelectedMetadataItemID`: The metadata item ID of the currently selected item (matches `ratingKey` attribute in metadata item).
- `playQueueShuffled`: Whether or not the queue is shuffled.
- `playQueueSourceURI`: The original URI used to create the play queue.
- `playQueueTotalCount`: The total number of items in the play queue.
- `playQueueVersion`: The version of the play queue. It increments every time a change is made to the play queue to assist clients in knowing when to refresh.
- `playQueueLastAddedItemID`: Defines where the "Up Next" region starts

+   Parameters
    + uri: library://... (string) - the content URI for what we're playing.
    + playlistID: 123 (string, optional) - the ID of the playlist we're playing.
    + type: audio (string) - must be either `audio`, `video`, `photo`.
    + key: 1234 (string, optional) - the key of the first item to play, defaults to the first in the play queue.
    + shuffle: 0 (boolean, optional) - whether to shuffle the playlist, defaults to 0.
    + repeat: 0 (boolean, optional) - if the PQ is bigger than the window, fill any empty space with wraparound items, defaults to 0.
    + continuous: 0 (boolean, optional) - whether to create a continuous play queue (e.g. from an episode), defaults to 0.
    + extrasPrefixCount: 3 (optional) - number of trailers to prepend a movie with not including the pre-roll. If omitted the pre-roll will not be returned in the play queue. When resuming a movie `extrasPrefixCount` should be omitted as a parameter instead of passing 0.
    + recursive: 0 (boolean, optional) - only applies to queues of type photo, whether to retrieve all descendent photos from an album or section, defaults to 1.
    + onDeck: 0 (boolean, optional) - only applies to queues of type show or seasons,
    whether to return a queue that is started on the On Deck episode if one exists.
    Otherwise begins the play queue on the beginning of the show or season.

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
          </MediaContainer>

### Retrieve a play queue  [GET /playQueues/{playQueue}{?own,center,window,includeBefore,includeAfter}]

Retrieves the play queue, centered at current item. This can be treated as a regular container by play queue-oblivious clients, but they may wish to request a large window onto the queue since they won't know to refresh.

+   Parameters
    + playQueue: 1023 (string) - the ID of the play queue.
    + own: 0 (boolean, optional) - if the server should transfer ownership to the requesting client (used in remote control scenarios).
    + center: 12345 (string, optional) - the play queue item ID for the center of the window - this doesn't change the current selected item.
    + window: 20 (optional) - how many items on each side of the center of the window
    + includeBefore: 1 (boolean, optional) - whether to include the items before the center (if 0, center is not included either), defaults to 1.
    + includeAfter: 1 (boolean, optional) - whether to include the items after the center (if 0, center is not included either), defaults to 1.

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
            ...
          </MediaContainer>

### Add a generator or playlist to a play queue [PUT /playQueues/{playQueue}{?uri,playlistID,next}]

Adds an item to a play queue (e.g. party mode). Increments the version of the play queue. Takes the following parameters (`uri` and `playlistID` are mutually exclusive). Returns the modified play queue.

+   Parameters
    + playQueue: 101 (string) - The ID of the play queue.
    + uri: library:// (string) The content URI for what we're adding to the queue.
    + playlistID: 100 (string, optional) - The ID of the playlist to add to the playQueue.
    + next: 0 (boolean, optional) - play this item next (defaults to 0 - queueing at the end of manually queued items).

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
            ...
          </MediaContainer>

### Delete an item from a play queue [DELETE /playQueues/{playQueue}/items/{playQueueItemID}]

Deletes an item in a play queue. Increments the version of the play queue. Returns the modified play queue.

+   Parameters
    + playQueue: 101 (string) - The ID of the play queue.
    + playQueueItemID: 123123 (string) - The play queue item ID to delete.

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
            ...
          </MediaContainer>

### Clear a play queue [DELETE /playQueues/{playQueue}/items]

Deletes all items in the play queue, and increases the version of the play queue.

+   Parameters
    + playQueue: 101 (string) - The ID of the play queue.

+   Response 200 (application/xml)

          <MediaContainer size="0" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueTotalCount="0" playQueueVersion="1">
          </MediaContainer>

### Move an item in a play queue [PUT /playQueues/{playQueue}/items/{playQueueItemID}/move{?after}]

Moves an item in a play queue, and increases the version of the play queue. Returns the modified play queue.

+   Parameters
    + playQueue: 101 (string) - The ID of the play queue.
    + playQueueItemID: 123123 (string) - The play queue item ID to delete.
    + after: 123 (string, optional) - the play queue item ID to insert the new item after. If not present, moves to the beginning.

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
            ...
          </MediaContainer>

### Shuffle a play queue [PUT /playQueues/{playQueue}/shuffle]

Shuffle a play queue (or reshuffles if already shuffled). The currently selected item is maintained. Note that this is currently only supported for play queues *without* an Up Next area. Returns the modified play queue.

+   Parameters
    + playQueue: 101 (string) - The ID of the play queue.

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
            ...
          </MediaContainer>

### Unshuffle a play queue [PUT /playQueues/{playQueue}/unshuffle]

Unshuffles a play queue and restores "natural order". Note that this is currently only supported for play queues *without* an Up Next area. Returns the modified play queue.

+   Parameters
    + playQueue: 101 (string) - The ID of the play queue.

+   Response 200 (application/xml)

          <MediaContainer size="21" playQueueID="9631" playQueueSelectedItemID="2211762" playQueueSelectedItemOffset="0" playQueueSelectedMetadataItemID="1941458" playQueueShuffled="0" playQueueSourceURI="library://2d8ea42e-7845-498b-b349-095ecaa3c451/item/%2Flibrary%2Fmetadata%2F1906642" playQueueTotalCount="22" playQueueVersion="1">
            <Track playQueueItemID="2211762" />
            ...
          </MediaContainer>
