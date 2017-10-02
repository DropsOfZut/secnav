/**
 * Created by Rick on 2017/7/26.
 */
Vue.component('item', {
    props: ['item'],
    template: '<li><el-tooltip class="item" effect="dark" :content="item.desc" placement="top"><a :href="item.href" :data-tip="item.desc" target="_blank">{{ item.name }}</a></el-tooltip></li>'
})

var records = [
            { classify: '安全圈',
                levels: [
                    {
                        level: '安全媒体',
                        items: [
                            {name:"freebuf", desc:"关注黑客与极客", href:"http://www.freebuf.com/"},
                            {name:"安全客", desc:"有思想的安全新媒体", href:"http://bobao.360.cn/"},
                            {name:"MottoIN", desc:"专注于互联网信息安全的科技媒体", href:"http://www.mottoin.com/"},
                            {name:"安全脉搏", desc:"分享技术，悦享品质", href:"https://www.secpulse.com/"},
                            {name:"安全盒子", desc:"专注于互联网安全的科技媒体", href:"http://www.secbox.cn"},
                            {name:"E安全", desc:"全球网络安全资讯新传媒", href:"https://www.easyaq.com/"},
                            {name:"嘶吼", desc:"回归最本质的信息安全", href:"http://www.4hou.com/"},
                            {name: "安全牛", desc: "安全牛，才是真牛", href: "http://www.aqniu.com/"},
                            {name:"SecWiki", desc:"安全维基", href:"https://www.sec-wiki.com/"},
                            {name:"91Ri", desc:"我的安全攻防指南", href:"http://www.91ri.org/"},
                            {name:"爱尖刀", desc:"知娱团队旗下媒体运营平台", href:"http://www.ijiandao.com/"}
                        ]
                    },
                    {
                        level: '安全论坛',
                        items: [
                            {name:"V2EX", desc:"V2EX", href:"https://www.v2ex.com/"},
                            {name:"土司论坛", desc:"低调求发展，潜心学安全", href:"https://www.t00ls.net/"},
                            {name:"Ali先知社区", desc:"安全技术社区", href:"https://xianzhi.aliyun.com/forum/"},
                            {name:"i春秋论坛", desc:"白帽黑客论坛",href:"https://bbs.ichunqiu.com/"},
                            {name:"安全圈子", desc:"安全圈子", href:"https://www.secquan.org/"},
                            {name:"吾爱破解论坛", desc:"", href:"http://www.52pojie.cn/"},
                            {name:"看雪论坛", desc:"致力于PC、移动、物联网安全研究及逆向工程相关的开发者社区", href:"http://bbs.pediy.com/"},
                            //{name:"Metasploit渗透测试论坛", desc:"", href:"http://www.metasploit.cn/"},
                            //{name:"Kali Linux论坛", desc:"kali linux论坛", href:"http://www.kali.org.cn/forum.php?milw0rm.cn"},
                            //{name:"ShellCode安全联盟", desc:"", href:"http://www.sh3llc0de.com/forum.php"},
                            {name:"NoSafe", desc:"专注网络安全", href:"https://www.nosafe.org/forum.php"},
                            {name:"90sec论坛", desc:"90sec是国内顶尖的信息安全论坛", href:"https://forum.90sec.org/"},
                            //{name:"HACK80", desc:"最专业的黑客技术论坛", href:"http://www.hack80.com/"},
                            {name:"逆向未来", desc:"专注于移动安全领域", href:"http://www.pd521.com/"},
                            {name:"暗安全技术小组", desc:"暗安全技术小组", href:"https://forum.cnsec.org/"},
                            {name:"BinVul二进制论坛", desc:"二进制论坛", href:"http://www.binvul.com/"},
                            {name:"学破解论坛", desc:"软件逆向分析工程师的摇篮", href:"http://www.xuepojie.com/"},
                            //{name:"飘云阁安全论坛", desc:"软件安全，移动安全", href:"http://www.chinapyg.com/"},
                            //{name:"赏金论坛", desc:"逆向工程，操作系统，加密解密", href:"http://www.sgoldcn.com/"},
                            //{name:"VC驿站", desc:"C++,C语言，MFC编程学习交流论坛", href:"http://www.cctry.com/"},
                            //{name:"IT学客论坛", desc:"IT学客论坛", href:"http://bbs.itxueke.com/forum.php"},
                            //{name:"鱼C工作室", desc:"免费编程视频", href:"http://bbs.fishc.com/forum.php"},
                            //{name:"segmentfault", desc:"segmentfault", href:"https://segmentfault.com/"},
                            {name:"IOSRE|IOS逆向", desc:"逆向论坛", href:"http://www.iosre.com/"},
                            {name:"70sec", desc:"关注网络信息安全", href:"https://www.70sec.com/"},
                        ]
                    },
                    {
                        level: '安全会议',
                        items: [
                            { name: "blackhat", desc: "", href: "http://www.blackhat.com/"},
                            { name: "DEF CON", desc: "Hacking Conference", href: "https://www.defcon.org/"},
                            { name: "中国互联网安全大会（ISC）", desc: "", href: "http://isc.360.cn"},
                            { name: "KCon黑客大会", desc: "汇聚黑客的智慧", href: "http://kcon.knownsec.com/"},
                            { name: "FreeBuf互联网安全创新大会（FIT）", desc: "", href: "http://fit.freebuf.com/"},
                            { name: "GeekPwn（极棒）", desc: "全球首个关注智能生活的安全极客大赛", href: "http://geekpwn.org"},
                            { name: "HackPwn", desc: "真极客，放胆破", href: "http://hackpwn.360.cn"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '知识分享',
                        items: [
                            { name: "Sec-News", desc: "安全文摘", href: "http://wiki.ioin.in/"},
                            { name: "信息安全知识库", desc: "沉淀知识，分享经验", href: "http://www.vipread.com/"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '漏洞报告',
                        items: [
                            { name: "补天漏洞响应平台", desc: "360补天", href: "https://butian.360.cn/"},
                            { name: "教育行业漏洞报告平台（Beta）", desc: "教育行业漏洞", href: "https://src.edu-info.edu.cn/"},
                            { name: "漏洞银行", desc: "漏洞银行(BUGBANK)", href: "https://www.bugbank.cn/"},
                        ]
                    },
                    {
                        level: '国家安全',
                        items: [
                            { name: "国家互联网应急中心", desc: "国家互联网应急中心", href: "http://www.cert.org.cn/"},
                            { name: "国家信息安全漏洞库", desc: "国家信息安全漏洞库", href: "http://www.cnnvd.org.cn/"},
                            { name: "国家计算机病毒处理中心", desc: "国家计算机病毒处理中心", href: "http://www.cverc.org.cn/"},
                            { name: "中国互联网信息中心", desc: "中国互联网信息中心", href: "http://www.cnnic.net.cn/"},
                            { name: "国家信息技术安全研究中心", desc: "国家信息技术安全研究中心", href: "http://www.nitsc.cn/"},
                        ]
                    },
                    {
                        level: '漏洞信息',
                        items: [
                            { name: "Seebug", desc: "洞悉漏洞", href: "https://www.seebug.org/"},
                            { name: "Bugscan", desc: "漏洞插件社区", href: "http://www.bugscan.net/"},
                            { name: "Exploit-DB", desc: "Exploits Database", href: "https://www.exploit-db.com/"},
                            { name: "CVE通用漏洞披露", desc: "CVE中文漏洞信息库", href: "http://cve.scap.org.cn/"},
                            { name: "常见漏洞（360网站安全）", desc: "常见漏洞（360网站安全）", href: "http://webscan.360.cn/vul/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '众测平台',
                        items: [
                            { name: "云盾先知", desc: "国内首家确认漏洞后24小时内发放奖金的安全众测平台", href: "https://xianzhi.aliyun.com/"},
                            { name: "漏洞盒子", desc: "互联网安全测试平台", href: "https://www.vulbox.com/"},
                            { name: "SOBUG", desc: "安全路 常相伴", href: "http://www.sobug.cn/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: 'SRC',
                        items: [
                            {name:"TSRC",desc:"腾讯安全应急响应中心",href:"https://security.tencent.com/"},
                            {name:"ASRC",desc:"阿里安全应急响应中心",href:"https://security.alibaba.com/"},
                            {name:"1SRC",desc:"1号店安全应急响应中心",href:"http://security.yhd.com/"},
                            {name:"360SRC",desc:"360安全应急响应中心",href:"http://security.360.cn/"},
                            {name:"71SRC",desc:"爱奇艺安全应急响应中心",href:"https://security.iqiyi.com/"},
                            {name:"AFSRC",desc:"蚂蚁金服安全应急响应中心",href:"https://security.alipay.com/sc/afsrc/home.htm"},
                            {name:"BSRC",desc:"百度安全应急响应中心",href:"http://sec.baidu.com/views/main/index.html"},
                            {name:"CSRC",desc:"携程安全应急响应中心",href:"https://sec.ctrip.com/"},
                            {name:"CSRC",desc:"酷派安全应急响应中心",href:"http://security.coolpad.com/"},
                            {name:"DDSRC",desc:"当当网安全响应中心",href:"http://weibo.com/dsrcsecurity"},
                            {name:"DSRC",desc:"滴滴出行安全应急响应中心",href:"http://sec.didichuxing.com/"},
                            {name:"DSRC",desc:"点融网安全应急响应中心",href:"http://security.dianrong.com/index"},
                            {name:"ESRC",desc:"饿了么安全应急响应中心",href:"https://security.ele.me/"},
                            {name:"FSRC",desc:"焦点安全应急响应中心",href:"http://security.focuschina.com/"},
                            {name:"FUSRC",desc:"富友安全应急响应中心",href:"https://fsrc.fuiou.com/"},
                            {name:"JJSRC",desc:"竞技世界安全应急响应中心",href:"https://security.jj.cn/"},
                            {name:"JSRC",desc:"京东安全应急响应中心",href:"http://security.jd.com/"},
                            {name:"KSRC",desc:"金山安全应急响应中心",href:"http://sec.kingsoft.com/"},
                            {name:"LSRC",desc:"联想集团安全应急响应中心",href:"http://lsrc.lenovo.com/index.htm"},
                            {name:"MiSRC",desc:"小米安全中心",href:"https://sec.xiaomi.com/#/index"},
                            {name:"MSRC",desc:"魅族安全响应中心",href:"http://sec.meizu.com/"},
                            {name:"NSC", desc:"网易安全应急响应中心",href:"http://anquan.163.com/module/hole/new-hole.html"},
                            {name:"PPDSRC",desc:"拍拍贷安全应急响应中心",href:"http://sec.ppdai.com/indexmain"},
                            {name:"PSRC",desc:"平安集团安全应急响应中心",href:"http://security.pingan.com/"},
                            {name:"QSRC",desc:"去哪儿安全应急响应中心",href:"http://security.pingan.com/"},
                            {name:"QSRC",desc:"快播安全应急响应中心", href:"http://security.kuaibo.com/"},
                            {name:"SDVRC", desc:"安全狗漏洞响应中心", href:"http://security.safedog.cn/index.html"},
                            {name:"SFSRC",desc:"深信服科技安全响应中心", href:"http://security.sangfor.com.cn/index.php"},
                            {name:"SGSRC",desc:"搜狗安全应急响应中心", href:"http://sec.sogou.com/"},
                            {name:"SHSRC",desc:"搜狐安全应急响应中心", href:"http://weibo.com/sohusecurity"},
                            {name:"SNSRC",desc:"苏宁安全应急响应中心", href:"http://security.suning.com/"},
                            {name:"SSRC", desc:"新浪安全应急响应中心", href:"http://sec.sina.com.cn/"},
                            {name:"TNSRC", desc:"途牛安全应急响应中心", href:"https://sec.tuniu.com/"},
                            {name:"VSRC", desc:"唯品会信息安全应急响应中心", href:"https://sec.vip.com/"},
                            {name:"WSRC", desc:"微博安全应急响应中心", href:"http://wsrc.weibo.com/"},
                            {name:"XLSRC", desc:"迅雷安全应急响应中心", href:"http://safe.xunlei.com/about.html#"},
                            {name:"YISRC", desc:"宜人贷安全应急响应中心", href:"https://security.yirendai.com/"},
                            {name:"YSRC", desc:"同程安全应急响应中心", href:"https://sec.ly.com/"},
                            {name:"YSRC", desc:"萤石安全应急响应中心", href:"http://ysrc.ys7.com/"},
                            {name:"YYSRC", desc:"欢聚时代安全应急响应中心", href:"http://security.yy.com/"},
                            {name:"ZSRC", desc:"猪八戒网安全应急响应中心", href:"https://sec.zbj.com/"},
                            {name: "", desc: "", href: ""},
                            {name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: 'CTF',
                        items: [
                            {name:"pwnhub",desc:"pwnhub",href:"https://pwnhub.cn/index"},
                            {name: "XCTF", desc: "XCTF", href: "https://www.xctf.org.cn/xctf/"},
                            {name:"XDCTF",desc:"西电CTF",href:"http://ctf.xidian.edu.cn/"},
                            {name:"CTF Rank",desc:"CTF Rank",href:"https://www.ctfrank.org/"},
                            { name: "问鼎杯", desc: "杭电CTF", href: "http://sec.hdu.edu.cn"},
                        ]
                    },
                ]
            },
            { classify: '在线教育',
                levels: [
                    {
                        level: '在线学习',
                        items: [
                            {name:"合天网安实验室",desc:"合天网安实验室",href:"http://www.hetianlab.com/"},
                            {name:"i春秋学院",desc:"专业的网络安全|信息安全在线学习培训平台",href:"https://www.ichunqiu.com/"},
                            {name:"实验吧",desc:"让实验更简单",href:"http://www.shiyanbar.com/"},
                            {name:"实验楼",desc:"在线做实验，高效学编程",href:"https://www.shiyanlou.com/"},
                            {name:"FreeBuf公开课",desc:"互联网安全在线教育旗舰",href:"http://open.freebuf.com/"},
                            {name: "网易云课堂", desc: "领先的实用技能学习平台", href: "http://study.163.com/"},
                            {name:"腾讯课堂",desc:"专业的在线教育平台",href:"https://ke.qq.com/index.html"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '集成环境',
                        items: [
                            {name:"reversing.kr",desc:"reversing",href:"http://reversing.kr/"},
                            {name:"pwnable.kr",desc:"pwnable",href:"http://pwnable.kr/"},
                            {name:"Exploit Exercises",desc:"Exploit Exercises",href:"https://exploit-exercises.com/"},
                            {name:"OverTheWire",desc:"OverTheWire",href:"http://overthewire.org/"},
                            {name:"netgarage",desc:"netgarage",href:"https://io.netgarage.org/"},
                            {name:"bin干货",desc:"bin干货",href:"http://security.cs.rpi.edu/courses/binexp-spring2015/"},
                            {name: "RootMe", desc: "challenge your hacking skills", href: "https://www.root-me.org"},
                            {name:"RedTigers Hackit",desc:"RedTigers Hackit",href:"http://redtiger.labs.overthewire.org/"},
                            {name:"prompt",desc:"prompt",href:"http://prompt.ml/"},
                            {name:"XSS Challenges",desc:"XSS Challenges",href:"http://xss-quiz.int21h.jp/"},
                            {name:"escape",desc:"escape",href:"https://alf.nu/alert1"},
                            {name:"PentesterLab",desc:"LEARN WEB PENETRATION TESTING",href:"https://pentesterlab.com/"},
                            {name:"XSS-game",desc:"xss-game",href:"https://xss-game.appspot.com/"},
                            {name:"sqli-labs",desc:"sqli-labs",href:"https://github.com/Audi-1/sqli-labs"},
                            {name:"DVWA", desc: "http://www.dvwa.co.uk/", href: "http://www.dvwa.co.uk/"},
                            {name:"hackinglab",desc:"网络信息安全攻防学习平台",href:"http://hackinglab.cn/"},
                            {name:"XCTF实训平台",desc:"XCTF实训平台",href:"http://oj.xctf.org.cn/"},
                            {name:"南邮CTF平台",desc:"南邮CTF平台",href:"http://ctf.nuptzj.cn/"},
                        ]
                    },
                    {
                        level: '思维脑图',
                        items: [
                            { name: "知道创宇技能表", desc: "知道创宇技能表", href: "http://blog.knownsec.com/Knownsec_RD_Checklist/"},
                            { name: "网络安全人员技能表", desc: "网络安全人员技能表", href: "https://www.sec-wiki.com/skill/"},
                            { name: "StuQ技能图谱", desc: "StuQ技能图谱", href: "http://skill-map.stuq.org/"},
                            { name: "Mind-Map", desc: "各种安全相关思维导图整理收集", href: "https://github.com/phith0n/Mind-Map"},
                            { name: "sec-chart", desc: "安全思维导图集合", href: "https://github.com/SecWiki/sec-chart"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                ]
            },
            { classify: '代码编程',
                levels: [
                    {
                        level: 'Python',
                        items: [
                            {name:"廖雪峰python教程",desc:"廖雪峰python教程",href:"https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000"},
                            {name:"Python风格指南（Google）",desc:"Google Python风格",href:"https://zh-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/python_style_rules/"},
                            { name: "Python最佳实践指南中文版", desc: "Python最佳实践指南", href: "http://pythonguidecn.readthedocs.io/zh/latest/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: 'PHP',
                        items: [
                            {name:"新手如何学习PHP",desc:"新手如何学习PHP",href:"https://www.zhihu.com/question/20003635"},
                            {name:"w3schools PHP教程",desc:"w3PHP教程",href:"https://www.w3schools.com/php/default.asp"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: 'WEB前端',
                        items: [
                            {name:"Bootstrap（中文）",desc:"bootstrap中文网",href:"http://www.bootcss.com/"},
                            {name:"vue.js",desc:"渐进式JavaScript 框架",href:"https://cn.vuejs.org/"},
                            { name: "ECMAScript 6 入门", desc: "ECMAScript 6 入门", href: "http://es6.ruanyifeng.com/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '安全研发',
                        items: [
                            { name: "OWASP安全编码指南", desc: "OWASP安全编码规范快速参考指南", href: "http://www.owasp.org.cn/owasp-project/secure-coding"},
                            { name: "首席安全官（CISO）应用安全指南", desc: "首席安全官（CISO）应用安全指南", href: "http://www.owasp.org.cn/owasp-project/CISO-guide"},
                            { name: "2017 OWASP TOP 10", desc: "2017 OWASP TOP 10", href: "http://www.owasp.org.cn/owasp-project/2017-owasp-top-10"},
                        ]
                    },
                ]
            },
            { classify: '安全组织',
                levels: [
                    {
                        level: '老牌厂商',
                        items: [
                            {name:"启明星辰",desc:"领航信息安全",href:"http://www.venustech.com.cn/"},
                            {name:"绿盟科技",desc:"绿盟科技",href:"http://www.nsfocus.com.cn/"},
                            {name:"深信服",desc:"让IT更简单，更安全，更有价值",href:"http://www.sangfor.com.cn/"},
                            {name:"华为",desc:"华为",href:"http://www.huawei.com/cn/"},
                            {name:"360企业安全",desc:"360企业安全",href:"http://b.360.cn/"},
                            {name:"亚信安全",desc:"云安全防毒与网络安全的全球领导者",href:"http://www.asiainfo-sec.com/"},
                            {name:"天融信",desc:"天融信",href:"可信网络 安全世界"},
                            {name:"卫士通",desc:"卫士通",href:"http://www.westone.com.cn/"},
                            {name:"新华三",desc:"新华三",href:"http://www.h3c.com/cn/"},
                            {name:"安恒信息",desc:"安恒信息",href:"http://www.dbappsecurity.com.cn/"},
                            {name:"美亚柏科",desc:"电子数据取证与网络空间安全专家",href:"http://300188.cn/"},
                            {name:"山石网科",desc:"创新的网络安全厂商",href:"https://www.hillstonenet.com.cn/"},
                            {name:"知道创宇",desc:"网络空间安全专家",href:"https://www.knownsec.com/#/"},
                            {name:"梆梆安全",desc:"移动安全领导品牌",href:"https://www.bangcle.com/"},
                            {name:"安天",desc:"下一代反病毒引擎创造者",href:"http://www.antiy.com/"},
                            {name:"恒安嘉新",desc:"恒安嘉新",href:"http://eversec.com.cn/"},
                            {name:"蓝盾股份",desc:"智慧安全领导者",href:"http://www.bluedon.com/"},
                            {name:"北信源",desc:"中国终端安全管理市场领导者",href:"http://www.vrv.com.cn/"},
                            {name:"迪普科技",desc:"迪普科技",href:"http://www.dptech.com/"},
                            {name:"通付盾",desc:"专注金融科技安全",href:"https://www.tongfudun.com/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '后起之秀',
                        items: [
                            { name: "长亭科技", desc: "长亭科技", href: "https://chaitin.cn/"},
                            { name: "默安科技", desc: "墨安科技", href: "https://www.moresec.cn/"},
                            { name: "白帽汇", desc: "专注于安全大数据 企业威胁情报", href: "http://www.baimaohui.net/"},
                            { name: "四叶草安全", desc: "四叶草安全", href: "http://www.seclover.com"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '安全团队',
                        items: [
                            { name: "360 UnicornTeam", desc: "专注于使用无线电技术的所有领域的信息安全相关研究", href: "http://unicorn.360.cn"},
                            { name: "360网络安全研究院", desc: "Network Security Research Lab at 360", href: "http://netlab.360.com"},
                            { name: "腾讯安全联合实验室", desc: "腾讯安全联合实验室", href: "http://slab.qq.com"},
                            { name: "知道创宇404团队", desc: "404", href: "http://paper.seebug.org/"},
                            { name: "网络尖刀（JDSEC）", desc: "民间非企运营互联网安全组织", href: "http://www.1aq.com"},
                            { name: "破晓团队", desc: "破晓团队", href: "http://www.secbug.org/"},
                            { name: "OWASP中国", desc: "开源的、非盈利的全球性安全组织", href: "http://www.owasp.org.cn/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '高校团队',
                        items: [
                            { name: "XDSEC", desc: "西安电子科技大学信息安全协会", href: "https://www.xdsec.club/"},
                            { name: "", desc: "", href: ""},

                            { name: "DROPS", desc: "中原工学院", href: "http://www.dropsec.xyz"},
                        ]
                    },
                ]},
            { classify: '商业产品',
                levels: [
                    {
                        level: '应用安全',
                        items: [
                            { name: "雷池(SafeLine) Web 应用防火墙", desc: "不让黑客越过半步", href: "https://chaitin.cn/cn/safeline.html"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '内网安全',
                        items: [
                            { name: "谛听威胁感知系统", desc: "伪装·感知·响应", href: "https://chaitin.cn/cn/dsensor.html"},
                            { name: "长亭安全巡检", desc: "长亭安全巡检", href: "https://chaitin.cn/cn/inspector.html"},
                            { name: "FOEYE网络空间测绘", desc: "安全管理第一步", href: "http://www.baimaohui.net/foeye"},
                            { name: "幻盾", desc: "幻盾", href: "https://www.moresec.cn/magic-shield.html"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '威胁情报',
                        items: [
                            { name: "哨兵云", desc: "哨兵云", href: "https://www.moresec.cn/sentry-cloud.html"},
                            { name: "先知云监测", desc: "先知云监测", href: "http://www.dbappsecurity.com.cn/pro_main.aspx?id=0D664292EC079BD4"},
                            { name: "ThreatBook", desc: "微步在线", href: "https://x.threatbook.cn"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                ]
            },
            { classify: '开源产品',
                levels: [
                    {
                        level: '内网安全',
                        items: [
                            { name: "巡风", desc: "巡风是一款适用于企业内网的漏洞快速应急，巡航扫描系统。", href: "https://github.com/ysrc/xunfeng"},
                            { name: "fofa", desc: "资产扫描", href: "https://github.com/LubyRuffy/fofa"},
                        ]
                    },

                ]
            },

            { classify: '安全大数据',
                levels: [
                    {
                        level: '搜索平台',
                        items: [
                            { name: "Zoomeye", desc: "钟馗之眼", href: "https://www.zoomeye.org/"},
                            { name: "FofaPro", desc: "网络空间搜索引擎", href: "https://fofa.so/"},
                            { name: "SHODAN", desc: "SHODAN", href: "https://www.shodan.io"},
                            { name: "DnsDB", desc: "全球最大的dns数据库", href: "https://dnsdb.io/"},
                            { name: "谛听", desc: "专注于工控安全搜索", href: "http://www.ditecting.com/index.php/Home/Index/index"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '威胁情报',
                        items: [
                            { name: "NOSEC", desc: "NOSEC大数据安全协作平台", href: "https://nosec.org/"},
                            { name: "NetworkScan Mon", desc: "360网络扫描监测", href: "http://scan.netlab.360.com"},
                            { name: "DDos Mon", desc: "360DDos监测", href: "https://ddosmon.net/"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                ]
            },
            { classify: '利器',
                levels: [
                    {
                        level: 'WEB检测',
                        items: [
                            { name: "Seebug 照妖镜", desc: "Seebug 照妖镜", href: "https://www.seebug.org/monster/"},
                            { name: "重大漏洞在线检测", desc: "重大漏洞在线检测系统", href: "http://0day.websaas.com.cn/"},
                            { name: "在线查杀木马", desc: "在线查杀木马", href: "http://scanner.baidu.com/#/pages/intro"},
                            { name: "XSS-scan", desc: "xss在线检测", href: "http://xss-scanner.com/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '文件分析',
                        items: [
                            { name: "360显微镜", desc: "360显微镜", href: "http://appscan.360.cn/"},
                            { name: "Ocr识别", desc: "虫数据在线识别", href: "http://chongdata.com/ocr/"},
                            { name: "哈勃", desc: "腾讯哈勃分析系统", href: "https://habo.qq.com/"},
                            { name: "VirusTotal", desc: "病毒，蠕虫，木马和各种恶意软件分析服务", href: "https://www.virustotal.com/zh-cn/"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: 'MD5解密',
                        items: [
                            { name: "CMD5", desc: "md5在线破解", href: "http://www.cmd5.com/"},
                            { name: "在线解密大全", desc: "解密大全", href: "https://navisec.it/%E5%AF%86%E7%A0%81%E5%9C%A8%E7%BA%BF%E8%A7%A3%E5%AF%86%E5%A4%A7%E5%85%A8/"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '其他解密',
                        items: [
                            { name: "RSA短n分解", desc: "RSA工具", href: "http://factordb.com/"},
                            { name: "压缩包解密", desc: "压缩包解密", href: "http://decrypt.junantech.com/"},
                            { name: "BASE64解密", desc: "BASE64加密解密", href: "http://base64.xpcha.com/"},
                            { name: "Hash解密", desc: "Hash解密", href: "http://tool.oschina.net/encrypt?type=2"},
                            { name: "PHP解密", desc: "PHP解密", href: "http://decode.laosiji.work/"},
                            { name: "quipqiup（字符替换解密）", desc: "字符替换解密", href: "http://quipqiup.com/"},
                            { name: "OnlineHashCrack", desc: "Professional  Password Recovery", href: "https://www.onlinehashcrack.com"},
							{ name: "NTHashes", desc: "LMHASH/NTHASH", href: "http://www.objectif-securite.ch/en/ophcrack.php"},
                        ]
                    },
                    {
                        level: 'IP域名',
                        items: [
                            { name: "IP高精度定位一", desc: "IP高精度定位", href: "https://www.opengps.cn/Data/IP/LocHighAcc.aspx"},
                            { name: "IP高精度定位二", desc: "IP高精度定位", href: "http://www.hao7188.com/"},
                            { name: "多Ping工具一", desc: "多地点ping服务器检测响应时间", href: "http://ping.chinaz.com/"},
                            { name: "多Ping工具二", desc: "多地点ping服务器检测响应时间", href: "http://ping.pe/"},
                            { name: "17CE", desc: "实时网站测速", href: "https://www.17ce.com/"},
                            { name: "IP归属地", desc: "全球唯一一个基于BGP/ASN数据分析处理而得来的IP库", href: "http://www.ipip.net/"},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '社工库',
                        items: [
                            { name: "华西安全网密码泄露查询", desc: "华西安全网密码泄露查询", href: "http://cha.hx99.net/"},
							{ name: "社工库密码查询", desc: "社工库密码查询", href: "http://163.donothackme.club/"},
							{ name: "社工库", desc: "社工库", href: "https://haveibeenpwned.com/"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '桌面必备',
                        items: [
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                ]
            },
            { classify: '技术博客',
                levels: [
                    {
                        level: '团队博客',
                        items: [
                            { name: "知道创宇404团队Paper", desc: "安全技术精粹", href: "http://paper.seebug.org/"},
                            { name: "腾讯科恩实验室", desc: "腾讯科恩实验室", href: "http://keenlab.tencent.com"},
                            { name: "360 Netlab Blog", desc: "", href: "http://blog.netlab.360.com"},
                            { name: "360 UnicornTeam", desc: "360 UnicornTeam博客", href: "http://unicorn.360.cn/blog"},
                            { name: "灯塔实验室", desc: "专注于工控安全攻防技术研究", href: "http://plcscan.org/blog/"},
                            { name: "Pwnhub博客", desc: "胖哈勃", href: "https://blog.pwnhub.cn/"},
                            { name: "Chaitin Blog", desc: "长亭技术精粹", href: "https://blog.chaitin.cn/"},
                            { name: "奇虎360技术Blog", desc: "分享奇虎360技术", href: "http://blogs.360.cn/"},
                            { name: "四叶草安全实验室", desc: "四叶草安全实验室", href: "http://lab.seclover.com/"},
                            { name: "安恒安全研究院", desc: "安恒安全研究院", href: "http://seclab.dbappsecurity.com.cn/"},
                            { name: "kakapo（机器学习）", desc: "kakapo", href: "http://paper.kakapo.ml/"},
                            { name: "我爱自然语言处理", desc: "我爱自然语言处理", href: "http://www.52nlp.cn/"},
                        ]
                    },
                    {
                        level: '个人博客',
                        items: [
                            { name: "Phithon", desc: "P牛", href: "https://www.leavesongs.com/"},
                            { name: "Neargle", desc: "一个独自等待着，前行着，并且渴望触及自己所希望未来的人", href: "http://blog.neargle.com/"},
                            { name: "余弦", desc: "余弦", href: "http://evilcos.me/"},
                            { name: "李劼杰", desc: "依然在路上", href: "http://www.lijiejie.com/"},
                            { name: "安全小飞侠", desc: "安全小飞侠的窝", href: "http://avfisher.win/"},
                            { name: "呆子不开口", desc: "我是水一样的男子，因为党说我是流动人口", href: "https://lvwei.me/"},
                            { name: "yangge", desc: "None", href: "http://yangge.me/"},
                            { name: "Wang2ha", desc: "20岁的时候，不必纠结自己的长相，40岁以后的男人都知道，男人是不论长相的，或者说是可以不论长相的.", href: "http://am4zing.me/"},
                            { name: "drops0hong", desc: "总有些力量推着我们前进！", href: "http://wkh.dropsec.xyz/"},
                            { name: "W2n1ck", desc: "他正在努力的认识自己", href: "http://byd.dropsec.xyz/"},
                            { name: "PyxYuYu-blog", desc: "PyxYuYu-blog", href: "https://github.com/PyxYuYu/MyBlog"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},

]
                    },
                ]
            },
            { classify: 'Github',
                levels: [
                    {
                        level: '个人/团队',
                        items: [
                            { name: "ring04h", desc: "ring04h", href: "https://github.com/ring04h"},
                            { name: "Medicean", desc: "Medicean", href: "https://github.com/Medicean"},
                            { name: "Vulners Team", desc: "Vulners Team", href: "https://github.com/vulnersCom"},
                            { name: "xisigr", desc: "xisigr", href: "https://github.com/xisigr"},
                            { name: "Syclover Security Team", desc: "Syclover Security Team", href: "https://github.com/SycloverSecurity"},
                            { name: "王松_Striker", desc: "安全盒子团队创始人", href: "https://github.com/Strikersb"},
                            { name: "lijiejie", desc: "lijiejie", href: "https://github.com/lijiejie"},
                            { name: "phithon", desc: "phithon", href: "https://github.com/phith0n"},
                            { name: "Neargle", desc: "Neargle", href: "https://github.com/neargle"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                    {
                        level: '项目',
                        items: [
                            { name: "POCSCAN", desc: "Poc 调用框架", href: "https://github.com/erevus-cn/pocscan"},
                            { name: "WebShell", desc: "WebShell", href: "https://github.com/xl7dev/WebShell"},
                            { name: "windows-kernel-exploits", desc: "windows-kernel-exploits", href: "https://github.com/SecWiki/windows-kernel-exploits"},
                            { name: "POC-T", desc: "渗透测试插件化并发框架", href: "https://github.com/Xyntax/POC-T"},
                            { name: "ctfs", desc: "ctfs", href: "https://github.com/ctfs/write-ups-2017"},
                            { name: "新浪微博爬虫", desc: "新浪微博爬虫", href: "https://github.com/ResolveWang/weibospider"},
                            { name: "vulhub", desc: "Docker-Compose file for vulnerability environment", href: "https://github.com/phith0n/vulhub"},
                            { name: "Mind-Map", desc: "各种安全相关思维导图整理收集", href: "https://github.com/phith0n/Mind-Map"},
                            { name: "sec-chart", desc: "安全思维导图集合", href: "https://github.com/SecWiki/sec-chart"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
            ]
            },
            { classify: '其他',
                levels: [
                    {
                        level: '云服务器',
                        items: [
                            { name: "阿里云（2ugmx7）", desc: "阿里云", href: "https://www.aliyun.com/"},
                            { name: "DigitalOcean", desc: "DigitalOcean", href: "https://www.digitalocean.com/"},
                            { name: "ConoHa", desc: "ConoHa", href: "https://www.conoha.jp/"},
                            { name: "BandwagonHOST", desc: "BandwagonHOST", href: "https://bandwagonhost.com/"},
                            { name: "VULTR", desc: "VULTR", href: "https://www.vultr.com/"},
                        ]
                    },
                    {
                        level: 'GFW',
                        items: [
                            { name: "Lantern", desc: "Lantern", href: "https://getlantern.org/"},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                            { name: "", desc: "", href: ""},
                        ]
                    },
                ]
            },
        ]
var app = new Vue({
    el: '#app',
    data: {
        records: records
    }
})