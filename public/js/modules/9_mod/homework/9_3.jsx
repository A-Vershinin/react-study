/*
Реализуйте тест. Дан массив с вопросами и правильными ответами. Выведите все эти вопросы на экран, а под каждым
вопросом - инпут. В этот инпут пользователь должен ввести правильный ответ на вопрос. Под всеми вопросами должна
находиться кнопка 'сдать тест'. По нажатию на эту кнопку под вопросами вместо инпутов должно появится
следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'.
Правильные ответы должны быть зеленого цвета, а неправильные - красного.
*/
class Item extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		if (this.props.checkTest) {
			if (this.props.questAnswer === this.props.answer) {
				console.log("dsd");
				var answ1 = <p style={{color: "green"}}>Ваш ответ: {this.props.questAnswer} Правильно, молодец</p>;
			}
			else {
				var answ2 = <p style={{color: "red"}}>Ваш ответ: {this.props.questAnswer} неправильно. Правильный
					ответ: {this.props.answer}</p>;
			}
		}
		else {
			var input = <input value={this.props.questAnswer}
			                   onChange={this.props.handleQuestAnswerChange.bind(null, this.props.index)}/>;
		}

		return (
			<li key={this.props.index} style={{borderBottom: "1px solid black"}}>
				<h4 style={{ marginBottom: "20px"}}>Вопрос {this.props.index+1}</h4>
				<div style={{marginBottom: "20px"}}>{this.props.question}</div>
				{answ1}
				{answ2}
				<div style={{marginBottom: "20px"}}>Ваш ответ {input}</div>
			</li>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			test: [
				{question: "Какой самый популярный фреймворк в 2017 году?", answer: "React", questAnswer: ""},
				{question: "Чем является React в шаблоне Model View Controller?", answer: "View", questAnswer: ""},
				{question: "Какая самая популярная библиотека используется для управления состоянием " +
				"данных с React?", answer: "Redux", questAnswer: "",},
				{question: "Хотели бы вы после окончания курса сделать мини-приложение под наставничеством " +
				"Димы?", answer: "Да", questAnswer: ""}],
			checkTest: false
		};
	}

	handleQuestAnswerChange(index, event) {
		const test = this.state.test;
		console.log(event.target.value);
		test[index]["questAnswer"] = event.target.value;
		this.setState({test: test});
	}

	handleCkeckClick() {
		console.log(this.state.checkTest);
		this.state.checkTest = !this.state.checkTest;
		this.setState({checkTest: this.state.checkTest});
	}

	render() {
		const items = this.state.test.map((elem, index) => {
			return (
				<Item index={index} key={index} question={elem.question} answer={elem.answer} questAnswer={elem.questAnswer}
				      handleQuestAnswerChange={this.handleQuestAnswerChange.bind(this)}
				/>
			);
		});

		return (
			<div className="container">
				<ul >
					{items}
					<button onClick={this.handleCkeckClick.bind(this)}>Cдать тест</button>
				</ul>
			</div>
		);
	}
}
export default App;