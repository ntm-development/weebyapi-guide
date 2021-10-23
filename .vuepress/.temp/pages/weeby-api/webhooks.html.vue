<template><h1 id="webhooks" tabindex="-1"><a class="header-anchor" href="#webhooks" aria-hidden="true">#</a> Webhooks</h1>
<p>Before you can start working with Webhooks, will need to go and visit the <a href="https://weebyapi.xyz/dashboard" target="_blank" rel="noopener noreferrer">Weeby API Dashboard<OutboundLink/></a>. Make sure that you are accepted first into Weeby API by applying for a token using the <code>/apply</code> command with the Weeby API bot, or using the <a href="https://weebyapi.xyz/dashboard/apply" target="_blank" rel="noopener noreferrer">apply<OutboundLink/></a> page.</p>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<p>If you would like to receive updates from the API without making requests. You can setup our event webhook system to get events whenever a user votes your bot on <a href="https://top.gg/" target="_blank" rel="noopener noreferrer">Top.gg<OutboundLink/></a>, a new punishment was added and more.
To verify requests are coming from Weeby API, we will provide the Authorization header with your Webhook Authorization token. It's recommended to verify every request to ensure it is coming from Weeby API.
Events sent by Weeby API must be acknowledged with a <code>200</code> response in order to be considered successful.</p>
<h3 id="setting-up-weeby-api" tabindex="-1"><a class="header-anchor" href="#setting-up-weeby-api" aria-hidden="true">#</a> Setting up Weeby API</h3>
<p>First, make sure that you have a web server, which is public and accessible by any IP Address.
Scroll down to Settings, there you will find the Event Webhook section where you can start configuring the settings for event webhooks.</p>
<p><img src="@source/weeby-api/images/webhook.png" alt="Webhook page"></p>
<p>The options are as listed in the section:</p>
<ul>
<li><strong>Webhook Authorization</strong> - You'll receive this upon being accepted into Weeby API, a unique Webhook Token for the Top.gg Webhook System and for our API Webhook Events system. (Don't use your API Token!).</li>
<li><strong>Webhook URL</strong> - This is the URL of your Web Server that Weeby API will send a <code>POST</code> request to. Localhost is not supported unless you use <a href="https://ngrok.io/" target="_blank" rel="noopener noreferrer">ngrok<OutboundLink/></a>.</li>
<li><strong>Disable/Enable</strong> - Toggle if you want events to be sent or not. If you are not using Event Webhooks, switch it off.
Fill in the details, and then click the <kbd>Save</kbd> button. Now events will be sent to that URL,</li>
</ul>
<h3 id="event-object" tabindex="-1"><a class="header-anchor" href="#event-object" aria-hidden="true">#</a> Event Object</h3>
<p>Top.gg Votes</p>
<!-- eslint-skip -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    event<span class="token operator">:</span> <span class="token string">"vote"</span>
    userID<span class="token operator">:</span> String<span class="token punctuation">,</span>
    botID<span class="token operator">:</span> String<span class="token punctuation">,</span>
    voteDate<span class="token operator">:</span> Number<span class="token punctuation">,</span>
    voteExpiry<span class="token operator">:</span> Number<span class="token punctuation">,</span>
    isWeekend<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="top-gg-voting" tabindex="-1"><a class="header-anchor" href="#top-gg-voting" aria-hidden="true">#</a> Top.gg Voting</h3>
