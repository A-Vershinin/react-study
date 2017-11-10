/*
Дан инпут и абзац. Сделайте так, чтобы при наборе текста алертом выводился
последний введенный символ. Используйте для этого объект Event.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const item = event.target.value.substr(-1, 2);
		alert(item);
		this.setState({value: event.target.value});
	}

	render() {

		return (
			<div className="container">
				<p>текст инпута: {this.state.value}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;