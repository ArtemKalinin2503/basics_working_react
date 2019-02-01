import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './components/Task'

//Компоенет User 
class User extends React.Component {
  
	constructor() {
		super();
	}

	render() {
		return <div className="list-users">
			        <span>имя: {this.props.name}</span> {/*Данные будем получать из родительского компонента App*/}
			        <span>фамилия: {this.props.surname}</span>
		       </div>
	}
}

//Основной компонент App
class App extends Component {

	constructor() {
		super();

		this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов'},
				{name: 'Вася', surname: 'Петров'},
				{name: 'Петя', surname: 'Сидоров'},
			]
		};
	}

  render() {
  	const users = this.state.users.map((item, index) => { //С помощью метода map будем выводить компонент User (столько раз сколько записей в самом массиве users)
			return <User
				        key={index}
				        name={item.name} //С помощью атрибутов вывидем значения из массива item (в который передали массив users)
				        surname={item.surname}
			       />;
		});

		return <div className="wrapper-component-app">
              <div className="wrapper-component-user">
                  {users}
              </div>
              <div className="wrapper-component-task">
                  <Task />
              </div>
           </div>       
	}

};

//Обварачиваем основной компонет в расширение Provider для подключение хранилища 
ReactDOM.render(
 <App />,
  document.getElementById('root')
);

