/*
Дан следующий стейт:
	this.state = {
		users: [
			{name: 'Коля', age: 30, salary: 400},
			{name: 'Вася', age: 31, salary: 500},
			{name: 'Петя', age: 32, salary: 600},
		]
	};
Выведите данные из этого стейта в виде таблицы table так, чтобы в ней было
3 колонки: имя, возраст и зарплата.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', age: 30, salary: 400},
				{name: 'Вася', age: 31, salary: 500},
				{name: 'Петя', age: 32, salary: 600},
			]
		};
	}

	render() {
		const item = this.state.users.map((item, index) => {
			return  (
				<tr key={index} style={{"outline": "1px solid black"}}>
					<td>{item.name}</td>
					<td>{item.age}</td>
					<td>{item.salary}</td>
				</tr>
			)
		});

		return (
			<div className="container">
				<table>
					<tbody>
					<tr style={{"outline": "1px solid black"}}>
						<td>Name</td>
						<td>Age</td>
						<td>Salary</td>
					</tr>
					{item}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;