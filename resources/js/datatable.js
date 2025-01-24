import '../../node_modules/jquery/dist/jquery.min.js'
import '../DataTables/datatables.js'

const xmlhttp = new XMLHttpRequest()
const url = '/resources/json/preguntasFrecuentes.json' // Asegúrate de que la ruta es correcta

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const preguntasFrecuentes = JSON.parse(this.responseText)
    imprimirPreguntas(preguntasFrecuentes)
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
            <td class="w-10 border-start text-primary "><p class="ps-2 d-flex justify-content-start"> ${element.usuarioPregunta} <i class="ps-2 bi bi-caret-right-fill"></i></p></td>
            <td data-i18n="contact_faq_5q">${element.pregunta}</td>
            <td class="w-10 border-start text-primary "><p class="ps-2 d-flex justify-content-start"> ${element.usuarioRespuesta} <i class="ps-2 bi bi-caret-right-fill"></i></p></td>
            <td data-i18n="contact_faq_5a">${element.respuesta}</td>
        </tr>`
  })
  // Inserta las filas en el cuerpo de la tabla
  document.querySelector('#preguntasFrecuentes tbody').innerHTML = out

  // Inicializa DataTable
  new DataTable('#preguntasFrecuentes', {
    stateSave: true,
    lengthMenu: [5, 10, 25, 50],
    pageLength: 5,
    language: {
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
    }
  })
}
