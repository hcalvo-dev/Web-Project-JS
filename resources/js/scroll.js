window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

export function scrollToHash () {
  if (window.location.hash) {
    console.log('Hash encontrado:', window.location.hash)
    const target = document.querySelector(window.location.hash)
    if (target) {
      console.log('Elemento objetivo encontrado:', target)
      // Usar setTimeout para asegurarse de que el navegador ha terminado de renderizar
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' })
        console.log('Desplazamiento realizado a:', target)
      }, 300) // Ajusta el tiempo si es necesario
    } else {
      console.warn('No se encontró el elemento con el ID:', window.location.hash)
    }
  } else {
    console.log('No hay hash en la URL.')
  }
}
