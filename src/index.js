let heroName = "Cleitin";
let heroXp = 1200;

if(heroXp < 1000){
    console.log("O Herói de nome " + heroName + " está no nível de FERRO")
} else if(heroXp >= 1001 && heroXp <= 2000){
    console.log("O Herói de nome " + heroName + " está no nível de BRONZE")
} else if (heroXp >= 2001 && heroXp <= 5000){
    console.log("O Herói de nome " + heroName + " está no nível de PRATA")
} else if (heroXp >= 5001 && heroXp <= 7000){
    console.log("O Herói de nome " + heroName + " está no nível de OURO")
} else if (heroXp >= 7001 && heroXp <= 8000){
    console.log("O Herói de nome " + heroName + " está no nível de PLATINA")
} else if (heroXp >= 8001 && heroXp <= 9000){
    console.log("O Herói de nome " + heroName + " está no nível de ASCENDENTE")
} else if (heroXp >= 9001 && heroXp <= 10000) {
    console.log("O Herói de nome " + heroName + " está no nível de IMORTAL")
} else {
    console.log("O Herói de nome " + heroName + " está no nível de RADIANTE")
}