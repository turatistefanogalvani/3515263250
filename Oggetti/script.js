const animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    stampa: function () {
        return this.specie + " " + this.razza + " " + this.zampe
    }
};
const animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4,
    stampa: function() {
        return this.specie + " " + this.razza + " " + this.zampe
    }
};
const animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2,
    stampa: function() {
        return this.specie + " " + this.razza + " " + this.zampe
    }
}
function mostraAnimale0() {
    document.getElementById("info1").innerHTML = animale1.stampa();
}
function mostraAnimale1() {
    document.getElementById("info2").innerHTML = animale2.stampa();
}
function mostraAnimale2() {
    document.getElementById("info3").innerHTML = animale3.stampa();
}