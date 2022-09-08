const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");

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
    return router;
};
