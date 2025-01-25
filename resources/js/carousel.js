import '../../node_modules/jquery/dist/jquery.min.js'

let resizeTimeout

export function updateCarousel () {
  // Obtener el ancho de la ventana
  const windowWidth = $(window).width()
  const multipleItemCarousel = document.querySelector('#carouselExampleCaptions')
  const $carouselInner = $('.carousel-inner')

  if (windowWidth >= 760) {
    // Configuración para pantallas grandes
    $(multipleItemCarousel).removeClass('slide')

    const carouselWidth = $carouselInner[0].scrollWidth
    const cardWidth = $('.carousel-item').outerWidth(true) // Incluye márgenes
    let scrollPosition = 0

    // Resetear posición del scroll y eliminar eventos previos
    $carouselInner.scrollLeft(0)
    $('.carousel-control-next, .carousel-control-prev').off('click')

    // Configurar eventos
    $('.carousel-control-next').on('click', function () {
      if (scrollPosition < carouselWidth - $carouselInner.width()) {
        scrollPosition += cardWidth
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600)
      } else {
        // Volver al principio si está al final
        scrollPosition = 0
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600)
      }
    })

    $('.carousel-control-prev').on('click', function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600)
      } else {
        // Ir al final si está al principio
        scrollPosition = carouselWidth - $carouselInner.width()
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600)
      }
    })
  } else {
    // Configuración para pantallas pequeñas
    $(multipleItemCarousel).addClass('slide')

    // Restablecer posición del scroll y eliminar eventos previos
    $carouselInner.scrollLeft(0)
    $('.carousel-control-next, .carousel-control-prev').off('click')
  }
}

// Escuchar el evento de cambio de tamaño y actualizar el carrusel
$(window).resize(function () {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(updateCarousel, 200)
})

// Inicializar el carrusel al cargar la página
$(document).ready(function () {
  updateCarousel()
})
