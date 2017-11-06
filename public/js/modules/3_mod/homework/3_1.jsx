/*
Дан абзац с текстом. Даны также две кнопки. Сделайте так, чтобы по нажатию на первую кнопку абзац
с нашим текстом показывался, а по нажатию на второю - скрывался.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {show: false};
		this.showText = this.showText.bind(this);
	}

	showText() {
		this.setState({show: !this.state.show})
	}

	render() {
		let text = "";
		if(this.state.show) {
			text = <p>Дан абзац с текстом.</p>
		}

		return (
			<div className="container">
				{text}
				<button onClick={this.showText}>Show text</button>
				<button onClick={this.showText}>Hide text</button>
			</div>
		);
	}
}


export default App;