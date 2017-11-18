/*
Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в виде
таблицы. Сделайте так, чтобы работников можно было посортировать по любой колонке этой таблицы.
*/
// не доделал
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

	getInnerArr(colNum) {
		let innerArray = this.state.users.map((item) => {
			if (colNum === 0) {
				return item.name;
			}
			if (colNum === 1) {
				return item.salary;
			}
		});
		return innerArray;
	}

	sortGrid(arr, type) {
		let compare;
		switch (type) {
			case 'number':
				compare = (rowA, rowB) => {
					return rowA - rowB;
				};
				break;
			case 'string':
				compare = (rowA, rowB) => {
					return rowA.length > rowB.length;
				};
				break;
		}
		return arr.sort(compare);
	}

	handleTableClick(event) {
		const index = event.target.cellIndex;
		const type = event.target.getAttribute('data-type');
		if (event.target.tagName != "TH") return false;

		let rowsArray = this.getInnerArr(index);
		let arr = this.sortGrid(rowsArray, type);

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

		return (
			<div className="container">
				<table onClick={this.handleTableClick.bind(this)}>
					<thead>
					<tr style={{outline: "1px solid black"}}>
						<th data-type="string" style={{display: "block", marginRight: "20px"}}>Имя</th>
						<th data-type="number">Зарплата</th>
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