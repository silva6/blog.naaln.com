---
layout: post
title: 构建音乐库并进行检索
date: 2013/10/04 21:00:00
categories: 
- 技术
tags: 
---

这里介绍使用echoprint的库构建方法在本地建立一个音乐库的过程。 

首先将要建库的音乐放在codegen.exe目录的music文件夹下，文件名暂时只能用英文，中文会悲剧，后面再想办法。 

在这里 [https://github.com/echonest][1] 下载echoprint-server，解压，将API文件夹的文件拷贝到C:\Python27\Lib\site-packages下。 

在python的网站上下载simplejson并安装，网站：

[https://pypi.python.org/pypi/simplejson/1.3][2]

下面是参考例子的一个demo，不上传文件，上传截图吧 

![][3] 

![][4] 

最下面注释掉的内容是在库中检索的时候用的，在这里先是构建库。

运行后建立了库，所有的信息都保存在disk.pkl文件中，在这里只有十首歌建了个库，disk.pkl文件为3.45M 

接下来将最后注释掉的语句恢复，将build_database("music")注释掉，注意这里检索的文件名是test.3gpp，如果你想识别的片段音乐是mp3格式，将其改为test.mp3，将要识别的音频也该为此名，然后运行看看。这里截取了林志炫的凤凰花开的路口的第60秒到第90秒片段，识别得到正确的结果。 

![][5] 

如果识别的时库里没有的歌，会返回score比较高的结果，还有其他接口是没有匹配时返回无匹配的。先记录这么多吧。   

via: [http://blog.sina.com.cn/s/blog_7985987f010197ol.html][6] 

 [1]: https://github.com/echonest

 [2]: https://pypi.python.org/pypi/simplejson/1.3

 [3]: https://ww1.sinaimg.cn/large/006tNc79gw1f511azjwovj30j60950tt

 [4]: https://ww3.sinaimg.cn/large/006tNc79gw1f511bcq5jzj30j60h0jte

 [5]: https://ww2.sinaimg.cn/large/006tNc79gw1f511eox6ebj30hf034glx

 [6]: http://blog.sina.com.cn/s/blog_7985987f010197ol.html
