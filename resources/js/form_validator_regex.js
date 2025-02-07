function updateContent () {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n')
    const translatedText = i18next.t(key)

    if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search' || element.type === 'email' || element.type === 'password')) {
      element.setAttribute('placeholder', translatedText)
    } else {
      element.innerHTML = translatedText
    }
  })

  // Actualizar los mensajes de validación dinámicos
  document.querySelectorAll('.error-message, .valid-message').forEach(element => {
    const formGroup = element.closest('.form-group')
    if (!formGroup) return // Evita que se ejecute el código si no hay un .form-group
  
    const input = formGroup.querySelector('input')
    if (!input) return // Evita errores si no hay un input dentro del form-group
  
    const inputId = input.id
    const key = element.classList.contains('error-message')
      ? `error_message_${inputId}`
      : `valid_message_${inputId}`
  
    const translatedMessage = i18next.t(key)
    const icon = element.querySelector('i') ? element.querySelector('i').outerHTML : '' // Maneja el caso donde no haya un icono
    element.innerHTML = `${icon} ${translatedMessage}`
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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form')
  const emailInput = document.getElementById('validationCustomEmail')
  const passwordInput = document.getElementById('validationCustomPassword')

  // Validar mientras el usuario escribe
  emailInput.addEventListener('input', function () {
    if (validateEmail(emailInput.value)) {
      showSuccess(emailInput, 'Correo válido.')
    } else {
      showError(emailInput, 'Por favor, introduce un correo electrónico válido.')
    }
  })

  passwordInput.addEventListener('input', function () {
    if (validatePassword(passwordInput.value)) {
      showSuccess(passwordInput, 'Contraseña válida.')
    } else {
      showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.')
    }
  })

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    let isValid = true

    // Validar correo electrónico
    if (validateEmail(emailInput.value)) {
      showSuccess(emailInput, 'Correo válido.')
    } else {
      showError(emailInput, 'Por favor, introduce un correo electrónico válido.')
      isValid = false
    }

    // Validar contraseña
    if (validatePassword(passwordInput.value)) {
      showSuccess(passwordInput, 'Contraseña válida.')
    } else {
      showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.')
      isValid = false
    }

    if (isValid) {
      form.submit()
    }
  })

  function validateEmail (email) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return emailPattern.test(email)
  }

  function validatePassword (password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^*_=:;,.?])[A-Za-z\d!@#$%^*_=:;,.?]{8,}$/
    return passwordPattern.test(password)
  }

  function showError (input, message) {
    removeFeedback(input) // Limpiar mensajes previos

    const errorElement = document.createElement('div')
    input.classList.add('error-border')
    errorElement.className = 'error-message'

    // Traducir el mensaje antes de insertarlo
    const translatedMessage = i18next.t(`error_message_${input.id}`, { defaultValue: message })
    errorElement.innerHTML = `<span class="error-icon" ><i class="bi bi-exclamation-circle me-1"></i> </span> <span data-i18n="error_message_${input.id}">${translatedMessage} </span>`

    input.parentElement.appendChild(errorElement)
  }

  function showSuccess (input, message) {
    removeFeedback(input) // Limpiar mensajes previos

    const successElement = document.createElement('div')
    input.classList.add('valid-border')
    successElement.className = 'valid-message'

    // Traducir el mensaje antes de insertarlo
    const translatedMessage = i18next.t(`valid_message_${input.id}`, { defaultValue: message })
    successElement.innerHTML = `<span class="valid-icon"><i class="bi bi-check-lg me-1"></i> </span><span data-i18n="valid_message_${input.id}">${translatedMessage} </span>`

    input.parentElement.appendChild(successElement)
  }

  function removeFeedback (input) {
    input.classList.remove('error-border', 'valid-border')
    const feedback = input.parentElement.querySelector('.error-message, .valid-message')
    if (feedback) {
      feedback.remove()
    }
  }

  // Escuchar cambios en el idioma y actualizar contenido dinámico
  i18next.on('languageChanged', () => {
    updateContent()
  })
})
