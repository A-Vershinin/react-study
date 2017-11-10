/*
Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе
текста в абзаце автоматически появлялся год рождения пользователя.
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
	showAge(str) {
		if (parseInt(str)) {
			const date = new Date();
			return date.getFullYear() - str;
		}
	}
	render() {

		return (
			<div className="container">
				<p>Год рождения : {this.showAge(this.state.value)}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;