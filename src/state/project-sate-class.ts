export type Listener<T> = (items: T[]) => void;

export class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this, this.listeners.push(listenerFn);
  }
}
