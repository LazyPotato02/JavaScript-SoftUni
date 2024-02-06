function getArticleGenerator(articles) {

    let articleArr = articles
    let content = document.getElementById('content')
    function solve() {
        if (articleArr.length > 0) {
            let article = document.createElement('article')
            let val = articleArr.shift()
            article.textContent = val
            content.appendChild(article)
        }

    }
    return solve


}
