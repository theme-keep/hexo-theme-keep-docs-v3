import{_ as l,v as t,b as p,F as s,L as a,t as n,R as o,M as r}from"./chunks/framework.70afa331.js";const O=JSON.parse('{"title":"style","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/configuration-guide/style.md","filePath":"tutorial/configuration-guide/style.md","lastUpdated":1691997206000}'),c={name:"tutorial/configuration-guide/style.md"},i=o(`<p>配置指南的目录结构跟主题配置文件 <code>_config.yml</code> 的配置项保持一一对应。</p><h1 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h1><p><code>style</code> 配置项用于自定义配置 Keep 主题的样式，通过这里你可以配置出属于你自己独一无二的 Keep 主题博客站点。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">primary_color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#0066cc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/logo.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">favicon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/logo.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">avatar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/avatar.svg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">first_screen</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">header_transparent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">background_img</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/bg.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep writing and Keep loving.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hitokoto</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">scroll</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">progress_bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">percent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="primary-color" tabindex="-1">primary_color <a class="header-anchor" href="#primary-color" aria-label="Permalink to &quot;primary_color&quot;">​</a></h2><p><code>primary_color</code> 用于设置博客站点主题色，支持 <strong>十六进制</strong>、<strong>rgb</strong> 和 <strong>rgba</strong> 颜色格式。<br> 例如：<code>#0066cc</code>、<code>rgb(0, 102, 204)</code> 和 <code>rgba(0, 102, 204, 0.8)</code>、。</p><p>获取配色推荐：</p><ul><li><a href="https://flatuicolors.com" target="_blank" rel="noreferrer">Flat UI Colors</a></li><li><a href="https://www.bootcss.com/p/websafecolors" target="_blank" rel="noreferrer">Web 安全色</a></li><li><a href="https://color.adobe.com/zh/create/color-wheel" target="_blank" rel="noreferrer">Adobe Color CC</a></li></ul><p>示例：</p><ul><li><p>蓝色主题 <code>#0066cc</code></p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.24k0v2zazork.webp" alt="image"></p></li><li><p>红色主题 <code>#c0392b</code></p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.72h3v9iavl00.webp" alt="image"></p></li></ul><h2 id="logo" tabindex="-1">logo <a class="header-anchor" href="#logo" aria-label="Permalink to &quot;logo&quot;">​</a></h2><p><code>logo</code> 用于设置博客站点头部 LOGO，如下图。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4p41ncfo04c0.webp" alt="image"></p><br><hr><p><strong>关于图片的设置：</strong></p><p>你可以使用 <strong>本地图片</strong>（即存储 <code>keep/source/images/</code> 路径下的图片）或 <strong>图片外链 URL</strong>（适用于使用 NPM 安装的 Keep主题）。</p><ul><li><p>本地图片</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/logo.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>图片外链（推荐）</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://cdn.staticaly.com/gh/XPoet/image-hosting@master/hexo-theme-keep/logo.7ihwqpf2atg0.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">图床推荐</p><p>大家可以使用免费的图床工具 <strong>PicX</strong> 来存储自己的图片并生成图片外链。<br> PicX: <a href="https://github.com/XPoet/picx" target="_blank" rel="noreferrer">https://github.com/XPoet/picx</a></p></div></li></ul><p>往下的 <code>favicon</code>、<code>avatar</code>、<code>favicon</code>、<code>first_screen.background_img</code> 等配置项的图片设置均使用以上方式。</p><hr><h2 id="favicon" tabindex="-1">favicon <a class="header-anchor" href="#favicon" aria-label="Permalink to &quot;favicon&quot;">​</a></h2><p><code>favicon</code> 用于设置博客站点 favicon 图标，如下图。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6ryeww1tcpk0.png" alt="image"></p><ul><li><p>本地图片</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">favicon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/favicon.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>图片外链（推荐）</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">favicon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://cdn.staticaly.com/gh/XPoet/image-hosting@master/hexo-theme-keep/logo.7ihwqpf2atg0.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h2 id="avatar" tabindex="-1">avatar <a class="header-anchor" href="#avatar" aria-label="Permalink to &quot;avatar&quot;">​</a></h2><p><code>avatar</code> 用于设置博客站点<strong>作者头像</strong>，将显示在文章内容页，如下图。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.56lx3nrzryk0.png" alt="image"></p><ul><li><p>本地图片</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">avatar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/avatar.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>图片外链（推荐）</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">avatar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://cdn.staticaly.com/gh/XPoet/image-hosting@master/hexo-theme-keep/logo.7ihwqpf2atg0.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul>`,28),d={id:"font-size",tabindex:"-1"},g=s("s",null,"font_size",-1),m=s("a",{class:"header-anchor",href:"#font-size","aria-label":'Permalink to "~~font_size~~ <Badge type="danger" text="v3.7.1 已废弃" />"'},"​",-1),h=o(`<div class="danger custom-block"><p class="custom-block-title">📢 注意</p><p><strong><code>font_size</code> 配置项在 v3.7.1 已废弃。如有需要，请使用 Keep 主题的 <a href="./inject.html">inject 功能</a>。</strong></p></div><p><code>font_size</code> 设置博客站点的初始<strong>字体大小</strong>，单位必须为 <strong><code>px</code></strong> 。该配置项可以不填，如果不填将使用 Keep 主题内置的初始字体大小 <code>15.2px</code> 。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 字体设置示例</span></span>
<span class="line"><span style="color:#F07178;">font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">18px</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),y={id:"font-family",tabindex:"-1"},b=s("s",null,"font_family",-1),u=s("a",{class:"header-anchor",href:"#font-family","aria-label":'Permalink to "~~font_family~~ <Badge type="danger" text="v3.7.1 已废弃" />"'},"​",-1),C=o(`<div class="danger custom-block"><p class="custom-block-title">📢 注意</p><p><strong><code>font_family</code> 配置项在 v3.7.1 已废弃。如有需要，请使用 Keep 主题的 <a href="./inject.html">inject 功能</a>。</strong></p></div><p><code>font_family</code> 设置博客站点的<strong>字体样式</strong>，该配置项可以不填，如果不填将使用 Keep 主题内置的字体样式。</p><blockquote><p><code>font_family</code> 同 CSS 设置 <code>font-family</code> 规则一致</p></blockquote><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 设置：楷体</span></span>
<span class="line"><span style="color:#F07178;">font_family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">STKaiti</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置：宋体，黑体</span></span>
<span class="line"><span style="color:#F07178;">font_family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">STSong, STHeiti</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>楷体字体示例：</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5eu01o19fe40.webp" alt="image"></p></li><li><p>宋体字体示例：</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4xotu9k3e7w0.webp" alt="image"></p></li></ul>`,5),v={id:"hover",tabindex:"-1"},f=s("s",null,"hover",-1),D=s("a",{class:"header-anchor",href:"#hover","aria-label":'Permalink to "~~hover~~ <Badge type="danger" text="v3.7.2 已废弃" />"'},"​",-1),k=o('<div class="danger custom-block"><p class="custom-block-title">📢 注意</p><p><strong><code>hover</code> 配置项在 v3.7.2 已废弃。如有需要，请使用 Keep 主题的 <a href="./inject.html">inject 功能</a>。</strong></p></div><p><code>hover</code> 用于设置<strong>鼠标悬浮时的样式</strong>（例如悬浮在主页文章模块、TOC 目录模块、按钮等），可分别开启 <code>shadow</code> 和 <code>scale</code> 效果。</p><h3 id="shadow" tabindex="-1">shadow <a class="header-anchor" href="#shadow" aria-label="Permalink to &quot;shadow&quot;">​</a></h3><p><code>shadow</code> 设置<strong>阴影</strong>加重效果，可选值：<code>true</code> 或 <code>false</code>。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5jx1ng56lw00.webp" alt="image"></p><h3 id="scale" tabindex="-1">scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;scale&quot;">​</a></h3><p><code>scale</code> 设置<strong>缩放</strong>效果，可选值：<code>true</code> 或 <code>false</code>。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2urwe6msgqw0.webp" alt="image"></p><h2 id="first-screen" tabindex="-1">first_screen <a class="header-anchor" href="#first-screen" aria-label="Permalink to &quot;first_screen&quot;">​</a></h2><p><code>first_screen</code> 是 Keep 主题 <code>v3.0.0</code> 新增的<strong>首屏模块</strong>，开启后将显示在博客站点首页的第一视野（故称<strong>首屏</strong>）。</p><h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 设置是否<strong>开启首屏</strong>，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>true</code> <strong>开启</strong>首屏 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.q7zneq9q3hc.png" alt="image"></p></li><li><p><code>false</code> <strong>不开启</strong>首屏 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.56v9ujr5x000.png" alt="image"></p></li></ul><h3 id="header-transparent" tabindex="-1">header_transparent <a class="header-anchor" href="#header-transparent" aria-label="Permalink to &quot;header_transparent&quot;">​</a></h3><p><code>header_transparent</code> 用于在首屏模块开启状态下<strong>设置头部是否透明</strong>，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>header_transparent: true</code> <strong>透明</strong>状态</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.66ssn9kmo080.webp" alt="image"></p></li><li><p><code>header_transparent: false</code> <strong>不透明</strong>状态</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5buyyazapzk0.webp" alt="image"></p></li></ul><h3 id="background-img" tabindex="-1">background_img <a class="header-anchor" href="#background-img" aria-label="Permalink to &quot;background_img&quot;">​</a></h3><p><code>background_img</code> 设置首屏背景图片，可使用 <strong>本地图片</strong> 或 <strong>图片外链 URL</strong>。</p><blockquote><p>这里建议大家的高清背景图片用 <a href="https://tinypng.com/" target="_blank" rel="noreferrer">TinyPNG</a> 压缩一下后再使用，可有效提高页面加载速度。</p></blockquote><ul><li><p>本地图片</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">background_img</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/background.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>图片外链（推荐）</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">background_img</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://cdn.staticaly.com/gh/XPoet/image-hosting@master/hexo-theme-keep/logo.7ihwqpf2atg0.svg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h3><p><code>description</code> 设置首屏描述，支持设置两行，换行符 <strong><code>||</code></strong>。</p><p>设置两行的首屏描述配置示例：</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">黄色的森林分出两条路 || 我选择人迹更少的那一条，从此决定我一生的道路。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p><strong>一行</strong>的首屏描述 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5k4byjhkgl40.webp" alt="image"></p></li><li><p><strong>两行</strong>的首屏描述 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.38bhrom3y780.webp" alt="image"></p></li></ul>',25),_={id:"font-color",tabindex:"-1"},F=s("s",null,"font_color",-1),A=s("a",{class:"header-anchor",href:"#font-color","aria-label":'Permalink to "~~font_color~~ <Badge type="danger" text="v3.7.2 已废弃" />"'},"​",-1),w=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"📢 注意"),s("p",null,[s("strong",null,[s("code",null,"font_color"),a(" 配置项在 v3.7.2 已废弃。如有需要，请使用 Keep 主题的 "),s("a",{href:"./inject.html"},"inject 功能"),a("。")])])],-1),P=s("p",null,[s("code",null,"font_color"),a(" 设置首屏描述的字体颜色，可以为空，不填则使用 Keep 主题内置颜色。")],-1),x={id:"hitokoto",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#hitokoto","aria-label":'Permalink to "hitokoto <Badge type="tip" text="v3.4.6" />"'},"​",-1),X=o('<p><code>hitokoto</code> 是 Keep 主题 <code>v3.4.6</code>新增的首屏描述<strong>一言</strong>功能，可选值：<code>true</code> 或 <code>false</code>。</p><p>开启之后，在<strong>每次进入博客站点</strong>或<strong>刷新页面</strong>都会自动呈现出不一样的首屏描述。</p><p>一言案例展示：</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.7ijvmwbpz540.webp" alt="image"></p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4iwc2wjcvgc0.webp" alt="image"></p><h2 id="scroll" tabindex="-1">scroll <a class="header-anchor" href="#scroll" aria-label="Permalink to &quot;scroll&quot;">​</a></h2><p><code>scroll</code> 设置页面滚动时的样式。</p><h3 id="progress-bar" tabindex="-1">progress_bar <a class="header-anchor" href="#progress-bar" aria-label="Permalink to &quot;progress_bar&quot;">​</a></h3><p><code>progress_bar</code> 页面滚动时在网站<strong>顶部</strong>显示滚动<strong>进度条</strong>，可选值：<code>true</code> 或 <code>false</code>。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4wg82jblexi0.png" alt="image"></p><h3 id="percent" tabindex="-1">percent <a class="header-anchor" href="#percent" aria-label="Permalink to &quot;percent&quot;">​</a></h3><p><code>percent</code> 页面滚动时在<strong>右下角</strong>工具栏显示滚动<strong>百分比</strong>，可选值：<code>true</code> 或 <code>false</code>。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.673tmti465c0.png" alt="image"></p><div class="tip custom-block"><p class="custom-block-title">小提示</p><p>鼠标移到<strong>百分比</strong>按钮处会显示向上箭头图标，点击即可<strong>回到顶部</strong>。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2hx7tuokh340.webp" alt="image"></p></div>',14);function E(z,K,j,B,S,T){const e=r("Badge");return t(),p("div",null,[i,s("h2",d,[g,a(),n(e,{type:"danger",text:"v3.7.1 已废弃"}),a(),m]),h,s("h2",y,[b,a(),n(e,{type:"danger",text:"v3.7.1 已废弃"}),a(),u]),C,s("h2",v,[f,a(),n(e,{type:"danger",text:"v3.7.2 已废弃"}),a(),D]),k,s("h3",_,[F,a(),n(e,{type:"danger",text:"v3.7.2 已废弃"}),a(),A]),w,P,s("h3",x,[a("hitokoto "),n(e,{type:"tip",text:"v3.4.6"}),a(),q]),X])}const R=l(c,[["render",E]]);export{O as __pageData,R as default};
