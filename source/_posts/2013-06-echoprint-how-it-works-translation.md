---
layout: post
title: Echoprint How it works（翻译）
date: 2013/06/17 12:03:00
categories: 
- 技术
tags: 
- echoprint
- 翻译
---

欢迎来到EchoprintEchoprint 是一个开源的音乐是识别系统，他允许任何人在他们自己的应用上构建音乐指纹识别系统。感谢[The Echo Nest][1]的技术支持，以及[Musicbrainz][2]的合作。 

→ [Home / FAQ][3]

→ [Download from GitHub][4]

→ [How it works][5]

→ [Get started][6]

→ [Contact / Support][7]

→ [Data access][8]

→ [Server][9]

→ [Codegen][10]

→ [Twitter - @echonest][11]

![请输入图片描述][12] 

## 他是怎么工作的？ 

Echoprint 在手机或者电脑上接收音乐，并识别它是什么歌曲。它运行的十分的快，并且有十分高的准确性，它可以辨别十分嘈杂的版本或者用移动设备录音有很多外界干扰的声音。 

自从每个人可以免费使用Echoprint或者安装服务之后，我们希望它可以成为现实音乐识别技术。并且因为所有数据都是可用的，我们希望Echoprint 可以很快的拆分世界上的所有音乐。 

## 技术细节 Echoprint 

包涵三个部分：代码生成器，用来转化声音成代码；服务器，用来储存，索引代码；数据，可以从合作伙伴或者其他Echoprint用户中获取。 

代码生成器从音频信号中计算 {时间，hash}的键值对，采用了先进的信号处理技术对噪声处理和修改。从一个11kHz的单声道信号开始，我们计算白化滤波器，进行8进制子带分解。那个分解是搜索一个起始位置，这个位置被智能的排在2位的空间和存储时间的hash键值对中。 

![请输入图片描述][13]

服务器代码索引每出现一个倒排索引，存储每个轨道的当长列表快速查找时。在计算需要的时候，我们也会对每个音轨也储存代码资料。Querying 是在倒序索引中查询的代码，返回的数值是在所查询的结果与目标音轨的重合值。然而，在实践中，我们过滤时间的直方图的匹配，以确保大致秩序。这需要每次都存储的数据。 目前，我们正在准备一份白皮书来提供更多的细节，当然，也会提供源代码。 

## 精度细节 

我们通过我们的“bigeva”软件跟踪精度， 这个软件在服务器安装时已经包涵。这里有一些初步的结果： 

<script src="https://gist.github.com/1041616.js?file=gistfile1.txt"></script>

原文: [http://echoprint.me/][15] 

翻译: [Liam][16]

 [1]: http://the.echonest.com/

 [2]: http://musicbrainz.org/

 [3]: http://blog.naaln.com/2013/06/echoprint-home-faq-translations

 [4]: http://github.com/echonest/

 [5]: http://blog.naaln.com/2013/06/echoprint-how-it-works-translation

 [6]: http://blog.naaln.com/2013/06/echoprint-get-started-translate

 [7]: http://echoprint.me/contact

 [8]: http://blog.naaln.com/2013/06/echoprint-data-access-translation

 [9]: http://blog.naaln.com/2013/06/echoprint-server-translation

 [10]: http://blog.naaln.com/2013/06/echoprint-codegen-translation

 [11]: http://twitter.com/echonest

 [12]: https://ww4.sinaimg.cn/large/006tNc79gw1f5123huzanj306y028748

 [13]: https://ww3.sinaimg.cn/large/006tNc79gw1f512mu72ebj30g108h0te

 [14]: http://musicbrainz.org/

 [15]: http://echoprint.me/how

 [16]: http://blog.naaln.com/2013/06/echoprint-how-it-works-translation
