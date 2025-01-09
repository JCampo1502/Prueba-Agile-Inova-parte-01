import ITask from "../ITask";
import question from "../question";

class Persona {
  public nombre: string | undefined;
  public edad: number | undefined;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  public saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

export default class Task03 implements ITask {
  option: string = `Clases en JavaScript: 
    Crea una clase “Persona” con: - Propiedades: “nombre” y “edad”. - Un método “saludar” que imprima en consola “Hola, soy {nombre} y tengo {edad} años.”
    `;

  async run() {
    const name = String(await question("Ingrese su nombre: "));
    const age = Number(await question("Ingresa tu edad: "));
    const person = new Persona(name, age);
    console.log(person.saludar());
    return true;
  }
  label = (): string => "Clases en JavaScript";
}
