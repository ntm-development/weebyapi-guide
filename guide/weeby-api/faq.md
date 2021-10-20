# Frequently asked questions

### What is Weeby API?
A Rest API Service that lets you generate images, create image effects, fetch GIFs and so much more.

### Can I invite the Weeby API Discord Bot?
No, the bot can only be used on the [NTM Discord Server](https://weebyapi.xyz/discord). The bot will only be used for handling token applications, viewing documentation, and everything else about Weeby API.

### Are there any examples?
Although we don't have a comprehensive list of examples. We have two endpoint examples currently on the Weeby API website.

### Do you have any Weeby API Wrappers?
Yes! We have these listed [here!](/#wrappers).

### Your code examples are for Superagent? Can I use any other HTTP Module?
Absolutely! Its compatible with every HTTP Module (Axios, node-fetch etc.), as long as you supply the correct token and the query parameters. We strongly discourage using JQuery for GET requests or trying to scrape our pages as it is a waste of resources.

### Why did I get the `401 Unauthorized` error? 
This means you need to check that your token is correct and supplying the correct Authorization Headers. See the [Getting Started](https://weebyapi.xyz/gettingstarted) page to find out how to authenticate to our API.

### Why did I get the `400 Bad Request` error?
This happens when the API requires an input from the user. This input is used to assign values to specified parameters, so make sure to supply the correct values as explained in the error response.

### How do I get the data sent by the API?
Depending on the endpoint used, it will always return either JSON or a Image Buffer.

### I want to stop using the API. Can you revoke my Token?
Please contact a Weeby API Developer on our [Discord Server](https://weebyapi.xyz/discord) stating why you want your token revoked and they will guide you through the process of deactivating the token.

### Will Weeby API be available for other services (like Guilded)?
Weeby API is currently supported for Discord Bot Developers at this stage. If you would like to find out when other services like Guilded will be supported, you can check out our roadmap [here](https://weebyapi.xyz/trello)!