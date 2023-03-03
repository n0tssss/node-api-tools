# node api tools

基于 node 的一些 api 工具，自己项目使用

# 使用说明

## 百度关键词搜索

> URL

`https://api.n0ts.cn/baidu`



> 请求方式

`GET`



> 请求参数

| 参数名      | 参数值 | 是否必填  | 类型     | 描述  |
| -------- | --- | ----- | ------ | --- |
| keywords | 测试  | false | string | 关键字 |



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
            {
                "text": "测试工程师",
                "href": "https://www.baidu.com/s?wd=测试工程师"
            },
            {
                "text": "测试怀孕最早几天可以查出来",
                "href": "https://www.baidu.com/s?wd=测试怀孕最早几天可以查出来"
            },
            {
                "text": "测试怀孕什么时候最准确",
                "href": "https://www.baidu.com/s?wd=测试怀孕什么时候最准确"
            },
            {
                "text": "测试怀孕的试纸图片一深一浅",
                "href": "https://www.baidu.com/s?wd=测试怀孕的试纸图片一深一浅"
            },
            {
                "text": "测试师怎么考",
                "href": "https://www.baidu.com/s?wd=测试师怎么考"
            },
            {
                "text": "测试人格mbti",
                "href": "https://www.baidu.com/s?wd=测试人格mbti"
            },
            {
                "text": "测试抑郁程度的问卷",
                "href": "https://www.baidu.com/s?wd=测试抑郁程度的问卷"
            },
            {
                "text": "测试怀孕的试纸怎么看",
                "href": "https://www.baidu.com/s?wd=测试怀孕的试纸怎么看"
            },
            {
                "text": "测试用例",
                "href": "https://www.baidu.com/s?wd=测试用例"
            },
            {
                "text": "测试用例模板和例子",
                "href": "https://www.baidu.com/s?wd=测试用例模板和例子"
            }
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

| 参数名     | 参数值                                     | 是否必填  | 类型     | 描述        |
| ------- | --------------------------------------- | ----- | ------ | --------- |
| method  | GET                                     | true  | string | 请求方式      |
| url     | https://cn.bing.com/HPImageArchive.aspx | true  | string | 请求地址      |
| params  | 对象                                      | false | object | GET 请求参数  |
| data    | 对象                                      | false | object | POST 请求参数 |
| timeout | 1000                                    | false | Number | 请求方式      |
| headers | 对象                                      | false | object | 请求头       |



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



## Bing 壁纸获取

> URL

`https://api.n0ts.cn/bing`



> 请求方式

`GET`



> 请求参数

| 参数名  | 参数值 | 是否必填 | 类型     | 描述           |
| ---- | --- | ---- | ------ | ------------ |
| size | 8   | true | Number | 壁纸数量（最多 8 个） |
| page | 1   | true | Number | 页数           |



> 响应结果

请求参数

```json
{
	"page": "1",
	"size": "8"
}
```

响应

