(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1107:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("今天继续为大家讲解二分查找，分享一道知乎面试题。话不多说，直接看题。")])]),t._v(" "),n("h2",{attrs:{id:"_01、题目示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目示例"}},[t._v("#")]),t._v(" 01、题目示例")]),t._v(" "),n("blockquote",[n("p",[t._v("这道题目有两个版本，一道简单，一道困难。我们从简单的开始讲起。")])]),t._v(" "),n("br"),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("第153题：旋转排序数组最小值Ⅰ")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("假设按照升序排序的数组在预先未知的某个点上进行了旋转。( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。请找出其中最小的元素。你可以假设数组中不存在重复元素。")])])])]),t._v(" "),n("p",[n("strong",[t._v("示例 1:")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [3,4,5,1,2]\n输出: 1\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[n("strong",[t._v("示例 2:")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [4,5,6,7,0,1,2]\n输出: 0\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h2",{attrs:{id:"_02、题解分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、题解分析"}},[t._v("#")]),t._v(" 02、题解分析")]),t._v(" "),n("blockquote",[n("p",[t._v("这道题目的关键点取决于是否可以想到二分，难点：无。但是如果把题中的条件，换成数组中元素可重复，本题的难度就会大幅上升。")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("当然，本题可以直接暴力搜索，但是这就就会被面试官撵出去。为了不被他撵出去，我们还是使用二分更为稳妥！"),n("strong",[t._v("在****二分搜索中，我们找到区间的中间点并根据某些条件决定去区间左半部分还是右半部分搜索")]),t._v("。但是麻烦的是，我们的数组被旋转了，因此肯定不能直接使用二分。那我们需要先观察一下，假若我们的原始数组如下：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(752),alt:"PNG"}}),t._v(" "),n("p",[t._v("无论怎么旋转，我们都可以得到一个结论，首元素 > 尾元素，像是下面这样。虽然不知道这个结论有什么用，但是我们先记下来。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(753),alt:"PNG"}}),t._v(" "),n("p",[t._v("继续进行观察，上面其实是两种极端情况，那如果普通的情况旋转，大概是下面这样：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(754),alt:"PNG"}}),t._v(" "),n("p",[t._v("问题似乎变得简单了，旋转将原数组一分为二，并且我们已知了首元素值总是大于尾元素，那我们只要找到将其一分为二的那个点（该点左侧的元素都大于首元素，该点右侧的元素都小于首元素），是不是就可以对应找到数组中的最小值。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(755),alt:"PNG"}}),t._v(" "),n("p",[t._v("然后我们通过二分来进行查找，先找到中间节点mid，如果中间元素大于首元素，我们就把mid向右移动。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(756),alt:"PNG"}}),t._v(" "),n("p",[t._v("如果中间元素小于首元素，我们就把mid向左移动。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(757),alt:"PNG"}}),t._v(" "),n("p",[t._v("根据分析，完成题解：")]),t._v(" "),n("p",[t._v("java版本")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//java")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                           \n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       \n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("python版本")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("python \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" findMin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         \n                left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               \n                    right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("c版本")]),t._v(" "),n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//c ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" numsSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("numsSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("执行结果：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(758),alt:"PNG"}}),t._v(" "),n("h2",{attrs:{id:"_03、课后思考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、课后思考"}},[t._v("#")]),t._v(" 03、课后思考")]),t._v(" "),n("blockquote",[n("p",[t._v("本题有多种变形，是一道练习二分法的绝佳题目。比如“把元素中不可重复的条件去掉”，又或者是“编写一个函数来判断目标值是否在数组中”等等，不同的改动，都会对题目解题方式有略微的影响，但是万变不离其宗，统统都是二分法。")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("其他的就不啰嗦了，明天将为大家答疑分析，解决“元素可重复”的版本。所以，今天的问题你学会了吗，评论区留下你的想法！")])])}),[],!1,null,null,null);s.default=r.exports},752:function(t,s){t.exports="data:image/jpeg;base64,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"},753:function(t,s,a){t.exports=a.p+"assets/img/2.ace2c641.jpg"},754:function(t,s,a){t.exports=a.p+"assets/img/3.305e9fcd.jpg"},755:function(t,s,a){t.exports=a.p+"assets/img/4.517a72a2.jpg"},756:function(t,s,a){t.exports=a.p+"assets/img/5.1ce72971.jpg"},757:function(t,s,a){t.exports=a.p+"assets/img/6.64d30411.jpg"},758:function(t,s,a){t.exports=a.p+"assets/img/7.7ff53810.jpg"}}]);