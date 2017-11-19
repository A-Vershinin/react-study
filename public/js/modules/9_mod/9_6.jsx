/*
Модифицируйте предыдущую задачу. Пусть теперь у нас дан массив юзеров. Выведите их в виде списка ul.
Сделайте так, чтобы каждого юзера можно было поредактировать, нажав на него.
*/
class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.valueChecked) {
			var input = <input value={this.props.valueInput} onChange={this.props.inputChange.bind(null, this.props.index)}
			                   onBlur={this.props.inputBlur.bind(null, this.props.index)}/>;
		}
		return (
			<li key={this.props.index}>
				<span onClick={this.props.userClick.bind(null, this.props.index)}>Имя юзера: {this.props.name}</span>
				{input}
			</li>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', valueInput: "", valueChecked: false},
				{name: 'Вася', valueInput: "", valueChecked: false},
				{name: 'Петя', valueInput: "", valueChecked: false}
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
			return (
				<User index={index} key={index} name={elem.name} valueInput={elem.valueInput} valueChecked={elem.valueChecked}
				      userClick={this.handleUserClick.bind(this)}
				      inputChange={this.handleInputChange.bind(this)}
				      inputBlur={this.handleInputBlur.bind(this)}
				/>
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