## Playlists [/playlists]

Playlists are ordered collections of media. They can be dumb (just a list of media) or smart (based on a media query, such as "all albums from 2017"). They can be organized in (optionally nesting) folders.

Retrieving a playlist, or its items, will trigger a refresh of its metadata. This may cause the duration and number of items to change.

### Retrieve Playlists [GET /playlists/all{?playlistType,smart}]

Gets a list of playlists and playlist folders for a user. General filters are permitted, such as `sort=lastViewedAt:desc`. A flat playlist list can be retrieved using `type=15` to limit the collection to just playlists. Special attributes returned are:

- `smart` (0/1) - whether or not the playlist is smart.
- `duration` (milliseconds) - the total duration of the playlist.
- `leafCount` - the number of items in the playlist.
- `composite` - a composite image for the playlist.
- `key` - leads to a list of items in the playlist.
- `playlistType` - the type of the playlist (audio/video/photo).
- `specialPlaylistType` - if this is a special playlist, this returns its type (e.g. favorites).
- `readOnly` - if we return this as true then this playlist cannot be altered or deleted directly by the client.

+   Parameters
    + playlistType: `audio` (string, optional)  - limit to a type of playlist (`audio`, `video` or `photo`)
    + smart: `0` (boolean, optional) - optional, type of playlists to return (default is all).

+   Response 200 (application/xml)

        <MediaContainer size="2">
          <Playlist ratingKey="2561805" key="/playlists/2561805/items"  type="playlist" title="Background videos" summary="" smart="0" playlistType="video" composite="/playlists/2561805/composite/1485900004" viewCount="8" lastViewedAt="1484680617" duration="1512000" leafCount="8" addedAt="1476942219" updatedAt="1485900004"></Playlist>
          <Playlist ratingKey="1956389" key="/playlists/1956389/items" type="playlist" title="Fairly Recent" summary="" smart="1" playlistType="audio" composite="/playlists/1956389/composite/1486498661" duration="938507000" leafCount="3934" addedAt="1428993345" updatedAt="1486498661"></Playlist>
        </MediaContainer>

### Create a Playlist [POST /playlists?{title,type,smart,uri,playQueueID}]

Create a new playlist. By default the playlist is blank if you leave the `uri` empty.

To create a playlist along with a first item, pass:

- `uri` - The content URI for what we're playing (e.g. `library://...`).
- `playQueueID` - To create a playlist from an existing play queue.

If you're creating a smart playlist, you must pass:
- `smart=1` 
- `uri` -  using the `uri=...` format. 

Playlists are owned by the account associated with the request.

+   Parameters
     + title: `My Playlist` (string) - name of the playlist
     + type: `audio` (string) - type of the playlist (`video`/`audio`/`photo`)
     + smart: `0` (0/1) - whether the playlist is smart or not.
     + uri: `library://..` (string) - the content URI for the playlist.
     + playQueueID: `123` (integer, optional) - the play queue to copy to a playlist.

+   Response 200 (application/xml)

        <MediaContainer size="1">
          <Playlist ratingKey="2561805" key="/playlists/2561805/items"  type="playlist" title="Background videos" summary="" smart="0" playlistType="video" composite="/playlists/2561805/composite/1485900004" viewCount="8" lastViewedAt="1484680617" duration="1512000" leafCount="8" addedAt="1476942219" updatedAt="1485900004"></Playlist>
        </MediaContainer>

### Retrieve Playlist  [GET /playlists/{playlistID}]

Gets detailed metadata for a playlist. A playlist for many purposes (rating, editing metadata, tagging), can be treated like a regular metadata item:
Smart playlist details contain the `content` attribute. This is the content URI for the generator. This can then be parsed by a client to provide smart playlist editing.

+   Parameters
    + playlistID: `123` (integer) - the ID of the playlist.

+   Response 200 (application/xml)

        <MediaContainer size="1">
            <Playlist content="library://22d0bfe3-21ce-4a67-9065-ccaf470cb3c2/directory/%2Flibrary%2Fsections%2F1224%2Fall%3Ftrack%2EaddedAt%3E%3D-12mon%26album%2Egenre!%3DPodcast%26album%2Egenre!%3DBooks%2520%2526%2520Spoken%26artist%2Etitle!%3DAOL%2520Music" ratingKey="1956389" key="/playlists/1956389/items" guid="com.plexapp.plugins.itunes://9F7B78609597F45F" type="playlist" title="Fairly Recent" summary="" smart="1" playlistType="audio" composite="/playlists/1956389/composite/1486764293" duration="957684000" leafCount="4015" addedAt="1428993345" updatedAt="1486764293"></Playlist>
        </MediaContainer>

### Retrieve Playlist Contents [GET /playlists/{playlistID}/items{?type}]

