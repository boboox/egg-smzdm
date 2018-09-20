<!-- app/view/news/list.tpl -->
<html>

<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
</head>

<body>
    {% for type,typeList in data %}
    {{ type }}
    <ul class="news-view view">
        {% for article in typeList %}
        <li class="item">
            <div>
                {% for pic in article.picInfo%}
                <img width="120" src="{{pic.url}}" alt="">
                {% endfor %}
            </div>
            <a href="{{ article.link }}">{{ article.title }}</a>
            {{ helper.relativeTime(article.ptime)}}
        </li>
        {% endfor %}
    </ul>
    {% endfor %}
</body>

</html>
