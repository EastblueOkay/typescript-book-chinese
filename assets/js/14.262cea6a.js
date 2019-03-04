(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{353:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见的-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的-error","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的 Error")]),t._v(" "),s("p",[t._v("在此章节中，我们学习在实际应用中将会遇到的常见错误代码。")]),t._v(" "),s("h2",{attrs:{id:"ts2304"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts2304","aria-hidden":"true"}},[t._v("#")]),t._v(" TS2304")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Cannot find name ga")]),t._v(", "),s("code",[t._v("Cannot find name $")]),t._v(", "),s("code",[t._v("Cannot find module jquery")])])]),t._v(" "),s("p",[t._v("你可能在使用第三方的库（如：google analytics），但是你并没有 "),s("code",[t._v("declare")]),t._v(" 的声明。在没有声明它们之前，TypeScript 试图避免错误和使用变量。因此在使用一些额外的库时，你需要明确的声明使用的任何变量（"),s("router-link",{attrs:{to:"/typings/ambient.html"}},[t._v("如何修复它")]),t._v("）。")],1),t._v(" "),s("h2",{attrs:{id:"ts2307"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts2307","aria-hidden":"true"}},[t._v("#")]),t._v(" TS2307")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Cannot find module 'underscore'")])])]),t._v(" "),s("p",[t._v("你可能把第三方的库做为模块（"),s("router-link",{attrs:{to:"/project/modules.html"}},[t._v("移步模块")]),t._v("）来使用，并且没有一个与之对应的环境声明文件（"),s("router-link",{attrs:{to:"/typings/ambient.html"}},[t._v("更多声明文件信息")]),t._v("）。")],1),t._v(" "),s("h2",{attrs:{id:"ts1148"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts1148","aria-hidden":"true"}},[t._v("#")]),t._v(" TS1148")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Cannot compile modules unless the '--module' flag provided")])])]),t._v(" "),s("p",[t._v("请查看"),s("router-link",{attrs:{to:"/project/modules.html"}},[t._v("模块")]),t._v("章节")],1),t._v(" "),s("h2",{attrs:{id:"捕获不能有类型注解的简短变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获不能有类型注解的简短变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 捕获不能有类型注解的简短变量")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("something")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 捕获不能有类型注解的简短变量")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("TypeScript 正在保护你免受 JavaScript 代码的侵害，取而代之，使用类型保护：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("something")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 捕获不能有类型注解的简短变量")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"接口-elementclass-不能同时扩展类型别名-component-和-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口-elementclass-不能同时扩展类型别名-component-和-component","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口 "),s("code",[t._v("ElementClass")]),t._v(" 不能同时扩展类型别名 "),s("code",[t._v("Component")]),t._v(" 和 "),s("code",[t._v("Component")])]),t._v(" "),s("p",[t._v("当在编译上下文中同时含有两个 "),s("code",[t._v("react.d.ts")]),t._v("（"),s("code",[t._v("@types/react/index.d.ts")]),t._v("）会发生这种情况。")]),t._v(" "),s("p",[t._v("修复：")]),t._v(" "),s("ul",[s("li",[t._v("删除 "),s("code",[t._v("node_modules")]),t._v(" 和任何 "),s("code",[t._v("package-lock")]),t._v("（或者 "),s("code",[t._v("yarn lock")]),t._v("），然后再一次 "),s("code",[t._v("npm install")]),t._v("；")]),t._v(" "),s("li",[t._v("如果这不能工作，查找无效的模块（你所使用的所用用到了 "),s("code",[t._v("react.d.ts")]),t._v(" 模块应该做为 "),s("code",[t._v("peerDependency")]),t._v(" 而不是做为 "),s("code",[t._v("dependency")]),t._v(" 使用）并且把这个报告给相关模块。")])])])},[],!1,null,null,null);a.default=n.exports}}]);