/*
Дан массив. Выведите его элементы в виде списка ul. Сделайте так, чтобы элементы массива выводились в отдельном
компоненте. Рядом с текстом li сделайте ссылку 'редактировать'. По нажатию на эту ссылку она должна исчезнуть, а
взамен должен появиться инпут, с помощью которого можно будет поредактировать текст li. По потери фокуса из инпута
этот инпут должен исчезнуть, а взамен должна вернуться ссылка 'редактировать'.
*/
class Item extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		if (this.props.valueChecked) {
			var input = <input value={this.props.valueInput} onChange={this.props.handleInputChange.bind(this, this.props.index)}
			                   onBlur={this.props.handleInputBlur.bind(this, this.props.index)}/>;
		}
		if (!this.props.valueChecked) {
			var link = <a href="#" onClick={this.props.handleUserClick.bind(this, this.props.index)}>Редактировать</a>;
		}

		return (
			<li key={this.props.index}>
				<span onClick={this.props.handleUserClick.bind(this, this.props.index)}
				      style={{marginRight: "20px"}}>
					Имя юзера: {this.props.name}
				</span>
				{link}
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
				{name: 'Коля', valueInput: " ", valueChecked: false},
				{name: 'Вася', valueInput: " ", valueChecked: false},
				{name: 'Петя', valueInput: " ", valueChecked: false}
			]
		};
	}

	handleUserClick(index) {
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
		const items = this.state.users.map((elem, index) => {
			return (
				<Item index={index} key={index} name={elem.name} valueChecked={elem.valueChecked}
				      handleUserClick={this.handleUserClick.bind(this)}
				      handleInputBlur={this.handleInputBlur.bind(this)}
				      handleInputChange={this.handleInputChange.bind(this)}
				/>
			);
		});

		return (
			<div className="container">
				<ul>
					{items}
				</ul>
			</div>
		);
	}
}
export default App;