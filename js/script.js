let title = document.querySelector('.title')

document.addEventListener('keydown', (event)=>{
    console.log(event)
    let getElem = document.getElementById(event.key.toUpperCase())
    if(event.key === ' '){
        title.innerHTML += ' '
    }
    if(event.key === 'Enter'){
       title.innerHTML += '<br />'
    }
    if(event.key === 'Backspace'){
        if(event.repeat === true){
            title.innerHTML = title.innerHTML.slice(0 , -1)
        }
       title.innerHTML = title.innerHTML.slice(0 , -1)
    }
        // console.log(getElem)
        getElem.classList.add('hit')


    getElem.addEventListener('animationend', ()=>{
        getElem.classList.remove('hit')
    })

    console.log(getElem.innerHTML)
    title.innerHTML += getElem.getAttribute('id')


})

