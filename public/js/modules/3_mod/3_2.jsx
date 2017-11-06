/*
 Модифицируйте предыдущую задачу так, чтобы появилась кнопка, по нажатию на которую
 'Привет' будет меняться на 'Пока'.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {show: true, name: 'Иван'};
		this.changeName = this.changeName.bind(this);
	}

	changeName() {
		this.setState({show: !this.state.show});
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