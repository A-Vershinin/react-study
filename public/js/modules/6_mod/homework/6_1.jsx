/*
Дан чекбокс, инпут и абзац. В инпут вводится имя, например, 'Иван'. Сделайте так, чтобы при наборе текста в инпуте,
если чекбокс отмечен, то в абзац вывелось 'Привет, Иван', а если не отмечен - 'Пока, Иван'.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInput: "", valueCheckbox: false, text: ""};
	}
	handleInputChange = (event) => {
		this.setState({valueInput: event.target.value});
	};
	handleCheckboxChange = () => {
		this.setState({valueCheckbox: !this.state.valueCheckbox});
	};

	render() {
		return (
			<div className="container">
				<p>Текст с инпута: {this.state.valueCheckbox ? "Привет, " : "Пока, "}  {this.state.valueInput}</p>
				<div>
					<input type="checkbox" value={this.state.valueCheckbox} onChange={this.handleCheckboxChange} />
				</div>
				<input type="text" value={this.state.valueInput} onChange={this.handleInputChange} />
			</div>
		);
	}
}
export default App;