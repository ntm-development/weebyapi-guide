# Making your first request
Now that you've been accepted and received the token from the Weeby API bot, you may take the opportunity to test the token with the `curl` command.

Type this in your console:
```sh
curl -X GET 'https://weebyapi.xyz/gif/zerotwo' -H 'Authorization: Bearer YOUR_TOKEN'
```

If successful, it should return a JSON Object (shown below) of the GIF and that means, you should be able to use our API in your creation!

```json
{
   "status": 200,
   "url": "https://cdn.weebyapi.xyz/img/gif/zerotwo/14.gif",
   "formattedURL": "https://cdn.weebyapi.xyz/img/gif/zerotwo/14.gif",
   "path": "/img/gif/zerotwo/14.gif",
   "type": "zerotwo",
   "number": 14,
   "totalGifs": 22
}
```

::: tip
For the ease of use, Weeby API supports two types of authentication:
- **Authorization Header** `Bearer` - Secure
- **Query Strings** `?token=` - Insecure

Just for the safety of all developers, we recommend following our examples on the website as it uses the Authorization Header for authenticating our API endpoints. If you know what you are doing with Query Strings, good for you!
:::