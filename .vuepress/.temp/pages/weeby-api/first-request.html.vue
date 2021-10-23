<template><h1 id="making-your-first-request" tabindex="-1"><a class="header-anchor" href="#making-your-first-request" aria-hidden="true">#</a> Making your first request</h1>
<p>Now that you've been accepted and received the token from the Weeby API bot, you want to know how to use the API and take the opportunity to test the token with the <code>curl</code> command.</p>
<p>Type this in your console:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -X GET <span class="token string">'https://weebyapi.xyz/gif/zerotwo'</span> -H <span class="token string">'Authorization: Bearer YOUR_TOKEN'</span>
</code></pre></div><p>If successful, it should return a JSON Object (shown below) of the GIF and that means, you should be able to use our API in your creation!</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
   <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://cdn.weebyapi.xyz/img/gif/zerotwo/14.gif"</span><span class="token punctuation">,</span>
   <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/img/gif/zerotwo/14.gif"</span><span class="token punctuation">,</span>
   <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"zerotwo"</span><span class="token punctuation">,</span>
   <span class="token property">"number"</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
   <span class="token property">"totalGifs"</span><span class="token operator">:</span> <span class="token number">22</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>For the ease of use, Weeby API supports two types of authentication:</p>
<ul>
<li><strong>Authorization Header</strong> <code>Bearer</code> - Secure</li>
<li><strong>Query Strings</strong> <code>?token=</code> - Insecure</li>
</ul>
<p>Just for the safety of all developers, we recommend following our examples on the website as it uses the Authorization Header for authenticating our API endpoints. If you know what you are doing with Query Strings, good for you!</p>
</div>
</template>
