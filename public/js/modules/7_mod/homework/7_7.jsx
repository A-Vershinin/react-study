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
				{name: "Вася", surname: "Пупкин", salary: 120},
				{name: "Коля", surname: "Иванов", salary: 130},
				{name: "Петя", surname: "Петров", salary: 140},
			]
		}};

	sortGrid(table, colNum, type) {
		let tbody = table.getElementsByTagName('tbody')[0];
		let rowsArray = [].slice.call(tbody.rows); 		// массив из TR

		let compare; // функцию сравнения в зависимости от типа
		switch (type) {
			case 'number':
				compare = (rowA, rowB) => {
					return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
				};
				break;
			case 'string':
				compare = (rowA, rowB) => {
					return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
				};
				break;
		}
		rowsArray.sort(compare);
		console.log(rowsArray);
		// Убрать tbody из большого DOM документа для лучшей производительности
		// table.removeChild(tbody);

		// добавить результат в нужном порядке в TBODY
		// они автоматически будут убраны со старых мест и вставлены в правильном порядке
		// for (let i = 0; i < rowsArray.length; i++) {
		// 	tbody.appendChild(rowsArray[i]);
		// }
		// tbody.appendChild(tbody);
	}

	handleTableClick(event) {
		const index = event.target.cellIndex;
		const type = event.target.getAttribute('data-type');
		const table = event.target.parentElement.parentElement.parentElement;

		if (event.target.tagName != "TH") return false;
		this.sortGrid(table, index, type);
		this.setState({users: this.state.users});
	}
	render() {

		const tbody = document.getElementsByTagName("tbody");


		const item = this.state.users.map((item, index) => {
			return (
				<tr key={index} style={{outline: "1px solid black"}}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
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
						<th data-type="string">Фамилия</th>
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