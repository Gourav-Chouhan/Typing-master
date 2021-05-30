let size = 40
let flaccuationRate = 1
let avgSize = size
let theta = 0
let color = "lightgreen"
let alpha = 1

let started = false;

let timeLeft = 60;

// para = para.trim()


let wordsPerPara = 20;

let start = 0;
let end = wordsPerPara;
let at = 0;
let text_arr = para.split(" ") //para[Math.floor(Math.random() * para.length)].split(" ")
let arrr = text_arr.slice(start, end)
let currentWord = arrr[at]
    // let date = new Date();
    // let time = date.getTime();

let sounds = [];

sounds[0] = new Audio("sounds/space.mp3");
sounds[1] = new Audio("sounds/tap1.mp3")
sounds[2] = new Audio("sounds/tap2.mp3")
sounds[3] = new Audio("sounds/tap1.mp3")
sounds[4] = new Audio("sounds/tap2.mp3")

let correct = 0
let incorrect = 0


let i = document.getElementById("inp");

function setup() {

    noCanvas()
}

function timer() {
    timeLeft--;
}


function keyPressed() {
    if (!started) {
        started = true;
        setInterval(timer, 1000)
    }
    random(sounds).play()
        // console.log(key, keyCode)

    if (key == " " || key == "Enter") {
        sounds[0].play();
        let value = document.getElementById("inp").value.trim();
        // console.log(value.value.trim())
        // console.log(value);
        if (value == currentWord) {
            correct++;
            if (at < wordsPerPara - 1) {
                at++
            } else {
                start += wordsPerPara
                end += wordsPerPara
                at = 0
            }
        } else {
            incorrect++;
        }
        document.getElementById("inp").value = "";
    }



}


function blink() {
    alpha = Math.sin(theta) / (2 + 0.3) + 1 / (2 + 0.3);
    theta += 0.05
    if (-theta + Math.PI * 2 < 0.01) {
        theta = 0
    }
    let value = document.getElementById("inp").value.trim()
    if (value == '') {
        color = "silver"
    } else if (currentWord.startsWith(value)) {
        color = "#00ff2a"
    } else {
        color = "red"
    }

    // let newDate = new Date()
    // let newTime = newDate.getTime()
    // let timeLapsed = (newTime - time) / 1000;
    // let timeLeft = parseInt(testTime - timeLapsed)
    if (timeLeft < 0) {
        timeLeft = 100;
        let again = confirm(`Your typing speed was ${correct}, do you wannt to do it again!!`)
        if (again) {
            reload();
        }
    }
    document.getElementById("info").innerHTML = ":" + timeLeft; //60 - timeLapsed.toFixed(0);

}


function update() {
    arrr = text_arr.slice(start, end)
    currentWord = arrr[at]
    arrr[at] = `<span style='background-color: rgba(23,23,23,${alpha}); border-radius: 10px;padding: 5px; color: ${color} ; font-size: ${size}px'>` + arrr[at] + " </span>";

    document.getElementById("read").innerHTML = arrr.join(" ")
}

function reload() {
    at = 0
    start = 0
    end = wordsPerPara
    timeLeft = 60
}

let running = setInterval(update, 100);
let blinking = setInterval(blink, 1000 / 120)