```json
{
	"status": 200,
	"msg": "成功",
	"data": [
		{
			"url": "https://cn.bing.com/th?id=OHR.Migliarino_ZH-CN0744250844_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "米利亚里诺自然公园，圣罗索尔，意大利马萨西犹可利 (© Stefano Valeri/Alamy)",
			"copyrightlink": "https://www.bing.com/search?q=%E7%B1%B3%E5%88%A9%E4%BA%9A%E9%87%8C%E8%AF%BA%E8%87%AA%E7%84%B6%E5%85%AC%E5%9B%AD&form=hpcapt&mkt=zh-cn",
			"title": "比萨不仅有斜塔"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.EstoniaBaltic_ZH-CN0314555299_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "爱沙尼亚波罗的海 (© fotoman-kharkov/Getty Images)",
			"copyrightlink": "https://www.bing.com/search?q=%E6%B3%A2%E7%BD%97%E7%9A%84%E6%B5%B7&form=hpcapt&mkt=zh-cn",
			"title": "像湖一样的大海"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.BeardedTit_ZH-CN0065279700_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "荷兰弗莱福兰湿地的文须雀 (© Gert-Jan IJzerman/Minden Pictures)",
			"copyrightlink": "https://www.bing.com/search?q=%E5%BC%97%E8%8E%B1%E7%A6%8F%E5%85%B0%E7%9C%81&form=hpcapt&mkt=zh-cn",
			"title": "这鸟长着小胡子"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.MSHV_ZH-CN9630204701_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "圣海伦斯山国家火山纪念区的边界小径，美国华盛顿州 (© Don Geyer/Alamy)",
			"copyrightlink": "https://www.bing.com/search?q=%E5%9C%A3%E6%B5%B7%E4%BC%A6%E6%96%AF%E5%B1%B1%E5%9B%BD%E5%AE%B6%E7%81%AB%E5%B1%B1%E7%BA%AA%E5%BF%B5%E5%8C%BA&form=hpcapt&mkt=zh-cn",
			"title": "40年的休养生息"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.PeljesacWind_ZH-CN9299214248_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "克罗地亚佩列沙茨半岛附近的风筝冲浪者和风帆冲浪者 (© helivideo/Getty Images)",
			"copyrightlink": "https://www.bing.com/search?q=%E4%BD%A9%E5%88%97%E6%B2%99%E8%8C%A8%E5%8D%8A%E5%B2%9B&form=hpcapt&mkt=zh-cn",
			"title": "既有风，又有水"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.CascadesNP_ZH-CN1830542356_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "华盛顿州北瀑布国家公园，美国 (© Ethan Welty/Tandem Stills + Motion)",
			"copyrightlink": "https://www.bing.com/search?q=%E5%8C%97%E7%80%91%E5%B8%83%E5%9B%BD%E5%AE%B6%E5%85%AC%E5%9B%AD&form=hpcapt&mkt=zh-cn",
			"title": "令人惊叹的后花园"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.MarinaDaGloria_ZH-CN6894795645_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "格洛里亚附近的码头和糖面包山，巴西里约热内卢 (© f11photo/Getty Images)",
			"copyrightlink": "https://www.bing.com/search?q=%E5%B7%B4%E8%A5%BF%E9%9D%A2%E5%8C%85%E5%B1%B1&form=hpcapt&mkt=zh-cn",
			"title": "里约热内卢的象征"
		},
		{
			"url": "https://cn.bing.com/th?id=OHR.MentonFrance_ZH-CN5849270429_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
			"copyright": "芒通，法国 (© Flavio Foglietta/Getty Images)",
			"copyrightlink": "https://www.bing.com/search?q=%E6%B3%95%E5%9B%BD%E8%8A%92%E9%80%9A%E9%95%87&form=hpcapt&mkt=zh-cn",
			"title": "到了芒通，就来点柠檬汁吧"
		}
	]
}
```



## 百度站长链接提交

> URL

`https://api.n0ts.cn/ziyuan`



> 请求方式

`POST`



> 请求参数

| 参数名        | 参数值                  | 是否必填  | 类型            | 描述                           |
| ---------- | -------------------- | ----- | ------------- | ---------------------------- |
| site       | n0ts.cn              | true  | String        | 百度站长已添加的站点 URL               |
| token      | xxxx                 | true  | String        | 百度推送 Token                   |
| urls       | ["xxx.xx", "xxx.xx"] | true  | Array<String> | 需要推送的多个链接                    |
| replaceUrl | n0ts.cn/item/{}.html | false | String        | urls 需要填入的 replace 数据，不需要则为空 |



> 响应结果

请求参数

```json
{
    "site": "https://n0ts.cn",
    "token": "xxx",
    "urls": ["https://n0ts.cn/item/123.html", "https://n0ts.cn/item/456.html"],
    "replaceUrl": ""
}
```

响应

```json
{
    "remain": 99998, // 当天剩余的可推送 url 条数
    "success": 2, // 成功推送的 url 条数
    "not_same_site": [], // 由于不是本站 url 而未处理的 url 列表
    "not_valid": [] // 不合法的 url 列表
}
```



## 码云图片跨域访问

> URL

`https://api.n0ts.cn/gitee/image`



> 请求方式

`GET`



> 请求参数

| 参数名 | 参数值                                                       | 是否必填 | 类型   | 描述                   |
| ------ | ------------------------------------------------------------ | -------- | ------ | ---------------------- |
| url    | https://gitee.com/n0ts/note/raw/master/IDEA.assets/image-20220221160924706.png | true     | String | 码云仓库不能访问的图片 |
| base64 | 任意（传入就为启用）                                         | false    | 任意   | 是否获取图片的 base64  |



> 响应结果

请求参数

```json
{
	"url": "https://gitee.com/n0ts/note/raw/master/IDEA.assets/image-20220221160924706.png"
}
```

响应

![](https://api.n0ts.cn/gitee/image?url=https://gitee.com/n0ts/note/raw/master/IDEA.assets/image-20220221160924706.png)

可直接放入 img 标签

```html
<img src="https://api.n0ts.cn/gitee/image?url=https://gitee.com/n0ts/note/raw/master/IDEA.assets/image-20220221160924706.png" />
```

