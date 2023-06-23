"use strict";
class Animal {
}
class Perro extends Animal {
    hacerSonido() {
        console.log("El perro hace: ¡Guau!");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("El gato hace: ¡Miau!");
    }
}
const perro = new Perro();
const gato = new Gato();
perro.hacerSonido(); // Output: El perro hace: ¡Guau!
gato.hacerSonido(); // Output: El gato hace: ¡Miau!
