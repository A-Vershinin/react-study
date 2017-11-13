/*
Дан селект со списком CSS цветов. Дан абзац. Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueSelect: "", colors: ["red", "green", "blue", "aqua"]};
	}
	handleSelectChange = (event) => {
		this.setState({valueSelect: event.target.value});
	};

	render() {
		const option = this.state.colors.map((elem, index) => {
			return <option key={index} value={index}>{elem}</option>
		});
		return (
			<div className="container">
				<p style={{display: "block", color: this.state.colors[this.state.valueSelect]}}>Выбор цвета: {this.state.colors[this.state.valueSelect]}</p>
				<select value={this.state.valueSelect} onChange={this.handleSelectChange}>
					{option}
				</select>
			</div>
		);
	}
}
export default App;