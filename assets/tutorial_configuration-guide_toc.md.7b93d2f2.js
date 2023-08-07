import{_ as n,v as l,b as t,F as a,L as e,t as c,R as s,M as p}from"./chunks/framework.70afa331.js";const i="/assets/img-5.ac98ff33.png",r="/assets/img-6.9936612f.png",x=JSON.parse('{"title":"toc","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/configuration-guide/toc.md","filePath":"tutorial/configuration-guide/toc.md","lastUpdated":1691404582000}'),d={name:"tutorial/configuration-guide/toc.md"},m=s(`<h1 id="toc" tabindex="-1">toc <a class="header-anchor" href="#toc" aria-label="Permalink to &quot;toc&quot;">​</a></h1><p><code>toc</code> 用于设置文章 TOC 目录结构，非常实用的功能，可以快速查看文章目录结构和跳转指定位置，建议开启。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">toc</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">number</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">expand_all</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">init_open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h2><p><code>enable</code> 是否开启 TOC，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>enable: false</code></p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.34q0he0wtq20.webp" alt="image"></p></li><li><p><code>enable: true</code></p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.cg4jf4orf4w.webp" alt="image"></p></li></ul><h2 id="number" tabindex="-1">number <a class="header-anchor" href="#number" aria-label="Permalink to &quot;number&quot;">​</a></h2><p><code>number</code> 给 TOC 目录结构自动加上数字编号，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>number: false</code><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.1s56z1g7x8yo.png" alt="image"></p></li><li><p><code>number: true</code><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4esu3elyz600.png" alt="image"></p></li></ul><h2 id="expand-all" tabindex="-1">expand_all <a class="header-anchor" href="#expand-all" aria-label="Permalink to &quot;expand_all&quot;">​</a></h2><p><code>expand_all</code> 展开所有目录结构，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><code>expand_all: true</code> 自动展开所有的目录结构</li><li><code>expand_all: false</code> 边滚动页面边展开对应的位置的目录</li></ul><h2 id="init-open" tabindex="-1">init_open <a class="header-anchor" href="#init-open" aria-label="Permalink to &quot;init_open&quot;">​</a></h2><p><code>init_open</code> 打开文章页时是否自动打开 TOC 目录结构，可选值：<code>true</code> 或 <code>false</code>。</p>`,14),u={id:"layout",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#layout","aria-label":'Permalink to "layout <Badge type="tip" text="v3.7.0" />"'},"​",-1),g=s('<p><code>layout</code> 用于设置 TOC 目录结构模块的布局位置，默认为 right (右侧)，可选值：<code>left</code> 或 <code>right</code>。</p><ul><li><p><code>right</code><img src="'+i+'" alt="img.png"></p></li><li><p><code>left</code><img src="'+r+'" alt="img.png"></p></li></ul>',2);function b(y,C,f,_,F,A){const o=p("Badge");return l(),t("div",null,[m,a("h2",u,[e("layout "),c(o,{type:"tip",text:"v3.7.0"}),e(),h]),g])}const q=n(d,[["render",b]]);export{x as __pageData,q as default};
