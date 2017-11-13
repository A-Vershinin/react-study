/*
Дан стейт со списком городов. Выведите этот стейт в виде селекта. Дан также абзац, в который выводится выбранный
город. Сделайте так, чтобы при смене города в селекте в абзаце он также менялся.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ["Киев", "Москва", "Минск", "Харьков"], valueSelect: ""};
	}
	handleSelectChange = (event) => {
		this.setState({valueSelect: event.target.value});
	};

	render() {
		const options = this.state.items.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<p>Ваш выбор города: {this.state.items[this.state.valueSelect]}</p>
				<select value={this.state.valueSelect} onChange={this.handleSelectChange}>
					{options}
				</select>
			</div>
		);
	}
}
export default App;