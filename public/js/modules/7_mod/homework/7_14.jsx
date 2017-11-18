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
						'Ответ 1',
						'Ответ 2',
						'Ответ 3',
						'Ответ 4',
						'Ответ 5',
					],
					right: 3,
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
					right: 5,
				},
			]
		};
	}

	// getInnerAnswers(arr) {
	// 	const answers = arr.map((elem, index) => {
	// 		if (this.state.valueOption == right) {
	// 			var string = "green";
	// 		} else {
	// 			var string = "red";
	// 		}
	//
	// 		console.log();
	// 		return (
	// 			<div key={index} style={{display: "inline-block" ,marginRight: "15px"}}>
	// 				<input type="radio" value={elem} checked={this.state.valueOption == elem}
	// 				       onChange={this.handleRadioChange} style={{marginRight: "10px"}} />
	// 				<span>{elem}</span>
	// 			</div>
	// 		)
	// 	});
	// 	return answers;
	// }
	handleRadioChange(index, event) {
		// this.state.test[index]['answers'] = event.target.value;
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
			console.log(this.state.valueOption);
			console.log(typeof this.state.valueOption);
			console.log(typeof item.right);
			if (this.state.valueOption === String(item.right)) {
				var string = "green";
				console.log("внутри");
			} else {
				var string = "red";
			}

			// let answers = item.answers.map((elem, index) => {
			// 	return <div key={index} style={{display: "inline-block" ,marginRight: "15px"}}>
			// 		<input type="radio" value={elem} checked={this.state.valueOption == elem}
			// 		       onChange={this.handleRadioChange} style={{marginRight: "10px"}} />
			// 		<span>{elem}</span>
			// 	</div>
			// });

			return <div key={index}>
				<form>
					<p className={string}>{item.question}</p>
					{/*{answers}*/}

					<div key={index} style={{display: "inline-block", marginRight: "15px"}}>
						<input type="radio" value={"1"} checked={this.state.valueOption === "1"}
						       onChange={this.handleRadioChange.bind(this, index)} style={{marginRight: "10px"}} />
						<span>Ответ1</span>
						<input type="radio" value={"2"} checked={this.state.valueOption === "2"}
						       onChange={this.handleRadioChange.bind(this, index)} style={{marginRight: "10px"}} />
						<span>Ответ2</span>
						<input type="radio" value={"3"} checked={this.state.valueOption === "3"}
						       onChange={this.handleRadioChange.bind(this, index)} style={{marginRight: "10px"}} />
						<span>Ответ3</span>
					</div>
				</form>
			</div>
		});

		return (
			<div className="container">
				{elem}
				<p>Вы выбрали: {this.state.valueOption}</p>
			</div>
		);
	}
}
export default App;