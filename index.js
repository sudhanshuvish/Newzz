source = 'the-times-of-india';
apiKey = '95ffcbf189f74148a7a2c54ab12be973';

//Grab the news container
newsAccordion = document.getElementById('newsAccordion');

//Create a getRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getResponseHeaders('Content-type', 'application/json')

xhr.onload = function () {
    if (this.status === 426) {
        json = JSON.parse(this.responseText);
        console.log(json);
        articles = json.articles;
        // console.log(articles)
        newsHTML ="";
        articles.forEach(function(element) {
                news = `<div class="accordion-item">
                
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${element["title"]}
                </button>
                </h2 >
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}"target="_blank">Read more here</a>
                
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

