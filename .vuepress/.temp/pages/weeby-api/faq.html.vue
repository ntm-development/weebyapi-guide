<template><h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently asked questions</h1>
<h3 id="what-is-weeby-api" tabindex="-1"><a class="header-anchor" href="#what-is-weeby-api" aria-hidden="true">#</a> What is Weeby API?</h3>
<p>A Rest API Service that lets you generate images, create image effects, fetch GIFs and so much more.</p>
<h3 id="can-i-invite-the-weeby-api-discord-bot" tabindex="-1"><a class="header-anchor" href="#can-i-invite-the-weeby-api-discord-bot" aria-hidden="true">#</a> Can I invite the Weeby API Discord Bot?</h3>
<p>No, the bot can only be used on the <a href="https://weebyapi.xyz/discord" target="_blank" rel="noopener noreferrer">NTM Discord Server<OutboundLink/></a>. The bot will only be used for handling applications, viewing documentation, and everything else about Weeby API.</p>
<h3 id="are-there-any-examples" tabindex="-1"><a class="header-anchor" href="#are-there-any-examples" aria-hidden="true">#</a> Are there any examples?</h3>
<p>Although we don't have a comprehensive list of examples. We have two endpoint examples currently on the Weeby API website.</p>
<h3 id="do-you-have-any-weeby-api-wrappers" tabindex="-1"><a class="header-anchor" href="#do-you-have-any-weeby-api-wrappers" aria-hidden="true">#</a> Do you have any Weeby API Wrappers?</h3>
<p>Yes! We have these listed <RouterLink to="/#wrappers">here!</RouterLink></p>
<h3 id="your-code-examples-are-for-superagent-can-i-use-any-other-http-module" tabindex="-1"><a class="header-anchor" href="#your-code-examples-are-for-superagent-can-i-use-any-other-http-module" aria-hidden="true">#</a> Your code examples are for Superagent? Can I use any other HTTP Module?</h3>
<p>Absolutely! Its compatible with every HTTP Module (Axios, node-fetch etc.), as long as you supply the correct token and the query parameters. We strongly discourage using JQuery for GET requests or trying to scrape our pages as it is a waste of resources.</p>
<h3 id="why-did-i-get-the-401-unauthorized-error" tabindex="-1"><a class="header-anchor" href="#why-did-i-get-the-401-unauthorized-error" aria-hidden="true">#</a> Why did I get the <code>401 Unauthorized</code> error?</h3>
<p>This means you need to check that your token is correct and supplying the correct Authorization Headers. See the <a href="https://weebyapi.xyz/gettingstarted" target="_blank" rel="noopener noreferrer">Getting Started<OutboundLink/></a> page to find out how to authenticate to our API.</p>
<h3 id="why-did-i-get-the-400-bad-request-error" tabindex="-1"><a class="header-anchor" href="#why-did-i-get-the-400-bad-request-error" aria-hidden="true">#</a> Why did I get the <code>400 Bad Request</code> error?</h3>
<p>This happens when the API requires an input from the user. This input is used to assign values to specified parameters, so make sure to supply the correct values as explained in the error response.</p>
<h3 id="how-do-i-get-the-data-sent-by-the-api" tabindex="-1"><a class="header-anchor" href="#how-do-i-get-the-data-sent-by-the-api" aria-hidden="true">#</a> How do I get the data sent by the API?</h3>
<p>Depending on the endpoint used, it will always return either JSON or a Image Buffer.</p>
<h3 id="i-want-to-stop-using-the-api-can-you-revoke-my-token" tabindex="-1"><a class="header-anchor" href="#i-want-to-stop-using-the-api-can-you-revoke-my-token" aria-hidden="true">#</a> I want to stop using the API. Can you revoke my Token?</h3>
<p>Please contact a Weeby API Developer on our <a href="https://weebyapi.xyz/discord" target="_blank" rel="noopener noreferrer">Discord Server<OutboundLink/></a> stating why you want your token revoked and they will guide you through the process of deactivating the token.</p>
<h3 id="will-weeby-api-be-available-for-other-services-like-guilded" tabindex="-1"><a class="header-anchor" href="#will-weeby-api-be-available-for-other-services-like-guilded" aria-hidden="true">#</a> Will Weeby API be available for other services (like Guilded)?</h3>
<p>Weeby API is currently supported for Discord Bot Developers at this stage. If you would like to find out when other services like Guilded will be supported, you can check out our roadmap <a href="https://weebyapi.xyz/trello" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>!</p>
<h3 id="how-do-i-suggest-new-api-features" tabindex="-1"><a class="header-anchor" href="#how-do-i-suggest-new-api-features" aria-hidden="true">#</a> How do I suggest new API features?</h3>
<p>We recommend that when you suggest for a new Weeby API feature, that you follow a simple etiquette that ensures the team understands what you would like to see added in a future update.</p>
<ul>
<li>Keep the suggestions original and simple, if there are existing features found on other APIs, we may not add them.</li>
<li>When we mean <strong>simple</strong>, features should not be too challenging to code. Like if we were to make a image generator that involves canvas rotations, it makes coding a nightmare.</li>
<li>Do not suggest GIF endpoints. These are only exclusive for the team to decide and we cannot guarantee if each GIF is considered NSFW. This is where we have to come in and manually review the images.</li>
<li>No Search/Lookup endpoint suggestions. As these have their own APIs, use those instead as if we were to add our own, you will have to request the endpoint through Weeby API, then Weeby API has to request another API to get that relevant information.</li>
<li>No NSFW or otherwise offensive suggestions.</li>
</ul>
<h3 id="are-there-any-rate-limits" tabindex="-1"><a class="header-anchor" href="#are-there-any-rate-limits" aria-hidden="true">#</a> Are there any rate-limits?</h3>
<p>We have not enforced any rate-limits on the API but we expect you to cache the responses especially if you have a bot that has a lot of servers and relies on Weeby API.
It's recommended that you implement caching to save the API's resources from being used up (i.e bandwidth, hosting).</p>
<h3 id="is-weeby-api-safe" tabindex="-1"><a class="header-anchor" href="#is-weeby-api-safe" aria-hidden="true">#</a> Is Weeby API safe?</h3>
<p>Absolutely! safety of users that rely on Weeby API is the top priority.
The service has Endpoints and GIFs that are appropriate for all ages (PG-13) and with the GIFs/Images, they're manually reviewed for any NSFW, Lolicon or inappropriate content and/or references.
If you come across something inappropriate, join the <a href="https://discord.gg/cmUFubKUtu" target="_blank" rel="noopener noreferrer">Discord Server<OutboundLink/></a> and report to a Weeby API Developer.</p>
<h3 id="none-of-these-help-me-what-do-i-do" tabindex="-1"><a class="header-anchor" href="#none-of-these-help-me-what-do-i-do" aria-hidden="true">#</a> None of these help me! What do I do?</h3>
<p>If your question doesn't get answered here, join our <a href="https://discord.gg/cmUFubKUtu" target="_blank" rel="noopener noreferrer">Discord Server<OutboundLink/></a> or email <a href="mailto:natebotenquiries@gmail.com">natebotenquiries@gmail.com</a> for help. The developers are always available to help with your problem.</p>
</template>
