// import App from "./modules/2_mod/2_1";
/*
Модифицируйте предыдущую задачу так, чтобы появилась еще одна колонка со ссылками для удаления.
Нажатие на любую из ссылок должно приводить к удалению соответствующего юзера из таблицы.
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
		// this.removeItem = this.removeItem.bind(this);
	}

	removeItem(index) {
		this.state.users.splice(index, 1);
		this.setState({items: this.state.users});
	}

	render() {
		const item = this.state.users.map((item, index) => {
			return  (
				<tr key={index} style={{"outline": "1px solid black"}}>
					<td>{item.name}</td>
					<td>{item.age}</td>
					<td>{item.salary}</td>
					<a href={"#"} onClick={this.removeItem.bind(this, index)}>Remove</a>
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
						<td>Remove.names</td>
					</tr>
					{item}
					</tbody>
				</table>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);


