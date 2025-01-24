// destinos.js

import '../../node_modules/jquery/dist/jquery.min.js'
// import '../../node_modules/jquery-validation/dist/jquery.validate.min.js'

export function cargarDestinos () {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest()
    const url = '/resources/json/destinos.json'

    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4) { // Solicitud completada
        if (this.status === 200) { // Respuesta exitosa
          try {
            const destinos = JSON.parse(this.responseText)
            imprimirDestinos(destinos)
            resolve() // Resuelve la promesa después de imprimir los destinos
          } catch (error) {
            reject(new Error('Error al parsear JSON: ' + error.message)) // Rechaza la promesa si hay un error al parsear
          }
        } else {
          reject(new Error(`Error HTTP: ${this.status}`)) // Rechaza la promesa si la respuesta no es exitosa
        }
      }
    }

    xmlhttp.onerror = function () {
      reject(new Error('Error de red')) // Rechaza la promesa si ocurre un error de red
    }

    xmlhttp.open('GET', url, true)
    xmlhttp.send()

    function imprimirDestinos (array) {
      let out = ''
      array.forEach((element, index) => { // Agrega 'index' para manejar la clase 'active'
        out += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="card card-carousel text-bg-dark">
              <div class="img-wrapper">
                <img src="${element.image}" class="carousel-img" alt="${element.alt}">
              </div>
              <div class="card-img-overlay d-flex flex-column justify-content-end mx-4 mb-4">
                <p class="card-text mb-0 fs-5 text-shadow">
                  <small data-i18n="${element.carousel_slide_days}">${element.days}</small>
                </p>
                <h2 class="card-title text-shadow" data-i18n="${element.carousel_slide_name}">${element.name}</h2>
                <p class="styled-paragraph fs-5 text-shadow" data-i18n="${element.carousel_slide_description}">
                  ${element.description}
                </p>
                <p class="styled-paragraph text-center text-shadow" data-i18n="${element.carousel_slide_price}">
                  ${element.price}</p>
                <a class="btn btn-primary fw-semibold w-50 d-flex align-self-center"
                  href="${element.link}" target="_self"
                  aria-label="Este destino está en proceso de creación">
                  <p class="mb-0 w-100 text-center" data-i18n="${element.carousel_slide_button}">Ver más</p>
                </a>
              </div>
            </div>
          </div>`
      })

      document.getElementById('destinos').innerHTML = out
    }
  })
}
