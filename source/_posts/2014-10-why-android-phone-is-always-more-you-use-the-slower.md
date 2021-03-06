---
layout: post
title: 为啥 Android 手机总会越用越慢？
date: 2014/10/20 10:07:56
categories: 
- 技术
tags: 
---

根据第三方的调研数据显示，有 77% 的 Android 手机用户承认自己曾遭遇过手机变慢的影响，百度搜索 "Android+ 卡慢 "，也有超过 460 万条结果。在业内，Android 手机一直有着 " 越用越慢 " 的口碑，这个现象甚至超出了硬件范畴——很多中高端 Android 手机在硬件参数上都优于同一代 iPhone，但是它们仍然会在使用半年到一年的时间后进入 " 欠流畅 " 的状态——这无疑是一件令人困扰的事情。

然而，若是要回答这个问题，我们需要追溯到上个世纪，去寻找智能手机的起源。

西方历史及奇幻文学作品十分热衷于表达 " 血统 " 的设定，其传统文化认为血统可以决定天赋，并引出 " 命运是否被注定 " 的哲学思考。比如大家比较熟知的《哈利波特》系列，解构之后就不难发现，这实际上是一部讲述格兰芬多与斯莱特林两支血统及其传人的厮杀史（哈利波特是格兰芬多的后代，继承了其勇气，伏地魔是斯莱特林的后代，拥有着其野心），而无处不在的预言（一个终将杀死另一个），也贯彻了西方惯有的宿命论情结。

到了科技行业，" 血统 " 的定义被 " 基因 " 所取代，一个公司有着什么样的基因，决定了它的擅长领域，这种评价也被广泛接受，成为唯物时代独树一帜的唯心理念，并经受住了事实考验——当我们试图解释微软失落于互联网、Google 败退于社交网络、百度止步于电子商务的原因时，都会由衷的感慨 " 原来剧本早在多年以前就已经写好了 "。

同样，为什么 Android 手机的 " 卡慢 " 问题永远比 iPhone 要更加严重，它的答案也从一开始就注定了。

1965 年，贝尔实验室、通用电气和麻省理工学院开始合作开发一套能够兼顾易用性和强大性的操作系统，经过六年时间的通力协作，贝尔实验室的一名软件工程师 Ken Thompson 在休假期间完成了一个名为 Unix 的系统编写，并最终成为贝尔实验室的母公司、美国电信巨头 AT&T 的商业产品，并启动了长达数十年的版权运作。尽管后来有着许多变种，但是从严格意义上来讲，Unix 不是一个开源的操作系统。

1991 年，一个芬兰的大学生、同时也是计算机黑客的 Linus Torvalds，他对 Unix 十分着迷，但是买不起运行 Unix 需要的工作站，所以他就尝试自己以同样的编程方式写了一个名为 Linux 的操作系统，并在自由软件之父 Richard Stallman 的精神鼓舞之下，将 Linux 加入到了自由软件基金（FSF）当中，允许所有人使用、拷贝、修改甚至销售 Linux 系统，同时承担开源义务，禁止把 Linux 封闭化的企图。

之所以要如此大费周章的讲述 Unix 和 Linux 两个操作系统的故事，是因为 iOS 和 Android，正是分别基于 Unix 和 Linux 而衍生出来的作品。也就是说，是 Unix 和 Linux 的两种特性，造成了 iPhone 与 Android 手机在使用体验上的巨大差异。

乔布斯曾经邀请 Linux 的创始者 Linus Torvalds 到苹果工作，放弃 Linux 的开源，协助开发 Mac OS 封闭式的 Mach 内核，后者与乔布斯大吵一架之后明确表示拒绝。而从 Mac OS 开始，苹果就将操作系统的私有化视为企业战略，用乔布斯的话来讲，他是将 iOS 装进了 iPhone 这个盒子里，然后卖给了用户。所以，iPhone 之所以不会出现 " 越用越卡 " 的情况，是因为苹果公司对它的手机从硬件到软件拥有最高的管理权限，在封闭式的环境中，来自第三方的应用程序无法调用超过 iPhone 承受限度的指令，自然也不可能造成持续性的系统损伤。

反观 Android 手机，由于开源的公开条件，Google 无法从代码这一端口约束第三方的应用程序，同时，由于 Linux 核心设定应用在调取系统功能时一定要取得 ROOT 权限，这也导致大量应用因为单一功能的实现需求而获得整个 ROOT 层面的支配，可以在 Android 手机的任意储存位置进行读写，这种高自由度无异于开启了潘多拉魔盒，让 Android 手机无法对恶意 App 事先设防。这也是开源软件备受争议、且在商用领域遭到抵触的原因：它只关心是否授予了用户自由——这个自由也包括逾越边界的自由——而没有从最坏的出发点去考虑如何规避被滥用的风险。尽管 Google 作为巨头，一直在尝试对产业链进行统一管理，但是当这条产业链日益庞大、连 Google 也只能扮演其中之一的角色时，Android 的失控也就在情理之中了。比如，Android 的最新版本通常需要花费超过一年半的时间，才能使激活它的 Android 手机占比超过 50%，但是 iOS 7 只用了两个月，就让半数以上的 iPhone 都更新完毕。另外，一款应用程序如果被苹果从 App Store 中惩罚出去，它就再也无法被安装到任何一款合法的 iPhone 里面，但是如果一款应用程序被 Google 驱逐出 Google Play，但是它还是可以登录各种第三方应用市场，提供正常的下载和安装。

所以，Android 的这种天生短板，又催生出了一个 " 手机调校 " 的市场，并带动了新的产业链。

