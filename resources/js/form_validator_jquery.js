import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/jquery-validation/dist/jquery.validate.min.js'

$.validator.setDefaults({
  submitHandler: function () {
    // Oculta cualquier mensaje previo de éxito
    $('#form-success').remove()
    $('#name').val('')
    $('#email').val('')
    $('#message').val('')

    // Crea y muestra un mensaje de éxito
    const successMessage = $('<div id="form-success" class="alert alert-success mt-3">Formulario enviado correctamente.</div>')
    $('#contact-form').append(successMessage)
  }
})

$.validator.addMethod(
  'customEmail',
  function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  },
  'El formato del correo no es válido'
)
$(document).ready(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        customEmail: true 
      },
      message: {
        required: true,
        minlength: 10
      },
      agree: 'required'
    },
    messages: {
      name: {
        required: i18next.t('name_required'),
        minlength: i18next.t('name_minlength')
      },
      email: {
        required: i18next.t('email_required'),
        customEmail: i18next.t('email_invalid')
      },
      message: i18next.t('message_required'),
      agree: i18next.t('agree_required')
    },
    errorClass: 'is-invalid',
    validClass: 'is-valid',
    errorElement: 'div',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback')
      error.insertAfter(element)
    },
    highlight: function (element) {
      $(element).addClass('is-invalid').removeClass('is-valid')
    },
    unhighlight: function (element) {
      $(element).removeClass('is-invalid').addClass('is-valid')
    }
  })
})

// Función para actualizar los mensajes de error
function updateValidationErrorMessages() {
  $('.invalid-feedback').each(function () {
    let inputName = $(this).prev('input, textarea').attr('name'); // Obtener el campo relacionado
    if (inputName) {
      let newMessage = i18next.t(inputName + '_required'); // Obtener el mensaje traducido
      $(this).text(newMessage); // Actualizar el mensaje de error
    }
  });
}

// Escuchar cambios de idioma
i18next.on('languageChanged', function () {
  updateValidationErrorMessages();
});

