/*
Модифицируйте предыдущую задачу. Сделайте так, чтобы можно было поредактировать имя в инпуте и эти изменения
мгновенно отображались на экране.
*/
class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li key={this.props.index}>
				<span style={{marginRight: "20px"}}>Имя юзера: {this.props.name}</span>
				<button onClick={this.props.addText.bind(null, this.props.index)} style={{marginRight: "20px"}}>Кнопка</button>
				<input type="text" value={this.props.name} onChange={this.props.editValue.bind(null, this.props.index)}/>
			</li>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: ['Коля', 'Вася', 'Петя']
		};
	}
	handleAddText(index) {
		const user = this.state.users;
		user[index] = user[index] +'!';
		this.setState({users: user});
	}
	handleEditValue(index, event) {
		const user = this.state.users;
		user[index] = event.target.value;
		this.setState({users: user});
	}

	render() {
		const item = this.state.users.map((elem, index) => {
			return (
				<User index={index} key={index} name={elem}
				      addText={this.handleAddText.bind(this)}
				      editValue={this.handleEditValue.bind(this)}
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