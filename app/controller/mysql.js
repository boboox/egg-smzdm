var uuid = require('node-uuid');
var models = require('../model');
var handleResult = require('../utils/libs').handleResult;
const Controller = require('egg').Controller;

class MysqlController extends Controller {
    async query() {
        const result = await this.ctx.service.mysql.query();
        // response
        this.ctx.body = handleResult(result);;
        this.ctx.status = 200;
    }

    async get() {
        let requestBody = this.ctx.request.body;
        const result = await this.ctx.service.mysql.get(requestBody.id);
        console.log(result);
        this.ctx.body = handleResult(result);
        this.ctx.status = 200;
    }

    async insert() {
        // validate
        let requestBody = this.ctx.request.body;
        this.ctx.validate(models.orm.mysql, requestBody)
        // service
        const result = await this.ctx.service.mysql.insert({
            stockid: uuid.v4(),
            stockname: requestBody.stockname,
            trade: requestBody.trade,
            code: requestBody.code
        })
        // response
        this.ctx.body = handleResult(result);;
        this.ctx.status = 200;
    }

}





module.exports = MysqlController;
