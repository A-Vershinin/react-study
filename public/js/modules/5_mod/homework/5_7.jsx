/*
 Дан следующий стейт:
this.state = {
	users: [
		{name: 'Коля', age: 30},
		{name: 'Вася', age: 40},
		{name: 'Петя', age: 50},
	]
};
Выведите его на экран в виде таблицы:
<table>
	<tr>
		<td>Коля</td><td>30</td>
	</tr>
	<tr>
		<td>Вася</td><td>40</td>
	</tr>
	<tr>
		<td>Петя</td><td>50</td>
	</tr>
</table>
Сделайте 2 инпута и кнопку, по нажатию на которую в список добавится новая tr с именем и возрастом.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {users: [
			{name: 'Коля', age: 30},
			{name: 'Вася', age: 40},
			{name: 'Петя', age: 50},
		], value1: "", value2: ""};
	}
	handleChange1 = (event) => {
		this.setState({value1: event.target.value});
	};

	handleChange2 = (event) => {
		this.setState({value2: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let users = [...this.state.users];
		const value1 = this.state.value1;
		const value2 = this.state.value2;
		if (!isNaN(value1) || isNaN(value2)) {
			this.setState({value1: ""});
			this.setState({value2: ""});
		} else {
			users.push({name: value1, age: value2});
			this.setState({users: users});
		}
	};

	render() {

		const item = this.state.users.map((item, index) => {
			return  (
				<tr key={index} style={{outline: "1px solid black"}}>
					<td>{item.name}</td>
					<td style={{textAlign: "center"}}>{item.age}</td>
				</tr>
			)
		});

		return (
			<div className="container">
				<form action="#" onSubmit={this.handleSubmit} style={{marginBottom: "20px"}}>
					<input type={"text"}
					       value={this.state.value1}
					       onChange={this.handleChange1}
					/>
					<input type={"text"}
					       value={this.state.value2}
					       onChange={this.handleChange2}
					/>
					<button type="submit">Кнопка</button>
				</form>
				<table>
					<tbody>
					<tr style={{outline: "1px solid black"}}>
						<td style={{display: "block", marginRight: "20px"}}>Имя</td>
						<td>Возраст</td>
					</tr>
					{item}
					</tbody>
				</table>
			</div>

		);
	}
}
export default App;