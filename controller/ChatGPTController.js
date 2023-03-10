/*
 * @Author: N0ts
 * @Date: 2022-11-02 01:43:21
 * @Description: 代跨域请求
 * @FilePath: /node-api-tools/controller/ChatGPTController.js
 * @Mail：mail@n0ts.cn
 */

const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");
const { encode, decode } = require("gpt-3-encoder");

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
                err.response.data.on("data", (chunk) => {
                    response.write(Buffer.from(chunk.toString()));
                });
                err.response.data.on("end", () => {
                    response.end();
                });
            });
    });

    router.get("/chatgpt/encoder", (request, response) => {
        const { content } = request.query;
        if (!content) {
            return response.send(ResponseStatus.FAIL("缺少 content 参数"));
        }
        const encodeResult = encode(content);
        response.send(
            ResponseStatus.OK("好了哥", {
                tokens: encodeResult.length,
                result: encodeResult,
                characters: content.length
            })
        );
    });

    return router;
};
