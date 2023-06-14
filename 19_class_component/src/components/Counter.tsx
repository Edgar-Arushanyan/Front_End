import { count, log } from "console";
import { title } from "process";
import React from "react";


//описываем интерфейс state компонента
interface ICounterState {
    count: number
}

interface ICounterProps {
    initialValue: number
}

//создали и типизировали классовый компонент
// классовый компонент альтернатива для работы с компонентами функциональному компоненту
// имеет больше возможностей но болкк ресурсозатратный для приложения

class Counter extends React.Component<ICounterProps, ICounterState> {

    // в классовм компоненте обязательно прописывается конструктор который позволяет 
    //в ладбнейшем работать с props (данными полученными от родительского компонента)

    constructor(props: ICounterProps) {
        super(props);
        // создали состояние компонента в котором храняться ключевые 
        //данные за изменениями которых react необходмо следить
        this.state = {
            count: props.initialValue
        }
    }

    decrement = (): void => {
        // изменять состояние можно только с помощью метода setState() (!!!!)
        this.setState(prev => ({ // перед первым кликом prev = {count: 0}
            count: prev.count - 1
        }))

        /*this.state = {  // Некорректная запись нельзя изменять state напрямую (!!!!)
            count: this.state.count -1
        }*/
    }

    increment = (): void => {
        this.setState(prev => ({count: prev.count + 1}))
        
    }
    // componentDidMount() будет запущена когда компонент будет смонтирован (помещён в dom дерево)
    componentDidMount(): void {
        console.log('Компонент смонтирован');

    }

    // componentDidUpdate будет запущена когда компонент будет обновлён(например с помощью хука useState());
    componentDidUpdate(prevProps: Readonly<ICounterProps>, prevState: Readonly<ICounterState>, snapshot?: any): void {
        console.log('Компонент обновлён');

    }
    // componentWillUnmount будет запущен перед размонтированием (удалением dom дерево)
    componentWillUnmount(): void {
        console.log('Компонент будет удалён');
        
    }
    

    // в методе render(), после ключевого слова return начинается JSX  синтаксис,
    //  где мы описываем вёрстку компонента полный аналог того что в FC пишется после ключевого слова return
    
    render() {
        return (
            <>
                <h2>Counter App</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increment}>+</button>                                            
                </div>           
            </>
        );        
    }
}

export default Counter;