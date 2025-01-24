import '../../bootstrap/js/bootstrap.bundle.min.js'

import '../js/scroll.js'

import { resources } from '../js/traductions.js'

import '../../node_modules/i18next/dist/umd/i18next.min.js'

import '../js/datatable.js'

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
    // 3. Llamamos a la función que actualiza el contenido inicial
    updateContent()

    // Mostramos el HTML ahora que la traducción está lista
    document.documentElement.style.display = 'block'
  })

  // Actualiza todos los elementos con data-i18n
  function updateContent () {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n')
      element.innerHTML = i18next.t(key)
    })

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

  // 4. Escuchamos los botones del dropdown para cambiar de idioma
  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang')
      i18next.changeLanguage(lang).then(() => {
        // Guardamos la preferencia en localStorage
        window.localStorage.setItem('lang', lang)

        // Actualizamos el contenido
        updateContent()
      })
    })
  })
})
