## Security

### Get Transient Tokens [GET /security/token{?type,scope}]

This endpoint provides the caller with a temporary token with the same access level as the caller's token. These tokens are valid for up to 48 hours and are destroyed if the server instance is restarted.

+ Parameters
    + type: `delegation` - This is the only supported `type` parameter.
    + scope: `all` - This is the only supported `scope` parameter.

+ Response 200 (application/xml)

        <MediaContainer size="0" token="transient-90904684-f91a-4391-8bf7-e0dfa7240285"></MediaContainer>

### Get Source Connection Information [GET /security/resources{?source}]

If a caller requires connection details and a transient token for a source that is known to the server, for example a cloud media provider or shared PMS, then this endpoint can be called. This endpoint is only accessible with either an admin token or a valid transient token generated from an admin token.

Note: requires Plex Media Server >= 1.15.4.

+ Parameters
    + source: `server://client-identifier` or `provider://provider-identifier` - The source identifier with an included prefix.

+ Response 200 (application/xml)

        <MediaContainer size="1">
			<Device name="PlexCorp (plex-corp)" clientIdentifier="243b471948ace337a8f92f129ec97d1902fcb1df" accessToken="transient-fa75f159-b9d2-42b6-8fbd-1761c7a4195a">
				<Connection protocol="https" address="10.0.2.123" uri="https://10-0-2-123.93b10b279ff8456686414add109854cd.plex.direct:32400" port="32400" local="1" />
				<Connection protocol="https" address="64.71.188.222" uri="https://64-71-188-222.93b10b279ff8456686414add109854cd.plex.direct:32403" port="32403" local="0" />
				<Connection protocol="https" address="139.162.158.105" uri="https://139-162-158-105.93b10b279ff8456686414add109854cd.plex.direct:8443" port="8443" local="0" relay="1" />
			</Device>
		</MediaContainer>
