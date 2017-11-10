/*
Дан инпут и 3 абзаца. В инпут вводится ФИО пользователя через пробел. Сделайте так, чтобы при наборе текста в
первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: ""};
	}

	handleChange = (event) => {
		this.setState({value: event.target.value});
	};

	render() {
		const arr = this.state.value.split(" ");
		let surname; let name; let secondName;
		if (arr.length < 4) {
			surname = arr[0]; name = arr[1]; secondName = arr[2];
		}

		return (
			<div className="container">
				<p>Фамилия: {surname}</p>
				<p>Имя: {name}</p>
				<p>Отчество: {secondName}</p>
				<input type={"text"}
				       value={this.state.value}
				       onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default App;