// Дан стейт с числом. Выведите это число в каком-нибудь абзаце. Сделайте кнопку, по каждому нажатию на которую
// в абзаце будет появляться квадрат числа, которое в нем записано сейчас.

class App extends React.Component {
	constructor() {
		super();
		this.state = {num: 12};
		this.getSquare = this.getSquare.bind(this);
	}

	getSquare () {
		const num = this.state.num;
		const result  = num * num;
		this.setState({num: result});
	}


	render() {

		return (
			<div className="container">
				<p>Число {this.state.num}</p>
				<button onClick={this.getSquare}>Кнопка</button>
			</div>
		);
	}
}


export default App;