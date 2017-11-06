/*
Переделайте предыдущую задачу так, чтобы по первому нажатию на кнопку абзац с нашим текстом показывался,
а по второму нажатию - скрывался.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Иван', age: 25, show: false};
		this.showText = this.showText.bind(this);
	}

	showText() {
		this.setState({show: !this.state.show});
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