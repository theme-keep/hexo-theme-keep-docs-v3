import{_ as s,c as a,o as e,a as n}from"./app.fda64560.js";const y=JSON.parse('{"title":"style","description":"","frontmatter":{},"headers":[{"level":2,"title":"primary_color","slug":"primary-color","link":"#primary-color","children":[]},{"level":2,"title":"logo","slug":"logo","link":"#logo","children":[]},{"level":2,"title":"favicon","slug":"favicon","link":"#favicon","children":[]},{"level":2,"title":"avatar","slug":"avatar","link":"#avatar","children":[]},{"level":2,"title":"font_size","slug":"font-size","link":"#font-size","children":[]},{"level":2,"title":"font_family","slug":"font-family","link":"#font-family","children":[]},{"level":2,"title":"hover","slug":"hover","link":"#hover","children":[{"level":3,"title":"shadow","slug":"shadow","link":"#shadow","children":[]},{"level":3,"title":"scale","slug":"scale","link":"#scale","children":[]}]},{"level":2,"title":"first_screen","slug":"first-screen","link":"#first-screen","children":[{"level":3,"title":"enable","slug":"enable","link":"#enable","children":[]},{"level":3,"title":"header_transparent","slug":"header-transparent","link":"#header-transparent","children":[]},{"level":3,"title":"background_img","slug":"background-img","link":"#background-img","children":[]},{"level":3,"title":"description","slug":"description","link":"#description","children":[]},{"level":3,"title":"font_color","slug":"font-color","link":"#font-color","children":[]},{"level":3,"title":"hitokoto","slug":"hitokoto","link":"#hitokoto","children":[]}]},{"level":2,"title":"scroll","slug":"scroll","link":"#scroll","children":[{"level":3,"title":"progress_bar","slug":"progress-bar","link":"#progress-bar","children":[]},{"level":3,"title":"percent","slug":"percent","link":"#percent","children":[]}]}],"relativePath":"tutorial/configuration-guide/style.md","lastUpdated":1666939503000}'),l={name:"tutorial/configuration-guide/style.md"},o=n(`<p>Keep \u4E3B\u9898\u56FE\u6587\u914D\u7F6E\u6307\u5357\uFF0C\u76EE\u5F55\u7ED3\u6784\u8DDF\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6 <code>_config.yml</code> \u7684\u914D\u7F6E\u9879\u4FDD\u6301\u4E00\u4E00\u5BF9\u5E94\uFF0C\u65B9\u4FBF\u5927\u5BB6\u5BF9\u7167\u4F7F\u7528\u3002</p><h1 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h1><p><code>style</code> \u914D\u7F6E\u9879\u7528\u4E8E\u81EA\u5B9A\u4E49\u914D\u7F6E Keep \u4E3B\u9898\u7684\u6837\u5F0F\uFF0C\u901A\u8FC7\u8FD9\u91CC\u4F60\u53EF\u4EE5\u914D\u7F6E\u51FA\u5C5E\u4E8E\u4F60\u81EA\u5DF1\u72EC\u4E00\u65E0\u4E8C\u7684 Keep \u4E3B\u9898\u535A\u5BA2\u7AD9\u70B9\u3002</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">primary_color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#0066cc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/logo.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">favicon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/logo.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">avatar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/avatar.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">font_size</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">font_family</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hover</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">first_screen</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">header_transparent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">background_img</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/bg.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep writing and Keep loving.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">font_color</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hitokoto</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">scroll</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">progress_bar</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">percent</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="primary-color" tabindex="-1">primary_color <a class="header-anchor" href="#primary-color" aria-hidden="true">#</a></h2><p><code>primary_color</code> \u7528\u4E8E\u8BBE\u7F6E\u535A\u5BA2\u7AD9\u70B9\u4E3B\u9898\u8272\uFF0C\u652F\u6301 <strong>\u5341\u516D\u8FDB\u5236</strong>\u3001<strong>rgb</strong> \u548C <strong>rgba</strong> \u989C\u8272\u683C\u5F0F\u3002<br> \u4F8B\u5982\uFF1A<code>#0066cc</code>\u3001<code>rgb(0, 102, 204)</code> \u548C <code>rgba(0, 102, 204, 0.8)</code>\u3001\u3002</p><p>\u83B7\u53D6\u914D\u8272\u63A8\u8350\uFF1A</p><ul><li><a href="https://flatuicolors.com" target="_blank" rel="noreferrer">Flat UI Colors</a></li><li><a href="https://www.bootcss.com/p/websafecolors" target="_blank" rel="noreferrer">Web \u5B89\u5168\u8272</a></li><li><a href="https://color.adobe.com/zh/create/color-wheel" target="_blank" rel="noreferrer">Adobe Color CC</a></li></ul><h2 id="logo" tabindex="-1">logo <a class="header-anchor" href="#logo" aria-hidden="true">#</a></h2><p><code>logo</code> \u7528\u4E8E\u8BBE\u7F6E\u535A\u5BA2\u7AD9\u70B9\u5934\u90E8 LOGO\uFF0C\u5982\u4E0B\u56FE\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4p41ncfo04c0.webp" alt="image"></p><h2 id="favicon" tabindex="-1">favicon <a class="header-anchor" href="#favicon" aria-hidden="true">#</a></h2><p><code>favicon</code> \u7528\u4E8E\u8BBE\u7F6E\u535A\u5BA2\u7AD9\u70B9 favicon \u56FE\u6807\uFF0C\u5982\u4E0B\u56FE\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6ryeww1tcpk0.png" alt="image"></p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <strong>\u672C\u5730\u56FE\u7247</strong>\uFF08\u5373\u5B58\u50A8 <code>keep/source/images/</code> \u8DEF\u5F84\u4E0B\u7684\u56FE\u7247\uFF09\u6216 <strong>\u56FE\u7247\u5916\u94FE URL</strong>\u3002</p><ul><li><p>\u672C\u5730\u56FE\u7247</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">favicon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/logo.svg</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li><li><p>\u56FE\u7247\u5916\u94FE\uFF08\u63A8\u8350\uFF09</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">favicon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://cdn.staticaly.com/gh/XPoet/image-hosting@master/hexo-theme-keep/logo.7ihwqpf2atg0.svg</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">\u56FE\u5E8A\u63A8\u8350</p><p>\u5927\u5BB6\u53EF\u4EE5\u4F7F\u7528\u514D\u8D39\u7684 PicX \u56FE\u5E8A\u5DE5\u5177\u6765\u5B58\u50A8\u81EA\u5DF1\u7684\u56FE\u7247\u5E76\u751F\u6210\u56FE\u7247\u5916\u94FE\u3002<br> PicX\uFF1A<a href="https://github.com/XPoet/picx" target="_blank" rel="noreferrer">https://github.com/XPoet/picx</a></p></div></li></ul><h2 id="avatar" tabindex="-1">avatar <a class="header-anchor" href="#avatar" aria-hidden="true">#</a></h2><p><code>avatar</code> \u7528\u4E8E\u8BBE\u7F6E\u535A\u5BA2\u7AD9\u70B9<strong>\u4F5C\u8005\u5934\u50CF</strong>\uFF0C\u5C06\u663E\u793A\u5728\u6587\u7AE0\u5185\u5BB9\u9875\uFF0C\u5982\u4E0B\u56FE\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.56lx3nrzryk0.png" alt="image"></p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <strong>\u672C\u5730\u56FE\u7247</strong>\uFF08\u5373\u5B58\u50A8 <code>keep/source/images/</code> \u8DEF\u5F84\u4E0B\u7684\u56FE\u7247) \u6216 <strong>\u56FE\u7247\u5916\u94FE URL</strong>\u3002</p><ul><li><p>\u672C\u5730\u56FE\u7247</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">avatar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/images/avatar.svg</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li><li><p>\u56FE\u7247\u5916\u94FE\uFF08\u63A8\u8350\uFF09</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">avatar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://cdn.staticaly.com/gh/XPoet/image-hosting@master/hexo-theme-keep/logo.7ihwqpf2atg0.svg</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li></ul><h2 id="font-size" tabindex="-1">font_size <a class="header-anchor" href="#font-size" aria-hidden="true">#</a></h2><p><code>font_size</code> \u8BBE\u7F6E\u535A\u5BA2\u7AD9\u70B9\u7684\u521D\u59CB<strong>\u5B57\u4F53\u5927\u5C0F</strong>\uFF0C\u5355\u4F4D\u5FC5\u987B\u4E3A <strong><code>px</code></strong> \u3002\u8BE5\u914D\u7F6E\u9879\u53EF\u4EE5\u4E0D\u586B\uFF0C\u5982\u679C\u4E0D\u586B\u5C06\u4F7F\u7528 Keep \u4E3B\u9898\u5185\u7F6E\u7684\u521D\u59CB\u5B57\u4F53\u5927\u5C0F <code>15.2px</code> \u3002</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5B57\u4F53\u8BBE\u7F6E\u793A\u4F8B</span></span>
<span class="line"><span style="color:#F07178;">font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">18px</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="font-family" tabindex="-1">font_family <a class="header-anchor" href="#font-family" aria-hidden="true">#</a></h2><p><code>font_family</code> \u8BBE\u7F6E\u535A\u5BA2\u7AD9\u70B9\u7684<strong>\u5B57\u4F53\u6837\u5F0F</strong>\uFF0C\u8BE5\u914D\u7F6E\u9879\u53EF\u4EE5\u4E0D\u586B\uFF0C\u5982\u679C\u4E0D\u586B\u5C06\u4F7F\u7528 Keep \u4E3B\u9898\u5185\u7F6E\u7684\u5B57\u4F53\u6837\u5F0F\u3002</p><blockquote><p>\u8DDF CSS \u8BBE\u7F6E font-family \u89C4\u5219\u4E00\u81F4</p></blockquote><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\uFF1A\u6977\u4F53</span></span>
<span class="line"><span style="color:#F07178;">font_family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">STKaiti</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\uFF1A\u5B8B\u4F53\uFF0C\u9ED1\u4F53</span></span>
<span class="line"><span style="color:#F07178;">font_family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">STSong, STHeiti</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>\u6977\u4F53\u5B57\u4F53\u793A\u4F8B\uFF1A</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5eu01o19fe40.webp" alt="image"></p></li><li><p>\u5B8B\u4F53\u5B57\u4F53\u793A\u4F8B\uFF1A</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4xotu9k3e7w0.webp" alt="image"></p></li></ul><h2 id="hover" tabindex="-1">hover <a class="header-anchor" href="#hover" aria-hidden="true">#</a></h2><p><code>hover</code> \u7528\u4E8E\u8BBE\u7F6E<strong>\u9F20\u6807\u60AC\u6D6E\u65F6\u7684\u6837\u5F0F</strong>\uFF08\u4F8B\u5982\u60AC\u6D6E\u5728\u4E3B\u9875\u6587\u7AE0\u6A21\u5757\u3001TOC \u76EE\u5F55\u6A21\u5757\u3001\u6309\u94AE\u7B49\uFF09\uFF0C\u53EF\u5206\u522B\u5F00\u542F <code>shadow</code> \u548C <code>scale</code> \u6548\u679C\u3002</p><h3 id="shadow" tabindex="-1">shadow <a class="header-anchor" href="#shadow" aria-hidden="true">#</a></h3><p><code>shadow</code> \u8BBE\u7F6E<strong>\u9634\u5F71</strong>\u52A0\u91CD\u6548\u679C\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5jx1ng56lw00.webp" alt="image"></p><h3 id="scale" tabindex="-1">scale <a class="header-anchor" href="#scale" aria-hidden="true">#</a></h3><p><code>scale</code> \u8BBE\u7F6E<strong>\u7F29\u653E</strong>\u6548\u679C\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2urwe6msgqw0.webp" alt="image"></p><h2 id="first-screen" tabindex="-1">first_screen <a class="header-anchor" href="#first-screen" aria-hidden="true">#</a></h2><p><code>first_screen</code> \u662F Keep \u4E3B\u9898 <code>v3.0.0</code> \u65B0\u589E\u7684<strong>\u9996\u5C4F\u6A21\u5757</strong>\uFF0C\u5F00\u542F\u540E\u5C06\u663E\u793A\u5728\u535A\u5BA2\u7AD9\u70B9\u9996\u9875\u7684\u7B2C\u4E00\u89C6\u91CE\uFF08\u6545\u79F0<strong>\u9996\u5C4F</strong>\uFF09\u3002</p><h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-hidden="true">#</a></h3><p><code>enable</code> \u8BBE\u7F6E\u662F\u5426<strong>\u5F00\u542F\u9996\u5C4F</strong>\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002</p><ul><li><p><code>true</code> <strong>\u5F00\u542F</strong>\u9996\u5C4F <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.q7zneq9q3hc.png" alt="image"></p></li><li><p><code>false</code> <strong>\u4E0D\u5F00\u542F</strong>\u9996\u5C4F <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.56v9ujr5x000.png" alt="image"></p></li></ul><h3 id="header-transparent" tabindex="-1">header_transparent <a class="header-anchor" href="#header-transparent" aria-hidden="true">#</a></h3><p><code>header_transparent</code> \u7528\u4E8E\u5728\u9996\u5C4F\u6A21\u5757\u5F00\u542F\u72B6\u6001\u4E0B<strong>\u8BBE\u7F6E\u5934\u90E8\u662F\u5426\u900F\u660E</strong>\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002</p><ul><li><p><code>header_transparent: true</code> <strong>\u900F\u660E</strong>\u72B6\u6001</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.66ssn9kmo080.webp" alt="image"></p></li><li><p><code>header_transparent: false</code> <strong>\u4E0D\u900F\u660E</strong>\u72B6\u6001</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5buyyazapzk0.webp" alt="image"></p></li></ul><h3 id="background-img" tabindex="-1">background_img <a class="header-anchor" href="#background-img" aria-hidden="true">#</a></h3><p><code>background_img</code> \u8BBE\u7F6E\u9996\u5C4F\u80CC\u666F\u56FE\u7247\uFF0C\u53EF\u4F7F\u7528 <strong>\u672C\u5730\u56FE\u7247</strong> \u6216 <strong>\u56FE\u7247\u5916\u94FE URL</strong>\u3002</p><blockquote><p>\u8FD9\u91CC\u5EFA\u8BAE\u5927\u5BB6\u7684\u9AD8\u6E05\u80CC\u666F\u56FE\u7247\u7528 <a href="https://tinypng.com/" target="_blank" rel="noreferrer">TinyPNG</a> \u538B\u7F29\u4E00\u4E0B\u540E\u518D\u4F7F\u7528\uFF0C\u53EF\u6709\u6548\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\u3002</p></blockquote><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h3><p><code>description</code> \u8BBE\u7F6E\u9996\u5C4F\u63CF\u8FF0\uFF0C\u652F\u6301\u8BBE\u7F6E\u4E24\u884C\uFF0C\u6362\u884C\u7B26 <strong><code>||</code></strong>\u3002</p><p>\u8BBE\u7F6E\u4E24\u884C\u7684\u9996\u5C4F\u63CF\u8FF0\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u9EC4\u8272\u7684\u68EE\u6797\u5206\u51FA\u4E24\u6761\u8DEF || \u6211\u9009\u62E9\u4EBA\u8FF9\u66F4\u5C11\u7684\u90A3\u4E00\u6761\uFF0C\u4ECE\u6B64\u51B3\u5B9A\u6211\u4E00\u751F\u7684\u9053\u8DEF\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><p><strong>\u4E00\u884C</strong>\u7684\u9996\u5C4F\u63CF\u8FF0 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5k4byjhkgl40.webp" alt="image"></p></li><li><p><strong>\u4E24\u884C</strong>\u7684\u9996\u5C4F\u63CF\u8FF0 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.38bhrom3y780.webp" alt="image"></p></li></ul><h3 id="font-color" tabindex="-1">font_color <a class="header-anchor" href="#font-color" aria-hidden="true">#</a></h3><p><code>font_color</code> \u8BBE\u7F6E\u9996\u5C4F\u63CF\u8FF0\u7684\u5B57\u4F53\u989C\u8272\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\uFF0C\u4E0D\u586B\u5219\u4F7F\u7528 Keep \u4E3B\u9898\u5185\u7F6E\u989C\u8272\u3002</p><h3 id="hitokoto" tabindex="-1">hitokoto <a class="header-anchor" href="#hitokoto" aria-hidden="true">#</a></h3><p><code>hitokoto</code> \u662F Keep \u4E3B\u9898 <code>v3.4.6</code>\u65B0\u589E\u7684\u9996\u5C4F\u63CF\u8FF0<strong>\u4E00\u8A00</strong>\u529F\u80FD\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002<br> \u5F00\u542F\u4E4B\u540E\uFF0C\u5728<strong>\u6BCF\u6B21\u8FDB\u5165\u535A\u5BA2\u7AD9\u70B9</strong>\u6216<strong>\u5237\u65B0\u9875\u9762</strong>\u90FD\u4F1A\u5448\u73B0\u51FA\u4E0D\u4E00\u6837\u7684\u9996\u5C4F\u63CF\u8FF0\u3002</p><p>\u4E00\u8A00\u6848\u4F8B\u5C55\u793A\uFF1A</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.7ijvmwbpz540.webp" alt="image"></p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4iwc2wjcvgc0.webp" alt="image"></p><h2 id="scroll" tabindex="-1">scroll <a class="header-anchor" href="#scroll" aria-hidden="true">#</a></h2><p><code>scroll</code> \u8BBE\u7F6E\u9875\u9762\u6EDA\u52A8\u65F6\u7684\u6837\u5F0F\u3002</p><h3 id="progress-bar" tabindex="-1">progress_bar <a class="header-anchor" href="#progress-bar" aria-hidden="true">#</a></h3><p><code>progress_bar</code> \u9875\u9762\u6EDA\u52A8\u65F6\u5728\u7F51\u7AD9<strong>\u9876\u90E8</strong>\u663E\u793A\u6EDA\u52A8<strong>\u8FDB\u5EA6\u6761</strong>\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4wg82jblexi0.png" alt="image"></p><h3 id="percent" tabindex="-1">percent <a class="header-anchor" href="#percent" aria-hidden="true">#</a></h3><p><code>percent</code> \u9875\u9762\u6EDA\u52A8\u65F6\u5728<strong>\u53F3\u4E0B\u89D2</strong>\u5DE5\u5177\u680F\u663E\u793A\u6EDA\u52A8<strong>\u767E\u5206\u6BD4</strong>\uFF0C\u53EF\u9009\u503C\uFF1A<code>true</code> \u6216 <code>false</code>\u3002</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.673tmti465c0.png" alt="image"></p><div class="tip custom-block"><p class="custom-block-title">\u5C0F\u63D0\u793A</p><p>\u9F20\u6807\u79FB\u5230<strong>\u767E\u5206\u6BD4</strong>\u6309\u94AE\u5904\u4F1A\u663E\u793A\u5411\u4E0A\u7BAD\u5934\u56FE\u6807\uFF0C\u70B9\u51FB\u5373\u53EF<strong>\u56DE\u5230\u9876\u90E8</strong>\u3002</p></div><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.2hx7tuokh340.webp" alt="image"></p>`,70),p=[o];function r(t,c,i,d,g,h){return e(),a("div",null,p)}const b=s(l,[["render",r]]);export{y as __pageData,b as default};
