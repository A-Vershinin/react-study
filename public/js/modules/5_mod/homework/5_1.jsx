/*
Дан инпут и абзац. В абзац вводится число. Сделайте так, чтобы при наборе числа в инпуте в
абзац выводился квадратный корень из этого числа.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: ""};
	}

	handleChange = (event) => {
		this.setState({value: event.target.value});
	}

	render() {

		return (
			<div className="container">
				<p>текст инпута: {Math.sqrt(this.state.value)}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;