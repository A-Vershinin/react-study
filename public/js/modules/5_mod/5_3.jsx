/*
Дан инпут и абзац. Сделайте так, чтобы при наборе текста в инпуте он автоматически
появлялся в этом абзаце в верхнем регистре.
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

	render() {

		return (
			<div className="container">
				<p>текст инпута: {this.state.value.toUpperCase()}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;