var EasyQuizMatrix = [
    ["What is the name of the protagonist in 'The Legend of Zelda' series?", "Link", "Zelda", "Ganondorf", "Navi"],
    ["What type of animal is Sonic in 'Sonic the Hedgehog'?", "Hedgehog", "Fox", "Rabbit", "Mouse"],
    ["In 'Minecraft', what do you need to obtain to mine diamonds?", "Iron Pickaxe", "Wooden Pickaxe", "Stone Pickaxe", "Iron Shovel"],
    ["Which popular game features characters like Mario, Luigi, and Bowser?", "Super Mario", "Zelda", "Pokemon", "Donkey Kong"],
    ["In 'Pac-Man', what are the names of the ghosts?", "Blinky, Pinky, Inky, and Clyde", "Blinky, Winky, Inky, and Clyde", "Blinky, Pinky, Winky, and Clyde", "Blinky, Pinky, Inky, and Tyke"],
    ["What color is the ring of Sonic in 'Sonic the Hedgehog'?", "Gold", "Silver", "Bronze", "Blue"],
    ["In 'Tetris', what is the shape of the piece that can clear four lines at once?", "Straight Line", "Square", "L-Shape", "T-Shape"],
    ["Which game series features a soldier named Master Chief?", "Halo", "Call of Duty", "Gears of War", "Battlefield"],
    ["What is the main objective in 'Pokemon' games?", "Catch Pokemon", "Run", "Jump", "Fly"],
    ["Which video game character is known as the 'Blue Bomber'?", "Mega Man", "Sonic", "Mario", "Samus"]
];
var MediumQuizMatrix = [
    ["In 'The Witcher 3: Wild Hunt', what is the name of Geralt's horse?", "Roach", "Spirit", "Shadowfax", "Epona"],
    ["Which game features a post-apocalyptic world and a character named Joel?", "The Last of Us", "Fallout", "Resident Evil", "Metro Exodus"],
    ["In 'Overwatch', what is the real name of the character known as Tracer?", "Lena Oxton", "Emily Blair", "Angela Ziegler", "Amélie Lacroix"],
    ["What is the fictional city where 'BioShock' takes place?", "Rapture", "Columbia", "Dunwall", "Haven"],
    ["In 'Dark Souls', what is the currency used for leveling up?", "Souls", "Blood Echoes", "Caps", "Gems"],
    ["Which game features a character named Lara Croft?", "Tomb Raider", "Uncharted", "Prince of Persia", "Assassin's Creed"],
    ["In 'Red Dead Redemption 2', who is the leader of the Van der Linde gang?", "Dutch van der Linde", "Arthur Morgan", "John Marston", "Micah Bell"],
    ["Which game series features a world called Tamriel?", "The Elder Scrolls", "Dragon Age", "World of Warcraft", "Final Fantasy"],
    ["In 'Fortnite', what is the name of the in-game currency?", "V-Bucks", "Gold", "Gems", "Credits"],
    ["What is the name of the princess that Mario often rescues?", "Princess Peach", "Princess Daisy", "Princess Zelda", "Princess Rosalina"]
];
var HardQuizMatrix = [
    ["In 'Bloodborne', what is the name of the city where the game takes place?", "Yharnam", "Lothric", "Drangleic", "Boletaria"],
    ["Which game features a character named Solid Snake?", "Metal Gear Solid", "Splinter Cell", "Hitman", "Deus Ex"],
    ["In 'Final Fantasy VII', what is the name of Cloud Strife's iconic sword?", "Buster Sword", "Excalibur", "Masamune", "Gunblade"],
    ["What is the name of the AI character in 'Halo'?", "Cortana", "EVA", "GLaDOS", "SAM"],
    ["In 'The Legend of Zelda: Ocarina of Time', what is the name of Link's fairy companion?", "Navi", "Tatl", "Midna", "Fi"],
    ["What is the name of the kingdom where 'The Legend of Zelda' series primarily takes place?", "Hyrule", "Lorule", "Termina", "Labrynna"],
    ["Which game features a protagonist named Samus Aran?", "Metroid", "Mass Effect", "Destiny", "Warframe"],
    ["In 'The Elder Scrolls V: Skyrim', what is the name of the dragon you fight at the end?", "Alduin", "Paarthurnax", "Mirmulnir", "Odahviing"],
    ["In 'Persona 5', what is the main character's code name?", "Joker", "Crow", "Skull", "Fox"],
    ["Which game is known for the phrase 'Do a barrel roll!'?", "Star Fox 64", "F-Zero", "Donkey Kong Country", "Kirby"]
];

// Detect mobile devices
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
    document.body.classList.add('desktop-detected');
} 

