/* Sound Control */

class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/background-audio.mp3');
        this.flipSound = new Audio('assets/audio/card-flip.mp3');
        this.matchSound = new Audio('assets/audio/matched.mp3');
        this.levelUpSound = new Audio('assets/audio/level-up.mp3');
        this.victorySound = new Audio('assets/audio/victory.mp3');
        this.gameOverSound = new Audio('assets/audio/game-over.mp3');
        this.gameOverSound.volume = 0.5; // Reduced volumes to not be annoying if user is listening to something else in background
        this.levelUpSound.volume = 0.5;
        this.victorySound.volume = 0.5;
        this.matchSound.volume = 0.5;
        this.flipSound.volume = 0.3;
        this.bgMusic.volume = 0.8;
        this.bgMusic.loop = true; // so that if player is between levels the audio does not stop
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
    }

    flip() {
        this.flipSound.play();
    }

    match() {
        this.matchSound.play();
    }

    levelUpPing() {
        this.levelUpSound.play();
    }

    victory() {
        this.stopMusic();
        this.victorySound.play();
    }

    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

function muteIcon() {
    if (document.getElementById("muteId").classList.contains('fa-volume-mute')) {
        document.getElementById("muteId").classList.toggle('fa-volume-up');
    }
}

/* CARD FRONT IMAGES  */

const level1 = [`https://z-p3-scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/339288666_1438203056986686_4638697955549778321_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE9468QHwCwxW817BbarVKx0ENiRN0_uvnQQ2JE3T-6-RIhAjD62yOE7axckmN7cgg&_nc_ohc=bGewQ5XRG3cAX9dRCL1&_nc_oc=AQlmaz_F0ODtEJrUqb7sGpDFGfzb9pYhiqbLlN7zyLFyoRJS0y_sI7p9BkXRdowV4m0&_nc_ht=z-p3-scontent.fmnl3-1.fna&oh=03_AdT6x4-yTLCa-XjIu4fe7AEXmRkT2XGOXpcd3U-aV3mpUw&oe=6452C8E8`,
    `https://z-p3-scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/338820574_2459487257536709_5305688271422009063_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFnlHDWTfGI376_kxsnEjjTE0fbp_W75NwTR9un9bvk3OPF9xbfhCJyFSnkn-w0O2Q&_nc_ohc=gkVowv9nLygAX98cEXv&_nc_ht=z-p3-scontent.fmnl3-2.fna&oh=03_AdRT3nN9WDrco2LQXNFKD9zqZeJ9uB7s2VkynmZk0s_HXA&oe=6452C2A0`,
    `https://z-p3-scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/339483717_616067229933438_2023310497051861687_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE3WatnVZlK7OMKVyX9uiymlNPvbeotnpCU0-9t6i2ekJbhr2UEfHUGPjlwoZ4Pku0&_nc_ohc=vcFnBnX15jUAX9r6u0V&_nc_oc=AQlkP_cbxdS7vlBIeQa6i85kjkNwMqbZ4C-XIVVpAL_4pBOx90nPtpOiZsJI9KIJo98&_nc_ht=z-p3-scontent.fmnl3-3.fna&oh=03_AdRp6pENjomNqDe4yGPA04HqtVogSXlAmQq8WgDHGQEpAA&oe=6452B436`,
    `https://z-p3-scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/339561343_231859072702919_6220495897310201735_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHEganTGtUGuD4GBKUdFBp8iw0uwI64pCWLDS7AjrikJdNOpmF9i5sLtMJwQO_Knes&_nc_ohc=sYty3gIvpksAX-LIQMH&_nc_ht=z-p3-scontent.fmnl3-2.fna&oh=03_AdS7BzFiDKzFMMz9WaACMVH5bVdCQfer4rPZT13GRfkjhw&oe=6452B6A6`];

const level2 = [`https://z-p3-scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/337924300_760696572129337_2908978788339563283_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG8msd3DWhJK7E1yFjJbDw1OjAlp4a1OR46MCWnhrU5Hr30n1H_SQViToBirt-NWnc&_nc_ohc=L5_3n5ZP75gAX_ogiiZ&_nc_ht=z-p3-scontent.fmnl3-1.fna&oh=03_AdRNFdyUw8_bZF2T9wGQ9RjTNxxHxEzrZMRtUs7Fv25DZg&oe=6452D17F`,
    `https://z-p3-scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/339223265_1371769386946675_2174545378671340688_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF_B-fbLuxfCuf6zHZIik3isA27ezxn-fiwDbt7PGf5-L9CCS3F6F3cJrM5uIhztC4&_nc_ohc=qWMusgCydyIAX_lIWLT&_nc_ht=z-p3-scontent.fmnl3-1.fna&oh=03_AdSOfZYnBRuqmDWuNBS-xAZSJaeWy0lfxTFQ6WYkEXi-JA&oe=6452D8AB`];

