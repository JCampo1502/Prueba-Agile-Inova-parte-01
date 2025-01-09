import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default (message: string) => {
  return new Promise((res) => {
    rl.question(message, (answer) => {
      res(answer.toLocaleLowerCase());
    });
  });
};
