/*
Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за
день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в последней колонке автоматически
рассчитывалась зарплата работника (количество отработанных дней умножить на ставку). Сделайте так, чтобы количество
дней и ставка выводились в виде инпутов. Если поредактировать эти инпуты - зарплата также должна поменяться. Под
таблицей также выведите суммарную зарплату всех работников.

Дополнительно: Рядом с именем и фамилией сделайте кнопку 'редактировать'. По нажатию на эту кнопку она должна
исчезнуть, а взамен должен появиться инпут, с помощью которого можно будет поредактировать текст. По потери фокуса
из инпута этот инпут должен исчезнуть, а взамен должна вернуться кнопка 'редактировать'.
*/
class Total extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const allSalary = this.props.users.map(elem => {
			if (elem.workDays !== 0 && elem.workPrice !== 0) {
				return elem.workDays * elem.workPrice;
			} else {
				return 0;
			}
		}).reduce((elem, index) => elem + index);


		return (
			<p>Общая зарплата всех сотрудников: {allSalary}$</p>
		)
	}
}

class Item extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		if (this.props.statusName) {
			var inputName = <input value={this.props.valueEdit}
			                       onChange={this.props.handleValueEditNameChange.bind(null, this.props.index)}
			                       onBlur={this.props.handleValueEditNameBlur.bind(null, this.props.index)}/>;
		}
		if (this.props.statusSurname) {
			var inputSurname = <input value={this.props.valueEdit}
			                          onChange={this.props.handleValueEditSurnameChange.bind(null, this.props.index)}
			                          onBlur={this.props.handleValueEditSurnameBlur.bind(null, this.props.index)}/>;
		}
		if (!this.props.statusName) {
			var buttonName = <button onClick={this.props.handleBtnNameClick.bind(null, this.props.index)}>Редактировать</button>;

		}
		if (!this.props.statusSurname) {
			var buttonSurname = <button onClick={this.props.handleBtnSurnameClick.bind(null, this.props.index)}>Редактировать</button>;
		}
		return (
			<tr key={this.props.index} style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
				<td style={{display: "block", width: "100px", marginRight: "30px"}}>
					<span>{this.props.name}</span>
					{buttonName}
					{inputName}
				</td>
				<td style={{display: "block", width: "150px", textAlign: "center"}}>
					<span>{this.props.surname}</span>
					{buttonSurname}
					{inputSurname}
				</td>
				<td style={{display: "block", width: "250px", textAlign: "center"}}>
					<input type="text" value={this.props.workDays}
					       onChange={this.props.handleWorkDaysChange.bind(null, this.props.index)}
					/>
				</td>
				<td style={{display: "block", width: "250px", textAlign: "center"}}>
					<input type="text" value={this.props.workPrice}
					       onChange={this.props.handleWorkPriceChange.bind(null, this.props.index)}
					/>
				</td>
				<td style={{display: "block", width: "200px", textAlign: "center"}}>
					<span>{this.props.userSallary}</span>
				</td>
			</tr>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', surname: "Пупкин", workDays: 20,  workPrice: 80, valueEdit: " ", statusName: false, statusSurname: false},
				{name: 'Вася', surname: "Добкин", workDays: 22,  workPrice: 30, valueEdit: " ", statusName: false, statusSurname: false},
				{name: 'Иван', surname: "Иванов", workDays: 16,  workPrice: 70, valueEdit: " ", statusName: false, statusSurname: false},
				{name: 'Петя', surname: "Петров", workDays: 18,  workPrice: 55, valueEdit: " ", statusName: false, statusSurname: false},
			]
		};
	}

	handleWorkDaysChange(index, event) {
		const value = parseFloat(event.target.value);
		if (isNaN(value)) {
			this.state.users[index]['workDays'] = 0;
		} else {
			this.state.users[index]['workDays'] = value;
		}
		this.setState({users: this.state.users});
	}

	handleWorkPriceChange(index, event) {
		const value = parseFloat(event.target.value);
		if (isNaN(value)) {
			this.state.users[index]['workPrice'] = 0;
		} else {
			this.state.users[index]['workPrice'] = value;
		}
		this.setState({users: this.state.users});
	}

	handleBtnNameClick(index) {
		this.state.users[index]['statusName'] = !this.state.users[index]['statusName'];
		this.setState({users: this.state.users});
	};

	handleBtnSurnameClick(index) {
		this.state.users[index]['statusSurname'] = !this.state.users[index]['statusSurname'];
		this.setState({users: this.state.users});
	};

	handleValueEditNameChange(index, event) {
		this.state.users[index]['name'] = event.target.value;
		this.setState({users: this.state.users});
	}

	handleValueEditNameBlur(index, event) {
		this.state.users[index]['valueEdit'] = event.target.value;
		this.state.users[index]['statusName'] = !this.state.users[index]['statusName'];
		this.state.users[index]['name'] = event.target.value;
		this.setState({users: this.state.users});
	}

	handleValueEditSurnameChange(index, event) {
		this.state.users[index]['surname'] = event.target.value;
		this.setState({users: this.state.users});
	}

	handleValueEditSurnameBlur(index, event) {
		this.state.users[index]['valueEdit'] = event.target.value;
		this.state.users[index]['statusSurname'] = !this.state.users[index]['statusSurname'];
		this.state.users[index]['surname'] = event.target.value;
		this.setState({users: this.state.users});
	}

	render() {
		const items = this.state.users.map((elem, index) => {
			let userSallary = elem.workDays * elem.workPrice;
			return (
				<Item index={index} key={index} name={elem.name} surname={elem.surname} workDays={elem.workDays}
				      workPrice={elem.workPrice} value={elem.valueEdit} statusName={elem.statusName}
				      statusSurname={elem.statusSurname} userSallary={userSallary}
				      handleWorkDaysChange={this.handleWorkDaysChange.bind(this)}
				      handleWorkPriceChange={this.handleWorkPriceChange.bind(this)}
				      handleBtnNameClick={this.handleBtnNameClick.bind(this)}
				      handleValueEditNameChange={this.handleValueEditNameChange.bind(this)}
				      handleValueEditNameBlur={this.handleValueEditNameBlur.bind(this)}
				      handleBtnSurnameClick={this.handleBtnSurnameClick.bind(this)}
				      handleValueEditSurnameChange={this.handleValueEditSurnameChange.bind(this)}
				      handleValueEditSurnameBlur={this.handleValueEditSurnameBlur.bind(this)}
				/>
			);
		});

		return (
			<div className="container">
				<table>
					<tbody>
					<tr style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
						<th style={{display: "block", width: "100px"}}>Имя</th>
						<th style={{display: "block", width: "150px"}}>Фамилия</th>
						<th style={{display: "block", width: "300px"}}>Отработанные дни</th>
						<th style={{display: "block", width: "200px"}}>Зп. ставка</th>
						<th style={{display: "block", width: "200px"}}>Зп. работника</th>
					</tr>
					{items}
					</tbody>
				</table>
				<Total users={this.state.users}/>
			</div>
		);
	}
}
export default App;