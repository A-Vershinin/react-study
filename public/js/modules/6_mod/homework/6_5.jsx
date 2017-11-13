/*
Дан инпут, кнопка и селект. Сделайте следующее: в инпут вводится какая-то строка и по нажатию на кнопку
эта строка должна добавится в конец селекта в виде нового option.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueSelect: "", valueInput: "", texts: []};
	}

	handleSelectChange = (event) => {
		event.preventDefault();
		this.setState({valueSelect: event.target.value});
	};
	handleInputChange = (event) => {
		this.setState({valueInput: event.target.value});
	};
	handleFormChange = (event) => {
		event.preventDefault();
		const value = this.state.valueInput;
		this.state.texts.push(value);
		this.setState({texts: this.state.texts});
	};

	render() {
		const options = this.state.texts.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<p>Введите текст в инпут</p>
				<form action="#" onSubmit={this.handleFormChange}>
					<input type="text" onChange={this.handleInputChange} style={{display: "block", marginBottom: "20px"}}/>
					<button type="sumbit">Добавить</button>
				</form>
				<select value={this.state.valueSelect} onChange={this.handleSelectChange}>
					{options}
				</select>
			</div>
		);
	}
}
export default App;