/*
Дан стейт с массивом цветов, например ['red', 'blue', 'green']. Дан абзац. Дана кнопка. Сделайте так,
чтобы по нажатию на кнопку абзац красился каждый раз в новый цвет из нашего массива. То есть по первому
нажатию в красный, по второму в голубой и так далее по кругу.
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
				<button onClick={this.changeColor}>Click</button>
			</div>
		);
	}
}
export default App;