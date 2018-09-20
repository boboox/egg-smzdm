// app/router.js
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/mysql/query', controller.mysql.query);
    router.get('/mysql/get', controller.mysql.get);
    router.post('/mysql/insert', controller.mysql.insert);
    router.get('/smzdm/jingxuan', controller.smzdm.jingxuan);
    router.get('/smzdm/mostworthy', controller.smzdm.mostWorthy);
};
