(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1071:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_01、题目分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目分析"}},[t._v("#")]),t._v(" 01、题目分析")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("第344题：反转字符串")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。")])])])]),t._v(" "),n("p",[t._v("不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：["h","e","l","l","o"]\n输出：["o","l","l","e","h"]\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：["H","a","n","n","a","h"]\n输出：["h","a","n","n","a","H"]\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h2",{attrs:{id:"_02、题目图解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、题目图解"}},[t._v("#")]),t._v(" 02、题目图解")]),t._v(" "),n("p",[t._v("这是一道相当简单的经典题目，直接上题解：使用双指针进行反转字符串。")]),t._v(" "),n("p",[t._v('假设输入字符串为["h","e","l","l","0"]')]),t._v(" "),n("ul",[n("li",[t._v("定义left和right分别指向首元素和尾元素")]),t._v(" "),n("li",[t._v("当left < right ，进行交换。")]),t._v(" "),n("li",[t._v("交换完毕，left++，right--")]),t._v(" "),n("li",[t._v("直至left == right")])]),t._v(" "),n("p",[t._v("具体过程如下图所示：")]),t._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(553),alt:"PNG"}}),t._v(" "),n("h2",{attrs:{id:"_03、go语言示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、go语言示例"}},[t._v("#")]),t._v(" 03、Go语言示例")]),t._v(" "),n("p",[t._v("根据以上分析，我们可以得到下面的题解：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tleft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\tright "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\tleft"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t\tright"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports},553:function(t,s,a){t.exports=a.p+"assets/img/1.81971505.jpg"}}]);