(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1063:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("前几天写了一篇“小白为了面试如何刷题”的文章大受好评。随之而来的是好多小伙伴私下跑来问我“"),n("strong",[t._v("浩哥，你说前200道题很好，但是前两百道题的难度很大，我不会怎么办")]),t._v("”这问题我想了一两天。。。好吧，既然你们说难不会。那我干脆就把前两百道题都给你们配上图解，全部安排，这样总可以了吧？牛气冲天有木有，哪个公号主敢这么干的！奥利给，搞起。今儿为大家分享经典面试题目 - 两数相加。做过的朋友，也不要急着叉掉，不妨借机复习一番。")])]),t._v(" "),n("h2",{attrs:{id:"_01、题目示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目示例"}},[t._v("#")]),t._v(" 01、题目示例")]),t._v(" "),n("blockquote",[n("p",[t._v("各数据结构中的“加减乘除”都是很爱考察的内容。")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("第2题：两数相加")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。")])])])]),t._v(" "),n("p",[t._v("给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("您可以假设除了数字 0 之外，这两个数都不会以 0 开头。")]),t._v(" "),n("br"),t._v(" "),n("p",[n("strong",[t._v("示例：")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)\n输出：7 -> 0 -> 8\n原因：342 + 465 = 807\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h2",{attrs:{id:"_02、算法图解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、算法图解"}},[t._v("#")]),t._v(" 02、算法图解")]),t._v(" "),n("blockquote",[n("p",[t._v("烧饼（哨兵）节点：烧饼节点就是说有一个节点长的像烧饼，站在最前面。往往第一个节点小子都会来啃一口，因为是牛肉拔丝烧饼，扯不掉就连起来了。。。好了，我实在编不下去了~囧....")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("不了解哨兵节点的可以看下：")]),t._v(" "),n("br"),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/1.1.链表系列/1.0.数组系列/101.html"}},[t._v("删除链表倒数第N个节点(19)")])],1),t._v(" "),n("br"),t._v(" "),n("p",[t._v("好了，了解了哨兵节点，其实这道题和哨兵节点**并没有什么毛线关系，**我只是让你复习一下（会不会想打我）。现在开始正式分析题目。")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("老样子，我们还是先画图，假若我们的链表是 (2 -> 4 -> 3) + (5 -> 6 -> 4) ，大概就是这样（注意，这里我们其实是要完成 342 + 465）：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(514),alt:"PNG"}}),t._v(" "),n("p",[t._v("加法肯定是从最低位到最高位进行相加，也就是这里的"),n("strong",[t._v("链表头到链表尾进行相加，所以需要遍历链表")]),t._v("。我们令 l1 和 l2 指向两个链表的头，用一个 tmp 值来存储同一位相加的结果，以及一个新的链表来存储 tmp 的值。（为什么不直接用新链表存储结果，而是用 tmp 先存储结果，再用新链表存储 tmp 的值呢？请继续往下看）")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(515),alt:"PNG"}}),t._v(" "),n("p",[t._v("记住："),n("strong",[t._v("所有模拟运算的题目，都需要考虑进位")]),t._v("。这里因为个位不涉及进位，开始计算十位。我们同时遍历 l1，l2，以及新链表到下一位。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(516),alt:"PNG"}}),t._v(" "),n("p",[t._v("重复上面的操作，可以看到十位与个位不同，发生了进位。这时，刚才的 tmp 就有了用武之地。"),n("strong",[t._v("我们使用 tmp 携带进位的值到下一位的运算")]),t._v("。自然，这里的链表也不能直接存储 tmp 的值了，而是要存储 tmp%10 的值。重复这个步骤，"),n("strong",[t._v("直到两个链表都遍历完成，并且 tmp 没有进位值")]),t._v("：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(517),alt:"PNG"}}),t._v(" "),n("p",[t._v("现在只需要返回我们的新链表就可以了。问题来了，"),n("strong",[t._v("因为我们没有构造哨兵节点，所以此时不太容易直接返回新链表")]),t._v("。所以在整个流程的第一步，我们还需要用一个哨兵节点指向我们的新链表。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(518),alt:"PNG"}}),t._v(" "),n("p",[t._v("分析完毕，直接上代码（好久没翻Go的牌子了）：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ListNode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlist "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里用一个result，只是为了后面返回节点方便，并无他用")]),t._v("\n\tresult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" list\n\ttmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ttmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Val\n\t\t\tl1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ttmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Val\n\t\t\tl2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tlist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\ttmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\t\tlist "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("p",[t._v("执行结果：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(519),alt:"PNG"}}),t._v(" "),n("h2",{attrs:{id:"_03、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、总结"}},[t._v("#")]),t._v(" 03、总结")]),t._v(" "),n("blockquote",[n("p",[t._v("1950年6月19日，毛泽东写信给当时的教育部部长马叙伦：“要各校注意健康第一，学习第二。营养不足，宜酌增经费。”1951年9月底，毛泽东接见安徽参加国庆的代表团，代表团成员中有渡江小英雄马三姐。毛泽东关切地问她念书情况，还送她一本精美的笔记本，并且在扉页上题词："),n("strong",[t._v("好好学习，天天向上")]),t._v("。这8个字的题词迅速在全国传播开来。")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("今天的题目到这里就结束了。你学会了吗？快来评论区留下你的想法吧！")])])}),[],!1,null,null,null);s.default=r.exports},514:function(t,s,a){t.exports=a.p+"assets/img/1.77d1279c.jpg"},515:function(t,s,a){t.exports=a.p+"assets/img/2.aecc2d80.jpg"},516:function(t,s,a){t.exports=a.p+"assets/img/3.282d3108.jpg"},517:function(t,s,a){t.exports=a.p+"assets/img/4.4d0bf2ce.jpg"},518:function(t,s,a){t.exports=a.p+"assets/img/5.acd9a171.jpg"},519:function(t,s,a){t.exports=a.p+"assets/img/6.11546c06.jpg"}}]);