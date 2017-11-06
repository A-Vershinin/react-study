// Сделайте две кнопки. По нажатию на первую алертом должно вывестись слово 'пока', а на вторую - 'привет'.

class App extends React.Component {
	constructor() {
		super();
		this.getHello = this.getHello.bind(this);
		this.getBy = this.getBy.bind(this);
	}


	getHello() {
		alert("Привет");
	}
	getBy() {
		alert("Пока");
	}


	render() {

		return (
			<div className="container">
				<button onClick={this.getHello}>Привет</button>
				<button onClick={this.getBy}>Пока</button>
			</div>
		);
	}
}


export default App;