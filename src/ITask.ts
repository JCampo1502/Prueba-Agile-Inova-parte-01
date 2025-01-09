export default interface ITask {
  run(): Promise<boolean>;
  label(): string;
  option: string;
}
