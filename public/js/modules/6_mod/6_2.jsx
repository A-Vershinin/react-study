/*
Дан чекбокс и абзац. Сделайте так, чтобы состояние чекбокса выводилось в этот абзац.
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

		return (
			<div className="container">
				<p>Состояние checkbox: {this.state.valueChackbox ? "Отмечен" : "Не отмечен"}</p>
				<input type="checkbox" checked={this.state.valueChackbox} onChange={this.handleCheckboxChange}/>
			</div>
		);
	}
}

export default App;