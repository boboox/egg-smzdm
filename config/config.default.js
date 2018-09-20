// middleware
module.exports.middleware = ['errorHandler', 'gzip']
// middleware - config
module.exports.gzip = {
    threshold: 1024
}
// middleware - errorHandler
module.exports.errorHandler = {
    match: '/mysql'
}

// key
exports.keys = 'this is a egg demo';
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

exports.dataapi = {
    apiKey: ''
}
// 添加 news 的配置项
exports.news = {
    serverUrl: 'https://www.apiopen.top',
};
// 值得买
exports.smzdm = {
    serverUrl: 'https://www.smzdm.com'
};
//http://120.76.205.241:8000/news/qihoo?apikey=BcPALxxQf0Ms7WHF7tAiM3g4s5GqGLbbUAX13Bdi8bKocxeR7iX9DXpUXOdMk9gV&kw=test&site=qq.com

// 安全
exports.security = {
    ignore: "/",
    domainWhiteList: [
        "http://127.0.0.1:7001",
        "http://localhost:7001"
    ],
    methodnoallow: {
        enable: false
    },
    csrf: {
        enable: false,
        ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    }
};

exports.logger = {
    appLogName: `egg-app-web.log`,
    coreLogName: 'egg-web.log',
    agentLogName: 'egg-agent.log',
    errorLogName: 'common-error.log',
};


exports.customLogger = {
    apiLogger: {
        file: 'logs/api.log'
    }
}
