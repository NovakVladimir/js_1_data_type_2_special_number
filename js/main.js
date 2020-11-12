function relation() {
    let numb = document.numberForm.numberInput.value;
    let el = document.getElementById("message");
    numb = +numb;
    switch(numb) {
        // case 1: el.innerHTML = "!";
        case 1: el.innerHTML = "!";;
        break;
        case 2: el.innerHTML = "@";
        break;
        case 3: el.innerHTML = "#";
        break;
        case 4: el.innerHTML = "$";
        break;
        case 5: el.innerHTML = "%";
        break;
        case 6: el.innerHTML = "^";
        break;
        case 7: el.innerHTML = "&";
        break;
        case 8: el.innerHTML = "*";
        break;
        case 9: el.innerHTML = "(";
        break;
        case 0: el.innerHTML = ")";
        break;
        default: el.innerHTML = "You are wrong";
        let audio_5 = new Audio('./audio/audio_5.mp3');
        audio_5.play();
    }
}