/*
В стейте дан следующий массив:
[
	{name: 'Коля', age: 30, salary: 500},
	{name: 'Вася', age: 31, salary: 600},
	{name: 'Петя', age: 32, salary: 700},
];
Выведите всех юзеров в виде таблицы table с колонками 'имя', 'возраст' и 'зарплата'.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			params: [
				{name: 'Коля', age: 30, salary: 500},
				{name: 'Вася', age: 31, salary: 600},
				{name: 'Петя', age: 32, salary: 700},
			],
			table: ""
		};
		this.getTable = this.getTable.bind(this);
	}

	getTable() {
		const myTable = this.state.params.map((elem, index) => {
			return <tr key={index} style={{"border": "1px solid black"}}>
				<td>{elem.name}</td>
				<td>{elem.age}</td>
				<td>{elem.salary}</td>
			</tr>});
		this.setState({table: myTable});
	}

	render() {
		return (
			<div className="container">
				<table>
					<tbody>
					<tr>
						<td>Name</td>
						<td>Age</td>
						<td>Salary</td>
					</tr>
					{this.state.table}
					</tbody>
				</table>
				<button onClick={this.getTable}>Click</button>
			</div>
		);
	}
}
export default App;