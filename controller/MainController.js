module.exports = (router) => {
    router.get("/", (request, response) => {
        response.send({
            status: 200,
            msg: "成功"
        });
    });

    return router;
};
