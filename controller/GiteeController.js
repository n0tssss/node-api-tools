/*
 * @Author: N0ts
 * @Date: 2022-11-02 10:43:38
 * @Description:
 * @FilePath: /node-api-tools/controller/GiteeController.js
 * @Mail：mail@n0ts.cn
 */
const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");
const config = require("../config/config");

module.exports = (router) => {
    /**
     * 码云图片代跨域
     */
    router.get("/gitee/image", async (request, response) => {
        const { url, base64 } = request.query;
        const data = await http.get(url, {
            responseType: "arraybuffer"
        });
        const result = base64 ? "data:image/png;base64," + Buffer.from(data, "binary").toString("base64") : data;
        response.send(result);
    });

    /**
     * 代请求
     */
    router.post("/api/gitee", async (request, response) => {
        let { method, url, params, data, headers, password } = request.body;
        // 验证
        if (!method) {
            return response.send(ResponseStatus.FAIL("method 请求方法不能为空！"));
        }
        if (!url) {
            return response.send(ResponseStatus.FAIL("url 请求地址不能为空！"));
        }
        if (method != "GET" && password != config.password) {
            return response.send(ResponseStatus.FAIL("爬！"));
        }

        // 携带 token
        params.access_token = config.accessToken;

        // 是否设置超时时长
        const timeout = params?.timeout || data?.timeout;

        let result = null;
        try {
            result = await http({
                method,
                url: config.giteeApi + url,
                params,
                data,
                timeout,
                headers
            });
        } catch (err) {
            return response.send(ResponseStatus.FAIL(err));
        }
        response.send(ResponseStatus.OK("成功", result));
    });

    return router;
};
