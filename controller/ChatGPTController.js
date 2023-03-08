/*
 * @Author: N0ts
 * @Date: 2022-11-02 01:43:21
 * @Description: 代跨域请求
 * @FilePath: /node-api-tools/controller/ChatGPTController.js
 * @Mail：mail@n0ts.cn
 */

const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");

module.exports = (router) => {
    /**
     * ChatGPT Stream
     */
    router.post("/chatgpt-stream", (request, response) => {
        let { key, model, messages, timeout } = request.body;

        response.writeHead(200, {
            "Content-Type": "text/event-stream"
        });

        http({
            method: "POST",
            url: "https://api.openai.com/v1/chat/completions",
            data: {
                model,
                messages,
                stream: true
            },
            timeout,
            headers: {
                Authorization: `Bearer ${key}`,
                "OpenAI-Async": "true",
                "Transfer-Encoding": "chunked"
            },
            responseType: "stream"
        })
            .then((res) => {
                res.on("data", (chunk) => {
                    response.write(Buffer.from(chunk.toString()));
                });
                res.on("end", () => {
                    response.end();
                });
            })
            .catch((err) => {
                response.write("未知错误，请联系站长解决！");
                response.end();
            });
    });

    return router;
};
