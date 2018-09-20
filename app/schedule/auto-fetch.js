const Subscription = require('egg').Subscription;
var handleResult = require('../utils/libs').handleResult;
var models = require('../model').orm.smzdm;
const Article = models.article;
class AutoFetch extends Subscription {
    static get schedule() {
        return {
            interval: '5m',
            type: 'all',
            immediate: true
        }
    }

    async subscribe() {
        const result = await this.ctx.service.smzdm.fetchJingxuan('s0f0t0b0d0r0p1');
        // response
        if (result && result.article_list) {
            const responseStr = handleResult({
                totalResult: result.article_list.length
            });
            this.ctx.runInBackground(async () => {
                let list = []
                result.article_list.map((a) => {
                    list.push(new Article(a));
                })
                await this.ctx.service.smzdm.saveOrUpdateJingxuan(list)
            })

            this.ctx.getLogger('apiLogger').info('[schedule][smzdm/jingxuan]\r\n', responseStr, '\r\n');
        } else {
            const responseStr = handleResult(false);
            this.ctx.getLogger('apiLogger').info(`[schedule][smzdm/jingxuan]\r\n`, responseStr, '\r\n');
        }
    }
}

module.exports = AutoFetch;
