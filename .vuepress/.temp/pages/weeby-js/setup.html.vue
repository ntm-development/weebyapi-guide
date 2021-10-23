<template><h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1>
<ol>
<li>
<p>Install Node.js v16.6 or higher by selecting the Current tab, and then &quot;OS Name&quot; Installer. This will also install NPM. <a href="https://nodejs.org/en/download/current/" target="_blank" rel="noopener noreferrer">Click here<OutboundLink/></a> for the download page.
<img src="@source/weeby-js/images/nodejs.png" alt="nodejs" title="Step 1"></p>
</li>
<li>
<p>Install <code>weeby-js</code> with the following command:</p>
</li>
</ol>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> weeby-js --save
</code></pre></div><ol start="3">
<li>After you obtain a token from the Weeby API bot (via applying for one). Install the following NPM modules:</li>
</ol>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> dotenv
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If your platform is Windows and run into issues, then install Visual Studio C++ Build Tools</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g --add-python-to-path --vs2015 --production windows-build-tools
</code></pre></div></div>
<ol start="4">
<li>Create a <code>.env</code> file and add the following variable:</li>
</ol>
<div class="language-env ext-env"><pre v-pre class="language-env"><code>WEEBY_TOKEN=&lt;your token&gt;
</code></pre></div><ol start="5">
<li>Now, in your <code>index.js</code> file (or any other file), add the following code:</li>
</ol>
<!-- eslint-skip -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> WeebyAPI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'weeby-js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'dotenv'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> weeby <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeebyAPI</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">WEEBY_TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="6">
<li>You're ready to use Weeby-JS! check out the Weeby-JS examples to see how to integrate Weeby-JS functions in your project!</li>
</ol>
</template>
