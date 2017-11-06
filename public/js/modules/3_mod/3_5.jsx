/*
Переделайте предыдущую задачу так, чтобы по заходу на страницу текст кнопки был 'показать', а
после нажатия на нее - 'скрыть' (ну и так далее - по каждому нажатию текст должен чередоваться).
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
				<button onClick={this.showText}>{this.state.show ? "Показать" : "Cкрыть"}</button>
			</div>
		);
	}
}


export default App;