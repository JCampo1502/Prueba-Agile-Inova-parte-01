import ITask from "../ITask";
import question from "../question";

export default class Task02 implements ITask {
  option: string = `Promesas y manejo de asincronía: 
    Escribe una función “obtenerDatos” que simule la obtención de datos desde una API 
    utilizando “Promise”. La función debe retornar los datos proporcionados después de 2 
    segundos. 
    obtenerDatos().then((data) => console.log(data)); 
    // Resultado esperado: "Datos obtenidos`;

  optenerDatos = (message: string) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(message);
      }, 2000);
    });
  };

  async run() {
    const message = String(
      await question(
        "Ingrese un mensaje que se visualizara dentro de 2 segundos: "
      )
    );
    console.log("Su mensaje fue: ", await this.optenerDatos(message));
    return true;
  }
  label = (): string => "Promesas y manejo de asincronía";
}
