import{_ as s,c as a,o as e,a as n}from"./app.a8d6a9cf.js";const m=JSON.parse('{"title":"local_search","description":"","frontmatter":{},"headers":[{"level":2,"title":"enable","slug":"enable","link":"#enable","children":[]},{"level":2,"title":"preload","slug":"preload","link":"#preload","children":[]}],"relativePath":"tutorial/configuration-guide/local_search.md","lastUpdated":1673949319000}'),l={name:"tutorial/configuration-guide/local_search.md"},p=n(`<h1 id="local-search" tabindex="-1">local_search <a class="header-anchor" href="#local-search" aria-hidden="true">#</a></h1><p><code>local_search</code> 用于设置站内搜索功能，非常实用，建议开启。开启后，头部导航栏右侧将出现<strong>搜索按钮</strong>。</p><p>通过输入关键字，可完成对博客站点内所有文章进行搜索匹配。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">local_search</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preload</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># Preload the search data when the page loads</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6qq9mg4z83w.png" alt="image"></p><h2 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-hidden="true">#</a></h2><p><code>enable</code> 是否开启站内搜索功能，可选值：<code>true</code> 或 <code>false</code>。</p><p>站内搜索功能配置流程：</p><ol><li><p>在 Hexo 项目根目录下安装插件 <code>hexo-generator-searchdb</code>。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hexo-generator-searchdb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>在 Hexo 配置文件 <code>_config.yml</code> 里添加如下配置项。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search.json</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">post</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">striptags</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>主题配置文件 <code>_config.yml</code> 的 <code>local_search.enable</code> 配置项的值设为 <code>true</code>。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">local_search</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><p>站内文章搜索效果图：</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.1fd645r1sips.png" alt="image"></p><h2 id="preload" tabindex="-1">preload <a class="header-anchor" href="#preload" aria-hidden="true">#</a></h2><p><code>preload</code> 设置是否在点击搜索按钮进行前<strong>预加载搜索数据</strong>。</p>`,13),o=[p];function c(r,t,i,d,y,h){return e(),a("div",null,o)}const b=s(l,[["render",c]]);export{m as __pageData,b as default};
