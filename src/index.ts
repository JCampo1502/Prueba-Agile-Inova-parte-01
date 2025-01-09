import { Console } from "console";
import readline from "readline";
import Task01 from "./Tasks/Task01";
import Task02 from "./Tasks/Task02";
import Task03 from "./Tasks/Task03";
import ITask from "./ITask";
import question from "./question";

const tasks: ITask[] = [new Task01(), new Task02(), new Task03()];

const main = async () => {
  while (true) {
    console.clear();
    tasks.forEach((task, i) => {
      console.log(i + 1, task.label());
    });

    const option = Number(await question("Ingresa el numero de la opción "));
    const selectedTask = tasks[option - 1];
    if (selectedTask != null) {
      console.log(selectedTask.option);
      await selectedTask.run();
    }
    if ((await question("Desea finalizar? (SI/NO)")) == "si") break;
  }
};

main();
