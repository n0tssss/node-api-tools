const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");

module.exports = (router) => {
    /**
     * 代跨域
     */
    router.post("/cors", async (request, response) => {
        const { method, url, params, data, timeout, headers } = request.body;
        if (!method) {
            return response.send(ResponseStatus.FAIL("method 请求方法不能为空！"));
        }
        if (!url) {
            return response.send(ResponseStatus.FAIL("url 请求地址不能为空！"));
        }
        const result = await http({
            method,
            url,
            params,
            data,
            timeout,
            headers
        });
        response.send(ResponseStatus.OK("成功", result));
    });
    return router;
};
