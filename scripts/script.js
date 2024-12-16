// variabelen images en koppelen van buttons (voorbeeld Janno)

// tea img
const milkTea = document.querySelector(`.milktea-white`)
const mangoTea = document.querySelector(`.milktea-mango`)
const matchaTea = document.querySelector(`.milktea-matcha`)
const pinkTea = document.querySelector(`.milktea-pink`)
// tea buttons
const milkTeaBtn = document.querySelector(`section:nth-of-type(1) button:nth-of-type(1)`)
const matchaTeaBtn = document.querySelector(`section:nth-of-type(1) button:nth-of-type(2)`)
const pinkTeaBtn = document.querySelector(`section:nth-of-type(1) button:nth-of-type(3)`)
const mangoTeaBtn = document.querySelector(`section:nth-of-type(1) button:nth-of-type(4)`)

// topping img
const tapiocaImg = document.querySelector('.topping-tapioca')
const cocoImg = document.querySelector('.topping-coco')
const mangoTopImg = document.querySelector('.topping-mango')
const strawberryImg = document.querySelector('.topping-strawberry')
// topping buttons
const tapiocaTopBtn = document.querySelector(`section:nth-of-type(2) button:nth-of-type(1)`)
const cocoTopBtn = document.querySelector(`section:nth-of-type(2) button:nth-of-type(2)`)
const mangoTopBtn = document.querySelector(`section:nth-of-type(2) button:nth-of-type(3)`)
const strawTopBtn = document.querySelector(`section:nth-of-type(2) button:nth-of-type(4)`)

// straw img
const pinkStrawImg = document.querySelector('.straw-pink')
const blueStrawImg = document.querySelector('.straw-blue')
const orangeStrawImg = document.querySelector('.straw-orange')
const purpleStrawImg = document.querySelector('.straw-purple')
// straw buttons
const pinkStrawBtn = document.querySelector(`section:nth-of-type(3) button:nth-of-type(1)`)
const blueStrawBtn = document.querySelector(`section:nth-of-type(3) button:nth-of-type(2)`)
const orangeStrawBtn = document.querySelector(`section:nth-of-type(3) button:nth-of-type(3)`)
const purpleStrawBtn = document.querySelector(`section:nth-of-type(3) button:nth-of-type(4)`)



// tea funcionaliteit

milkTeaBtn.addEventListener('click', ()=>{
    milkTea.classList.toggle('hidden')

    if(!milkTea.classList.contains('hidden')){
        mangoTea.classList.add('hidden')
        matchaTea.classList.add('hidden')
        pinkTea.classList.add('hidden')
    } else {
        reset(); // reset toppings en rietjes (hulp van Ali gehad)
        console.log('begin opnieuw!')
    }
})


mangoTeaBtn.addEventListener('click', ()=>{
    mangoTea.classList.toggle('hidden')

    if(!mangoTea.classList.contains('hidden')){
        milkTea.classList.add('hidden')
        matchaTea.classList.add('hidden')
        pinkTea.classList.add('hidden')
    } else {
        reset(); 
        console.log('begin opnieuw!')
    }
})


matchaTeaBtn.addEventListener('click', ()=>{
    matchaTea.classList.toggle('hidden')

    if(!matchaTea.classList.contains('hidden')){
        milkTea.classList.add('hidden')
        mangoTea.classList.add('hidden')
        pinkTea.classList.add('hidden')
    } else {
        reset(); 
        console.log('begin opnieuw!')
    }
})


pinkTeaBtn.addEventListener('click', ()=>{
    pinkTea.classList.toggle('hidden')

    if(!pinkTea.classList.contains('hidden')){
        mangoTea.classList.add('hidden')
        matchaTea.classList.add('hidden')
        milkTea.classList.add('hidden')
    } else {
        reset(); 
        console.log('begin opnieuw!')
    }
})

// toppings functionaliteit

