const Controller = require('egg').Controller;
var handleResult = require('../utils/libs').handleResult;
var models = require('../model').orm.smzdm;
const Article = models.article;
class SmzdmController extends Controller {
    async mostWorthy() {
        const result = await this.ctx.service.smzdm.queryJingxuan({
            where: {
                'unworthy': '0 AND worthy > 10'
            },
            limit: 10,
            orders: [
                ['create_date', 'desc']
                ['worthy', 'desc'],
                ['date_str', 'desc']
            ]
        });
        // response
        this.ctx.body = handleResult(result);;
        this.ctx.status = 200;
    }

    async jingxuan() {
        // s:
        // f:  7 图书音像 27 家用电器 37 家居  57 服饰鞋包 75 母婴 93 玩模乐器 95 食品保健 113 个户化妆 131 礼品钟表 147 汽车消费 163 电脑数码  191 运动户外 1515 日用百货 5337 旅游出行
        // b:
        // d:0 1 国内 2 海淘
        // r:0 2 券码 3 活动
        // p: 页码
        const {
            timesort
        } = this.ctx.request.query;
        let filter = 's0f0t0b0d0r0p1';
        if (timesort) {
            filter = 's0f0t0b0d0r0p0'
        }
        const result = await this.ctx.service.smzdm.fetchJingxuan({
            filter: filter,
            timesort
        });
        // response
        if (result && result.article_list) {
            const responseStr = handleResult({
                totalResult: result.article_list.length
            });
            this.ctx.body = responseStr
            this.ctx.status = 200;
            this.ctx.runInBackground(async () => {
                let list = []
                result.article_list.map((a) => {
                    list.push(new Article(a));
                })
                await this.ctx.service.smzdm.saveOrUpdateJingxuan(list)
            })

            this.ctx.getLogger('apiLogger').info('[smzdm/jingxuan]\r\n', responseStr, '\r\n');
        } else {
            const responseStr = handleResult(false);
            this.ctx.body = responseStr;
            this.ctx.status = 200;
            this.ctx.getLogger('apiLogger').info(`[smzdm/jingxuan]\r\n`, responseStr, '\r\n');
        }
    }
}


module.exports = SmzdmController
