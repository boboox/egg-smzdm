const Service = require('egg').Service;

class NewsService extends Service {
    async list() {
        // read config
        const {
            serverUrl
        } = this.config.news;
        // use build-in http client to GET xueqiu api
        const {
            data: data
        } = await this.ctx.curl(`${serverUrl}/journalismApi`, {
            method: 'get',
            dataType: 'json',
        });

        return data
    }
}

module.exports = NewsService;
