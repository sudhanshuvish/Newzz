source = 'the-times-of-india';
apiKey = '7e215530bc9e9ea4accdd77eaeaa08f9';
// apiKey = '95ffcbf189f74148a7a2c54ab12be973';

//Grab the news container
newsAccordion = document.getElementById('newsAccordion');

//Create a getRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=${apiKey}&lang=en&country=in`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getResponseHeaders('Content-type', 'application/json')






xhr.onload = function () {
    if (this.status === 200) {
        json = JSON.parse(this.responseText);
        console.log(json);
        articles = json.articles;
        // console.log(articles)
        newsHTML = "";
        articles.forEach(function (element) {
            news = `<div class="accordion-item">
                
                
  <img src="${element['image']}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element["title"]} </h5>
    <p class="card-text">${element["content"]}</p>
    <p class="card-text">Published at ${element["publishedAt"]}</p>
    
    <a href="${element['url']}"target="_blank">Read more here</a>
  </div>
</div>
                
                </div > `;

            newsHTML += news;
        });

        newsAccordion.innerHTML = newsHTML;

    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

