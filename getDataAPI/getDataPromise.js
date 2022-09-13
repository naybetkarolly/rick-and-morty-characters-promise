const API = 'https://rickandmortyapi.com/api/character/';

const getData = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => { 
            printData(json)
                printPagination(json.info)
        })
        .catch(error => {console.error('error-->: ' , error) })

}


const printData = (data) => {
    let html ='';
    data.results.forEach(c => {
        html+=  '<div class="col-4 mt-5 ">'
            html+=  '<div class="card" style="width: 18rem;">'
            html+=  `<img src="${c.image}" class="card-img-top" alt=...">`
            html+=  '<div class="card-body">'
            html+=  `<h5 class="card-title">${c.name}</h5>`
            html+=  '</div>'
            html+= `<p class="card-text"> Gender: ${c.gender}</p>`
            html+= `<p class="card-text"> Species: ${c.species}</p>`
            html+=  '</div>'
        html+= '</div>'
    });
    document.getElementById('infoCharacters').innerHTML = html
}

const printPagination = (info) => {
    let preDisable = info.prev == null ? 'disabled': '';
    let nextDisable = info.next == null ? 'disabled': '';


    let html = `<li class="page-item ${preDisable}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`
    html+=`<li class="page-item ${nextDisable}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`
    document.getElementById('pagination').innerHTML =html

}
getData(API);