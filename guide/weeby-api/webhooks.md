# Webhooks
Before you can start working with Webhooks, you will need to go and visit the [Weeby API Dashboard](https://weebyapi.xyz/dashboard). Make sure that you are accepted first into Weeby API by applying for a token using the `/apply` command with the Weeby API bot, or using the [apply](https://weebyapi.xyz/dashboard/apply) page.

## Events
If you would like to receive updates from the API without making requests. You can setup our event webhook system to get events whenever a user votes your bot or server on [Top.gg](https://top.gg/).

To verify requests are coming from Weeby API, we will provide the Authorization header with your Webhook Authorization token. It's recommended to verify every request to ensure it is coming from Weeby API.

Events sent by Weeby API must be acknowledged with a `200` response in order to be considered successful.

### Setting up
First, make sure that you have a web server which is public and accessible by any IP Address.
You will then need to visit the [Event Webhook](https://weebyapi.xyz/dashboard/eventwebhook) page on the dashboard. There you will find the configurable settings for event webhooks.

![Webhook page](./images/webhook.png)

The options are as listed in the section:
- **Webhook Authorization** - You'll receive this upon being accepted into Weeby API, a unique Webhook Token for the Top.gg Webhook System and for our API Webhook Events system. (Don't use your API Token!).
- **Webhook URL** - This is the URL of your Web Server that Weeby API will send a `POST` request to. Localhost is not supported unless you use [ngrok](https://ngrok.io/).
- **Disable/Enable** - Toggle if you want events to be sent or not. If you are not using Event Webhooks, switch it off.

Fill in the details, and then click the <kbd>Save</kbd> button. Now events will be sent to that URL,

### Event Object
Top.gg Votes

#### Bot
<!-- eslint-skip -->
```js
{
    event: "bot-vote"
    userID: String,
    botID: String,
    voteDate: Number,
    voteExpiry: Number,
    isWeekend: Boolean,
}
```

#### Server
<!-- eslint-skip -->
```js
{
    event: "server-vote"
    userID: String,
    serverID: String,
    voteDate: Number,
    voteExpiry: Number,
    isWeekend: Boolean,
}
```

## Top.gg Voting
With Weeby API's Top.gg Webhook Integration, you will easily integrate to have webhook messages sent to a Discord channel whenever a user votes for your bot or server on Top.gg.

::: tip
This setup focuses on setting up voting webhooks for bots, this is the same for servers except you need to provide the Server ID.

To ensure the best experience, make sure that you follow this guide, the fields to have webhooks setup correctly to avoid issues such as not providing the token, or Message Spamming.
:::

::: danger
Do not use the Top.gg Webhook System for other bot list websites. It will not work because of the payload data, which leads to the webhook system breaking.
:::

### Setting up
Go to the [Top.gg Webhook](https://weebyapi.xyz/dashboard/topggwebhook) page to start configuring vote webhook functionality.
You will find the following details which you should not show anybody:

![Top.gg Webhook](./images/topgg-webhooks.png)

- **Webhook URL** - There are two types of Webhook URLs, a bot and server (if you specify the Server ID). Top.gg will send `POST` requests to, along with the [payload](https://docs.top.gg/resources/webhooks/#bot-webhooks) data to these Webhook URLs.
- **Webhook Authorization** - You'll receive this upon being accepted into Weeby API, a unique Webhook Token for the Top.gg Webhook System and for our API Webhook Events system. (Don't use your API Token!).

Now, while we are on this section. Fill in the following fields:

![Webhook fields](./images/webhook-fields.png)

#### Discord Webhook URL
This is the Webhook URL that you can obtain by right-clicking any Channel > Edit Channel > Integrations > Webhooks. You will then need to create a Webhook, name it and provide a nice avatar for it.

![Discord Webhook](./images/webhook-discord.png)

Then, copy the Webhook URL and paste it in the **Discord Webhook URL** field. Do not show this to anybody because this contains the token and channel ID to make sending the content possible.

#### Embed Code
This is what the message will look like when it gets sent. Neat right? Well, to guarantee and ensure that the embeds are to be sent correctly without problems, use this [Embed Builder](https://discohook.org/) tool that is specialized for designing Discord Webhook messages.

![Webhook Builder](./images/webhook-builder.png)

When you're finished designing your embed, click on **JSON Data Editor** and copy the JSON code. Paste it into the **Embed Code** field.

Back on the dashboard, click <kbd>Save</kbd> and the page will reload with the new changes (shown on the fields).

### Bot Webhook page (Top.gg)
The next step involved is going to your bot's webhook page on Top.gg, visit this link:

Bot:
```:no-line-numbers
https://top.gg/bot/:BOTID/webhooks
```

Server:
```:no-line-numbers
https://top.gg/servers/:SERVERID/webhooks
```
Replace `:BOTID`/`:SERVERID` with your Bot's ID.

When you are on this page, scroll down to **Webhooks**. Here you will need to fill in two fields that you have viewed on the dashboard earlier:
- Webhook URL
- Webhook Authorization

![Top.gg Webhook](./images/topgg-webhook.png)

Click <kbd>Save</kbd>!

#### Testing
You are now ready to test webhooks! To ensure the webhooks are working click on the <kbd>Send Test</kbd> button.

![Send Test](./images/send-test.png)

You're all done with setting up! To see that your webhook message sent, go to the channel you created the webhook in and you'll see the webhook message.

![New Vote](./images/new-vote.png)

### Embed Variables
You may use these embed variables to display certain data in the message. Variables will need to use curly braces `{}`.
To guarantee for mentions to render properly, make sure both the user and bot is in the server! Also, dates are returned as a Unix Timestamp so that it can work with [Discord message timestamps](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles).

##### User
- `{userMention}` - String. The mention of the user
- `{userID}` - String. The ID of the user.
- `{userAvatar}` - String. The avatar of the user.

##### Bot
- `{botMention}` - String. The mention of the bot
- `{botID}` - String. The ID of the user.

##### Server
- `{serverID}` - String. The ID of the server.

##### Misc.
- `{voteDate}` - Number. The date when the user voted.