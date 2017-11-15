/*
 Дан селект. Изначально он пустой. Дан инпут и кнопка. В этот инпут вводится название города. По нажатию на кнопку
 этот город должен попасть в селект. Пользователь нашего скрипта добавляет несколько городов в селект, затем выбирает
 один из добавленных городов - и этот город должен отобразиться на экране в каком-нибудь абзаце
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInput: "", valueSelect: "", selectArr: []
		};
	}

	handleInputChange = (event) => {
		this.state.valueInput = event.target.value;
		this.setState({valueInput: event.target.value});
	};
	handleSelectChange = (event) => {
		this.setState({valueSelect: event.target.value});
	};

	formHandleSubmit = (event) => {
		event.preventDefault();
		const value = this.state.valueInput;
		let select = [...this.state.selectArr];
		select.push(value);
		this.setState({selectArr: select, valueInput: ""});
	};

	render() {
		const options = this.state.selectArr.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<p>Введите данные в поле</p>
				<form action="#" onSubmit={this.formHandleSubmit} style={{marginBottom: "30px"}}>
					<input type="text" value={this.state.valueInput}
					       onChange={this.handleInputChange} style={{display: "block", marginBottom: "20px"}}/>
					<button type="submit" style={{display: "block"}}>Кнопка</button>
				</form>
				<select value={this.state.valueSelect} onChange={this.handleSelectChange} style={{display: "block"}}>
					{options}
				</select>
				<p>Вы выбрали: {this.state.selectArr[this.state.valueSelect]}</p>
			</div>
		);
	}
}
export default App;