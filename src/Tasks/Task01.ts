import ITask from "../ITask";
import question from "../question";
export default class Task01 implements ITask {
  option: string = `Manipulación de Arrays:
    Escribe una función llamada “procesarArray” que reciba un array de números y devuelva un 
    nuevo array que contenga: - Los números pares multiplicados por 2. - Los números impares multiplicados por 3.
    Ejemplo: 
    procesarArray([1, 2, 3, 4]); // Resultado: [3, 4, 9, 8]`;

  procesarArray = (array: number[]) => {
    let newArray: number[] = [];
    array.forEach((number, i) => {
      if ((i + 1) % 2 == 0) {
        newArray.push(number * 2);
      } else {
        newArray.push(number * 3);
      }
    });
    return newArray;
  };

  async run() {
    const numbers = String(
      await question("ingresa los numeros separados por ',' ")
    ).split(",");
    console.log(`Nuevo array: ${this.procesarArray(numbers.map(Number))}`);
    return true;
  }

  label = (): string => "Manipulación de Arrays";
}
