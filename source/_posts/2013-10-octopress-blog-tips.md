---
layout: post
title: Octopress博客技巧
date: 2013/10/20 01:31:00
categories: 
- 技术
tags: 
- octopress
---

## 0.首页仅显示部分

只需要在post的markdown文档里面适当位置加上`<!--more-->`即可。这样就不会在首页显示此代码以后的部分。另外，还会在首页的相同位置添加一个read on的链接，点击即可阅读全文。  

![octopress_logo](http://ginsmile.github.io/images/pic/octopress_logo.png "octopress_logo")

## 1.插入图片

参考[Image Tag](http://octopress.org/docs/plugins/image-tag/)
```
   <img class="right" src="http://ginsmile.github.io/images/pic/octopress_logo.png" width="227" height="227" title="octopress_logo" alt="octopress_logo">
```

## 2.草稿

只需要在新的post的头步加入`published: false`即可。   

比如本文头部为：
```
   ---
   layout: post
   title: "Octopress博客技巧"
   date: 2013-08-29 13:42
   comments: true
   categories: Octopress
   published: false
   ---
```

需要注意的是，在使用preview查看的时候，草稿还是会显示的，但是在deploy的时候，草稿并不会在_deploy中生成，也就是说不会在username.github.io上显示。

## 3.添加类别

单个类别：
```
   categories: octopress
```

多个类别：
```
   #方式一
   categories: [octopress, github, algorithm]
   #方式二
   categories:
   - octopress
   - github
   - algorithm
```

## 4.rake deploy失败的解决办法

rake deploy失败通常是因为不小心在GitHub修改了master分支，错误信息大概如下：
```
   ## Pushing generated _deploy website
   To git@github.com:GinSmile/ginsmile.github.io.git
    ! [rejected]        master -> master (non-fast-forward)
   error: 无法推送一些引用到 'git@github.com:GinSmile/ginsmile.github.io.git'
   提示：更新被拒绝，因为您当前分支的最新提交落后于其对应的远程分支。
   提示：再次推送前，先与远程变更合并（如 'git pull ...'）。详见
   提示：'git push --help' 中的 'Note about fast-forwards' 小节。    
```

这时候，需要修改RakeFile文件（Octopress目录下）来强制推送，这里参考了[stackoverflow的解决办法](http://stackoverflow.com/questions/17609453/rake-gen-deploy-rejected-in-octopress)  

第264行：
```
   system "git push origin #{deploy_branch}"
```

修改为：
```
   system "git push origin +#{deploy_branch}"
```

注意：此方法使强制推送，会删除GitHub上的所有的本地分支没有的提交。记住推送完毕后再把RakeFile文件改回来。

## 5.更换网页favcion

这个只需要拿一个新的16×16的favicon.png的图片来替换source/favicon.png即可。然后`rake generate

`，`rake preview`就会在localhost:4000端口看到结果。不过有时会由于缓存的原因不能马上看到结果。

## 6.rake preview 命令执行后的 `TCPServer Error: Address already in use` 错误

这种情况，是因为端口已经被使用了，就需要找到占用端口的进程，然后杀掉！
```
   $ lsof -wni tcp:4000
   $ kill -9 PID
```

PID指的是杀掉的进程的ID，可以从第一个命令中获得。

## 7.错误 WARN Could not determine content-length of response body 的解决

这是一Webrick引发的问题，详细错误如下：
```
   WARN  Could not determine content-length of response body. Set content-length of the response or set Response#chunked = true
```

可以用以下方法来解决，在`Octopress/Gemfile`中，添加以下命令：
```
   gem 'thin'
```

## 8.bundle install不成功

升级Mac OS到新版本后，出现的一系列错误。

*   首先运行rake命令会出现`Could not find RedCloth-4.2.9 in any of the sources`错误。
*   根据提示运行`bundle install`后，出现`ERROR: Failed to build gem native extension.`错误。
*   根据提示运行`Make sure that`gem install RedCloth -v ‘4.2.9’`succeeds before bundling.`后，又出现安装错误，提示安装本地扩展失败。

其原因是升级新mac系统后未rebuilt之前安装的ruby，所以需要以下步骤来rebuilt
```
   rvm --force install 1.9.2
   gem install bundle --no-ri --no-rdoc
   bundle install
```

## 参考资料

> [stackoverflow/rake-gen-deploy-rejected-in-octopress](http://stackoverflow.com/questions/17609453/rake-gen-deploy-rejected-in-octopress)   

>  [octopress docs/blogging](http://octopress.org/docs/blogging/)   

>  [Chatswood](http://blog.chatswood.org.uk/)   

>  [stackoverflow/warn-could-not-determine-content-length-of-response-body-set-content-length-of](http://stackoverflow.com/questions/9612618/warn-could-not-determine-content-length-of-response-body-set-content-length-of)   

>  [stackoverflow/failed-to-build-gem-native-extension-when-install-redcloth-4-2-9-install-linux](http://stackoverflow.com/questions/12119138/failed-to-build-gem-native-extension-when-install-redcloth-4-2-9-install-linux)
