/*
Модифицируйте предыдущую задачу. Пусть теперь showMessage параметром принимает число и выводит его на экран.
Сделайте так, чтобы по клику на ссылку на экран выводился номер юзера в массиве юзеров.
*/
class User extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr key={this.props.index} style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
				<td style={{display: "block", width: "100px"}}>
					<span>{this.props.name}</span>
				</td>
				<td style={{display: "block", width: "200px"}}>
					<span>{this.props.surname}</span>
				</td>
				<td style={{display: "block", width: "150px"}}>
					<span>{this.props.age}</span>
				</td>
				<td style={{display: "block", width: "150px"}}>
					<a href="#" onClick={this.props.showMessage.bind(null, this.props.index)}>Ссылка {this.props.index + 1}</a>
				</td>
			</tr>
		)
	}
}



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов', age: 25},
				{name: 'Вася', surname: 'Петров', age: 30},
				{name: 'Витя', surname: 'Надовыйти', age: 30},
				{name: 'Петя', surname: 'Сидоров', age: 30},
			]
		}
	}
	showMessage(index) {
		alert("Номер юзера в массиве " + index);
	}

	render() {

		const users = this.state.users.map((elem, index) => {
			return (
				<User key={index} name={elem.name} surname={elem.surname} age={elem.age}
				      index={index} showMessage={this.showMessage.bind(this)}/>
			)
		});

		return (
			<div className="container">
				<p>Таблица</p>
				<table>
					<tbody>
					<tr style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
						<th style={{display: "block", width: "100px"}}>Имя</th>
						<th style={{display: "block", width: "200px"}}>Фамилия</th>
						<th style={{display: "block", width: "150px"}}>Возраст</th>
						<th style={{display: "block", width: "150px"}}>Ссылки</th>
					</tr>
					{users}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;