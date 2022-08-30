const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");

module.exports = (router) => {
    /**
     * 百度搜索
     */
    router.get("/baidu", async (request, response) => {
        const { keywords } = request.query;
        const data = await http.get("https://www.baidu.com/sugrec", {
            params: {
                prod: "pc",
                wd: keywords
            }
        });
        const result = {
            keywords,
            result: data.g.map((item) => {
                return {
                    text: item.q,
                    href: `https://www.baidu.com/s?wd=${item.q}`
                };
            })
        };
        response.send(ResponseStatus.OK("成功", result));
    });

    /**
     * 百度站长链接提交
     */
    router.post("/ziyuan", async (request, response) => {
        const { site, token, urls, replaceUrl } = request.body;
        if (!site) {
            return response.send(ResponseStatus.FAIL("站点不能为空"));
        }
        if (!token) {
            return response.send(ResponseStatus.FAIL("token 不能为空"));
        }
        if (!urls || !Array.isArray(urls) || !urls.length) {
            return response.send(ResponseStatus.FAIL("urls 不能为空"));
        }

        let body = "";
        if (replaceUrl) {
            body = urls.map((item) => replaceUrl.replace("{}", item)).join("\n");
        } else {
            body = urls.join("\n");
        }

        http.post(`http://data.zz.baidu.com/urls?site=${site}&token=${token}`, body)
            .then((res) => {
                return response.send(ResponseStatus.OK("成功", res));
            })
            .catch((err) => {
                return response.send(ResponseStatus.FAIL(err.response.data.message));
            });
    });

    return router;
};
