/*
Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в виде
таблицы. Сделайте так, чтобы работников можно было посортировать по любой колонке этой таблицы.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: "Вася", salary: 120},
				{name: "Коля", salary: 330},
				{name: "Аня", salary: 140},
				{name: "Женя", salary: 75},
			]
		}};

	sortGrid(arr, column) {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i-1][column] > arr[i][column]) {
				let temp = arr[i];
				arr[i] = arr[i-1];
				arr[i-1] = temp;
			}
		}

		return arr;
	}

	handleTableClick(event) {
		const column = event.target.getAttribute('data-column');
		if (event.target.tagName != "TH") return false;
		let arr = this.sortGrid(this.state.users, column);

		console.log(arr);
		this.setState({users: arr});
	}
	render() {

		const item = this.state.users.map((item, index) => {
			return (<tr key={index} style={{outline: "1px solid black"}}>
					<td>{item.name}</td>
					<td>{item.salary}</td>
				</tr>
			)
		});

		// сделать такой же итем для th чтобы имена присваивались из стейта в дата атрибут
		return (
			<div className="container">
				<table onClick={this.handleTableClick.bind(this)}>
					<thead>
					<tr style={{outline: "1px solid black"}}>
						<th data-column="name" style={{display: "block", marginRight: "20px"}}>Имя</th>
						<th data-column="salary">Зарплата</th>
					</tr>
					</thead>
					<tbody>
					{item}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;