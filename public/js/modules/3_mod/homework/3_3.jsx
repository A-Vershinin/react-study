/*
Модифицируйте предыдущую задачу так, чтобы у нас была кнопка, по нажатию на которую абзац будет менять цвет.
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

		return (
			<div className="container">
				<p style={{"color": this.state.show ? this.state.params.color1 : this.state.params.color2}}>Дан абзац с текстом.</p>
				<button onClick={this.changeColor}>Click</button>
			</div>
		);
	}
}
export default App;