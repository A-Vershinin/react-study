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
			test: [
				{
					question: 'Вопрос 1',
					answers: [
						'Ответ 1',
						'Ответ 2',
						'Ответ 3',
						'Ответ 4',
						'Ответ 5',
					],
					right: 3,
					answer: ""
				},
				{
					question: 'Вопрос 2',
					answers: [
						'Ответ 1',
						'Ответ 2',
						'Ответ 3',
						'Ответ 4',
						'Ответ 5',
					],
					right: 2,
					answer: ""
				},
			]
		};
	}

	handleRadioChange(index, event) {
		console.log(this.state.test[index]);
		this.state.test[index]['inputValue'] = event.target.value;
		this.state.test[index]['answer'] = event.target.value;
		this.setState({answers: this.state.test})
	};

	render() {

		const elem = this.state.test.map((item, index) => {
			if (item.answer == item.right) {
				var string = "green";
			} else {
				var string = "red";
			}

			let answers = item.answers.map((elem, indexSecond) => {
				return <div key={indexSecond} style={{display: "inline-block" ,marginRight: "15px"}}>
					<input type="radio" value={indexSecond+1} checked={item.answer == indexSecond+1}
					       onChange={this.handleRadioChange.bind(this, index)} style={{marginRight: "10px"}} />
					<span>{elem}</span>
				</div>
			});

			return <div key={index}>
				<p className={string}>{item.question}</p>
				{answers}
				<p>Вы выбрали: {item.answer}</p>
			</div>
		});

		return (
			<div className="container">
				<form>
					{elem}
				</form>
			</div>
		);
	}
}
export default App;