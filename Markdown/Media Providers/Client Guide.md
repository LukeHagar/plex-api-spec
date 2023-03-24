### Client Guide to Media Providers

The philosophy behind media providers in general is to allow clients to quickly support them, since the APIs are nearly identical to a normal server. However, there are several important differences, as well as some consolidation and improvements to the API which can be beneficial to take into account at the same time. Without further ado, here are the general guidelines:

##### Consume `/media/providers` instead of `/library/sections`

The new providers endpoint give you a list of all providers exported by a server and their features. Remember that the library itself is considered a (very rich) provider! This change will also require changing the client to not hardwire paths on the server, but rather read them from the feature keys directly (e.g. scrobble and rating endpoints).

##### Gate management functionality on the `manage` feature

Server libraries allow management (e.g. media deletion). The correct way to gate this functionality is via the manage feature.

##### Make sure key construction is correct for things like genre lists

For example, `/library/sections/x/genre` returns a relative key for each genre, but there's nothing which says that the `key` can't be an absolute URL. This is why servers pass back `fastKey` separately so as to not break clients which don't do key construction correctly. Media providers do not pass back `fastKey`, but assume clients will be doing correct key construction.

##### Don't call `/library/sections/X/filters|sorts`

You can get all that information (and more) in a single call by hitting `/library/sections/X?includeDetails=1`. Media providers include the extra information by default.

##### Respect the Type keys in `/library/sections/x`

The top-level type pivots have their own keys, which should be used over the old "just append /all to the path and add the type" approach. Not only is this more flexible, it also allows for "virtual" pivots, like music videos inside a music library.

##### Look for the skipChildren/skipParent attributes for shows

Because of things like Podcasts, single-season shows can now be made to skip seasons. This is indicated by a `skipChildren` attribute on the show, or a `skipParent` attribute on an episode. If this is set on a show, the client should use `/grandchildren` instead of `/children` in the show's key.

