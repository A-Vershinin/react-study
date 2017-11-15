/*
 Дан инпут. В него вводится строка. Сделайте так, чтобы если длина введенной строки от 4 до 9 символов -
 граница инпута была зеленой, в противном случае - красной. Инпут должен проверять свое содержимое по мере ввода.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInput: ""};
	}

	handleInputChange = (event) => {
		this.setState({valueInput: event.target.value});
	};

	render() {
		let value = this.state.valueInput;
		const rangeMin = 4;
		const rangeMax = 9;

		if (value.length >= rangeMin && value.length <= rangeMax) {
			var string = "green";
		} else {
			var string = "red";
		}
		return (
			<div className="container">
				<input className={string} type="text" defaultValue={this.state.inputeValue}
				       onChange={this.handleInputChange} style={{display: "block", marginBottom: "20px"}}/>
				<p>Текст инпута: {this.state.inputeValue}</p>
			</div>
		);
	}
}
export default App;