import{_ as e,c as t,o,a as i}from"./app.a8d6a9cf.js";const g=JSON.parse('{"title":"贡献准则","description":"","frontmatter":{},"headers":[{"level":2,"title":"Pull Request 准则","slug":"pull-request-准则","link":"#pull-request-准则","children":[]},{"level":2,"title":"开发之前的准备","slug":"开发之前的准备","link":"#开发之前的准备","children":[]},{"level":2,"title":"提交（commit）信息规范","slug":"提交-commit-信息规范","link":"#提交-commit-信息规范","children":[]},{"level":2,"title":"Keep To do List","slug":"keep-to-do-list","link":"#keep-to-do-list","children":[]},{"level":2,"title":"贡献者","slug":"贡献者","link":"#贡献者","children":[]}],"relativePath":"contribute/contribute.md","lastUpdated":1673949319000}'),l={name:"contribute/contribute.md"},r=i('<h1 id="贡献准则" tabindex="-1">贡献准则 <a class="header-anchor" href="#贡献准则" aria-hidden="true">#</a></h1><p>很高兴你有兴趣为 Keep 主题参与代码贡献，在进行代码贡献之前，请务必花一些时间通读以下准则：</p><h2 id="pull-request-准则" tabindex="-1">Pull Request 准则 <a class="header-anchor" href="#pull-request-准则" aria-hidden="true">#</a></h2><p><code>master</code> 分支只是最新稳定版本的一个快照。所有的开发都应该在专门的开发分支中进行，因此<strong>不要向 <code>master</code> 分支提交 PR</strong>。</p><p>PR 流程：</p><ul><li>将 <a href="https://github.com/XPoet/hexo-theme-keep" target="_blank" rel="noreferrer">Keep 主题仓库</a> fork 到你的 Github 账号下，并克隆（<code>git clone</code>） 你的 Keep 主题仓库到本地。</li><li>切换到<strong>dev</strong>分支上开发。</li><li>将你的本地修改进行提交。</li><li>将提交 push 到 fork 的仓库下。</li><li>创建一个 Pull request 到 Keep 主题仓库的 <strong><code>dev</code></strong> 分支。</li></ul><h2 id="开发之前的准备" tabindex="-1">开发之前的准备 <a class="header-anchor" href="#开发之前的准备" aria-hidden="true">#</a></h2><p>请确保你的本地环境正确安装 <a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>、<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">NPM</a> 和 Git。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Node.js 版本需 &gt;= 14.0</p></div><h2 id="提交-commit-信息规范" tabindex="-1">提交（commit）信息规范 <a class="header-anchor" href="#提交-commit-信息规范" aria-hidden="true">#</a></h2><p>我们对项目的 git 提交信息格式进行统一格式约定，每条提交信息由 <code>type</code> + <code>subject</code> 组成，这将提升项目日志的可读性。</p><ul><li><code>type</code> 用于描述此次提交信息的意义，全小写，仅包括如下类型： <ul><li><code>feat</code>：新功能</li><li><code>fix</code>：Bug 修复</li><li><code>refactor</code>：重构（既不是新增功能，也不是修改 Bug 的代码变动）</li><li><code>docs</code>：文档变化</li><li><code>style</code>：代码格式变化（空格、缩进、换行、分号等）</li><li><code>test</code>：代码测试相关</li><li><code>chore</code>：基础构建工具或依赖库的变化（不涉及源码）</li><li><code>revert</code>：代码回滚（回退已经存在的 <code>commit</code>）</li></ul></li><li><code>subject</code> 用于简要描述修改变更的内容，如 <code>update quick start in readme.md</code><ul><li>句尾不要使用符号</li><li>使用一般现在时、祈使句语气</li></ul></li></ul><h2 id="keep-to-do-list" tabindex="-1">Keep To do List <a class="header-anchor" href="#keep-to-do-list" aria-hidden="true">#</a></h2><p>详情查看：</p><p><a href="https://github.com/XPoet/hexo-theme-keep/projects/1" target="_blank" rel="noreferrer">https://github.com/XPoet/hexo-theme-keep/projects/1</a></p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-hidden="true">#</a></h2><p>这个项目的存在多亏了所有的贡献者</p><a class="contributor" href="https://github.com/XPoet/hexo-theme-keep/graphs/contributors"><img src="https://contrib.rocks/image?repo=XPoet/hexo-theme-keep"></a>',18),c=[r];function a(d,s,n,h,p,u){return o(),t("div",null,c)}const _=e(l,[["render",a]]);export{g as __pageData,_ as default};
