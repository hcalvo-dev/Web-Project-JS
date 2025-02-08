// Importaciones necesarias
import '../../bootstrap/js/bootstrap.bundle.min.js'
import { resources } from '../js/traductions.js'
import '../../node_modules/i18next/dist/umd/i18next.min.js'
import '../js/form_validator_jquery.js'
import { scrollToHash } from '../js/scroll.js'

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
    updateContent()

    // Mostramos el HTML ahora que la traducción está lista
    document.documentElement.style.display = 'block'

    scrollToHash()

    // Inicializamos los popovers después de la traducción
    initializePopovers()
  })

  // Función para actualizar todo el contenido traducido
  function updateContent () {
    // Traducir elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n')
      const translatedText = i18next.t(key)

      // Si el elemento es un input de tipo text, search o email, actualiza el placeholder
      if (element.tagName === 'INPUT' && ['text', 'search', 'email'].includes(element.type)) {
        element.setAttribute('placeholder', translatedText)
      }

      // Actualiza el contenido interno del elemento
      element.innerHTML = translatedText
    })

    // Traducir popovers
    comprobarPopovers()

    // Cambiamos la bandera y el texto del botón en base al idioma actual
    const currentLang = i18next.language
    const langFlag = document.getElementById('currentLangFlag')
    const langLabel = document.getElementById('currentLangLabel')

    if (currentLang === 'en') {
      langFlag.src = '../resources/img/UK.png'
      langFlag.alt = 'UK Flag'
      langLabel.textContent = 'En'
    } else {
      langFlag.src = '../resources/img/spain.png'
      langFlag.alt = 'Spanish Flag'
      langLabel.textContent = 'Es'
    }
  }

  // Función para traducir popovers
  function comprobarPopovers () {
    document.querySelectorAll('[data-bs-toggle]').forEach(element => {
      // Obtener las claves de traducción para el título y contenido del popover
      const titleKey = element.getAttribute('data-i18n-title')
      const contentKey = element.getAttribute('data-i18n-content')

      if (titleKey) {
        element.setAttribute('data-bs-title', i18next.t(titleKey))
      }

      if (contentKey) {
        element.setAttribute('data-bs-content', i18next.t(contentKey))
      }
    })
  }

  // Función para inicializar o re-inicializar los popovers
  function initializePopovers () {
    // Destruye los popovers existentes para evitar duplicados
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.forEach(popoverTriggerEl => {
      // Si ya existe un popover, destrúyelo
      if (popoverTriggerEl._popover) {
        popoverTriggerEl._popover.dispose()
      }
      // Inicializa el popover
      const popover = new bootstrap.Popover(popoverTriggerEl)
      popoverTriggerEl._popover = popover // Guarda referencia para futura destrucción

      // Escucha el clic en el elemento para mostrar y cerrar automáticamente
      popoverTriggerEl.addEventListener('click', () => {
        // Cierra el popover automáticamente después de 3 segundos
        setTimeout(() => {
          popover.hide()
        }, 3000) // Tiempo en milisegundos
      })
    })
  }

  window.addEventListener('load', () => {
    scrollToHash()
  })

  // 4. Escuchamos los botones del dropdown para cambiar de idioma
  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang')
      i18next.changeLanguage(lang).then(() => {
        // Guardamos la preferencia en localStorage
        window.localStorage.setItem('lang', lang)

        // Actualizamos el contenido
        updateContent()

        // Re-inicializamos los popovers con los nuevos textos traducidos
        initializePopovers()

        scrollToHash()
      })
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
