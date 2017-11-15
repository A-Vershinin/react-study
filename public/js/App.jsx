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
		this.state = {
			valueOption: "",
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
					right: 3,
				},
				{
					question: 'Вопрос 2',
					answers: [
						'Ответ1',
						'Ответ2',
						'Ответ3',
						'Ответ4',
						'Ответ5',
					],
					right: 5,
				},
			]
		};
	}

	handleRadioChange = (event) => {
		this.setState({valueOption: event.target.value})
	};

	// formHandleSubmit = (event) => {
	// 	event.preventDefault();
	// 	const value1 = this.state.selectCur[parseInt(this.state.valueSelect1) || 0];
	// 	const value2 = this.state.selectCur[parseInt(this.state.valueSelect2) || 0];
	// 	// обмен слево направо
	// 	const cur1 = (parseFloat(this.state.valueInput) * parseFloat(this.state.course[0][value2]));
	// 	const cur2 = (parseFloat(this.state.course[0][value1]));
	// 	this.state.result = (cur1 / cur2).toFixed(2);
	// 	this.setState({result: this.state.result});
	// };

	render() {
		const elem = this.state.test.map((item, index) => {
			const list = this.state.test['answers'].map((item, index) => {
				return <li key={index}>{item}</li>
			});
			return <div key={index}>
				<h4>{item.question}</h4>
				{list}
				<input type="radio" value={item.right} checked={this.state.valueOption == this.state.test['answers']}
				       onChange={this.handleRadioChange}/>
			</div>
		});


		return (
			<div className="container">
				<p>Вопрос </p>
					<input type="text" value={this.state.valueInput}
					       onChange={this.handleInputChange} style={{display: "block", marginBottom: "20px"}}/>
				<p>Вы выбрали: {this.state.valueOption}</p>

			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);


