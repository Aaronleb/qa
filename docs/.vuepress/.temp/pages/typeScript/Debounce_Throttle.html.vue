<template><div><h2 id="防抖-节流" tabindex="-1"><a class="header-anchor" href="#防抖-节流" aria-hidden="true">#</a> 防抖&amp;&amp;节流</h2>
<h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> 防抖
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Function<span class="token punctuation">}</span> callBack 处理事件回调函数
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Number<span class="token punctuation">}</span>   delay    时间 默认500毫秒
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Function<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Debounce</span><span class="token punctuation">(</span>callBack<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> delay<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">callBack</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> 节流
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Function<span class="token punctuation">}</span> callBack 处理事件的回调
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Number<span class="token punctuation">}</span>   delay    时间 默认500毫秒
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Function<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Throttle</span><span class="token punctuation">(</span>callBack<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> delay<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> flag<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">callBack</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    flag <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


