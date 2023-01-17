import{_ as s,c as a,o as e,a as n}from"./app.a8d6a9cf.js";const b=JSON.parse('{"title":"comment","description":"","frontmatter":{},"headers":[{"level":2,"title":"enable","slug":"enable","link":"#enable","children":[]},{"level":2,"title":"use","slug":"use","link":"#use","children":[]},{"level":2,"title":"valine","slug":"valine","link":"#valine","children":[{"level":3,"title":"appid","slug":"appid","link":"#appid","children":[]},{"level":3,"title":"appkey","slug":"appkey","link":"#appkey","children":[]},{"level":3,"title":"placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":3,"title":"效果图","slug":"效果图","link":"#效果图","children":[]}]},{"level":2,"title":"gitalk","slug":"gitalk","link":"#gitalk","children":[]},{"level":2,"title":"twikoo","slug":"twikoo","link":"#twikoo","children":[{"level":3,"title":"env_id","slug":"env-id","link":"#env-id","children":[]},{"level":3,"title":"region","slug":"region","link":"#region","children":[]},{"level":3,"title":"version","slug":"version","link":"#version","children":[]},{"level":3,"title":"效果图","slug":"效果图-1","link":"#效果图-1","children":[]}]},{"level":2,"title":"waline","slug":"waline","link":"#waline","children":[{"level":3,"title":"server_url","slug":"server-url","link":"#server-url","children":[]},{"level":3,"title":"reaction","slug":"reaction","link":"#reaction","children":[]},{"level":3,"title":"version","slug":"version-1","link":"#version-1","children":[]},{"level":3,"title":"效果图","slug":"效果图-2","link":"#效果图-2","children":[]}]}],"relativePath":"tutorial/configuration-guide/comment.md","lastUpdated":1673949319000}'),l={name:"tutorial/configuration-guide/comment.md"},p=n(`<h1 id="comment" tabindex="-1">comment <a class="header-anchor" href="#comment" aria-hidden="true">#</a></h1><p><code>comment</code> 该配置项用于开启和设置 Keep 主题的评论系统。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">comment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">valine</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># Option values: valine | gitalk | twikoo | waline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">valine</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">appid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># Your leancloud application appid</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">appkey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># Your leancloud application appkey</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">placeholder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># Input box placeholder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gitalk</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">github_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># GitHub repo owner</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">github_admins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># GitHub Admins (in Array type), optional.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">repository</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># Repository name to store issues</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">client_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># GitHub Application Client ID</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">client_secret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># GitHub Application Client Secret</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">twikoo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">env_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># Tencent Cloud environment id</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">region</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># Environment region. If select Guangzhou, fill in &quot;ap-guangzhou&quot;.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.6.7</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># Twikoo version, default use v1.6.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">waline</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">server_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># Server URL</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">reaction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Article reactions, Option values: true | false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># Waline version, default use v2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-hidden="true">#</a></h2><p><code>enable</code> 设置是否开启评论系统，可选值：<code>true</code> 或 <code>false</code>。</p><h2 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><p><code>use</code> 配置使用哪一款评论系统，可选值：<code>valine</code> | <code>gitalk</code> | <code>twikoo</code> | <code>waline</code>。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">valine</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># values: valine | gitalk | twikoo | waline</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="valine" tabindex="-1">valine <a class="header-anchor" href="#valine" aria-hidden="true">#</a></h2><p>Valine 是一款基于 LeanCloud 的快速、简洁且高效的无后端评论系统。</p><p>详情查看：</p><ul><li><a href="https://github.com/xCss/Valine" target="_blank" rel="noreferrer">https://github.com/xCss/Valine</a></li><li><a href="https://valine.js.org" target="_blank" rel="noreferrer">https://valine.js.org</a></li></ul><h3 id="appid" tabindex="-1">appid <a class="header-anchor" href="#appid" aria-hidden="true">#</a></h3><p><code>appid</code> 设置 LeanCloud 应用的 <code>App ID</code>。</p><p>参考 <a href="https://valine.js.org/quickstart.html" target="_blank" rel="noreferrer">Valine 官方配置教程</a>，获取 <code>App ID</code>，并填入主题配置项 <code>appid</code> 中。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">valine</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">appid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ih2nzxxxxxxxxxxxxxxxxxxxxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="appkey" tabindex="-1">appkey <a class="header-anchor" href="#appkey" aria-hidden="true">#</a></h3><p><code>appkey</code> 设置 LeanCloud 应用的 <code>App Key</code>。</p><p>参考 <a href="https://valine.js.org/quickstart.html" target="_blank" rel="noreferrer">Valine 官方配置教程</a>，获取 <code>App Key</code>，并填入主题配置项 <code>appkey</code> 中。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">valine</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">appkey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gdf6xxxxxxxxxxxxxxxxxxxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-hidden="true">#</a></h3><p><code>placeholder</code> 可填，评论框的在还没输入内容时的显示的文本信息。</p><h3 id="效果图" tabindex="-1">效果图 <a class="header-anchor" href="#效果图" aria-hidden="true">#</a></h3><p>Valine 评论插件效果图。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.21h91rodeq00.png" alt="image"></p><h2 id="gitalk" tabindex="-1">gitalk <a class="header-anchor" href="#gitalk" aria-hidden="true">#</a></h2><p>Gitalk，一个基于 Github Issue 和 Preact 开发的评论插件。</p><p>详情查看：</p><ul><li><a href="https://github.com/gitalk/gitalk" target="_blank" rel="noreferrer">https://github.com/gitalk/gitalk</a></li><li><a href="https://gitalk.github.io" target="_blank" rel="noreferrer">https://gitalk.github.io</a></li></ul><p>在 Keep 中如何使用：</p><ol><li><p>新建 GitHub OAuth App<br> 注册或登录 <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>，<a href="https://github.com/settings/applications/new" target="_blank" rel="noreferrer">创建新的 OAuth App</a>，其中 <code>Homepage URL</code> 和 <code>Authorization callback URL</code> 均填写自己的域名即可。</p><p>OAuth App 创建成功后，把 <code>Client ID</code> 和 <code>Client Secret</code> 保存起来，下面要用到。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.3keb5w9lgp40.png" alt="image"></p></li><li><p>新建 GitHub 仓库 注册或登录 <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>，<a href="https://github.com/new" target="_blank" rel="noreferrer">创建一个新的仓库（repository）</a>，并打开 Issues（自己手动增加一个 Issue，内容随便填写，即可打开），用于存储评论内容。</p></li><li><p>把自己的 <code>GitHub 用户名</code>、<code>仓库名</code> 、OAuth App 的 <code>Client ID</code> 、<code>Client Secret</code> 分别填写在主题配置文件里，如下示例。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">gitalk</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">github_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">XPoet</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">repository</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hexo-site-comments</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">client_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cdfffffffffffffffffffff</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">client_secret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f4b55555555555555555555555555555</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>Gitalk 评论插件效果图。 <img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.4bv32zei1580.png" alt="image"></p></li></ol><h2 id="twikoo" tabindex="-1">twikoo <a class="header-anchor" href="#twikoo" aria-hidden="true">#</a></h2><p>Twikoo，一个简洁、安全、免费的静态网站评论系统，基于腾讯云开发。</p><p>详情查看：</p><ul><li><a href="https://github.com/imaegoo/twikoo" target="_blank" rel="noreferrer">https://github.com/imaegoo/twikoo</a></li><li><a href="https://twikoo.js.org" target="_blank" rel="noreferrer">https://twikoo.js.org</a></li></ul><h3 id="env-id" tabindex="-1">env_id <a class="header-anchor" href="#env-id" aria-hidden="true">#</a></h3><p><code>env_id</code> 是成功部署 Twikoo 评论系统的环境 ID。</p><p>参考 <a href="https://twikoo.js.org/quick-start.html" target="_blank" rel="noreferrer">Twikoo 官方配置教程</a>，获取 <code>env_id</code> 环境 ID，并填入主题配置项中。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">twikoo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">env_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxxxxxxxxxxxxxxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="region" tabindex="-1">region <a class="header-anchor" href="#region" aria-hidden="true">#</a></h3><p>参考 <a href="https://twikoo.js.org/quick-start.html" target="_blank" rel="noreferrer">Twikoo 官方配置教程</a>，获取 <code>region</code>，并填入主题配置项中。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">twikoo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">region</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxxxxxxxxxxxxxxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-hidden="true">#</a></h3><p><code>version</code> 设置 Twikoo 评论系统版本，Keep 主题内置使用 Twikoo <code>v1.6.7</code>，你可以自行更改。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">twikoo</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.6.7</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Twikoo 评论系统的版本需跟 Twikoo 云函数版本保持一致</p></div><h3 id="效果图-1" tabindex="-1">效果图 <a class="header-anchor" href="#效果图-1" aria-hidden="true">#</a></h3><p>Twikoo 评论插件效果图。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6cstpi6jsjg0.png" alt="image"></p><h2 id="waline" tabindex="-1">waline <a class="header-anchor" href="#waline" aria-hidden="true">#</a></h2><p>Waline 一款简洁、安全的评论系统。</p><p>详情查看：</p><ul><li><a href="https://github.com/walinejs/waline" target="_blank" rel="noreferrer">https://github.com/walinejs/waline</a></li><li><a href="https://waline.js.org" target="_blank" rel="noreferrer">https://waline.js.org</a></li></ul><h3 id="server-url" tabindex="-1">server_url <a class="header-anchor" href="#server-url" aria-hidden="true">#</a></h3><p><code>server_url</code> 是成功部署 Waline 评论系统的服务端地址。</p><p>参考 <a href="https://waline.js.org/guide/get-started.html" target="_blank" rel="noreferrer">Waline 官方配置教程</a>，获取 <code>server_url</code> 服务端地址，并填入主题配置项中。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">waline</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">server_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://waline-xxxxxx.xpoet.cn</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 示例</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="reaction" tabindex="-1">reaction <a class="header-anchor" href="#reaction" aria-hidden="true">#</a></h3><p><code>reaction</code> 设置开启文章反应，可选值：<code>true</code> 或 <code>false</code>。</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.5zbsiiwm7ig0.webp" alt="image"></p><h3 id="version-1" tabindex="-1">version <a class="header-anchor" href="#version-1" aria-hidden="true">#</a></h3><p><code>version</code> 设置 Waline 评论系统版本，Keep 主题内置使用 Waline <code>v2</code>，你可以自行更改。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">waline</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="效果图-2" tabindex="-1">效果图 <a class="header-anchor" href="#效果图-2" aria-hidden="true">#</a></h3><p>Waline 评论插件效果图</p><p><img src="https://cdn.staticaly.com/gh/XPoet/image-hosting@master/keep-docs/image.6px24mbhmeo0.webp" alt="image"></p>`,66),o=[p];function r(t,i,c,d,h,y){return e(),a("div",null,o)}const m=s(l,[["render",r]]);export{b as __pageData,m as default};
