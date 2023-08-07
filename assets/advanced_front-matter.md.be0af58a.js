import{_ as p,v as l,b as o,F as a,L as s,t,R as n,M as r}from"./chunks/framework.70afa331.js";const k=JSON.parse('{"title":"Front-matter","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/front-matter.md","filePath":"advanced/front-matter.md","lastUpdated":1691404582000}'),c={name:"advanced/front-matter.md"},i=n(`<h1 id="front-matter" tabindex="-1">Front-matter <a class="header-anchor" href="#front-matter" aria-label="Permalink to &quot;Front-matter&quot;">​</a></h1><p><a href="https://hexo.io/zh-cn/docs/front-matter" target="_blank" rel="noreferrer">Front-matter</a> 是指 <code>_posts</code> 目录下文章 <code>.md</code> 文件最上方以 <code>---</code> 分隔的区域，用于设置文章的变量。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: Keep 主题使用指南</span></span>
<span class="line"><span style="color:#A6ACCD;">date: 2020-04-07 21:55:14</span></span>
<span class="line"><span style="color:#A6ACCD;">tags: [Hexo, Keep]</span></span>
<span class="line"><span style="color:#A6ACCD;">categories: [Keep]</span></span>
<span class="line"><span style="color:#A6ACCD;">sticky: 9999</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>通过配置 Front matter，可以 <strong>设置文章置顶</strong>、<strong>开启文章时效提示</strong>、<strong>关闭文章版权信息</strong>、<strong>关闭文章 TOC 目录结构</strong>、<strong>关闭文章评论</strong> 等等。</p><h2 id="设置文章置顶" tabindex="-1">设置文章置顶 <a class="header-anchor" href="#设置文章置顶" aria-label="Permalink to &quot;设置文章置顶&quot;">​</a></h2><p>实现文章置顶，需要在文章 <code>.md</code> 文件中添加 <code>sticky</code> 属性，<code>sticky</code> 值越大，在主页中置顶的文章越靠前。</p><p>使用示例：</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep 主题使用指南</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2020-04-07 21:55:14</span></span>
<span class="line"><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hexo</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">categories</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hexo</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">sticky</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">999</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5dugep0gpp00.webp" alt="image"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>sticky</code> 值越大，置顶文章越靠前。</p></div><h2 id="关闭文章版权信息" tabindex="-1">关闭文章版权信息 <a class="header-anchor" href="#关闭文章版权信息" aria-label="Permalink to &quot;关闭文章版权信息&quot;">​</a></h2><p>在 Front-matter 中，可单独关闭某篇文章底部的版权信息。（适用于某些转载的文章）</p><p>使用示例：</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep 主题使用指南</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2020-04-07 21:55:14</span></span>
<span class="line"><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hexo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">categories</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">copyright_info</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>copyright_info</code> 默认开启，只有设置为 <code>false</code> 时才会关闭。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.3e6zrvfb67c0.png" alt="image"></p><h2 id="关闭文章-toc-目录结构" tabindex="-1">关闭文章 TOC 目录结构 <a class="header-anchor" href="#关闭文章-toc-目录结构" aria-label="Permalink to &quot;关闭文章 TOC 目录结构&quot;">​</a></h2><p>在 Front-matter 中，可单独关闭某篇文章的 TOC 目录结构。</p><p>使用示例：</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep 主题使用指南</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2020-04-07 21:55:14</span></span>
<span class="line"><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hexo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">categories</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">toc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>toc</code> 默认开启，只有设置为 <code>false</code> 时才会关闭。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.cg4jf4orf4w.webp" alt="image"></p><h2 id="关闭文章评论" tabindex="-1">关闭文章评论 <a class="header-anchor" href="#关闭文章评论" aria-label="Permalink to &quot;关闭文章评论&quot;">​</a></h2><p>在 Front-matter 中，可单独关闭某篇文章的评论功能。</p><p>使用示例：</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep 主题使用指南</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2020-04-07 21:55:14</span></span>
<span class="line"><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hexo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">categories</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">comment</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>comment</code> 默认开启，只有设置为 <code>false</code> 时才会关闭。</p>`,27),d={id:"配置文章时效提示",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#配置文章时效提示","aria-label":'Permalink to "配置文章时效提示 <Badge type="tip" text="v3.6.0" />"'},"​",-1),m=n(`<p>已配置文章时效提示的文章，会根据文章的更新日期判断，超过配置天数的文章，会在开头处进行<strong>时效性提示</strong>。</p><p>如图：</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/Keep-%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97/image.375ud0p8k8c0.webp" alt="image"></p><p>使用示例：</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep 主题使用指南</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2020-04-07 21:55:14</span></span>
<span class="line"><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hexo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">categories</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Keep</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">aging</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">aging_days</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>aging</code> 表示是否开启该文章的时效提示</li><li><code>aging_days</code> 设置时效提示的天数</li></ul><h2 id="文章截取" tabindex="-1">文章截取 <a class="header-anchor" href="#文章截取" aria-label="Permalink to &quot;文章截取&quot;">​</a></h2><p>Hexo 提供了关键字符 <code>&lt;!-- more --&gt;</code> 可实现对文章自由截取，并在首页完整显示出来。</p><h3 id="有截取符" tabindex="-1">有截取符 <a class="header-anchor" href="#有截取符" aria-label="Permalink to &quot;有截取符&quot;">​</a></h3><p>例如，下图，在《Keep 主题使用指南》这篇文章的 md 文件中加上了 <code>&lt;!-- more --&gt;</code> 截取字符，那么 <code>&lt;!-- more --&gt;</code> 以上的内容便会在首页中完整的显示出来。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2vhlk8erfqq0.webp" alt="image"></p><p>首页效果图：</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.1c75d8g1udhc.webp" alt="image"></p><h3 id="无截取符" tabindex="-1">无截取符 <a class="header-anchor" href="#无截取符" aria-label="Permalink to &quot;无截取符&quot;">​</a></h3><p>没有使用 <code>&lt;!-- more --&gt;</code> 截取字符的文章，Keep 主题将自动截取前 168 个字符，超出部分用 <code>...</code> 表示。 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2c5cyiuprsro.webp" alt="image"></p>`,15);function D(F,C,b,g,u,h){const e=r("Badge");return l(),o("div",null,[i,a("h2",d,[s("配置文章时效提示 "),t(e,{type:"tip",text:"v3.6.0"}),s(),y]),m])}const f=p(c,[["render",D]]);export{k as __pageData,f as default};
