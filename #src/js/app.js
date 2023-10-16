import * as functions from "./modules/functions.js";

functions.isWebp();


// --------------------
functions.menu();

// --------------------

window.onload = init;

function init() {
    cardGame();
}

const randomCard = (size = 16) => {
    const cardArr = new Array();
    const cardVariations = [
        [
            "😎",
            "😍",
            "🙄",
            "😭",
            "😤",
            "🤑",
            "😖",
            "🤯",
            "😱",
            "🥶",
            "😡",
            "😵‍💫",
            "😵",
            "🤪",
            "🤢",
            "😇",
            "💩",
            "👾",
            "👽",
            "🥸",
            "💀",
        ],
        [
            "🦊",
            "🦝",
            "🐮",
            "🐷",
            "🐗",
            "🐭",
            "🐼",
            "🐨",
            "🐻‍❄️",
            "🐻",
            "🐰",
            "🐹",
            "🐸",
            "🦑",
            "🐧",
            "🦇",
            "🐌",
            "🦟",
            "🕷️",
            "🐞",
        ],
        [
            "🍕",
            "🍔",
            "🍟",
            "🌭",
            "🍿",
            "🥞",
            "🍞",
            "🥐",
            "🥨",
            "🥯",
            "🫓",
            "🌯",
            "🍠",
            "🥩",
            "🌮",
            "🥪",
            "🍗",
            "🍧",
        ],
        [
        	"🌍",
			"🏔️",
			"🌋",
			"🏛️",
			"🛎️",
			"🚽",
			"🧷",
			"🪒",
			"🪥",
			"🧯",
			"🔥",
			"🌈",
			"❄️",
			"⚡",
			"☄️",
			"🧺",
			"🧻",
			"🏝️",
			"🪐",
			"🧭",
        ],
    ];

    const whichArr = Math.floor(Math.random() * cardVariations.length);
    while (cardArr.length < size) {
        const randomCard =
            cardVariations[whichArr][
                Math.floor(Math.random() * cardVariations[whichArr].length)
            ];
        if (!cardArr.includes(randomCard)) {
            cardArr.push(randomCard);
            cardArr.push(randomCard);
        }
    }

    console.log(cardArr);
    // for (let i = 0; i < size/2; i++) {
    // 	const randomCard = cardVariations[Math.floor(Math.random() * cardVariations.length)];
    // 	cardArr.push(randomCard);
    //  cardArr.push(randomCard);
    // }
    return cardArr;
};

const cardGame = () => {
    const emojis = randomCard(16);

    let shufEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
    for (let i = 0; i < emojis.length; i++) {
        let box = document.createElement("div");
        box.className = "card__item";
        box.innerHTML = shufEmojis[i];

        box.onclick = function () {
            this.classList.add("itemOpen");
            setTimeout(function () {
                if (document.querySelectorAll(".itemOpen").length > 1) {
                    if (
                        document.querySelectorAll(".itemOpen")[0].innerHTML ==
                        document.querySelectorAll(".itemOpen")[1].innerHTML
                    ) {
                        document
                            .querySelectorAll(".itemOpen")[0]
                            .classList.add("itemMatch");
                        document
                            .querySelectorAll(".itemOpen")[1]
                            .classList.add("itemMatch");

                        document
                            .querySelectorAll(".itemOpen")[1]
                            .classList.remove("itemOpen");
                        document
                            .querySelectorAll(".itemOpen")[0]
                            .classList.remove("itemOpen");

                        if (
                            document.querySelectorAll(".itemMatch").length ==
                            emojis.length
                        ) {
                            alert("You are win!");
                        }
                    } else {
                        document
                            .querySelectorAll(".itemOpen")[1]
                            .classList.remove("itemOpen");
                        document
                            .querySelectorAll(".itemOpen")[0]
                            .classList.remove("itemOpen");
                    }
                }
            }, 800);
        };

        document.querySelector(".card__container").appendChild(box);
    }
};
