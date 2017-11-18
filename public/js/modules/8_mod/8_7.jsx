/*
Модифицируйте предыдущую задачу. Пусть теперь у нас дан массив юзеров. Выведите их в виде списка ul.
Сделайте так, чтобы каждого юзера можно было поредактировать, нажав на него.
*/
class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.status) {
			var input = <input type="text" style={{marginLeft: "20px"}}
			                   value={this.props.text} onChange={this.props.handleInputChange.bind(this, this.props.index)}
			                   onBlur={this.props.handleInputBlur.bind(this, this.props.index)}
			/>
		} else {
			var link = <a href="#" onClick={this.props.handleBtnClick.bind(null, this.props.index)}>Редактировать</a>
		}

		return (
			<li key={this.props.index}>
				<span style={{marginRight: "20px"}}>{this.props.text}</span>
				{link}
				{input}
			</li>
		)
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{text: 'item1', status: false, linkStatus: false},
				{text: 'item2', status: false, linkStatus: false},
				{text: 'item3', status: false, linkStatus: false},
				{text: 'item4', status: false, linkStatus: false},
				{text: 'item5', status: false, linkStatus: false},
			]
		}
	}

	handleBtnClick(index) {
		this.state.users[index]['status'] = !this.state.users[index]['status'];
		this.setState({users: this.state.users});
	}
	handleInputChange(index, event) {
		this.state.users[index]['text'] = event.target.value;
		this.setState({users: this.state.users});
	}
	handleInputBlur(index, event) {
		this.state.users[index]['status'] = !this.state.users[index]['status'];
		this.state.users[index]['text'] = event.target.value;
		this.setState({users: this.state.users});
	}

	render() {
		const users = this.state.users.map((elem, index) => {
			return (
				<Item key={index} text={elem.text} status={elem.status} index={index} linkStatus={elem.linkStatus}
				      handleBtnClick={this.handleBtnClick.bind(this)}
				      handleInputChange={this.handleInputChange.bind(this)}
				      handleInputBlur={this.handleInputBlur.bind(this)}
				/>
			)
		});

		return (
			<div className="container">
				<p>Список пользователей</p>
				<ul>{users}</ul>
			</div>
		);
	}
}
export default App;