tapiocaTopBtn.addEventListener('click', ()=>{
    tapiocaImg.classList.toggle('hidden')

    if(!tapiocaImg.classList.contains('hidden')){
        mangoTopImg.classList.add('hidden')
        strawberryImg.classList.add('hidden')
        cocoImg.classList.add('hidden')
    }
})

cocoTopBtn.addEventListener('click', ()=>{
    cocoImg.classList.toggle('hidden')

    if(!cocoImg.classList.contains('hidden')){
        mangoTopImg.classList.add('hidden')
        strawberryImg.classList.add('hidden')
        tapiocaImg.classList.add('hidden')
    }
})

mangoTopBtn.addEventListener('click', ()=>{
    mangoTopImg.classList.toggle('hidden')

    if(!mangoTopImg.classList.contains('hidden')){
        cocoImg.classList.add('hidden')
        strawberryImg.classList.add('hidden')
        tapiocaImg.classList.add('hidden')
    }
})

strawTopBtn.addEventListener('click', ()=>{
    strawberryImg.classList.toggle('hidden')

    if(!strawberryImg.classList.contains('hidden')){
        cocoImg.classList.add('hidden')
        mangoTopImg.classList.add('hidden')
        tapiocaImg.classList.add('hidden')
    }
})

// straw functionaliteit 

pinkStrawBtn.addEventListener('click', ()=>{
    pinkStrawImg.classList.toggle('hidden')

    if(!pinkStrawImg.classList.contains('hidden')){
        blueStrawImg.classList.add('hidden')
        purpleStrawImg.classList.add('hidden')
        orangeStrawImg.classList.add('hidden')
    }
})
blueStrawBtn.addEventListener('click', ()=>{
    blueStrawImg.classList.toggle('hidden')

    if(!blueStrawImg.classList.contains('hidden')){
        pinkStrawImg.classList.add('hidden')
        purpleStrawImg.classList.add('hidden')
        orangeStrawImg.classList.add('hidden')
    }
})
orangeStrawBtn.addEventListener('click', ()=>{
    orangeStrawImg.classList.toggle('hidden')

    if(!orangeStrawImg.classList.contains('hidden')){
        blueStrawImg.classList.add('hidden')
        purpleStrawImg.classList.add('hidden')
        pinkStrawImg.classList.add('hidden')
    }
})
purpleStrawBtn.addEventListener('click', ()=>{
    purpleStrawImg.classList.toggle('hidden')

    if(!purpleStrawImg.classList.contains('hidden')){
        blueStrawImg.classList.add('hidden')
        pinkStrawImg.classList.add('hidden')
        orangeStrawImg.classList.add('hidden')
    }
})


// Als de gebruiker de tea verwijdert, dan verdwijnt de rest ook mee

function reset() {
    // verberg toppings
    tapiocaImg.classList.add('hidden');
    cocoImg.classList.add('hidden');
    mangoTopImg.classList.add('hidden');
    strawberryImg.classList.add('hidden');

    // verberg straws
    pinkStrawImg.classList.add('hidden');
    blueStrawImg.classList.add('hidden');
    orangeStrawImg.classList.add('hidden');
    purpleStrawImg.classList.add('hidden');
}


// audio (chatGPT gevraagd om voorbeeld mp3 toe te voegen)
document.querySelector('article').addEventListener('click', function() {
    const audio = new Audio('milkshake-being-shaken-43354.mp3');
    audio.play();

    // animatie, voeg class toe (chatGPT voorbeeld opgezocht, zie css)
    this.classList.add('shake');

    // verwijder shake na audio (animatieduur = gelijk aan audio)
    setTimeout(() => {
        this.classList.remove('shake');
        this.textContent = '🧋🩵 Enjoy your Boba! 🩵🧋' //(tip van Janno)
    }, 9000); // 9000ms= 9 seconden
});


// BRONVERMELDING
// const variabelen voorbeeld Janno
// function reset aan Ali gevraagd 
// Janno geholpen met alert te veranderen naarf textContent
// audio toevoegen chatGPT gevraagd voorbeeld te geven, let veranderd naar const

// audio is van: https://pixabay.com/sound-effects/search/milkshake/