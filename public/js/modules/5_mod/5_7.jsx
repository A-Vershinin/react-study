/*
Дан инпут и кнопка submit. В инпут вводится текст.
Сделайте так, чтобы по нажатию на кнопку этот текст вывелся в какой-нибудь абзац.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: "", text: ""};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({text: this.state.value});
	}
	render() {

		return (
			<div className="container">
				<form action="#" onSubmit={this.handleSubmit}>
					<p>{this.state.text}</p>
					<input type="text"
					       value={this.state.value}
					       onChange={this.handleChange}
					/>
					<button type="submit">Отправить</button>
				</form>
			</div>
		);
	}
}
export default App;