import React, { Component } from 'react';

class Task extends Component {

    //Объявим state items в конструкторе
    constructor(props) {
        super(props),
        this.state = {
            items: [1, 2, 3],
            value: '',
            checked: false   
        }
    }

    //Кнопка сохранить
    handleNewTask() {
      
      this.state.items.push(this.state.value); //Возьмем массив items(из состояния items) и с помощью метода push добавим в конец массива значение из state value
      
      this.setState({
          items:[...this.state.items], //С помощью спред оператора (...) вернем измененый массив
      })

    }

    //Кнопка Удалить
    handleDeleteTask() {
        this.state.items.splice(3, 1); //С помощью метода slice будем удалять каждое значение в массиве после 3-го элемента в массиве (который храниться в state items)
        this.setState({items: this.state.items});
    }

    //Событие на input (которое будет изменять state value и записывать туда значение value)
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    //Событие изменения input checkbox
    handleCheckboxChange() {
        this.setState({
            checked: !this.state.checked //такой констуркцией можно всегда менять значение (на противоположное) - если такое состояние boollean (true/false)
        })
    }
    
    render() {
        //С помощью метода map переберем наше состояние (которое является массивом) и вывидем все значения массива (где item это новый массив)
        const list = this.state.items.map((item, index) => {
            return <li key={index}>
                        {item}
                    </li>
        });
        return (
            <div>
                <ul>
                    {list} {/*Передадим переменную list*/}
                </ul> 
                <input value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleNewTask.bind(this)}>Добавить</button>
                <button onClick={this.handleDeleteTask.bind(this)}>Удалить</button>
                <p>Состояние: {this.state.checked ? 'отмечен' : 'не отмечен'}</p>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this)} />
            </div>
        )
       
    }
};

export default Task;