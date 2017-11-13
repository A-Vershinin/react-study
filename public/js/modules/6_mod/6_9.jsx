/*
Выведите все элементы: форму, инпут, селект, чекбокс, радиокнопку, текстарею.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueSelect: "", valueTextarea: "", valueСhecked1: true, valueСhecked2: false, option: "option1",
			inputeValue: "Инпут", langs: ['HTML', 'CSS', 'JavaScript', 'PHP',]};
	}
	handleTextareaChange = (event) => {
		this.setState({valueTextarea: event.target.value});
	};
	handleCheckboxChange1 = () => {
		this.setState({valueСhecked1: !this.state.valueСhecked1});
	};
	handleCheckboxChange2 = () => {
		this.setState({valueСhecked2: !this.state.valueСhecked2});
	};
	handleSelectChange = (event) => {
		this.setState({valueSelect: event.target.value});
	};
	handleInputChange = (event) => {
		this.setState({inputeValue: event.target.value});
	};
	handleRadioChange = (event) => {
		this.setState({option: event.target.value})
	};

	formHandleSubmit = (event) => {
		event.preventDefault();
		// const value = this.state.value;
		// if (isNaN(value) ) return this.setState({value: ""});
		// const arr = value.split("");
		// this.setState({arr: arr});
	};

	render() {
		const options = this.state.langs.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<form action="#" onSubmit={this.formHandleSubmit}>
					<p>Текст инпута: {this.state.inputeValue}</p>
					<p>Текст area: {this.state.valueTextarea}</p>
					<p>Состояние checkbox1: {this.state.valueСhecked1 ? 'отмечен' : 'не отмечен'}</p>
					<p>Состояние checkbox2: {this.state.valueСhecked2 ? 'отмечен' : 'не отмечен'}</p>
					<p>Ваш выбор: {this.state.langs[this.state.valueSelect]}</p>
					<select value={this.state.valueSelect} onChange={this.handleSelectChange} style={{display: "block"}}>
						{options}
					</select>
					<div>
						<input type="checkbox" checked={this.state.valueСhecked1} onChange={this.handleCheckboxChange1}/>
						<input type="checkbox" checked={this.state.valueСhecked2} onChange={this.handleCheckboxChange2}/>
					</div>
					<div>
						<input type="radio" value="option1" checked={this.state.option == "option1"} onChange={this.handleRadioChange}/>
						<input type="radio" value="option2" checked={this.state.option == "option2"} onChange={this.handleRadioChange}/>
					</div>
					<input type="text" defaultValue={this.state.inputeValue}
					       onChange={this.handleInputChange} style={{display: "block", marginBottom: "20px"}}/>
					<textarea value={this.state.valueTextarea} onChange={this.handleTextareaChange} />
					<button type="submit" style={{display: "block"}}>Кнопка</button>
				</form>
			</div>
		);
	}
}



