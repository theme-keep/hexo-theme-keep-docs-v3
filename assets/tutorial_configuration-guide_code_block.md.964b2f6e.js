import{_ as s,c as a,o as e,a as n}from"./app.57c34715.js";const b=JSON.parse('{"title":"code_block","description":"","frontmatter":{},"headers":[{"level":2,"title":"tools","slug":"tools","link":"#tools","children":[{"level":3,"title":"enable","slug":"enable","link":"#enable","children":[]},{"level":3,"title":"style","slug":"style","link":"#style","children":[]}]},{"level":2,"title":"highlight_theme","slug":"highlight-theme","link":"#highlight-theme","children":[]}],"relativePath":"tutorial/configuration-guide/code_block.md","lastUpdated":1676443546000}'),l={name:"tutorial/configuration-guide/code_block.md"},o=n(`<h1 id="code-block" tabindex="-1">code_block <a class="header-anchor" href="#code-block" aria-hidden="true">#</a></h1><p><code>code_block</code> 用于开启代码块工具，包含<strong>代码语言</strong>、<strong>代码复制</strong>、<strong>代码块折叠</strong>、设置代码高亮主题等。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">code_block</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tools</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># Option values: default | mac</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">highlight_theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># Option values: default | obsidian</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="tools" tabindex="-1">tools <a class="header-anchor" href="#tools" aria-hidden="true">#</a></h2><h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-hidden="true">#</a></h3><p><code>enable</code> 是否开启代码块工具。</p><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h3><p><code>style</code> 设置代码块工具样式，可选 <code>default</code> 和 <code>mac</code>。</p><ul><li><p><code>default</code> 效果图</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">tools</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6bhrcwskc7c0.webp" alt="image"></p></li><li><p><code>mac</code> 效果图</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">tools</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mac</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.acb47ynqemo.webp" alt="image"></p></li></ul><h2 id="highlight-theme" tabindex="-1">highlight_theme <a class="header-anchor" href="#highlight-theme" aria-hidden="true">#</a></h2><p><code>highlight_theme</code> 设置代码高亮主题，可选 <code>default</code> 和 <code>obsidian</code>。</p><blockquote><p>Keep 主题追求的是简约轻快，在最大程度上降低用户对界面美感的选择困难，使其专注写作的内容，作者认为这两种代码高亮主题能满足绝大部分的使用场景。后续版本迭代基本上不会有新的代码高亮主题出现，望周知。</p></blockquote><ul><li><p><code>default</code> 代码高亮主题</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">highlight_theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6bhrcwskc7c0.webp" alt="image"></p></li><li><p><code>obsidian</code> 代码高亮主题</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">highlight_theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">obsidian</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2ca6ndgrzfr4.webp" alt="image"></p></li></ul>`,13),p=[o];function t(c,i,r,d,h,m){return e(),a("div",null,p)}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
