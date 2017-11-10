/*
Даны 3 инпута и кнопка. В инпуты вводится имя, фамилия и отчество. Сделайте так, чтобы по нажатию на кнопку
под инпутами в какой-нибудь абзац вывелось полное ФИО пользователя.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value1: "", value2: "", value3: "", text: ""};
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleChange3 = this.handleChange3.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange1(event) {
		this.setState({value1: event.target.value});
	}
	handleChange2(event) {
		this.setState({value2: event.target.value});
	}
	handleChange3(event) {
		this.setState({value3: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const num1 = this.state.value1;
		const num2 = this.state.value2;
		const num3 = this.state.value3;

		parseInt(num1) ? this.setState({value1: ""}) : false;
		parseInt(num2) ? this.setState({value2: ""}) : false;
		parseInt(num3) ? this.setState({value3: ""}) : false;

		if (!parseInt(num1) && !parseInt(num2) && !parseInt(num2)) {
			const result = `${this.state.value1} ${this.state.value2} ${this.state.value2}`;
			this.setState({text: result});
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
					<input type="text"
					       value={this.state.value3}
					       onChange={this.handleChange3}
					/>
					<button type="submit">Отправить</button>
					<p>{this.state.text}</p>
				</form>
			</div>
		);
	}
}
export default App;