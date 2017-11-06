// В стейте хранится массив с числами. Выведите сумму этих чисел в какой-нибудь абзац. Сделайте две кнопки.
// По нажатию на первую кнопку в этом абзаце должна появиться сумма четных чисел, а по нажатию на
// вторую - сумма нечетных чисел

class App extends React.Component {
	constructor() {
		super();
		this.state = {arr: [1, 2, 3, 4, 5, 6, 7 , 8], sum: 0};
		this.setSumEven = this.setSumEven.bind(this);
		this.setSumOden = this.setSumOden.bind(this);
	}

	setSumEven() {
		let result = 0;
		let data = this.state.arr;
		for (let i = 0; i < data.length; i++) {
			if (data[i] % 2 !== 0 ) {
				result += i;
			}
		}
		this.setState({sum: result});
	}
	setSumOden() {
		let result = 0;
		let data = this.state.arr;
		for (let i = 0; i < data.length; i++) {
			if (data[i] % 2 === 0 ) {
				result += i;
			}
		}
		this.setState({sum: result});
	}


	render() {

		return (
			<div className="container">
				<p>{this.state.sum}</p>
				<button onClick={this.setSumEven}>Чётные</button>
				<button onClick={this.setSumOden}>Не чётные</button>
			</div>
		);
	}
}


export default App;