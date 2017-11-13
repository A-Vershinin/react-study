/*
Даны 3 радиокнопочки со значениями 1, 2 и 3. Дан абзац. Сделайте так, чтобы значение выбранной
радиокнопочки выводилось в этот абзац.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueRadio: "option2",};
	}
	handleRadioChange = (event) => {
		this.setState({valueRadio: event.target.value});
	};

	render() {

		return (
			<div className="container">
				<p>Ваш выбор опции: {this.state.valueRadio}</p>
				<div>
					<input type="radio" value="option1" checked={this.state.valueRadio === "option1"} onChange={this.handleRadioChange}/>
					<input type="radio" value="option2" checked={this.state.valueRadio === "option2"} onChange={this.handleRadioChange}/>
					<input type="radio" value="option3" checked={this.state.valueRadio === "option3"} onChange={this.handleRadioChange}/>
				</div>
			</div>
		);
	}
}
export default App;