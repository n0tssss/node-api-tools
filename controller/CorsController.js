/*
 * @Author: N0ts
 * @Date: 2022-11-02 01:43:21
 * @Description: 代跨域请求
 * @FilePath: /node-api-tools/controller/CorsController.js
 * @Mail：mail@n0ts.cn
 */

const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");

module.exports = (router) => {
    /**
     * 代跨域
     */
    router.post("/cors", async (request, response) => {
        let { method, url, params, data, headers } = request.body;
        if (!method) {
            return response.send(ResponseStatus.FAIL("method 请求方法不能为空！"));
        }
        if (!url) {
            return response.send(ResponseStatus.FAIL("url 请求地址不能为空！"));
        }

        const timeout = params?.timeout || data?.timeout;
        let result = null;
        try {
            result = await http({
                method,
                url,
                params,
                data,
                timeout,
                headers
            });
        } catch (err) {
            return response.send(ResponseStatus.FAIL(err.response.data));
        }
        response.send(ResponseStatus.OK("成功", result));
    });

    return router;
};
