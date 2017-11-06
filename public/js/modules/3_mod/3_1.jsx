/*
Дан следующий стейт:
this.state = {show: true, name: 'Иван'};
Изначально результат работы метода render следующий ('Иван' берется из this.state.name):
Сделайте так, чтобы если this.state.show был равен true, то выводился текст 'Привет, Иван',
а если равен false - то 'Пока, Иван'.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {show: true, name: 'Иван'};
		this.changeName = this.changeName.bind(this);
	}

	changeName() {
		this.setState({show: false})
	}
	render() {

		return (
			<div className="container">
				{this.state.show ? 'привет' : 'пока'} 	{this.state.name}
				<button onClick={this.changeName}>Поменять имя</button>
			</div>
		);
	}
}


export default App;