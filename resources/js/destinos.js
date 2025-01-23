import '../../node_modules/jquery/dist/jquery.min.js'
// import '../../node_modules/jquery-validation/dist/jquery.validate.min.js'

const xmlhttp = new XMLHttpRequest()
const url = '/resources/json/destinos.json'

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const destinos = JSON.parse(this.responseText)
    imprimirDestinos(destinos)
  }
}
xmlhttp.open('GET', url, true)
xmlhttp.send()

function imprimirDestinos (array) {
  let out = ''
  array.forEach((element) => {
    out += `
          <div class="carousel-item active">
                        <div class="card card-carousel text-bg-dark">
                            <div class="img-wrapper">
                                <img src="${element.image}" class="carousel-img"
                                    alt="${element.alt}">
                            </div>
                            <div class="card-img-overlay d-flex flex-column justify-content-end mx-4 mb-4">
                                <p class="card-text mb-0 fs-5 text-shadow">
                                    <small data-i18n="carousel_slide1_days">${element.days}</small>
                                </p>
                                <h2 class="card-title text-shadow" data-i18n="carousel_slide1_name">${element.name}</h2>
                                <p class="styled-paragraph fs-5 text-shadow" data-i18n="carousel_slide1_description">
                                    ${element.description}
                                </p>
                                <p class="styled-paragraph text-center text-shadow" data-i18n="carousel_slide1_price">
                                    ${element.price}</p>
                                <a class="btn btn-primary fw-semibold w-50 d-flex align-self-center"
                                    href="${element.link}" target="_self"
                                    aria-label="Este destino está en proceso de creación">
                                    <p class="mb-0 w-100 text-center" data-i18n="carousel_slide1_button">Ver más</p>
                                </a>
                            </div>
                        </div>
                    </div>`
  })

  document.getElementById('destinos').innerHTML = out
}
