const answers = [
    "Ти впевнена?",
    "Точно впевнена??",
    "Точно точно точно впевнена???",
    "Може подумай ще раз?",
    "Ну будь ласочка!!!?",
    "Та за шо........?",
    "Жееееесть......",
    "Я такого не очікував канєшно...",
    "Це вже знущання!!!!",
    "Ти така злюка!!!!",
    "Чому ти робиш це зі мною?????",
    "Я прям афігєл від такого повороту - _ -",
    "Ну давай,давай натискай, я просто оновлю сторінку",
    "Ндааа, почнімо спочатку.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) banner.src = "no.gif";
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [20, 25, 15, 17, 24]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "Ні";
        yes_button.style.height = "60px";
        yes_button.style.width = "60px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "yeees.gif";
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
    var hiddenText = document.getElementById('hide');
    hiddenText.style.display = 'none';
});
no_button.addEventListener('mouseover', function() {
    banner.src = "no.gif";
   
} )
no_button.addEventListener('mouseout', function(){
    banner.src = 'mid.gif';
})
