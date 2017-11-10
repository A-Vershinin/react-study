/*
Дан инпут. В него вводится число. Дана также кнопка submit. Сделайте так, чтобы по нажатию на кнопку, это
число разбилось на массив цифр и каждая из этих цифр вывелась в теге ul в отдельной li.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: "", arr: []};
	}
	handleChange = (event) => {
		this.setState({value: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const value = this.state.value;
		if (isNaN(value) ) return this.setState({value: ""});
		const arr = value.split("");
		this.setState({arr: arr});
	};

	render() {

		const list = this.state.arr.map((item, index) => {
			return <li key={index}>{item}</li>
		});

		return (
			<div className="container">
				<form action="#" onSubmit={this.handleSubmit}>
					<input type={"text"}
					       value={this.state.value}
					       onChange={this.handleChange}
					/>
					<button type="submit">Кнопка</button>
				</form>
				<ul>{list}</ul>
			</div>
		);
	}
}
export default App;