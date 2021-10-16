# Authenticating with the API
In order to get a token, you will need to join our [Discord Server](https://weebyapi.xyz/discord) and make an application request with the `/apply` command with the Weeby API Bot, please check this [article](./obtaining-a-token) for instructions.

When calling the API, you will need to provide a `HTTP-Header` with the name `Authorization` and the value `Bearer YOUR_TOKEN` where you need to replace `YOUR_TOKEN` with the token sent by the bot.

You can pass the the token directly by adding a query string to the endpoint url (`?token=YOUR_TOKEN`)

::: tip
For the ease of use, Weeby API supports two types of authentication:
- **Authorization Header** `Bearer` - Secure
- **Query Strings** `?token=` - Insecure

Just for the safety of all developers, we recommend following our examples on the website as it uses the Authorization Header for authenticating our API endpoints. If you know what you are doing with Query Strings, good for you!
:::