import { Action } from 'redux';

//описывает интерфнйс action  (действие) с состоянием внутри приложения
export interface IncrementAction extends Action {
    type: 'INCREMENT';
}

//описывает интерфнйс action  (действие) с состоянием внутри приложения
export interface DecrementAction extends Action {
    type: 'DECREMENT';
}

export type CounterAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = (): DecrementAction => {
    return {
        type: 'DECREMENT'
    }
}