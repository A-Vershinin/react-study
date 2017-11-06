/*
Модифицируйте предыдущую задачу так, чтобы текстом кнопки всегда был следующий цвет,
в который покрасится абзац.
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
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor() {
		this.setState({show: !this.state.show})

	}

	render() {
		let textShow = !this.state.show ? this.state.params.color1 : this.state.params.color2;
		return (
			<div className="container">
				<p style={{"color": this.state.show ? this.state.params.color1 : this.state.params.color2}}>Дан абзац с текстом.</p>
				<button onClick={this.changeColor}>{textShow}</button>
			</div>
		);
	}
}
export default App;