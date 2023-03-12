/*nedokážu přijít na to, jak zařídit, aby když chci provést postupně obě zvonění, tak aby se u obou z nich budík rozhýbal
tou CSS třídou...když nemám to myTimeout zakomentované, tak se provedou obě zvonění, ale jen u prvního z nich se budík rozhýbe*/

const budik = document.querySelector('.alarm')

const timeIsUp = () => {
    budik.classList.add('alarm--ring')
    const alarm = document.querySelector('audio')
    alarm.play()
}

//let myTimeout=setTimeout(timeIsUp, 5000)

let vstupUzivatel = prompt('Zadejte, kolik vteřin má uplynout než minutka začne zvonit:')
let uzivatelTimeout = setTimeout(timeIsUp, Number(vstupUzivatel*1000))

const stopMinutka = () => {
    //clearTimeout(myTimeout)
    clearTimeout(uzivatelTimeout)
}