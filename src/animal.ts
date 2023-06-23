abstract class Animal {
    abstract hacerSonido(): void;
  }
  
  class Perro extends Animal {
    hacerSonido(): void {
      console.log("El perro hace: ¡Guau!");
    }
  }
  
  class Gato extends Animal {
    hacerSonido(): void {
      console.log("El gato hace: ¡Miau!");
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.hacerSonido(); // Output: El perro hace: ¡Guau!
  gato.hacerSonido(); // Output: El gato hace: ¡Miau!
  