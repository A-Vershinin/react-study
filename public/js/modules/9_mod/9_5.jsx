/*
Модифицируйте предыдущую задачу. Пусть теперь у нас дан массив юзеров. Выведите их в виде списка ul.
Сделайте так, чтобы каждого юзера можно было поредактировать, нажав на него.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', valueInput: " ", valueChecked: false},
				{name: 'Вася', valueInput: " ", valueChecked: false},
				{name: 'Петя', valueInput: " ", valueChecked: false}
			]
		};
	}

	handleUserClick(index, event) {
		this.state.users[index]['name'] = event.target.value;
		this.state.users[index]['valueChecked'] = !this.state.users[index]['valueChecked'];
		this.setState({users: this.state.users});
	};
	handleInputBlur(index, event) {
		this.state.users[index]['valueInput'] = event.target.value;
		this.state.users[index]['valueChecked'] = !this.state.users[index]['valueChecked'];
		this.state.users[index]['name'] = event.target.value;
		this.setState({users: this.state.users});
	}
	handleInputChange(index, event) {
		this.state.users[index]['valueInput'] = event.target.value;
		this.setState({users: this.state.users});
	}

	render() {
		const item = this.state.users.map((elem, index) => {
			if (elem.valueChecked) {
				var input = <input value={elem.valueInput} onChange={this.handleInputChange.bind(this, index)}
				                   onBlur={this.handleInputBlur.bind(this, index)}/>;
			}
			return (
				<li key={index}>
					<span onClick={this.handleUserClick.bind(this, index)}>Имя юзера: {elem.name}</span>
					{input}
				</li>
			);
		});


		return (
			<div className="container">
				<ul>{item}</ul>
			</div>
		);
	}
}
export default App;