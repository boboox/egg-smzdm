class SmzdmArticleDBObj {
    constructor(smzdmArticleApiObj) {
        this.channel_id = smzdmArticleApiObj.article_channel_id;
        this.date_str = smzdmArticleApiObj.article_date;
        this.id = smzdmArticleApiObj.article_id;
        this.link = smzdmArticleApiObj.article_link;
        this.pic_url = smzdmArticleApiObj.article_pic_url;
        this.price = smzdmArticleApiObj.article_price;
        this.title = smzdmArticleApiObj.article_title;
        this.unworthy = smzdmArticleApiObj.article_unworthy;
        this.url = smzdmArticleApiObj.article_url;
        this.worthy = smzdmArticleApiObj.article_worthy;
        this.yh_type = smzdmArticleApiObj.article_yh_type;
        this.timesort = smzdmArticleApiObj.article_timesort;
    }
}


module.exports = {
    article: SmzdmArticleDBObj
}
