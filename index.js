const display = document.getElementById("display");
const birthdayImage = document.getElementById("birthdayImage");
const birthdayAudio = document.getElementById("birthdayAudio");

let showingMessage = false;

function appendToDisplay(value) {
    if (showingMessage) {
        display.value = "";
        showingMessage = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    showingMessage = false;
    hideBirthday();
}

function hideBirthday() {
    birthdayImage.style.display = "none";
    birthdayImage.src = "";
    birthdayAudio.pause();
    birthdayAudio.currentTime = 0;
    birthdayAudio.src = "";
}

function showMissYou() {
    hideBirthday();
    display.value = "I miss you";
    showingMessage = true;
}

function playBirthdaySurprise() {
    display.value = "🎉 Happy Birthday! 🎉";

    // LOCAL IMAGE FILE
    birthdayImage.src = "happybday.jpg";
    birthdayImage.style.display = "block";

    // LOCAL AUDIO FILE
    birthdayAudio.src = "happybday.mp3";
    birthdayAudio.play();

    showingMessage = true;
}

function calculate() {
    try {
        const expression = display.value.replace(/\s/g, "");
        let result = eval(expression);

        if (expression === "6+9" || expression === "9+6") {
            showMissYou();
        } else if (result === 19) { // ANY calculation that equals 19
            playBirthdaySurprise();
        } else {
            display.value = result; // normal calculation
            hideBirthday();
            showingMessage = false;
        }
    } catch {
        display.value = "Error";
        showingMessage = true;
        hideBirthday();
    }
}





