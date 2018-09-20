function escapeQuote(str) {
    return str.replace("'", "\\'").replace('"', '\\"')
}

function formatInsertSql(article) {
    return `INSERT INTO smzdm_article 
        ( channel_id,
            date_str,
            id,
            link,
            pic_url,
            price,
            title,
            unworthy,
            url,
            worthy,
            yh_type,
            timesort,
            create_date,
            update_date) 
        VALUES 
        ( ${article.channel_id},
            '${article.date_str}',
            ${article.id},
            '${article.link}',
            '${article.pic_url}',
            '${article.price}',
            '${escapeQuote(article.title)}',
            ${article.unworthy},
            '${article.url}',
            ${article.worthy},
            '${article.yh_type}',
            ${article.timesort},
            NOW(),
            NOW()) 
         ON DUPLICATE KEY 
         UPDATE 
            worthy = '${article.worthy}',
            unworthy = '${article.unworthy}',
            create_date = create_date,
            update_date = now()`;
}


module.exports = {
    insert: formatInsertSql
}
