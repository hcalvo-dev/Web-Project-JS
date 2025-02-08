import '../js/scroll.js'

import { resources } from '../js/traductions.js'

import '../../node_modules/i18next/dist/umd/i18next.min.js'

import { cargarDestinos } from '../js/destinos.js'

import '../../bootstrap/js/bootstrap.bundle.min.js'

import { updateCarousel } from '../js/carousel.js'

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // 1. Recogemos el idioma guardado en el localStorage del navegador
  const savedLang = window.localStorage.getItem('lang') || 'es'

  // 2. Inicializamos i18next
  i18next.init({
    lng: savedLang, // <--- Usamos el que recuperamos
    resources, // Idioma por defecto
    debug: false // Ponlo en true para debug
  }).then(() => {
    // 3. Cargamos e imprimimos los destinos después de la inicialización
    cargarDestinos().then(() => {
    // 4. Actualizamos el contenido traducido
      updateContent()
      updateCarousel()

      // Mostramos el HTML ahora que la traducción está lista
    })
    document.documentElement.style.display = 'block'
  })
  // Actualiza todos los elementos con data-i18n
  function updateContent () {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n')
      const translatedText = i18next.t(key)
      // Permite HTML en la traducción (por ejemplo <br>)
      if (element.tagName === 'INPUT' && element.type === 'search') {
        element.setAttribute('placeholder', translatedText)
      }
      element.innerHTML = translatedText
    })

    // Cambiamos la bandera y el texto del botón
    const currentLang = i18next.language
    const langFlag = document.getElementById('currentLangFlag')
    const langLabel = document.getElementById('currentLangLabel')

    if (langFlag && langLabel) { 
      if (currentLang === 'en') {
        langFlag.src = 'resources/img/UK.png'
        langFlag.alt = 'UK Flag'
        langLabel.textContent = 'En'
      } else {
        langFlag.src = 'resources/img/spain.png'
        langFlag.alt = 'Spanish Flag'
        langLabel.textContent = 'Es'
      }
    } else {
      console.warn('Elementos langFlag o langLabel no encontrados en el DOM.')
    }
  }

  // 4. Escuchamos los botones del dropdown para cambiar de idioma
  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang')
      if (lang) { // Verifica que el atributo data-lang exista
        i18next.changeLanguage(lang).then(() => {
          // Guardamos la preferencia en localStorage
          window.localStorage.setItem('lang', lang)

          // Actualizamos el contenido
          updateContent()
          updateCarousel()
        }).catch(err => {
          console.error('Error cambiando el idioma:', err)
        })
      } else {
        console.warn('Botón sin atributo data-lang:', button)
      }
    })
  })
})

// Función para actualizar el atributo lang
function updateLangAttribute() {
  const currentLang = i18next.language || 'es'; // Obtener el idioma actual (por defecto 'es')
  document.documentElement.setAttribute('lang', currentLang); // Cambiar el atributo lang
}

// Escuchar cambios de idioma y actualizar el atributo lang
i18next.on('languageChanged', function () {
  updateLangAttribute();
});

// Llamar a la función al cargar la página para establecer el lang correcto
document.addEventListener('DOMContentLoaded', updateLangAttribute);