/*
Дан абзац с текстом. Дан стейт. Сделайте так, чтобы если в этом стейте записано true, то абзац был красного цвета,
а если false - зеленого. Решите задачу через тернарный оператор.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			params: {
				color1: "red",
				color2: "green"
			},
			show: true
		};
	}

	render() {

		return (
			<div className="container">
				<p style={{"color": this.state.show ? this.state.params.color1 : this.state.params.color2}}>Дан абзац с текстом.</p>
			</div>
		);
	}
}

export default App;