Gets the contents if a playlist. Should be paged by clients via standard mechanisms. By default leaves are returned (e.g. episodes, movies). In order to return other types you can use the `type` parameter. For example, you could use this to display a list of recently added albums vis a smart playlist. Note that for dumb playlists, items have a `playlistItemID` attribute which is used for deleting or moving items.

+   Parameters
    + playlistID: `123` (integer) - the ID of the playlist.
    + type: `8` (integer) - the metadata type of the item to return.

+   Response 200 (application/xml)

        <MediaContainer size="100">
           <Video ... playlistItemID="123" />
        </MediaContainer>

### Delete a Playlist [DELETE /playlists/{playlistID}]

Deletes a playlist.

+   Parameters
    + playlistID: `123` (integer) - the ID of the playlist.

+   Response 200

### Editing a Playlist [PUT /library/metadata/{playlistID}{?title,summary}]

Use the standard metadata item editing endpoint (tag a playlist! edit the title!). Just listing it here to illustrate the potential.

+   Parameters
    + playlistID: `123` (integer) - the ID of the playlist.
    + title: `A title` (string) - the new title of the playlist
    + summary: `A summary` (string) - the new summary of the playlist

+   Response 200

### Editing a Playlist (PMS >= 1.9.1) [PUT /playlists/{playlistID}{?title,summary}]

From PMS version >=1.9.1 clients can also edit playlist metadata using this endpoint as they would via `PUT /library/metadata/{playlistID}`

+   Parameters
    + playlistID: `123` (integer) - the ID of the playlist.
    + title: `A title` (string, optional) - the new title of the playlist
    + summary: `A summary` (string, optional) - the new summary of the playlist

+   Response 200

### Clearing a playlist [DELETE /playlists/{playlistID}/items]

Clears a playlist, only works with dumb playlists. Returns the playlist.

+   Parameters
    + playlistID: `123` (integer) - the ID of the playlist.

+   Response 200

        <MediaContainer size="1">
          <Playlist ratingKey="2561805" key="/playlists/2561805/items"  type="playlist" title="Background videos" summary="" smart="0" playlistType="video" composite="/playlists/2561805/composite/1485900004" viewCount="8" lastViewedAt="1484680617" duration="1512000" leafCount="0" addedAt="1476942219" updatedAt="1485900004"></Playlist>
        </MediaContainer>

### Adding to a Playlist [PUT /playlists/{playlistID}/items?{uri,playQueueID}]

Adds a generator to a playlist, same parameters as the POST above. With a dumb playlist, this adds the specified items to the playlist. With a smart playlist, passing a new `uri` parameter replaces the rules for the playlist. Returns the playlist.

+   Parameters
     + uri: `library://..` (string, optional) - the content URI for the playlist.
     + playQueueID: `123` (integer, optional) - the play queue to add to a playlist.

+   Response 200 (application/xml)

        <MediaContainer size="1">
          <Playlist ratingKey="2561805" key="/playlists/2561805/items" type="playlist" title="Background videos" summary="" smart="0" playlistType="video" composite="/playlists/2561805/composite/1485900004" viewCount="8" lastViewedAt="1484680617" duration="1512000" leafCount="8" addedAt="1476942219" updatedAt="1485900004"></Playlist>
        </MediaContainer>

### Moving items in a playlist [PUT /playlists/{playlistID}/items/{playlistItemID}/move{?after}]

Moves an item in a playlist. Only works with dumb playlists.

+   Parameters
     + playlistID: `123` (integer) - the playlist ID.
     + playlistItemID: `1` (integer) - the playlist item ID to move.
     + after: `2` (integer, optional) - the playlist item ID to insert the new item after.

+   Response 200

### Delete a Generator [DELETE /playlists/{playlistID}/items/{playlistItemID}]

Deletes an item from a playlist. Only works with dumb playlists.

+   Parameters
     + playlistID: `123` (integer) - the playlist ID.
     + playlistItemID: `1` (integer) - the playlist item ID to move.

+   Response 200

### Upload Playlists [POST /playlists/upload{?path,force}]

Imports m3u playlists by passing a path on the server to scan for m3u-formatted playlist files, or a path to a single playlist file.

+   Parameters
    + path: `/home/barkley/playlist.m3u` - absolute path to a directory on the server where m3u files are stored, or the absolute path to a playlist file on the server. If the `path` argument is a directory, that path will be scanned for playlist files to be processed. Each file in that directory creates a separate playlist, with a name based on the filename of the file that created it. The GUID of each playlist is based on the filename. If the `path` argument is a file, that file will be used to create a new playlist, with the name based on the filename of the file that created it. The GUID of each playlist is based on the filename.
    + force: `1` - force overwriting of duplicate playlists. By default, a playlist file uploaded with the same path will overwrite the existing playlist. The `force` argument is used to disable overwriting. If the `force` argument is set to 0, a new playlist will be created suffixed with the date and time that the duplicate was uploaded.

+   Response 200
