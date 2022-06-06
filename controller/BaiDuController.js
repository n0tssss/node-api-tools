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
            result: data.g.map((item) => item.q)
        };
        response.send(ResponseStatus.OK("成功", result));
    });
    return router;
};
