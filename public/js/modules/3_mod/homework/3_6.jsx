/*
 Модифицируйте предыдущую задачу так, чтобы текстом кнопки всегда был следующий цвет, в который покрасится абзац.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			params: ['red', 'blue', 'green'],
			color: ""
		};
		this.count = 0;
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor() {
		this.count += 1;
		this.setState({color: this.state.params[this.count]});
	}

	render() {
		return (
			<div className="container">
				<p style={{"color": this.state.color}}>Дан абзац с текстом.</p>
				<button onClick={this.changeColor}>{this.state.params[this.count]}</button>
			</div>
		);
	}
}
export default App;