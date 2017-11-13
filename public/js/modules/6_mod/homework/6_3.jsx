/*
Дан текстареа и кнопка. Дан также стейт texts с массивом текстов. Изначально этот массив пустой, но каждый раз
по нажатию на кнопку в конец этого массива должно записаться текущее содержимое текстареа. Выведите содержимое
массива this.state.texts так, чтобы каждый элемент массива выводился в новом абзаце.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueTextarea: "", texts: []};
	}
	handleTextareaChange = (event) => {
		this.setState({valueTextarea: event.target.value});
	};

	formHandleSubmit = (event) => {
		event.preventDefault();
		const value = this.state.valueTextarea;
		const string = value.split("\n") || value;
		const result = this.state.texts.concat(string);
		this.setState({texts: result});
	};

	render() {
		let result = this.state.texts.map((elem,index) => {
			return <p key={index}>{elem}</p>
		});

		return (
			<div className="container">
				<div>Текст area: {result}</div>
				<form action="#" onSubmit={this.formHandleSubmit}>
					<textarea value={this.state.valueTextarea} onChange={this.handleTextareaChange}/>
					<button type="submit" style={{display: "block"}}>Кнопка</button>
				</form>
			</div>
		);
	}
}

export default App;



