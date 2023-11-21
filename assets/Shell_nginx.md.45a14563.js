import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.01af844e.js";const h=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"Shell/nginx.md","filePath":"Shell/nginx.md"}'),p={name:"Shell/nginx.md"},o=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><h2 id="thinkphp-伪静态" tabindex="-1">thinkphp 伪静态 <a class="header-anchor" href="#thinkphp-伪静态" aria-label="Permalink to &quot;thinkphp 伪静态&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!-</span><span style="color:#79B8FF;">e</span><span style="color:#E1E4E8;"> $request_filename) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">rewrite</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">.</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)$ </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">index</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">php</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">s</span><span style="color:#F97583;">=/</span><span style="color:#E1E4E8;">$</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">last</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!-</span><span style="color:#005CC5;">e</span><span style="color:#24292E;"> $request_filename) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">rewrite</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">^</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">.</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)$ </span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">index</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">php</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">s</span><span style="color:#D73A49;">=/</span><span style="color:#24292E;">$</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">last</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="laravel-伪静态" tabindex="-1">laravel 伪静态 <a class="header-anchor" href="#laravel-伪静态" aria-label="Permalink to &quot;laravel 伪静态&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">index</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">php</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">$query_string;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">index</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">php</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">$query_string;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="伪静态只接受指定值" tabindex="-1">伪静态只接受指定值 <a class="header-anchor" href="#伪静态只接受指定值" aria-label="Permalink to &quot;伪静态只接受指定值&quot;">​</a></h2><p>主要用来应对tp6的多应用模式下实现短链接的效果 <a href="https://www.xxx.com/6i8GF5g7R" target="_blank" rel="noreferrer">https://www.xxx.com/6i8GF5g7R</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">-e</span><span style="color:#E1E4E8;"> $request_filename) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#正则匹配到Dl开头的访问到 /index/index/参数名/参数值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rewrite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^/Dl</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">*)$ </span><span style="color:#9ECBFF;">/index.php?s=/index/index/page/</span><span style="color:#FFAB70;">$1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rewrite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">*)$ </span><span style="color:#9ECBFF;">/index.php?s=/</span><span style="color:#FFAB70;">$1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">last</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">-e</span><span style="color:#24292E;"> $request_filename) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#正则匹配到Dl开头的访问到 /index/index/参数名/参数值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rewrite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^/Dl</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.</span><span style="color:#24292E;">*)$ </span><span style="color:#032F62;">/index.php?s=/index/index/page/</span><span style="color:#E36209;">$1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rewrite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.</span><span style="color:#24292E;">*)$ </span><span style="color:#032F62;">/index.php?s=/</span><span style="color:#E36209;">$1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">last</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="options请求-伪静态-浏览器预检" tabindex="-1">OPTIONS请求 伪静态 浏览器预检 <a class="header-anchor" href="#options请求-伪静态-浏览器预检" aria-label="Permalink to &quot;OPTIONS请求 伪静态 浏览器预检&quot;">​</a></h2><blockquote><p>状态:307 浏览器内部将http跳转到https,修改前端代码为https(后端https)</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//... 放在最顶部</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;OPTIONS&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">add_header</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">add_header</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">add_header</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Credentials&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">add_header</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">204</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//... 放在最顶部</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($request_method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;OPTIONS&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">add_header</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">add_header</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">add_header</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Access-Control-Allow-Credentials&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;true&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">add_header</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">204</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#PROXY-START/</span></span>
<span class="line"><span style="color:#e1e4e8;">location /</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_pass http://127.0.0.1:8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_cache off;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">#PROXY-END/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#PROXY-START/</span></span>
<span class="line"><span style="color:#24292e;">location /</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    proxy_pass http://127.0.0.1:8080;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_cache off;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">#PROXY-END/</span></span></code></pre></div><h2 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h2><p><code>浏览器</code>请求默认会触发2次,认为是网页会请求网站图标</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myproject</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.1.151:10001</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">weight=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.1.151:10002</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">weight=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9017</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#B392F0;">proxy_pass</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://myproject</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }   </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">upstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myproject</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.1.151:10001</span><span style="color:#24292E;"> </span><span style="color:#032F62;">weight=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.1.151:10002</span><span style="color:#24292E;"> </span><span style="color:#032F62;">weight=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9017</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6F42C1;">proxy_pass</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://myproject</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }   </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div>`,16),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const C=s(p,[["render",c]]);export{h as __pageData,C as default};