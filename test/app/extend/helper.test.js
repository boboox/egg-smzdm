// https://eggjs.org/zh-cn/core/unittest.html

const {
    app,
    mock,
    assert
} = require('egg-mock/bootstrap');

describe('test/app/extend/helper.test.js', () => {
    it('test helper/moment function', () => {
        const ctx = app.mockContext({})
        const tenMinBefore = new Date() - -10 * 60 * 1000
        const result = ctx.helper.relativeTime(tenMinBefore)
        assert(result == 'in 10 minutes')
    });
});
