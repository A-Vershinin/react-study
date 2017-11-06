// Дан абзац. Изначально в нем написано слово 'пока' Сделайте кнопку, по нажатию на
// которую это слово поменяется на 'привет'

class App extends React.Component {
	constructor() {
		super();
		this.state = {text: "Пока"};
		this.setHello = this.setHello.bind(this);
	}

	setHello() {
		this.setState({text: "Привет"});
	}

	render() {

		return (
			<div className="container">
				<p>{this.state.text}</p>
				<button onClick={this.setHello}>Кнопка</button>
			</div>
		);
	}
}

export default App;