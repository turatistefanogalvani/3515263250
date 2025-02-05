const animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    stampa: function () {
        return this.specie + " " + this.razza + " " + this.zampe
    }
};
const animale2 = {
    specie: "maiale",
    razza: "kunekune",
    zampe: 4,
    stampa: function() {
        return this.specie + " " + this.razza + " " + this.zampe
    }
};
const animale3 = {
    specie: "gallo",
    razza: "andalusa",
    zampe: 2,
    stampa: function() {
        return this.specie + " " + this.razza + " " + this.zampe
    }
}
function mostraAnimale0() {
    document.getElementById("mucca").innerHTML = animale1.stampa();
}
function mostraAnimale1() {
    document.getElementById("maiale").innerHTML = animale2.stampa();
}
function mostraAnimale2() {
    document.getElementById("gallo").innerHTML = animale3.stampa();
}
