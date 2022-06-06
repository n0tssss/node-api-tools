# node api tools

基于 node 的一些 api 工具，自己项目使用

# 使用说明

## 百度关键词搜索

> URL

`https://api.n0ts.cn/baidu`

> 请求方式

`GET`

> 请求参数

| 参数名   | 参数值 | 是否必填 | 类型   | 描述   |
| -------- | ------ | -------- | ------ | ------ |
| keywords | 测试   | false    | string | 关键字 |

> 响应结果

请求参数

```json
{
    "keywords": "测试"
}
```

响应

```json
{
    "status": 200,
    "msg": "成功",
    "data": {
        "keywords": "测试",
        "result": [
            "测试工程师",
            "测试怀孕的试纸图片一深一浅",
            "测试怀孕什么时候最准确",
            "测试人格mbti",
            "测试抑郁程度的问卷",
            "测试怀孕的试纸怎么看",
            "测试用例",
            "测试用例模板和例子",
            "测试智商的国际标准",
            "测试工程师是干嘛的"
        ]
    }
}
```

## CORS 代跨域

> URL

`https://api.n0ts.cn/cors`

> 请求方式

`POST`

> 请求参数

| 参数名 | 参数值 | 是否必填 | 类型 | 描述 |
| - | - | - | - | - |
| method | GET | true | string | 请求方式 |
| url | https://cn.bing.com/HPImageArchive.aspx | true | string | 请求地址 |
| params | 对象 | false | object | GET 请求参数 |
| body | 对象 | false | object | POST 请求参数 |
| timeout | 1000 | false | Number | 请求方式 |
| headers | 对象 | false | object | 请求头 |

> 响应结果

请求参数

```json
{
    "method": "get",
    "url": "https://cn.bing.com/HPImageArchive.aspx",
    "params": {
        "format": "js",
        "idx": 0,
        "n": 8,
        "mkt": "zh-CN"
    }
}
```

响应

