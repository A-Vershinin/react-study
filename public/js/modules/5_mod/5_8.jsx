/*
 Даны два инпута и кнопка. В инпуты вводятся числа. Сделайте так, чтобы по нажатию на кнопку под инпутами в
 какой-нибудь абзац вывелась сумма этих чисел.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value1: "" , value2: "" , text: ""};
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange1(event) {
		this.setState({value1: event.target.value});
	}
	handleChange2(event) {
		this.setState({value2: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		const num1 = this.state.value1;
		const num2 = this.state.value2;
		let result;
		if (parseInt(num1) && parseInt(num2)) {
			result = parseInt(this.state.value1) + parseInt(this.state.value2);
			this.setState({text: result});
		} else {
			this.setState({value1: "", value2: ""});
			this.setState({text: ""});
		}
	}
	render() {

		return (
			<div className="container">
				<form action="#" onSubmit={this.handleSubmit}>

					<input type="text"
					       value={this.state.value1}
					       onChange={this.handleChange1}
					/>
					<input type="text"
					       value={this.state.value2}
					       onChange={this.handleChange2}
					/>
					<button type="submit">Отправить</button>
					<p>{this.state.text}</p>
				</form>
			</div>
		);
	}
}
export default App;