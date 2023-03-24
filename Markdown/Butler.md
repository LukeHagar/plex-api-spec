## Group Butler [/butler]

### Starting all Butler tasks [POST /butler]

This endpoint will attempt to start all Butler tasks that are enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:

1. Any tasks not scheduled to run on the current day will be skipped.
2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
4. If we are outside the configured window, the task will start immediately.

+ Response 200 (no data)

### Stopping all Butler tasks [DELETE /butler]

This endpoint will stop all currently running tasks and remove any scheduled tasks from the queue.

+ Response 200 (no data)

### Starting a single Butler task [POST /butler/{taskName}/]

This endpoint will attempt to start a specific Butler task by name.

This is the current list of tasks that can be used with this endpoint:

+ Parameters
    + taskName: `BackupDatabase` - the name of the task to be started.
        + Members
              + BackupDatabase
              + BuildGracenoteCollections
              + CheckForUpdates
              + CleanOldBundles
              + CleanOldCacheFiles
              + DeepMediaAnalysis
              + GenerateAutoTags
              + GenerateChapterThumbs
              + GenerateMediaIndexFiles
              + OptimizeDatabase
              + RefreshLibraries
              + RefreshLocalMedia
              + RefreshPeriodicMetadata
              + UpgradeMediaAnalysis

+ Response 200 (if the task was started. 202 if the task was already running.)

### Stopping a single Butler task [DELETE /butler/{taskName}/]

This endpoint will stop a currently running task by name, or remove it from the list of scheduled tasks if it exists. See the section above for a list of task names for this endpoint.

+ Parameters
    + taskName: `BackupDatabase` - the name of the task to be started.

+ Response 200 (if the task was stopped. 404 if the task was not running.)
