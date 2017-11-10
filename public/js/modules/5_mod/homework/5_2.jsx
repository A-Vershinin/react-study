/*
Дан инпут и абзац. В абзац вводится число. Сделайте так, чтобы при наборе числа в инпуте в
абзац выводилась сумма цифр этого числа.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: ""};
	}

	handleChange = (event) => {
		this.setState({value: event.target.value});
	};

	render() {
		const arr = this.state.value.split("");
		let summa = 0;
		for (let i = 0; i < arr.length; i++) {
			summa += parseInt(arr[i]);
		}

		return (
			<div className="container">
				<p>Сумма чисел: {summa}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;