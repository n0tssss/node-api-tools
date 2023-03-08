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

    router.post("/cors2", async (request, response) => {
        let { method, url, params, data, headers, responseType } = request.body;
        if (!method) {
            return response.send(ResponseStatus.FAIL("method 请求方法不能为空！"));
        }
        if (!url) {
            return response.send(ResponseStatus.FAIL("url 请求地址不能为空！"));
        }

        const timeout = params?.timeout || data?.timeout;
        let result = null;
        const oldHeadContentType = headers["Content-Type"];
        console.log("headers", headers);

        try {
            // headers["Content-Type"] = "";
            result = await http({
                method,
                url,
                params,
                data,
                timeout,
                headers,
                responseType
            });
        } catch (err) {
            err.response.data.on("data", (chunk) => {
                const str = chunk.toString('utf8'); // 将字节数组转换为UTF-8编码的字符串
                console.log("进来了", str);
                response.write(chunk);
            });
            err.response.data.on("end", () => {
                console.log("结束了");
            });
            setTimeout(() => {
                response.write('122321312');
                response.end();
            }, 1000);
            return 
        }
        console.log(result);
        if (oldHeadContentType == "text/event-stream") {
            result.data.on("data", (chunk) => {
                console.log("进来了", chunk);
                response.write(chunk);
            });
            result.data.on("end", () => {
                console.log("结束了");
                response.end();
            });
            return;
        }
        response.send(ResponseStatus.OK("成功", result));
    });

    return router;
};
