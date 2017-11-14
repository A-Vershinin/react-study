/*
Дан массив с работниками. У каждого работника есть имя, фамилия и зарплата. Выведите этих работников на экран в
виде таблицы. Для каждого работника сделайте чекбокс, который изначально будет отмечен. Под таблицей выведите
сумму зарплат тех работников, для которых чекбокс отмечен.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			workers: [
				{name: "Вася", surname: "Пупкин", sallary: 120, status: true},
				{name: "Коля", surname: "Иванов", sallary: 150, status: true},
				{name: "Петя", surname: "Петров", sallary: 170, status: true},
			]
		}};

	handleCheckboxChange(index) {
		this.state.workers[index]["status"] = !this.state.workers[index]['status'];
		this.setState({workers: this.state.workers});
	}

	render() {

		const item = this.state.workers.map((item, index) => {
			return 	<tr key={index} style={{outline: "1px solid black"}}>
				<td style={{textAlign: "center"}}>{item.name}</td>
				<td style={{textAlign: "center"}}>{item.surname}</td>
				<td style={{textAlign: "center"}}>{item.sallary}</td>
				<td style={{textAlign: "center"}}>
					<input type="checkbox" checked={item.status} onChange={this.handleCheckboxChange.bind(this, index)}/>
				</td>
			</tr>
		});

		let result = 0;
		const suma = this.state.workers.forEach(elem => {
			elem.status ? result += elem.sallary : false;
		});

		return (
			<div className="container">
				<p>Список работников</p>
				<table>
					<tbody>
					<tr style={{outline: "1px solid black"}}>
						<td style={{display: "block", marginRight: "20px"}}>Имя</td>
						<td>Фамилия</td>
						<td>Зарплата</td>
						<td>Статус</td>
					</tr>
					{item}
					</tbody>
				</table>
				<p>Сумма зарплат: {result} $</p>
			</div>
		);
	}
}
export default App;