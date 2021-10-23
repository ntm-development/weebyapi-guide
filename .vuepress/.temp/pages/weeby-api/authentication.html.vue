<template><h1 id="authenticating-with-the-api" tabindex="-1"><a class="header-anchor" href="#authenticating-with-the-api" aria-hidden="true">#</a> Authenticating with the API</h1>
<p>In order to get a token, you will need to join our <a href="https://weebyapi.xyz/discord" target="_blank" rel="noopener noreferrer">Discord Server<OutboundLink/></a> and make an application request with the <code>/apply</code> command with the Weeby API Bot, please check this <a href="./obtaining-a-token">article</a> for instructions.</p>
<p>When calling the API, you will need to provide a <code>HTTP-Header</code> with the name <code>Authorization</code> and the value <code>Bearer YOUR_TOKEN</code> where you need to replace <code>YOUR_TOKEN</code> with the token sent by the bot.</p>
<p>You can pass the token directly by adding a query string to the endpoint url (<code>?token=YOUR_TOKEN</code>)</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>For the ease of use, Weeby API supports two types of authentication:</p>
<ul>
<li><strong>Authorization Header</strong> <code>Bearer</code> - Secure</li>
<li><strong>Query Strings</strong> <code>?token=</code> - Insecure</li>
</ul>
<p>Just for the safety of all developers, we recommend following our examples on the website as it uses the Authorization Header for authenticating our API endpoints. If you know what you are doing with Query Strings, good for you!</p>
</div>
</template>
