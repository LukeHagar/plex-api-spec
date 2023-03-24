## Group Log (/log)

### Logging a single-line message to the Plex Media Server log (GET /log)

This endpoint will write a single-line log message, including a level and source to the main Plex Media Server log.

+ Parameters
    + level: An integer log level to write to the PMS log with.
        + Members
            + 0: Error
            + 1: Warning
            + 2: Info
            + 3: Debug
            + 4: Verbose
    + message: The text of the message to write to the log.
    + source: A string indicating the source of the message.

+ Response 200

### Logging a multi-line message to the Plex Media Server log (POST /log)

This endpoint will write multiple lines to the main Plex Media Server log in a single request. It takes a set of query strings as would normally sent to the above GET endpoint as a linefeed-separated block of POST data. The parameters for each query string match as above.

+ Response 200

### Enabling Papertrail (GET /log/networked)

This endpoint will enable all Plex Media Serverlogs to be sent to the Papertrail networked logging site for a period of time.

+ Parameters
    + minutes: The number of minutes logging should be sent to Papertrail

+ Response 200 (if papertrail could be enabled. 403 if the user was not signed in)
