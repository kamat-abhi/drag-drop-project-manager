export type Listener<T> = (items: T[]) => void;

export interface State<T> {
    addListener(listenerFn: Listener<T>): void;
} 