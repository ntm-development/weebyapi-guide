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

### How do I suggest new API features?
We recommend that when you suggest for a new Weeby API feature, that you follow a simple etiquette that ensures the team understands what you would like to see added in a future update.
- Keep the suggestions original and simple, if there are existing features found on other APIs, we may not add them.
- When we mean **simple**, features should not be too challenging to code. Like if we were to make a image generator that involves canvas rotations, it makes coding a nightmare.
- Do not suggest GIF endpoints. These are only exclusive for the team to decide and we cannot guarantee if each GIF is considered NSFW. This is where we have to come in and manually review the images.
- No Search/Lookup endpoint suggestions. As these have their own APIs, use those instead as if we were to add our own, you will have to request the endpoint through Weeby API, then Weeby API has to request another API to get that relevant information.
- No NSFW or otherwise offensive suggestions.

### Are there any rate-limits?
We have not enforced any rate-limits on the API but we expect you to cache the responses especially if you have a bot that has a lot of servers and relies on Weeby API.
It's recommended that you implement caching to save the API's resources from being used up (i.e bandwidth, hosting).

### Is Weeby API safe?
Absolutely! safety of users that rely on Weeby API is the top priority. 
The service has Endpoints and GIFs that are appropriate for all ages (PG-13) and with the GIFs/Images, they're manually reviewed for any NSFW, Lolicon or inappropriate content and/or references.
If you come across something inappropriate, join the [Discord Server](https://discord.gg/cmUFubKUtu) and report to a Weeby API Developer.

### None of these help me! What do I do?
If your question doesn't get answered here, join our [Discord Server](https://discord.gg/cmUFubKUtu) or email [natebotenquiries@gmail.com](mailto:natebotenquiries@gmail.com) for help. The developers are always available to help with your problem.