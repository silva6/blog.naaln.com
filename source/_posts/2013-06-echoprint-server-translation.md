---
layout: post
title: Echoprint  Server （翻译）
date: 2013/06/17 12:07:00
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

## 服务 Echoprint 

服务器可以通过Echoprint代码插入或者查询百万个音轨来匹配歌曲。它是基于[Apache Solr][13]，并且也可以使用[Tokyo Tyrant][14]，一个快速的key-value存储模式。 

Echoprint的服务器代码（Python的粘合和匹配的代码以及Solr的扩展）是根据Apache2.0许可。Solr 和Tokyo Tyrant 是单独授权的 (分别为Apache 和 LGPL 。) 该服务器还包括bigeval，用于评估指纹识别的准确性。 需要注意的是在正常使用中，你不需要引导Echoprint服务器。只要你的Echoprint服务器已经启动，就可以使用[Echo Nest ][15]歌曲/识别。随着时间的推移，别人也将可以使用服务器的镜像Echoprint数据。 

Visit the echoprint-server GitHub page for the source and installation instructions.

访问 [echoprint-server][16] GitHub page查看源码和安装介绍。

原文: [http://echoprint.me/server][17]

翻译: [Liam][18]

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

 [13]: http://lucene.apache.org/solr/

 [14]: http://fallabs.com/tokyotyrant/

 [15]: http://developer.echonest.com/docs/v4/song.html#identify

 [16]: https://github.com/echonest/echoprint-server

 [17]: http://echoprint.me/server

 [18]: http://blog.naaln.com/2013/06/echoprint-server-translation