" 手机调校 " 的第一级，在于系统层。在 Android 4.4 以及之后的 Android L 的规划中，它将应用程序的运行模式由 Dalvik 换成了 ART，其原理简单来说是 " 预编译 " 效果，即当一款应用程序在第一次被安装到 Android 时，它的字节码就已经被编译成为了本地的机器码，减少后续运行应用程序时的启动和执行时间。

根据 Google 自己公布的结果，在不同的性能测试 App 中，ART 的速度对比 Dalvik 的平均提升幅度达到了 80%，在某些项目中，ART 的提升幅度甚至超过了 1.5 倍，这个结果可谓非常喜人。

这是 Google 希望从源头解决 Android 卡慢问题的努力，但是这只是对性能优化有着作用，无法解决因为应用程序违规调用资源而产生的问题。同时，由于在安装应用程序时进行了 " 预编译 "，整个安装时间将会变长，安装完毕后生成的文件也会变大，比如最新的 Google+ 安装包只有 6.9M，但是它安装后的 APK 大小达到了 28.3M，这对 Android 手机储存空间又存在过多占用的问题。

" 手机调校 " 的第二级，在于 ROM 层。作为全球最大的 Android 市场，中国的许多手机厂商都以开发专用 ROM 来为销售产品添彩，大多数的 ROM，也都会考虑对 Android 系统进行优化，比如 MIUI V6 就宣称 " 引入多种 Linux 系统内核内存优化技术，提高应用运行效率 "。

也就是说，与 Google 做的事情一样，ROM 厂商主要的优化工作，也是对 Linux 动刀，打上各种补丁，使其底层语言能够更好的适配到各种手机终端上。还是以 MIUI V6 为例，在介绍新特性时，其有这么一条："ZRAM 调度优化技术 "，其实 ZARM 就是 Linux 内核里的一个内存模块，作用就是在内存中划出一个部分出来充当虚拟盘，来承载 Linux 的交换分区，将一些任务压缩容纳进去，使内存的使用率提高，让 CPU 来为内存服务（因为目前的智能手机普遍 CPU 过剩、而内存才是瓶颈）。

不过，ROM 也是一把双刃剑，它对于 Android 底层系统的修改，以及它对于内存空间的占用，又都有增加手机负载的风险。

" 手机调校 " 的第三级，在于应用层。大量应用程序在手机中发生的意外或故意占用事件，是造成 Android 手机越来越慢的最核心原因。过多的应用程序热衷于滞留在内存空间里、以及将大量碎片留在储存空间里，是带来麻烦的罪魁祸首。这也是为什么即时清理类应用得以逐渐成为 Android 手机标配。

Android 系统有七类进程，分别是前台进程、可见进程、主要服务、次要服务、后台进程、内容供应节点、空进程，在没有安装清理类应用的时候，一部 Android 手机只能依赖系统默认的分配机制来自动调节内存使用，只要应用程序提出请求，大部分进程只要打开后都会被保留在内存当中，这原本是为了让用户在再度激活这些进程时不需要重新载入、节省时间的初衷考虑，但是 Android 没有料到激烈的市场竞争会驱使应用程序产生 " 劣币驱良币 " 的趋势，很多开发者出于商业目的，在不需要留存在内存的情况下也想方设法的让应用程序保持潜在运行状态，一个两个还好说，但是一旦数量更多，Anrdoid 手机就会频频卡顿和发热。

以 Android 手机清理类应用 " 猎豹清理大师 " 为例，它清理的进程类型，主要放在后台进程、次要服务、内容供应节点和空进程：

后台进程（Hidden）——这个是最优先被扫描和识别出来的进程，因为大部分 Android 用户在切换应用程序时都不会使用返回键退出，而是直接按下 Home 键，前者会让应用进入空进程（占用资源相对较小），而后者则会保留为后台进程（占用资源相对更大），尤其是当游戏类 App 在后台运行时，它会和其他 App 争抢资源，而不会在乎那款 App 是不是用户正在使用。根据猎豹清理大师的统计，约有 20% 的常用 App 即使不运行时也在后台启动联网，主要是提交产品及用户使用信息、获取广告信息、查询是否升级等。

次要服务（Secondary Server）——比如某些企业套件、邮箱联系人、触控接口等，这些进程很多都是系统自带的，有些用户会使用，但是有些用户也可能不会使用或已经有了替代应用，所以猎豹清理大师的清理逻辑是基于用户行为和授权来建立（分为建议清理和深度清理两类）；

内容供应节点（Content Provider）——这部分进程没有程序实体，仅仅提供内容给其他应用使用，比如日历供应节点、邮件供应节点等，除了占用内存资源之外，它还会占用网络，所以也会给 Android 手机造成不必要的负担；

空进程（Empty）——如果是通过返回键退出应用，大部分的应用也会在 Android 手机的内存里遗留一个空的进程，这个进程没有数据运行，但是会记录应用的历史信息，几乎没有任何价值，同样，这部分进程内容被干掉的优先级也很高。

除了对内存的过度消耗之外，Android 手机也容易在储存中积累大量冗余数据，包括无法卸载的预装应用、卸载之后的残存文件以及使用应用的过程中产生的缓存，由于 Android 本身没有提供管理工具，即使将手机连接电脑之后也是如同 Windows 树状结构一样的文件夹包，用户很难独立判断哪些文件夹可以删除、哪些文件夹是系统必备的，最后也会导致手机尺寸空间愈来愈窄的情况。

" 手机调校 " 的问题，可能又回带来用户操作的负担增加，其心理压力甚于行为压力，玩着手机还不忘隔三差五的使用清理功能，这种与 iPhone 相比 " 别具特色 " 的操作习惯，也是 Android 手机永远像一个半成品或工程机的原因。

【作者 阑夕 微信公众账号：techread】