// Element references
var controller = document.getElementById("inp");
var bar = document.getElementById("selectBar");
var difficulty = document.getElementById("numbOfQuestions");
var correctSound = new Audio('correct.mp3');
var incorrectSound = new Audio('incorrect.mp3');

// Difficulty levels
var difficulties = ["Easy", "Medium", "Hard"];
var proportion = 0;

// Initial setup
difficulty.textContent = difficulties[controller.value - 1];
proportion = (+controller.value / +controller.max * 100);
bar.style.width = proportion + "%";

controller.addEventListener("input", function() {
    difficulty.textContent = difficulties[controller.value - 1];
    proportion = (+controller.value / +controller.max * 100);
    bar.style.width = proportion + "%";
});

document.getElementById("start").addEventListener("click", () => {
    if (document.getElementById("NameInput").value == "") {
        alert("Please enter your name and surname");
    } else {
        document.getElementById("startcont").style.bottom = "-19rem";

        var order = [];
        var questionCount = 10;
        var quizMatrix;

        switch (controller.value) {
            case '1':
                quizMatrix = EasyQuizMatrix;
                break;
            case '2':
                quizMatrix = MediumQuizMatrix;
                break;
            case '3':
                quizMatrix = HardQuizMatrix;
                break;
            default:
        }

        while (order.length < questionCount) {
            var r = Math.floor(Math.random() * 10);
            if (order.indexOf(r) === -1) {
                order.push(r);
                console.log(r);
            }
        }

        var i = -1;
        var rightOne;
        var selection;
        var score = 0;

        varselected();

        function changeLabels() {
            document.getElementById("progb").innerHTML = "Question " + (i + 1) + " out of " + order.length;
            document.getElementById("sp").innerHTML = quizMatrix[order[i]][0];

            rightOne = Math.floor(Math.random() * 4);
            if (rightOne == 0) {
                document.getElementById("aa").innerHTML = quizMatrix[order[i]][1];
                document.getElementById("bb").innerHTML = quizMatrix[order[i]][2];
                document.getElementById("ee").innerHTML = quizMatrix[order[i]][3];
                document.getElementById("cc").innerHTML = quizMatrix[order[i]][4];
            }
            if (rightOne == 1) {
                document.getElementById("aa").innerHTML = quizMatrix[order[i]][2];
                document.getElementById("bb").innerHTML = quizMatrix[order[i]][1];
                document.getElementById("ee").innerHTML = quizMatrix[order[i]][4];
                document.getElementById("cc").innerHTML = quizMatrix[order[i]][3];
            }
            if (rightOne == 2) {
                document.getElementById("aa").innerHTML = quizMatrix[order[i]][4];
                document.getElementById("bb").innerHTML = quizMatrix[order[i]][3];
                document.getElementById("ee").innerHTML = quizMatrix[order[i]][1];
                document.getElementById("cc").innerHTML = quizMatrix[order[i]][2];
            }
            if (rightOne == 3) {
                document.getElementById("aa").innerHTML = quizMatrix[order[i]][4];
                document.getElementById("bb").innerHTML = quizMatrix[order[i]][2];
                document.getElementById("ee").innerHTML = quizMatrix[order[i]][3];
                document.getElementById("cc").innerHTML = quizMatrix[order[i]][1];
            }
        }

        function varselected() {
            if (selection == rightOne) {
                score++;
                correctSound.play();
            } else {
                incorrectSound.play();
            }
            console.log("score = " + score);

            document.getElementById("cont").style.bottom = "-22rem";
            document.getElementById("question").style.transform = "scale(0)";
            document.getElementById("question").style.opacity = "0%";
            if ((i + 1) < order.length) {
                setTimeout(() => {
                    document.getElementById("cont").style.bottom = "3rem";
                    document.getElementById("topper").style.top = "3rem";
                    document.getElementById("question").style.transform = "scale(1)";
                    document.getElementById("question").style.opacity = "100%";
                    document.getElementById("htxt").innerHTML = "";
                    i++;
                    changeLabels();
                }, 1000);
            } else {
                document.getElementById("topper").style.top = "-10rem";
                setTimeout(() => {
                    document.getElementById("question").style.transform = "scale(1)";
                    document.getElementById("question").style.opacity = "100%";
                    document.getElementById("sp").innerHTML = "Your score: " + score + " / " + order.length + "  (" + Math.trunc((score / order.length) * 100) + "%)";
                    document.getElementById("restartcont").style.bottom = "3rem";
                }, 1100);
            }
        }

        document.getElementById("a").addEventListener("click", () => {
            selection = 0;
            varselected();
        });
        document.getElementById("b").addEventListener("click", () => {
            selection = 1;
            varselected();
        });
        document.getElementById("e").addEventListener("click", () => {
            selection = 2;
            varselected();
        });
        document.getElementById("c").addEventListener("click", () => {
            selection = 3;
            varselected();
        });
    }
});

document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});