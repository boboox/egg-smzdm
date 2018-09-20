const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newsData = await ctx.service.news.list();
        await ctx.render('news/list.tpl', {
            data: newsData.data
        });
    }
}

module.exports = NewsController;
