/*
Дан массив с юзерами:
this.state = {
	users: [
		{name: 'Коля', surname: 'Иванов', age: 30},
		{name: 'Вася', surname: 'Петров', age: 40},
		{name: 'Петя', surname: 'Сидоров', age: 50},
	]
};
*/
/*
Выведите элементы этого массива в виде списка ul. Имя, фамилия и возраст каждого юзера должны стоять в одной li
через пробел. Внутри каждой li сделайте чекбокс. Если чекбокс не отмечен, то в li должно быть только имя юзера,
а если отмечен - имя, фамилия и возраст.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов', age: 30, status: true},
				{name: 'Вася', surname: 'Петров', age: 40, status: false},
				{name: 'Петя', surname: 'Сидоров', age: 50, status: false},
			]
		}};

	handleCheckboxChange(index) {
		this.state.users[index]["status"] = !this.state.users[index]['status'];
		this.setState({users: this.state.users});
	}

	render() {

		const list = this.state.users.map((item, index) => {
			if(item.status) {
				var surname = item.surname;
				var age = item.age;
			}
			return 	<li key={index}>
				{item.name} {surname} {age}
				<input type="checkbox" checked={item.status} onChange={this.handleCheckboxChange.bind(this, index)}/>
			</li>
		});

		return (
			<div className="container">
				<p>Список пользователей</p>
				<ul>{list}</ul>
			</div>
		);
	}
}
export default App;