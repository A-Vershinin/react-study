/*
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
 */
/*
Сделайте так, чтобы внутри каждой td была кнопка 'редактировать', по нажатию на которую текст этой td можно
будет поредактировать с помощью появившегося в ней инпута.
 */
class App extends React.Component {
	constructor() {
		super();
		this.state = {users: [
			{name: 'Коля', age: 30, editName: false, editAge: false},
			{name: 'Вася', age: 40, editName: false, editAge: false},
			{name: 'Петя', age: 50, editName: false, editAge: false},]}};

	handleBtnNameChange(index) {
		this.state.users[index]['editName'] = !this.state.users[index]['editName'];
		this.setState({users: this.state.users});
	}
	handleBtnAgeChange(index) {
		this.state.users[index]['editAge'] = !this.state.users[index]['editAge'];
		this.setState({users: this.state.users});
	}
	handleInputNameChange(index, event) {
		this.state.users[index]['name'] = event.target.value;
		this.setState({users: this.state.users});
	}
	handleInputAgeChange(index, event) {
		this.state.users[index]['age'] = event.target.value;
		this.setState({users: this.state.users});
	}
	handleInputNameBlur(index, event) {
		event.target.style.display = "none";
		this.state.users[index]['name'] = event.target.value;
		this.setState({users: this.state.users});
	}
	handleInputAgeBlur(index, event) {
		event.target.style.display = "none";
		this.state.users[index]['age'] = event.target.value;
		this.setState({users: this.state.users});
	}
	render() {

		const itemTab = this.state.users.map((item, index) => {
			if (item.editName) {
				var btnNameInput = <input type="text" value={item.name} onBlur={this.handleInputNameBlur.bind(this, index)}
				                          onChange={this.handleInputNameChange.bind(this, index)}/>
			}
			if (item.editAge) {
				var btnAgeInput = <input type="text" value={item.age} onBlur={this.handleInputAgeBlur.bind(this, index)}
				                         onChange={this.handleInputAgeChange.bind(this, index)}/>
			}

			return 	<tr key={index} style={{outline: "1px solid black"}}>
				<td style={{marginRight: "30px", display: "block"}}>
					<span style={{marginRight: "30px"}}>{item.name}</span>
					<button onClick={this.handleBtnNameChange.bind(this, index)}>Редактировать</button>
					{btnNameInput}
				</td>
				<td>
					<span style={{marginRight: "30px"}}>{item.age}</span>
					<button onClick={this.handleBtnAgeChange.bind(this, index)}>Редактировать</button>
					{btnAgeInput}
				</td>
			</tr>
		});

		return (
			<div className="container">
				<p>Таблица</p>
				<table>
					<tbody>
					<tr style={{outline: "1px solid black"}}>
						<td>Имя</td>
						<td>Возраст</td>
					</tr>
					{itemTab}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;