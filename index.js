var readlineSync = require('readline-sync');
var chalk = require('chalk');
var boxen = require('boxen');

var highScores = [
    top = {
        name: "Piotr",
        score: 5,
    },
    top = {
        name: "Jacek",
        score: 6,
    },
    top = {
        name: "Grażyna",
        score: 7,
    },
];

var questions = [
    q = {
        question: "Ludzie nazwali mnie królem zwierząt,\nbo w moją wielką silę wierzą\nKrólowie, co rządzą monarchią,\nwciąż o swój tron się martwią.\nJa, z rodziny drapieżnych kotów,\nnie mam takich kłopotów !",
        answer: "lew",
    },
    q = {
        question: "Moje imię z liter trzech.\nGdy pełznąc kogoś spotkam,\nznika z jego twarzy śmiech.\nA kiedy kogoś ścisnę\nciałem swoim śliskim,\non od razu traci dech !",
        answer: "boa",
    },
    q = {
        question: "Stanowczo zaprzeczyć muszę.\nLudzie niesłusznie nazywają\nmnie chytrusem.\nI powiem wam z góry,\nnie moja to wina,\nże boją się mnie kury !",
        answer: "lis",
    },
    q = {
        question: "Jego najważniejszy atut,\nzakwita jako pierwszy z kwiatów.\nGdy jeszcze mroźne zawieje,\non przynosi wiosny nadzieję.\nWszyscy wiedzą,\nże najłatwiej być kwiatem\nco kwitnie latem.",
        answer: "przebiśnieg",
    },
    q = {
        question: "Owoc tego drzewa\nrozgryzie ząb zdrowy.\nW środku przypomina\nmózgu dwie połowy.",
        answer: "orzech",
    },
    q = {
        question: "Miała wiele ról.\nNosił ją król,\ninne znaczenie miewa,\ngdy jest częścią drzewa.",
        answer: "korona",
    },
    q = {
        question: "Coś, przed czym w świecie nic nie uciecze,\nco gnie żelazo, przegryza miecze,\npożera ptaki, zwierzęta, ziele,\nnajtwardszy kamień na mąkę miele,\nkrólów nie szczędzi, rozwala mury,\nponiża nawet najwyższe góry.",
        answer: "czas",
    },
    q = {
        question: "Im szybciej biegniesz, tym trudniej go złapać\n",
        answer: "oddech",
    },
    q = {
        question: "Korzeni nie widziało niczyje oko,\na przecież to coś sięga bardzo wysoko,\nod drzew wybujało wspanialej,\nchociaż nie rośnie wcale.",
        answer: "góra",
    },
];
var score = 0;

var userName = readlineSync.question("Witaj w grze: " + (chalk.blueBright("Zagadki Golluma")) + ". Jak się nazywasz?\n");

function play() {
    for (var i = 0; i < questions.length; i++) {
        var userAnswer = readlineSync.question(chalk.yellow(boxen(questions[i].question + "\n", {
            padding: 1,
            margin: 1,
            borderStyle: 'double'
        })))
        if (userAnswer.toLowerCase() === questions[i].answer) {
            console.log(chalk.green("\nŚwietnie! \n"))
            score = score + 1

        } else {
            console.log(chalk.red("Niestety to zła odpowiedź... \nPrawidłowa odpowiedź to: ") + chalk.red(questions[i].answer) + "\n")
        }
        console.log(chalk.yellowBright("Punkty: " + score))
        console.log(chalk.red("---------"))
    }
    console.log(chalk.yellowBright("Twój wynik: " + score) + "\n")
    if (score > 7) {
        console.log(chalk.greenBright("Gratuluję! Kwalifikujesz sie do najlepszych graczy!"))
        highScores.push(top = {
                name: userName,
                score: score,
            },

        )
    } else {
        highScores.sort(function (a, b) {
            return b.score - a.score
        });
        console.log("Niestety nie kwalifikujesz sie na listę top 3 graczy")
    }
    highScores.sort(function (a, b) {
        return b.score - a.score
    });
    console.log("Najwiecej punktów uzyskali: ")
    for (var i = 0; i < 3; i++) {
        console.log(chalk.yellowBright("---------------"))
        console.log("Imię: " + highScores[i].name + "\n" + "Punkty: " + highScores[i].score)
        console.log(chalk.yellowBright("---------------"))

    }
    return;
}


console.log("Słuchaj " + userName + ", Gollum wraz ze swoim skarbem \ndawno już zginęli w otchłani góry przeznaczenia, \njednak gra w zagadki którą bardzo lubił, przetrwała do dzisiaj.");
var userAnswer2 = readlineSync.question("Chciałbyś spróbować swoich sił w tej bardzo starej grze? Odpowiedz: tak/nie\n");

if (userAnswer2.toLowerCase() === "tak") {
    console.log("Dobrze więc, zaczynajmy! \n")
    console.log(chalk.red("-----------------"));
    play()
} else if (userAnswer2.toLowerCase() === "tak/nie") {
    console.log("Bardzo zabawne, wybierz jedno.");
    for (var i = 0; i < 5; i++) {
        console.log("Niepoprawna odpowiedź. Wybierz prawidłową odpowiedź: \n");
        var userAnswer2 = readlineSync.question("Chciałbyś spróbować swoich sił w tej bardzo starej grze? Odpowiedz: tak/nie\n");
        if (userAnswer2.toLowerCase() === "tak") {
            console.log("Dobrze więc, zaczynajmy! \n")
            console.log(chalk.red("-----------------"));
            play();
        }
    }
} else if (userAnswer2.toLowerCase() === "Odpowiedz: tak/nie") {
    console.log("Nie masz nic lepszego do roboty?... Podaj własciwą odpowiedź: ");
    for (var i = 0; i < 5; i++) {
        console.log("Niepoprawna odpowiedź. Wybierz prawidłową odpowiedź: \n");
        var userAnswer2 = readlineSync.question("Chciałbyś spróbować swoich sił w tej bardzo starej grze? Odpowiedz: tak/nie\n");
        if (userAnswer2.toLowerCase() === "tak") {
            console.log("Dobrze więc, zaczynajmy! \n")
            console.log(chalk.red("-----------------"));
            play();
        }
    }
} else if (userAnswer2.toLowerCase() === "nie") {
    console.log("Szkoda, może innym razem");

} else {
    for (var i = 0; i < 5; i++) {
        console.log("Niepoprawna odpowiedź. Wybierz prawidłową odpowiedź: ");
        var userAnswer2 = readlineSync.question("Chciałbyś spróbować swoich sił w tej bardzo starej grze? Odpowiedz: tak/nie\n");
        if (userAnswer2.toLowerCase() === "tak") {
            console.log("Dobrze więc, zaczynajmy! \n")
            console.log(chalk.red("-----------------"));
            play();
        }
    }
}