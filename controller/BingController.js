const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");

module.exports = (router) => {
    /**
     * 获取 Bing 每日壁纸
     */
    router.get("/bing", (request, response) => {
        const { size, page } = request.query;
        if (!size || size <= 0) {
            return response.send(ResponseStatus.FAIL("数量不能小于 1"));
        }
        if (!size || size <= 0) {
            return response.send(ResponseStatus.FAIL("页数不能小于 1"));
        }

        http.get("https://cn.bing.com/HPImageArchive.aspx", {
            params: {
                format: "js",
                idx: page - 1,
                n: size,
                mkt: "zh-CN"
            }
        })
            .then((res) => {
                response.send(
                    ResponseStatus.OK(
                        "成功",
                        res.images.map((item) => {
                            return {
                                url: "https://cn.bing.com" + item.url,
                                copyright: item.copyright,
                                copyrightlink: item.copyrightlink,
                                title: item.title
                            };
                        })
                    )
                );
            })
            .catch((err) => {
                response.send(ResponseStatus.FAIL("获取失败"));
            });
    });

    return router;
};