```json
{
    "status": 200,
    "msg": "成功",
    "data": {
        "images": [
            {
                "startdate": "20220606",
                "fullstartdate": "202206061600",
                "enddate": "20220607",
                "url": "/th?id=OHR.HaagaRhododendron_ZH-CN3375001658_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.HaagaRhododendron_ZH-CN3375001658",
                "copyright": "赫尔辛基的哈加杜鹃花公园，芬兰 (© Samuli Vainionpää/Getty Images)",
                "copyrightlink": "https://www.bing.com/search?q=%E8%8A%AC%E5%85%B0+%E5%93%88%E5%8A%A0%E6%9D%9C%E9%B9%83%E8%8A%B1%E5%85%AC%E5%9B%AD&FORM=hpcapt&mkt=zh-cn",
                "title": "部分是科研园，部分是公园",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220606_HaagaRhododendron%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "2ce77b45c3490dc9eba2d220bff84b8f",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220605",
                "fullstartdate": "202206051600",
                "enddate": "20220606",
                "url": "/th?id=OHR.IndigoBunting_ZH-CN3172415219_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.IndigoBunting_ZH-CN3172415219",
                "copyright": "奥杜邦中心的一只靛蓝彩鹀，美国宾夕法尼亚州 (© Vicki Jauron/Getty Images)",
                "copyrightlink": "https://www.bing.com/search?q=%E9%9D%9B%E8%93%9D%E5%BD%A9%E9%B9%80&form=hpcapt&mkt=zh-cn",
                "title": "唱一首“蓝调”",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220605_IndigoBunting%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "dd64943662dcb05c9c8c03f0e9a1f7a3",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220604",
                "fullstartdate": "202206041600",
                "enddate": "20220605",
                "url": "/th?id=OHR.RapadalenSNP_ZH-CN3018224759_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.RapadalenSNP_ZH-CN3018224759",
                "copyright": "萨勒克国家公园的拉帕谷，瑞典 (© Alena Vishina/Alamy)",
                "copyrightlink": "https://www.bing.com/search?q=%E4%B8%96%E7%95%8C%E7%8E%AF%E5%A2%83%E6%97%A5&form=hpcapt&mkt=zh-cn",
                "title": "只有一个地球",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220604_RapadalenSNP%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "1c6c46abb162012c70f9b56aab6a3bcf",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220603",
                "fullstartdate": "202206031600",
                "enddate": "20220604",
                "url": "/th?id=OHR.BannerPeak_ZH-CN2693006060_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.BannerPeak_ZH-CN2693006060",
                "copyright": "安塞尔·亚当斯的荒野，加利福尼亚 (© Michael DeYoung Photography/Tandem Stills + Motion)",
                "copyrightlink": "https://www.bing.com/search?q=%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%AD%A5%E9%81%93%E7%B3%BB%E7%BB%9F&form=hpcapt&mkt=zh-cn",
                "title": "前往山林，今天是国家步道日！",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220603_BannerPeak%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "d4d8f5009a0173716063c97f4b6955e4",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220602",
                "fullstartdate": "202206021600",
                "enddate": "20220603",
                "url": "/th?id=OHR.DragonBoat2022_ZH-CN2392684688_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.DragonBoat2022_ZH-CN2392684688",
                "copyright": "广角镜头下的厦门龙舟池，日落的光洒在传统龙舟上，中国 (© Sen Li/Getty Image)",
                "copyrightlink": "https://www.bing.com/search?q=%E7%AB%AF%E5%8D%88%E8%8A%82&form=hpcapt&mkt=zh-cn",
                "title": "端午节安康",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220602_DragonBoat2022%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "8940f4b3bee0e12e93309240aa9501f8",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220601",
                "fullstartdate": "202206011600",
                "enddate": "20220602",
                "url": "/th?id=OHR.LechfallFuessen_ZH-CN3887501600_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.LechfallFuessen_ZH-CN3887501600",
                "copyright": "福森市的莱西瀑布，德国拜仁州 (© Sergej Razvod/agefotostock)",
                "copyrightlink": "https://www.bing.com/search?q=%E5%BE%B7%E5%9B%BD%E7%A6%8F%E6%A3%AE&form=hpcapt&mkt=zh-cn",
                "title": "东阿尔高县的自然奇观",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220601_LechfallFuessen%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "232814900c9204bd1298990648cbd02e",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220531",
                "fullstartdate": "202205311600",
                "enddate": "20220601",
                "url": "/th?id=OHR.MarovoLagoon_ZH-CN1029152514_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.MarovoLagoon_ZH-CN1029152514",
                "copyright": "马罗沃泻湖中的珊瑚礁，所罗门群岛 (© WaterFrame/Alamy)",
                "copyrightlink": "https://www.bing.com/search?q=%E6%89%80%E7%BD%97%E9%97%A8%E7%BE%A4%E5%B2%9B&form=hpcapt&mkt=zh-cn",
                "title": "水下的奇妙景观",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220531_MarovoLagoon%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "51b208d976bfb804f516d965291f6755",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            },
            {
                "startdate": "20220530",
                "fullstartdate": "202205301600",
                "enddate": "20220531",
                "url": "/th?id=OHR.ParrotDay_ZH-CN0775936218_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                "urlbase": "/th?id=OHR.ParrotDay_ZH-CN0775936218",
                "copyright": "展开双翅的绯红金刚鹦鹉，哥斯达黎加 (© Harry Collins/Getty Images)",
                "copyrightlink": "https://www.bing.com/search?q=%E7%BB%AF%E7%BA%A2%E9%87%91%E5%88%9A%E9%B9%A6%E9%B9%89&form=hpcapt&mkt=zh-cn",
                "title": "一只伶俐可爱的小鸟掠过",
                "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20220530_ParrotDay%22&FORM=HPQUIZ",
                "wp": true,
                "hsh": "769f8f01b895274f4289e99596e2186d",
                "drk": 1,
                "top": 1,
                "bot": 1,
                "hs": []
            }
        ],
        "tooltips": {
            "loading": "正在加载...",
            "previous": "上一个图像",
            "next": "下一个图像",
            "walle": "此图片不能下载用作壁纸。",
            "walls": "下载今日美图。仅限用作桌面壁纸。"
        }
    }
}
```
