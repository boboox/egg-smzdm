const Service = require('egg').Service;
const {
    insert
} = require('../sql/smzdm');
class SmzdmService extends Service {
    // 加载精选
    // https://www.smzdm.com/jingxuan/json_more?filter=s0f0t0b0d0r0p1
    async fetchJingxuan(filter) {
        try {
            const url = `${this.config.smzdm.serverUrl}/jingxuan/json_more?filter=${filter.filter}&timesort=${filter.timesort}`;
            const {
                data
            } = await this.ctx.curl(url, {
                method: 'get',
                dataType: 'json'
            });
            return data

        } catch (error) {
            return {
                iserror: true,
                message: error.sqlMessage
            };
        }
    }

    async queryJingxuan(filter) {
        try {
            const result = await this.app.mysql.select('smzdm_article', filter);
            return result;
        } catch (error) {
            return {
                iserror: true,
                message: error.sqlMessage
            };
        }
    }
    async saveOrUpdateJingxuan(articleList) {
        try {
            const result = await this.app.mysql.beginTransactionScope(async conn => {
                let inserted = 0,
                    updated = 0;

                for (const article of articleList) {
                    let sql = insert(article);
                    const result = await conn.query(sql);
                    if (result.affectedRows == 1) {
                        inserted++
                    }

                    if (result.affectedRows == 2) {
                        updated++
                    }
                }
                return {
                    inserted: inserted,
                    updated: updated
                };
            }, this.ctx);
            this.app.getLogger('apiLogger').info('[smzdm/saveorupdate]\r\n', result, '\r\n');
        } catch (error) {
            // await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw error;
        }
    }

}

module.exports = SmzdmService;
