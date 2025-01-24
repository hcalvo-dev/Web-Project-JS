import '../../node_modules/jquery/dist/jquery.min.js'
import '../DataTables/datatables.js'

function updateContent () {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n')
    element.innerHTML = i18next.t(key)
  })
}

export function cargarPreguntas () {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest()
    const url = '/resources/json/preguntasFrecuentes.json' // Asegúrate de que la ruta es correcta

    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const preguntasFrecuentes = JSON.parse(this.responseText)
        imprimirPreguntas(preguntasFrecuentes)
        resolve() // Resuelve la promesa después de imprimir las preguntas
      }
    }
    xmlhttp.open('GET', url, true)
    xmlhttp.send()

    function imprimirPreguntas (array) {
      // Prepara las filas para la tabla
      let out = ''
      array.forEach((element) => {
        out += `
        <tr>
            <td class="w-10 border-start text-primary "><p class="ps-2 d-flex justify-content-start" > ${element.usuarioPregunta} <i class="ps-2 bi bi-caret-right-fill"></i></p></td>
            <td data-i18n="${element.contact_faq_pregunta}">${element.pregunta}</td>
            <td class="w-10 border-start text-primary "><p class="ps-2 d-flex justify-content-start" > ${element.usuarioRespuesta} <i class="ps-2 bi bi-caret-right-fill"></i></p></td>
            <td data-i18n="${element.contact_faq_respuesta}">${element.respuesta}</td>
        </tr>`
      })
      // Inserta las filas en el cuerpo de la tabla
      document.querySelector('#preguntasFrecuentes tbody').innerHTML = out

      if ($.fn.DataTable.isDataTable('#preguntasFrecuentes')) {
        $('#preguntasFrecuentes').DataTable().destroy()
      }

      // Inicializa DataTable
      const miDatatable = new DataTable('#preguntasFrecuentes', {
        stateSave: true,
        lengthMenu: [5, 10, 25, 50],
        pageLength: 5,
        language: getDatatableLanguage()
      })
      miDatatable.on('draw', function () {
        console.log('Evento draw disparado')
        updateContent() // Llama a esta función para traducir los elementos dinámicos
      })
    }

    function getDatatableLanguage () {
      const idioma = window.localStorage.getItem('lang') || 'es'
      console.log('Idioma cargado en DataTable:', idioma)

      const languages = {
        es: {
          decimal: ',',
          thousands: '.',
          lengthMenu: 'Mostrar _MENU_ <i class="bi bi-caret-right"></i> Filas por página',
          zeroRecords: 'No se encontraron resultados',
          info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
          infoEmpty: 'No hay entradas disponibles',
          infoFiltered: '(filtrado de _MAX_ entradas totales)',
          search: 'Buscar:',
          paginate: {
            next: 'Siguiente',
            previous: 'Anterior'
          }
        },
        en: {
          decimal: '.',
          thousands: ',',
          lengthMenu: 'Show _MENU_ <i class="bi bi-caret-right"></i> Rows per page',
          zeroRecords: 'No results found',
          info: 'Showing _START_ to _END_ of _TOTAL_ entries',
          infoEmpty: 'No entries available',
          infoFiltered: '(filtered from _MAX_ total entries)',
          search: 'Search:',
          paginate: {
            next: 'Next',
            previous: 'Previous'
          }
        }
      }

      return languages[idioma] || languages.es
    }
  })
}
