console.log('Conectado..')

const titulo = document.getElementsByClassName('title')[0]
titulo.style.color = 'red'
titulo.addEventListener('hover', () => {
    titulo.style.color = '#0081a7'
})
console.log('titulo', titulo)

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')

const btnSuma = document.getElementById('btnSuma')

btnSuma.addEventListener('click', () => {
    sumaValores()
});


const sumaValores = () => {
   if(!isNaN(parseInt(numero1.value)))
   {
    if(!isNaN(parseInt(numero2.value))) {
        const res = parseInt(numero1.value) + parseInt(numero2.value)
        alert('El resultado es: ' + res)
       }
    }
   }