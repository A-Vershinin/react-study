/*
Дан инпут и абзац. В абзац вводится строка. Сделайте так, чтобы при наборе строки в инпуте в абзац
выводились 3 последних символа введенной строки.
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
		const string = this.state.value.slice(-3);

		return (
			<div className="container">
				<p>Текст инпута: {string}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;