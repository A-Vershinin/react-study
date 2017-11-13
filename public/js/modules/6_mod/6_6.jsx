/*
Даны 3 чекбокса и 3 абзаца. Сделайте так, чтобы состояние каждого чекбокса выводилось в соответствующий абзац.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueCheckbox1: false, valueCheckbox2: true, valueCheckbox3: false};
	}
	handleCheckboxChange1 = () => {
		this.setState({valueCheckbox1: !this.state.valueCheckbox1});
	};
	handleCheckboxChange2 = () => {
		this.setState({valueCheckbox2: !this.state.valueCheckbox2});
	};
	handleCheckboxChange3 = () => {
		this.setState({valueCheckbox3: !this.state.valueCheckbox3});
	};

	render() {

		return (
			<div className="container">
				<p>Состояние checkbox1: {this.state.valueCheckbox1 ? "Отмечен": "Не отмечен"}</p>
				<p>Состояние checkbox2: {this.state.valueCheckbox2 ? "Отмечен": "Не отмечен"}</p>
				<p>Состояние checkbox3: {this.state.valueCheckbox3 ? "Отмечен": "Не отмечен"}</p>
				<div>
					<input type="checkbox" checked={this.state.valueCheckbox1} onChange={this.handleCheckboxChange1}/>
					<input type="checkbox" checked={this.state.valueCheckbox2} onChange={this.handleCheckboxChange2}/>
					<input type="checkbox" checked={this.state.valueCheckbox3} onChange={this.handleCheckboxChange3}/>
				</div>
			</div>
		);
	}
}
export default App;