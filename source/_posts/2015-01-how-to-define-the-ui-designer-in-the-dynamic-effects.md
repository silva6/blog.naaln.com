---
layout: post
title: 设计师如何定义 UI 里的动态效果？效果背后的逻辑又应该是怎样的？
date: 2015/01/28 08:49:00
categories: 
- 技术
tags: 
- 设计
---

大家这几年开始对动效设计(Transitions)的重视程度慢慢提高，一方面是用户们对这一方面的要求和期待越来越高，另一方面，动效也为UI设计提供了另一个纬度，让很多靠静态的平面设计很难处理的问题得到优雅的解决。甚至有很多优秀的APP都是靠独树一帜的动效设计得以脱颖而出的（Flipboard, Path, Paper By 53, Storehouse）。这些APP的动效设计和整个app高度整合，可以想象他们是在被设计之初就已经被考虑在内了，而不是在做完所有静态设计之后加上去的一点噱头。

所以设计师是如何定义这些动效的？在讲这个问题之前，我想先引用一下Disney公司在上世纪30年代就已经总结出来12条原则。设计师Cento Lodigiani把这些法则做了生动的演示，大家有兴趣可以先看下。

[https://vimeo.com/93206523][1]

我想在此提几个我认为最重要的。所有的12个原则可以去这里看（原文[12 basic principles of animation][2])：

1，挤压和伸展（Squash &amp; Stretch）。想象猫和老鼠里面各种人物落地时候的样子。

2，预备动作（Anticipation）。从一个动作到下一个动作之间，角色往往会做一些预备的动作。比如人在起跳前先要微微下蹲，要向前出拳时先要往后拉伸等等。

3，跟随动作（Follow Through）。因为惯性，自然运动一般都不会骤然停止。

4，渐入渐出。也是类似前一点，自然的运动都是有过渡的。

5，弧线。生物移动的轨迹大多是带弧线的，而很少有直线的机械轨迹。

6，附属运动（Secondary Action）。比如跑步时候头发和衣服也会跟着躯干摆动，而这些细节的缺失会让主体的运动显得僵硬。

7，时机控制（Timing）所有跟时间相关的媒体，Timing都是非常非常重要的。动作的先后顺序，持续长短，差别零点几秒就会造成非常大的感官差异。

现在回到做UI的部分。虽然Apple也许开启了UI上大量运用仿真的动效的先河，但我觉得关于这方面定义最完整清晰的还是google今年发布的Material Design设计规范：

[http://www.google.com/design/spec/animation/authentic-motion.html][3]

规范里面提到的很多点其实和Disney的原则是一致的。比如Mass&Weight，基本讲的就是屏幕上的物体在移动的时候要有重量感，要有加速，减速和惯性，避免线性的移动等等。

所以做UI的动效，有相当一部分的原则和传统动画是相通的。

但是，在做motion graphic类的动画时，大多数时间追求的会是视觉刺激的丰富性和层次感，但做UI的动效，主要目的是为了更好的解释软件的逻辑，空间关系，层次和架构。本来用静态需要很久才能让人明白的东西，通过0.2秒的动作让你明白。目的不同，手法也会有差别。所以在Material Design的规范里也有很多他们自己的东西，比如Responsive Interacition和Meaningful Transitions章节提到的那些，基本都是为了让用户可以理解他们的隐喻（Metaphor），快速掌握UI背后的逻辑的。比如ios长按图标后删除的动作，会让那些图标开始抖动。这很直白的告诉了使用者现在它们处在一个松动的状态，所以你可以随意移动它们。

所以我们在设计定义UI的动效时，最先考虑的就是整个UI的空间、层级，和逻辑上的相互关系，以及需要带给用户的主观感受，来赋予它一个合适的隐喻和原则。接下来，我们还要考虑这些动效出现的时机、频率和作用，以确定动效的类型和持续长短。

先抛砖讲这么多。另外网上也有很多同学做了很好的总结，下面是两个比较有名的：

[Motion Ui Design Principles][4]

[http://www.ui-transitions.com][5]（好像暂时不能访问）

 [1]: https://vimeo.com/93206523

 [2]: http://en.wikipedia.org/wiki/12_basic_principles_of_animation

 [3]: http://www.google.com/design/spec/animation/authentic-motion.html

 [4]: http://www.beyondkinetic.com/motion-ui-design-principles/

 [5]: http://www.ui-transitions.com
