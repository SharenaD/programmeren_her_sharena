// selecteert alle buttons binnen een section
const buttons = document.querySelectorAll('section button');

// selecteert alle plaatjes binnen een article
const images = document.querySelectorAll('article img');

// houdt bij welke variatie de gebruiker heeft gekozen
let currentChoices = {
    drink: null,    // huidige drink, null omdat er nog niks is gekozen
    topping: null,  //huidige topping
    straw: null     //huidige straw     
};

// forEach = elke button
buttons.forEach((button) => {
    // zorgt dat  er iets gebeurt bij een klik
    button.addEventListener('click', () => {
        // kijkt naar de waarde van attribuut data-target
        const target = button.getAttribute('data-target');
        
        // Als de knop gaat over een **drankje** (bijv. "milktea"), gebeurt dit:
        if (target.includes('milktea')) {
            // Als er al een drankje was gekozen, verberg de afbeelding daarvan
            if (currentChoices.drink) {
                const previousDrink = document.querySelector(`article img[data-target="${currentChoices.drink}"]`);
                if (previousDrink) previousDrink.classList.add('hidden'); // Verberg het vorige drankje
            }

            // Als het gekozen drankje hetzelfde is als het vorige, zet alles weer terug naar normaal
            if (currentChoices.drink === target) {
                resetAll(); // Zet alles terug naar de beginstand
                return; // Stop hier met de code, want we hebben alles al teruggezet
            }

            // Sla het nieuwe gekozen drankje op en maak het zichtbaar
            currentChoices.drink = target;

            // Zoek het plaatje van het nieuwe drankje en maak het zichtbaar
            const newDrink = document.querySelector(`article img[data-target="${target}"]`);
            if (newDrink) newDrink.classList.remove('hidden'); // Maak het nieuwe drankje zichtbaar
        }
        
        // Als de knop gaat over een **topping** (bijv. "boba"), gebeurt dit:
        else if (target.includes('topping')) {
            // Als er al een topping was gekozen, verberg de afbeelding daarvan
            if (currentChoices.topping) {
                const previousTopping = document.querySelector(`article img[data-target="${currentChoices.topping}"]`);
                if (previousTopping) previousTopping.classList.add('hidden'); // Verberg het vorige topping
            }

            // Sla de nieuwe gekozen topping op en maak het zichtbaar
            currentChoices.topping = target;

            // Zoek het plaatje van de nieuwe topping en maak het zichtbaar
            const newTopping = document.querySelector(`article img[data-target="${target}"]`);
            if (newTopping) newTopping.classList.remove('hidden'); // Maak de nieuwe topping zichtbaar
        }

        // Als de knop gaat over een **rietje** (bijv. "paperstraw"), gebeurt dit:
        else if (target.includes('straw')) {
            // Als er al een rietje was gekozen, verberg de afbeelding daarvan
            if (currentChoices.straw) {
                const previousStraw = document.querySelector(`article img[data-target="${currentChoices.straw}"]`);
                if (previousStraw) previousStraw.classList.add('hidden'); // Verberg het vorige rietje
            }

            // Sla het nieuwe gekozen rietje op en maak het zichtbaar
            currentChoices.straw = target;

            // Zoek het plaatje van het nieuwe rietje en maak het zichtbaar
            const newStraw = document.querySelector(`article img[data-target="${target}"]`);
            if (newStraw) newStraw.classList.remove('hidden'); // Maak het nieuwe rietje zichtbaar
        }
    });
});

// Functie om **alles terug te zetten** naar de beginstand (verberg alles wat is gekozen)
function resetAll() {
    // Kijk voor elk item (drankje, topping, rietje) of er iets is gekozen
    Object.keys(currentChoices).forEach((key) => {
        // Als er iets is gekozen, verberg het plaatje daarvan
        if (currentChoices[key]) {
            const img = document.querySelector(`article img[data-target="${currentChoices[key]}"]`);
            if (img) img.classList.add('hidden'); // Verberg het plaatje
        }
    });

    // Zet alles terug naar "geen keuze" (null)
    currentChoices = { drink: null, topping: null, straw: null };
}
