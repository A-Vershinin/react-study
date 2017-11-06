// В стейте хранится массив с числами. Сделайте кнопку, по нажатию на которую сумма этих
// чисел выведется в какой-нибудь абзац.

class App extends React.Component {
	constructor() {
		super();
		this.state = {arr: [1, 2, 3, 4, 5, 6], sum: 0};
		this.setSum = this.setSum.bind(this);
	}

	setSum() {
		let result = 0;
		this.state.arr.forEach(elem => result += elem);
		this.setState({sum: result});
	}


	render() {

		return (
			<div className="container">
				<p>{this.state.sum}</p>
				<button onClick={this.setSum}>Кнопка</button>
			</div>
		);
	}
}

export default App;