/*
 Дан инпут и абзац. В инпут вводится строка. Сделайте так, чтобы при наборе текста в абзаце
 автоматически появлялась эта строка в перевернутом виде.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	showString(str) {
		return str.split("").reverse().join("");
	}
	render() {

		return (
			<div className="container">
				<p>{this.showString(this.state.value)}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;