const level3 = [`https://z-p3-scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/339557171_734165068412259_1261675945024550572_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE5I6UsK989DE6g-EudmJxfF2Ns6Na_c6wXY2zo1r9zrKFzOmEZqMwe8fAT3EQ4ZhQ&_nc_ohc=lrKp_V2WahgAX-69-qx&_nc_ht=z-p3-scontent.fmnl3-2.fna&oh=03_AdTVU6zsZmWlO1ofW2SyyhE8Rg5QZRE4dUpFcBybMJJkxA&oe=6452D1B8`,
    `https://z-p3-scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/339433488_957187045290210_3344459394018311857_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHycNrZCfNRvddMKKRBSK1IPpdcuIp5b6s-l1y4inlvq3gayltxg5gfE6f45pCnfzM&_nc_ohc=Ou0qoSrkttkAX-dEmIQ&_nc_ht=z-p3-scontent.fmnl3-4.fna&oh=03_AdTvSTH0gnvMZXblIK3yXQ01hb6DOMy6WHiwtmub5kOFfA&oe=6452BA05`];

const level4 = [`https://z-p3-scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/337924309_1549107992244029_6407045983425032127_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE284hqqivynRUZxop6eEhz6lgnuGgbJyjqWCe4aBsnKHGk9IaFcGhpgG6e5dq7sYY&_nc_ohc=Y1uRWDVmHO8AX97Egbg&_nc_ht=z-p3-scontent.fmnl3-1.fna&oh=03_AdTgsoShDqt5Hu9-YZ0VtneB_zJoYHQIjCXiSoZ6KeeIpA&oe=6452DF24`,
    `https://z-p3-scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/339456085_2118910311648902_303565897021445363_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFjBTqorglcT_SrBoiZqE8lwuR1jNh3E6fC5HWM2HcTp99gg_3T4X-pXA8Tn7OaMgY&_nc_ohc=xVp5gF3A-nIAX_LEcMj&_nc_ht=z-p3-scontent.fmnl3-2.fna&oh=03_AdSJLwK3kg--g_vz1ZoF0TY48Fm0ciYbikxyYUGQRNR6UA&oe=6452B1DE`];

//Rūtas code snippet to solve adding cards on next level
const levels = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
};

/*  CARDS */

class MixOrMatch {
    constructor(totalTime) {
        this.cardsArray = [];
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        this.currentLevel = 1;
    }

    createCards() {
        const level = this.currentLevel;

        let duplicate = [...levels[level], ...levels[level]]; //Rūtas help //duplicates the cards because it needs two cards for there to be a match

        let insertCard = document.getElementById('containerId');

        //creates cards in html and let duplicate creates doubles. contains card back image and classes for styling
        duplicate.forEach(
            (href) => insertCard.insertAdjacentHTML('beforeend', `<div class="card zoom">
        <div class="card-back card-face">
            <img src="https://z-p3-scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/339558179_475063121416127_4850900478546761531_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH2qzpKZsoUaUodO9S6FMHj1oiZ5CGiUVzWiJnkIaJRXCIFWewhRayRrZ6Aeq6FWMQ&_nc_ohc=ncqhKXJgLtgAX8rOJi5&_nc_ht=z-p3-scontent.fmnl3-3.fna&oh=03_AdRXt7CwYoFYH8ftzlBTNjb6peEh-VtrCInPachxp7Kp_Q&oe=645288D6"
                class="card-img">
        </div> <div class="card-front card-face">
            <img class="card-value card-img"
                src="${href}">
        </div>`)
        );

        let cards = Array.from(document.getElementsByClassName('card'));

        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.flipCard(card);
            });
        });

        this.cardsArray = cards;
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true; //will be false once game is started

        setTimeout(() => {
            this.audioController.startMusic();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500); //wait 500ms before whatever is in this function
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks; //reseting inner timer and inner texts
        this.createCards();
        this.shuffleCards();
    }

    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining; //updates time in HTML
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000); //interval is 1sec
    }

    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }

    victorious() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }

    levelUp() {
        clearInterval(this.countDown);
        this.currentLevel = this.currentLevel + 1
        if (this.currentLevel > 4) {
            this.victorious();
            this.currentLevel = 1;
        } else {
            this.audioController.levelUpPing();
            document.getElementById('level-up-text').classList.add('visible');
        }
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++; //iterates clicks
            this.ticker.innerText = this.totalClicks; //counts them on the page
            card.classList.add('visible'); //ads visible class to the clicked card

            if (this.cardToCheck) {
                this.checkForCardMatch(card);// check for match
            } else {
                this.cardToCheck = card;
            }
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            this.cardMatch(card, this.cardToCheck);
        } else
            this.cardMisMatch(card, this.cardToCheck);
        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.levelUp();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 800);
    }

    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }

    shuffleCards() { //fisher and yates algorithm
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i; //shuffles css grid oder of cards
            this.cardsArray[1].style.order = randomIndex;
        }
    }

    canFlipCard(card) {
        //check if user is allowed to flip the card
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck; //does not allow to flip cards that are already flipped, animating or matched
        // creates a boolean = if thisnotbusy is false and does not include and card does not equal card to check will evaluate to true, because the statement is true
        //so if it returns TRUE the player can flip a card
    }

    mute() {
        this.audioController.stopMusic();
    }

    unmute() {
        this.audioController.startMusic();
    }
}

/*  Starts the game  */

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let game = new MixOrMatch(60);  //game time
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); //starts game whenever clicked on overlay
            game.startGame();
        });
    });

    let muteButton = document.getElementById('muteButton').addEventListener("click", () => {
        if (document.getElementById("muteId").classList.contains('fa-volume-up')) {
            game.mute();
        } else {
            game.unmute();
        }
    });
}

/* Starts the game only when page is fully loaded */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

/* Reloads the page when clicked on Game Over and Victory overlay */

function refreshPage() {
    window.location.reload();
}
