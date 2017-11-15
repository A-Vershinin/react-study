// Дан следующий массив с вопросами и вариантами ответов:
/*
this.state = {
	test: [
		{
			question: 'Вопрос 1',
			answers: [
				'Ответ1',
				'Ответ2',
				'Ответ3',
				'Ответ4',
				'Ответ5',
			],
			right: 3, //номер правильного ответа
		},
		{
			...
		},
	]
};
*/
/*
Реализуйте текст с вопросами и вариантами ответов. Каждый вопрос должен быть в своем абзаце, а под ним - 5
радиокнопочек, с помощью которых можно выбрать один из ответов. Если ответ правильный - вопрос должен покраситься в
зеленый цвет, а если неправильный - в красный.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInput: "", valueSelect1: "", valueSelect2: "", selectCur: ["USD", "EUR", "RUR", "UAH"],
			course: [{"USD": 1, "EUR": 0.85, "RUR": 0.45, "UAH": 27}], result: 0
		}
	}

	handleInputChange = (event) => {
		this.state.valueInput = event.target.value;
		this.setState({valueInput: event.target.value});
	};
	handleSelectChange1 = (event) => {
		this.setState({valueSelect1: event.target.value});
	};

	handleSelectChange2 = (event) => {
		this.setState({valueSelect2: event.target.value});
	};

	formHandleSubmit = (event) => {
		event.preventDefault();
		const value1 = this.state.selectCur[parseInt(this.state.valueSelect1) || 0];
		const value2 = this.state.selectCur[parseInt(this.state.valueSelect2) || 0];
		// обмен слево направо
		const cur1 = (parseFloat(this.state.valueInput) * parseFloat(this.state.course[0][value2]));
		const cur2 = (parseFloat(this.state.course[0][value1]));
		this.state.result = (cur1 / cur2).toFixed(2);
		this.setState({result: this.state.result});
	};

	render() {
		const options = this.state.selectCur.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<p>Введите сумму в поле</p>
				<form action="#" onSubmit={this.formHandleSubmit} style={{marginBottom: "30px"}}>
					<input type="text" value={this.state.valueInput}
					       onChange={this.handleInputChange} style={{display: "block", marginBottom: "20px"}}/>
					<button type="submit" style={{display: "block"}}>Поменять</button>
				</form>
				<div>
					<div >
						<span style={{marginRight: "50px"}}>Из</span>
						<span>В</span>
					</div>
					<div>
						<select value={this.state.valueSelect1} onChange={this.handleSelectChange1} style={{display: "inline-block", marginRight: "30px"}}>
							{options}
						</select>
						<select value={this.state.valueSelect2} onChange={this.handleSelectChange2} style={{display: "inline-block"}}>
							{options}
						</select>
					</div>
				</div>
				<p>Вы получите: {this.state.result}</p>
			</div>
		);
	}
}
export default App;