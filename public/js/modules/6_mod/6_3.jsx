/*
Дан чекбокс и какой-то абзац с текстом. Сделайте так, чтобы если чекбокс отмечен - абзац
был виден на экране, а если не отмечен - не видим.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueChackbox: "true"};
	}
	handleCheckboxChange = () => {
		this.setState({valueChackbox: !this.state.valueChackbox});
	};

	render() {
		let text;
		if (this.state.valueChackbox) {
			text = <p style={{display: "block"}}>Дан чекбокс и какой-то абзац с текстом</p>
		}

		return (
			<div className="container">
				{text}
				<div>
					Чекбокс
					<input type="checkbox" checked={this.state.valueChackbox} onChange={this.handleCheckboxChange}/>
				</div>
			</div>
		);
	}
}

export default App;