const Service = require('egg').Service;

class MysqlService extends Service {
    // 获取
    async get(id) {
        try {
            const result = await this.app.mysql.get('stock_snapshot', {
                stockid: id
            });
            if (result) {
                return result;
            } else {
                return {
                    iserror: true,
                    message: 'id不存在'
                }
            }
        } catch (error) {
            console.log(error)
            return {
                iserror: true,
                message: error.sqlMessage
            };
        }
    }
    // 查询
    async query(options) {
        try {
            const result = await this.app.mysql.select('stock_snapshot', {
                options
            });
            return result;
        } catch (error) {
            return {
                iserror: true,
                message: error.sqlMessage
            };
        }
    }

    // 新增
    async insert(data) {
        try {
            const result = await this.app.mysql.insert('stock_snapshot', data);
            // 判断插入成功
            const insertSuccess = result.affectedRows === 1;
            return insertSuccess;
        } catch (e) {
            return {
                iserror: true,
                message: e.sqlMessage
            };
        }
    }
}

module.exports = MysqlService;
