/*
Дан следующий стейт:
this.state = {name: 'Иван', age: 25};
Дана кнопка (результат работы метода render):
<div>
	<button>Нажми на меня</button>
</div>
Сделайте так, чтобы по нажатию на кнопку результат работы метода render
изменился на следующее ('Иван' и 25 должны взяться из стейта):
<div>
	<p>имя: Иван, возраст: 25</p>
	<button>Нажми на меня</button>
</div>
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Иван', age: 25, show: false};
		this.showText = this.showText.bind(this);
	}

	showText() {
		this.setState({show: true});
	}

	render() {
		let name = "";
		let age = "";
		if (this.state.show) {
			name = this.state.name;
			age = this.state.age;
		}


		return (
			<div className="container">
				<p>имя: {name}, возраст: {age}</p>
				<button onClick={this.showText}>Нажми на меня</button>
			</div>
		);
	}
}

export default App;