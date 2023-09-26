import{_ as o,v as p,b as t,F as s,L as a,t as n,R as l,M as r}from"./chunks/framework.70afa331.js";const c="/assets/img-5.08f2f452.png",i="/assets/img-3.c2b46ba4.png",d="/assets/img-6.5dc74f85.png",y="/assets/img-7.a3fbc92f.png",u="/assets/img-8.289dfe63.png",b="/assets/img-9.a00afcf2.png",m="/assets/img-10.adb4c9e6.png",h="/assets/img-11.d6c34d2f.png",D="/assets/img-12.8aad3917.png",B="/assets/img-1.e8d615c3.png",g="/assets/img-2.de931eb7.png",_="/assets/img-4.eb64e90e.png",N=JSON.parse('{"title":"footer","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/configuration-guide/footer.md","filePath":"tutorial/configuration-guide/footer.md","lastUpdated":1695718894000}'),F={name:"tutorial/configuration-guide/footer.md"},f=l(`<h1 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;footer&quot;">​</a></h1><p><code>footer</code> 用于配置网站底部的信息展示。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">since</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2020</span><span style="color:#BABED8;">           </span><span style="color:#676E95;font-style:italic;"># The starting year of your website, Can be null</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">word_count</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">     </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">icp</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">                    </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">record_code</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">                     </span><span style="color:#676E95;font-style:italic;"># ICP record code of your website</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://beian.miit.gov.cn</span><span style="color:#BABED8;">   </span><span style="color:#676E95;font-style:italic;"># Your ICP link url, Can be null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">site_deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">github</span><span style="color:#BABED8;">     </span><span style="color:#676E95;font-style:italic;"># Option values: github | vercel | netlify | gitee | aliyun | tencent_cloud | upyun</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">                 </span><span style="color:#676E95;font-style:italic;"># Your deployment provider url, Can be null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">shields_style</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">custom</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">link_url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># Your link url, Can be null</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">img_url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">         </span><span style="color:#676E95;font-style:italic;"># Shields image url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="since" tabindex="-1">since <a class="header-anchor" href="#since" aria-label="Permalink to &quot;since&quot;">​</a></h2><p><code>since</code> 设置网站起始年份，可以为空，不填则自动使用当前年份。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">since</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2020</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+c+'" alt="image"></p>',7),E={id:"word-count",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#word-count","aria-label":'Permalink to "word_count <Badge type="tip" text="v3.7.0" />"'},"​",-1),v=s("p",null,[s("code",null,"word_count"),a(" 启用全站字数统计，可选值："),s("code",null,"true"),a(" 或 "),s("code",null,"false"),a("。")],-1),C=s("p",null,[s("img",{src:i,alt:"image"})],-1),x={id:"icp",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#icp","aria-label":'Permalink to "icp <Badge type="tip" text="v3.7.0" />"'},"​",-1),q=l('<h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 是否开启显示网站 ICP 备案编号，可选值：<code>true</code> 或 <code>false</code>。</p><h3 id="record-code" tabindex="-1">record_code <a class="header-anchor" href="#record-code" aria-label="Permalink to &quot;record_code&quot;">​</a></h3><p><code>record_code</code> 配置 ICP 备案编号，只在 <code>enable: true</code> 时才生效。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">record_code</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">粤 ICP 证 00000001 号</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+d+'" alt="image"></p><h3 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;url&quot;">​</a></h3><p><code>url</code> 配置 ICP 备案编号链接，可以为空。</p>',8),P={id:"site-deploy",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#site-deploy","aria-label":'Permalink to "site_deploy <Badge type="tip" text="v3.6.0" />"'},"​",-1),O=l('<p><code>site_deploy</code> 是 <code>v3.6.0</code> 新增功能，用于配置显示你的 Keep 主题静态网站部署服务器提供商。</p><h3 id="enable-1" tabindex="-1">enable <a class="header-anchor" href="#enable-1" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 是否启用，可选值：<code>true</code> | <code>false</code> 。</p><h3 id="provider" tabindex="-1">provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;provider&quot;">​</a></h3><p><code>provider</code> 配置网站部署提供商，可选值：<code>github</code> | <code>vercel</code> | <code>netlify</code> | <code>gitee</code> | <code>aliyun</code> | <code>tencent_cloud</code> | <code>upyun</code> 。</p><ul><li><p><img src="'+y+'" alt="image"></p></li><li><p><img src="'+u+'" alt="image"></p></li><li><p><img src="'+b+'" alt="image"></p></li><li><p><img src="'+m+'" alt="image"></p></li><li><p><img src="'+h+'" alt="image"></p></li><li><p><img src="'+D+'" alt="image"></p></li></ul><h3 id="url-1" tabindex="-1">url <a class="header-anchor" href="#url-1" aria-label="Permalink to &quot;url&quot;">​</a></h3><p><code>url</code> 配置网站部署提供商的跳转链接，可以为空。</p>',8),I={id:"shields-style",tabindex:"-1"},$=s("a",{class:"header-anchor",href:"#shields-style","aria-label":'Permalink to "shields_style <Badge type="tip" text="v3.7.0" />"'},"​",-1),K=l('<p><code>shields_style</code> 是 Keep 主题 <code>v3.7.0</code> 提供的配置项，可以把 footer 模块转换成 <a href="https://shields.io/" target="_blank" rel="noreferrer">shields</a> 风格。</p><h3 id="enable-2" tabindex="-1">enable <a class="header-anchor" href="#enable-2" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 用于开启或关闭 shields 风格。</p><ul><li><p><code>enable: true</code></p><p><img src="'+B+'" alt="image"></p></li><li><p><code>enable: false</code></p><p><img src="'+g+`" alt="image"></p></li></ul><h3 id="custom" tabindex="-1">custom <a class="header-anchor" href="#custom" aria-label="Permalink to &quot;custom&quot;">​</a></h3><p><code>custom</code> 用于在网站底部自定义配置你的 shields.io 图标，支持配置无限个。</p><blockquote><p>只有在 shields 风格开启状态下才生效。</p></blockquote><ul><li><p><code>img_url</code> shields.io 图标图片。</p></li><li><p><code>link_url</code> shields.io 图标链接，可以为空。</p></li></ul><p>示例：</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">shields_style</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">custom</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">link_url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/XPoet/hexo-theme-keep</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">img_url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://img.shields.io/badge/Hexo-Keep%20v3.7.0-blue?style=flat-square&amp;logo=hexo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+_+'" alt="image"></p>',11);function Y(L,M,R,S,T,H){const e=r("Badge");return p(),t("div",null,[f,s("h2",E,[a("word_count "),n(e,{type:"tip",text:"v3.7.0"}),a(),A]),v,C,s("h2",x,[a("icp "),n(e,{type:"tip",text:"v3.7.0"}),a(),k]),q,s("h2",P,[a("site_deploy "),n(e,{type:"tip",text:"v3.6.0"}),a(),w]),O,s("h2",I,[a("shields_style "),n(e,{type:"tip",text:"v3.7.0"}),a(),$]),K])}const U=o(F,[["render",Y]]);export{N as __pageData,U as default};
