// Дан див. Задайте ему ширину и высоту. Сделайте так, чтобы изначально у него была граница зеленого цвета,
// но по нажатию на кнопку она становилась красной.

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			width: 200,
			height: 200,
			border: "2px solid green"
		};
		this.setStyles = this.setStyles.bind(this);
	}

	setStyles () {
		this.setState({borderColor: "red"});
	}


	render() {

		return (
			<div className="container">
				<div style={this.state}> Див со стилями</div>
				<button onClick={this.setStyles}>Кнопка</button>
			</div>
		);
	}
}


export default App;