
class App extends React.Component {
	constructor() {
		super();
//Запишем данные в стейт:
		this.state = {name: 'Иван', age: 25};
	}

	render() {
		return (
			<div className="body">
				Имя: {this.state.name},
				Возраст: {this.state.age}
			</div>
		)
	}
}


export default App;