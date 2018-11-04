export class Todo {
  id: number;
  title = '';
  complete = false;
  items: string[]

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
