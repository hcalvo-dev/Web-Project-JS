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
        customEmail: true // Aplicar la regla personalizada
      },
      message: {
        required: true,
        minlength: 10
      },
      agree: 'required'
    },
    messages: {
      name: {
        required: 'Por favor ingresa tu nombre completo',
        minlength: 'Tu nombre debe ser de no menos de 5 caracteres'
      },
      email: {
        required: 'Por favor ingresa un correo válido',
        customEmail: 'El formato del correo no es válido'
      },
      message: 'Por favor ingresa un mensaje de al menos 10 caracteres',
      agree: 'Por favor acepta nuestra política'
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
