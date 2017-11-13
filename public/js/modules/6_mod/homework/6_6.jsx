/*
Дан чекбокс и инпут. Сделайте так, чтобы если чекбокс не отмечен - то инпут находится в
заблокированном состоянии (через disabled, а если отмечен - то в незаблокированном.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInput: "", valueСhecked: false};
	}

	handleInputChange = (event) => {
		this.setState({valueInput: event.target.value});
	};
	handleCheckboxChange = () => {
		this.setState({valueСhecked: !this.state.valueСhecked});
	};

	render() {
		const isDisabled = this.state.valueСhecked;
		return (
			<div className="container">
				<p>Введите текст в инпут</p>
				<input type="checkbox" checked={this.state.valueСhecked} onChange={this.handleCheckboxChange}
				       style={{display: "block", marginBottom: "20px"}}/>
				<input type="text" onChange={this.handleInputChange}
				       disabled={isDisabled} style={{display: "block", marginBottom: "20px"}} className={"input"}/>
			</div>
		);
	}
}
export default App;