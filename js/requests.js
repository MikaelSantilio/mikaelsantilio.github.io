const url_services = 'http://127.0.0.1:8000/services/';
const url_projects = 'http://127.0.0.1:8000/projects/';

const getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
        return error;
    }
};

var projects = getData(url_projects);
var services = getData(url_services);

projects.then(results => {

    var section_project = document.querySelector('.projects_section .container');
    var cards = '';
    results.forEach(result => {
        var article =
        `<div class="container_project_article" >
            <article>
                <div class="projects_section_card radius" >
                    <div class="thumbnail radius-top" >
                        <img
                        class="radius-top"
                        src="${result.thumb}"
                        alt="${result.title} | ${result.subtitle}"
                        title="${result.title}">
                    </div>
                    <div class="card_body" >
                        <h2>${result.title}</h2>
                        <span>${result.subtitle}</span>
                        <p>${result.description}</p>
                    </div >
                    <div class="actions" >
                        <a href="${result.link}" class="btn btn-sm btn-link" >Ver Mais</a>
                    </div >
                </div>
            </article>
        </div >`;

        cards += article;

    });
    
    section_project.innerHTML = cards;
});

services.then(results => {

    var section_project = document.querySelector('.services_section .container');
    var cards = '';
    results.sort(() => Math.random() - 0.5).forEach(result => {
        var card = 
            `<div class="container_service_article" >
                <article>
                    <div class="services_section_card radius" >
                        <div class="service_icon" >
                            <img src=${result.icon} alt="${result.title}">
                        </div>
                        <div class="card_body" >
                            <h2>${result.title}</h2>
                            <p>${result.description}</p>
                        </div>
                    </div>
                </article>
            </div >`;
        cards += card;
    });
    section_project.innerHTML = cards;
});