<p>With Weeby API's Top.gg Webhook Integration, you will easily integrate the ability to have webhook messages sent to a Discord channel whenever a user votes for your bot on Top.gg</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>To ensure the best experience, make sure that you follow this guide, the fields to have webhooks setup correctly to avoid issues such as not providing the token, or Message Spamming.</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Do not use the Top.gg Webhook System for other bot list websites. It will not work because of the payload data, which leads to the webhook system breaking.</p>
</div>
<h3 id="setting-up-the-weeby-api-webhook" tabindex="-1"><a class="header-anchor" href="#setting-up-the-weeby-api-webhook" aria-hidden="true">#</a> Setting up the Weeby API Webhook</h3>
<p>Scroll down to <strong>Settings</strong>, there you will find the <strong>Top.gg Webhook</strong> section where you can start configuring Webhook functionality for your bot.
You will find the following details which you should not show anybody:</p>
<p><img src="@source/weeby-api/images/topgg-webhooks.png" alt="Top.gg Webhook"></p>
<ul>
<li><strong>Webhook URL</strong> - This is your Bot's Webhook URL where Top.gg will send <code>POST</code> requests to, along with the <a href="https://docs.top.gg/resources/webhooks/#bot-webhooks" target="_blank" rel="noopener noreferrer">payload<OutboundLink/></a> data.</li>
<li><strong>Webhook Authorization</strong> - You'll receive this upon being accepted into Weeby API, a unique Webhook Token for the Top.gg Webhook System and for our API Webhook Events system. (Don't use your API Token!).</li>
</ul>
<p>Now, while we are on this section. Fill in the following fields:</p>
<p><img src="@source/weeby-api/images/webhook-fields.png" alt="Webhook fields"></p>
<h4 id="discord-webhook-url" tabindex="-1"><a class="header-anchor" href="#discord-webhook-url" aria-hidden="true">#</a> Discord Webhook URL</h4>
<p>This is the Webhook URL that you can obtain by right-clicking any Channel &gt; Edit Channel &gt; Integrations &gt; Webhooks. You will then need to create a Webhook, name it and provide a nice avatar for it.</p>
<p><img src="@source/weeby-api/images/webhook-discord.png" alt="Discord Webhook"></p>
<p>Then, copy the Webhook URL and paste it in the <strong>Discord Webhook URL</strong> field. Do not show this to anybody because this contains the token and channel ID to make sending the content possible.</p>
<h4 id="embed-code" tabindex="-1"><a class="header-anchor" href="#embed-code" aria-hidden="true">#</a> Embed Code</h4>
<p>This is what the message will look like when it gets sent. Neat right? Well, to guarantee and ensure that the embeds are to be sent correctly without problems, use this <a href="https://discohook.org/" target="_blank" rel="noopener noreferrer">Embed Builder<OutboundLink/></a> tool that is specialized for designing Discord Webhook messages.</p>
<p><img src="@source/weeby-api/images/webhook-builder.png" alt="Webhook Builder"></p>
<p>When you're finished designing your embed, click on <strong>JSON Data Editor</strong> and copy the JSON code. Paste it into the <strong>Embed Code</strong> field.</p>
<p>Back on the dashboard, click <kbd>Save</kbd> and the page will reload with the new changes (shown on the fields).</p>
<h3 id="setting-up-top-gg" tabindex="-1"><a class="header-anchor" href="#setting-up-top-gg" aria-hidden="true">#</a> Setting Up Top.gg</h3>
<p>The next step involved is going to your bot's webhook page on Top.gg, visit this link:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>https://top.gg/bot/:BOTID/webhooks
</code></pre></div><p>Replace <code>:BOTID</code> with your Bot's ID.</p>
<p>When you are on this page, scroll down to <strong>Webhooks</strong>. Here you will need to fill in two fields that you have viewed on the dashboard earlier:</p>
<ul>
<li>Webhook URL</li>
<li>Webhook Authorization</li>
</ul>
<p><img src="@source/weeby-api/images/topgg-webhook.png" alt="Top.gg Webhook"></p>
<p>Click <kbd>Save</kbd>!</p>
<h4 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h4>
<p>We're now ready to test our webhooks, to ensure the webhooks are working, click on the <kbd>Send Test</kbd> button.</p>
<p><img src="@source/weeby-api/images/send-test.png" alt="Send Test"></p>
<p>You're all done with setting up! To see that your webhook message sent, go to the channel you created the webhook in and you'll see the webhook message.</p>
<p><img src="@source/weeby-api/images/new-vote.png" alt="New Vote"></p>
<h3 id="embed-variables" tabindex="-1"><a class="header-anchor" href="#embed-variables" aria-hidden="true">#</a> Embed Variables</h3>
<p>You may use these embed variables to display certain data in the message. Variables will need to use curly braces <code>{}</code>.
To guarantee for mentions to render properly, make sure both the user and bot is in the server! Also, dates are returned as a Unix Timestamp so that it can work with <a href="https://discord.com/developers/docs/reference#message-formatting-timestamp-styles" target="_blank" rel="noopener noreferrer">Discord message timestamps<OutboundLink/></a>.</p>
<h5 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h5>
<ul>
<li><code>{userMention}</code> - String. The mention of the user</li>
<li><code>{userID}</code> - String. The ID of the user.</li>
</ul>
<h5 id="bot" tabindex="-1"><a class="header-anchor" href="#bot" aria-hidden="true">#</a> Bot</h5>
<ul>
<li><code>{botMention}</code> - String. The mention of the bot</li>
<li><code>{botID}</code> - String. The ID of the user.</li>
</ul>
<h5 id="misc" tabindex="-1"><a class="header-anchor" href="#misc" aria-hidden="true">#</a> Misc.</h5>
<ul>
<li><code>{voteDate}</code> - Number. The date when the user voted.</li>
</ul>
<br>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>For now, these are the only supported variables. In the future we may introduce ways to fetch full user and bot data and make it 100% customisable.</p>
</div>
</template>
