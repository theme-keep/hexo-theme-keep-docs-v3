import{_ as s,v as a,b as e,R as n}from"./chunks/framework.70afa331.js";const l="/assets/img-1.512d2ad1.png",o="/assets/img-2.cc5f4974.png",p="/assets/img-3.962c3707.png",g=JSON.parse('{"title":"website_count","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/configuration-guide/website_count.md","filePath":"tutorial/configuration-guide/website_count.md","lastUpdated":1695718894000}'),t={name:"tutorial/configuration-guide/website_count.md"},c=n(`<h1 id="website-count" tabindex="-1">website_count <a class="header-anchor" href="#website-count" aria-label="Permalink to &quot;website\\_count&quot;">​</a></h1><p><code>website_count</code> 用于配置网站的计数功能，Keep 主题内置<strong>不蒜子</strong>计数，无需额外配置，开箱即用。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">website_count</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">busuanzi_count</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">site_uv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">site_pv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">page_pv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="busuanzi-count" tabindex="-1">busuanzi_count <a class="header-anchor" href="#busuanzi-count" aria-label="Permalink to &quot;busuanzi_count&quot;">​</a></h2><h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 是否开启不蒜子计数，可选值：<code>true</code> 或 <code>false</code>。</p><h3 id="site-uv" tabindex="-1">site_uv <a class="header-anchor" href="#site-uv" aria-label="Permalink to &quot;site_uv&quot;">​</a></h3><p><code>site_uv</code> 开启网站访问人数计数，显示在底部，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">site_uv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+l+'" alt="image"></p><h3 id="site-pv" tabindex="-1">site_pv <a class="header-anchor" href="#site-pv" aria-label="Permalink to &quot;site_pv&quot;">​</a></h3><p><code>site_pv</code> 开启网站总访问量计数，显示在底部，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">site_pv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="image"></p><h3 id="page-pv" tabindex="-1">page_pv <a class="header-anchor" href="#page-pv" aria-label="Permalink to &quot;page_pv&quot;">​</a></h3><p><code>page_pv</code> 开启文章阅读次数计数，显示在文章内容页，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">page_pv</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="image"></p>',18),i=[c];function r(d,u,b,m,y,h){return a(),e("div",null,i)}const v=s(t,[["render",r]]);export{g as __pageData,v as default};
