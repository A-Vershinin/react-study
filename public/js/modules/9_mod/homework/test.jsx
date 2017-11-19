class Worker extends React.Component {
	constructor() {
		super();
	}

	render() {
		if (this.props.check) {
			if (parseInt(this.props.userAnswer) == this.props.answer) {
				var answ = <p className="green">Ваш ответ: {this.props.userAnswer} Правильно, молодец</p>;
			}
			else {
				var answ1 = <p className="red">Ваш ответ: {this.props.userAnswer} неправильно. Правильный
					ответ: {this.props.answer}</p>;
			}
		}
		else {
			var input =
				<input
					value={this.props.userAnswer}
					onChange={this.props.handleChange.bind(null, this.props.index)}
				/>;
		}
		return <div>
			<p>Сколько будет {this.props.question} ?</p>
			{answ}
			{answ1}
			{input}
		</div>;
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			test: [
				{question: "1+1=", answer: 2, userAnswer: ""},
				{question: "2+2=", answer: 4, userAnswer: "",},
				{question: "3+3=", answer: 6, userAnswer: ""}],
			check: false
		};
	}

	handleChange(index, event) {
		const test = this.state.test;
		test[index]["userAnswer"] = event.target.value;
		this.setState({test: test});
	}

	handleClick() {
		this.state.check = !this.state.check;
		this.setState({check: this.state.check});
	}

	render() {
		var button = <button onClick={this.handleClick.bind(this)}>Сдать тест</button>;
		const testQuest = this.state.test.map((item, index) => {
			return (
				<Worker key={index} question={item.question} index={index} answer={item.answer}
				        userAnswer={item.userAnswer} check={this.state.check}
				        handleChange={this.handleChange.bind(this)}
				/>
			);
		});
		return <div>
			<p>
				{testQuest}
			</p>
			{button}
		</div>;
	}
}

export default App;