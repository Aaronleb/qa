<template><div><h2 id="es13-新特性" tabindex="-1"><a class="header-anchor" href="#es13-新特性" aria-hidden="true">#</a> ES13 新特性</h2>
<h3 id="_1、类字段声明" tabindex="-1"><a class="header-anchor" href="#_1、类字段声明" aria-hidden="true">#</a> 1、类字段声明</h3>
<p>ES13 之前,类字段只能在构造函数中声明,与许多其他语言不同,我们不能在类的最外层范围内声明或定义它们,ES13 消除了这个限制</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">class</span> <span class="token class-name">Cars</span> <span class="token punctuation">{</span>
		color <span class="token operator">=</span> <span class="token string">'真白'</span><span class="token punctuation">;</span>
		age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token keyword">const</span> car1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//真白</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 22</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、私有方法和字段" tabindex="-1"><a class="header-anchor" href="#_2、私有方法和字段" aria-hidden="true">#</a> 2、私有方法和字段</h3>
<p>以前不能在类中声明私有成员,成员通常以下划线(_)为前缀,表示它是私有的,但仍然可以从类外部访问和修改
使用 ES13 我们现在可以将私有字段和成员添加到类中,方法是在其前面加上＃号,试图从类外部访问它们会导致错误:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>#firstName <span class="token operator">=</span> <span class="token string">"真白"</span><span class="token punctuation">;</span>
#lastName <span class="token operator">=</span> <span class="token string">"天天"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、顶层-await-运算符" tabindex="-1"><a class="header-anchor" href="#_3、顶层-await-运算符" aria-hidden="true">#</a> 3、顶层 await 运算符</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">function</span> <span class="token function">setTimeoutAsync</span><span class="token punctuation">(</span><span class="token parameter">timeout</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>timeout<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">await</span> <span class="token function">setTimeoutAsync</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、使-in-来判断某个对象是否拥有某个私有属性" tabindex="-1"><a class="header-anchor" href="#_4、使-in-来判断某个对象是否拥有某个私有属性" aria-hidden="true">#</a> 4、使 in 来判断某个对象是否拥有某个私有属性</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  #person

  <span class="token function">hasPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> #person <span class="token keyword">in</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per<span class="token punctuation">.</span><span class="token function">hasPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、使用-at-函数来索引元素" tabindex="-1"><a class="header-anchor" href="#_5、使用-at-函数来索引元素" aria-hidden="true">#</a> 5、使用 at 函数来索引元素</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、object-hasown-方法" tabindex="-1"><a class="header-anchor" href="#_6、object-hasown-方法" aria-hidden="true">#</a> 6、Object.hasOwn()方法</h3>
<p>在 JS 中，我们可以使用 Object.prototype.hasOwnProperty()来检查某个对象自身是否拥有某个属性:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">'真白'</span>
  age <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token function">hasPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'xxx'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>per<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>per<span class="token punctuation">,</span> <span class="token string">'aaa'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、error-对象的-cause-属性" tabindex="-1"><a class="header-anchor" href="#_7、error-对象的-cause-属性" aria-hidden="true">#</a> 7、Error 对象的 Cause 属性</h3>
<p>ES13 后，Error 对象多了一个 cause 属性来指明错误出现的原因。这个属性可以帮助我们为错误添加更多的上下文信息，从而帮助使用者们更好地定位错误。这个属性是我们在创建 error 对象时传进去的第二个参数对象的 cause 属性:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">userAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">apiCallThatCanThrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'New error message'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cause</span><span class="token operator">:</span> err <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">userAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Cause by: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token punctuation">.</span>cause<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、数组支持逆序查找" tabindex="-1"><a class="header-anchor" href="#_8、数组支持逆序查找" aria-hidden="true">#</a> 8、数组支持逆序查找</h3>
<p>findLast()和 findLastIndex(),从数组的最后向前查找满足条件的元素,并返回本身(findLast),或返回元素所在数组的 index(findLastIndex)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> found <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">findLast</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'xxx'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> foundIndex <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">findLastIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'xxx'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


