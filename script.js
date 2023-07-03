const button = document.querySelector('button')

function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    if(min >= max){
        alert('O primeiro valor deve ser menor do que o segundo valor!')
    } else {
        const result = Math.floor(Math.random() * (max - min + 1) + min)
        alert(`O seu número é ${result}`)
    }
}

button.addEventListener('click', generateNumber)