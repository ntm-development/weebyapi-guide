import{d as n}from"./app.6ca70ea2.js";const s={},a=n('<h1 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h1><h3 id="gif" tabindex="-1"><a class="header-anchor" href="#gif" aria-hidden="true">#</a> GIF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> WeebyAPI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;weeby-js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> weeby <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeebyAPI</span><span class="token punctuation">(</span><span class="token string">&#39;YOUR_TOKEN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> gif <span class="token operator">=</span> <span class="token keyword">await</span> weeby<span class="token punctuation">.</span>gif<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;pat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gif<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; https://cdn.weebyapi.xyz/img/gif/pat/13.gif</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="generator" tabindex="-1"><a class="header-anchor" href="#generator" aria-hidden="true">#</a> Generator</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> WeebyAPI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;weeby-js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> weeby <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeebyAPI</span><span class="token punctuation">(</span><span class="token string">&#39;YOUR_TOKEN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">await</span> weeby<span class="token punctuation">.</span>generators<span class="token punctuation">.</span><span class="token function">oneImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;3000years&#39;</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/qgKvcQv.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmessage<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> files<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> attachment<span class="token operator">:</span> image <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; Image Buffer</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> Custom</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> WeebyAPI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;weeby-js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> weeby <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeebyAPI</span><span class="token punctuation">(</span><span class="token string">&#39;YOUR_TOKEN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">await</span> weeby<span class="token punctuation">.</span>custom<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\ticon<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/qgKvcQv.png&#39;</span><span class="token punctuation">,</span>\n\tbackground<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/ENbvdWD.png&#39;</span><span class="token punctuation">,</span>\n\tgreet<span class="token operator">:</span> <span class="token string">&#39;Welcome&#39;</span><span class="token punctuation">,</span>\n\tname<span class="token operator">:</span> <span class="token string">&#39;Nate&#39;</span><span class="token punctuation">,</span>\n\tmessage<span class="token operator">:</span> <span class="token string">&#39;Hello and Welcome!&#39;</span><span class="token punctuation">,</span>\n\tgreetHex<span class="token operator">:</span> <span class="token string">&#39;E881D1&#39;</span><span class="token punctuation">,</span>\n\tmessageHex<span class="token operator">:</span> <span class="token string">&#39;76d6ff&#39;</span><span class="token punctuation">,</span>\n\tcircleHex<span class="token operator">:</span> <span class="token string">&#39;6b6d75&#39;</span><span class="token punctuation">,</span>\n\tnameHex<span class="token operator">:</span> <span class="token string">&#39;e889e0&#39;</span><span class="token punctuation">,</span>\n\tfont<span class="token operator">:</span> <span class="token string">&#39;riffic&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmessage<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> files<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> attachment<span class="token operator">:</span> image <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; Image Buffer</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',7);s.render=function(n,s){return a};export{s as default};
