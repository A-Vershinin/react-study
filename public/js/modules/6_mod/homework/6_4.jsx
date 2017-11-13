/*
Дан селект и 3 абзаца. В селекте можно выбрать один из трех пунктов. Сделайте так, чтобы в зависимости от выбора
на экране был виден один из трех абзацев.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueSelect: "", texts: [
			"Первый", "Второй", "Третий"]};
	}

	handleSelectChange = (event) => {
		event.preventDefault();
		this.setState({valueSelect: event.target.value});
	};

	render() {
		const options = this.state.texts.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		const elem1 = <p>Это первый абзац</p>;
		const elem2 = <p>Это второй абзац</p>;
		const elem3 = <p>Это второй абзац</p>;

		return (
			<div className="container">
				<p>Выбор</p>
				<p>{this.state.valueSelect == "0" ? elem1 : false}</p>
				<p>{this.state.valueSelect == "1" ? elem2 : false}</p>
				<p>{this.state.valueSelect == "2" ? elem3 : false}</p>
				<select value={this.state.valueSelect} onChange={this.handleSelectChange}>
					{options}
				</select>
			</div>
		);
	}
}
export default App;