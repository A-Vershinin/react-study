/*
Спросите у пользователя его пол с помощью двух радиокнопочек. Выведите его выбор на экран.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueRadio: ""};
	}
	handleRadioChange1 = (event) => {
		this.setState({valueRadio: event.target.value});
	};
	handleRadioChange2 = (event) => {
		this.setState({valueRadio: event.target.value});
	};

	render() {
		return (
			<div className="container">
				<p>Ваш пол: {this.state.valueRadio}</p>
				<div>
					М<input type="radio" value="М" checked={this.state.valueRadio == "М"} onChange={this.handleRadioChange1} />
					Ж<input type="radio" value="Ж" checked={this.state.valueRadio == "Ж"} onChange={this.handleRadioChange2} />
				</div>
			</div>
		);
	}
}
export default App;