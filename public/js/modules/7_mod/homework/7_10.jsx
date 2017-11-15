/*
Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата, пол. Выведите этих работников на экран
в виде таблицы. Под таблице сделайте форму, с помощью которой в таблицу можно будет добавить нового работника. В этой
форме имя, фамилия, зарплата будут инпутами, а пол - селектом, в котором можно будет выбрать один из двух вариантов.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInputName: "", valueInputSurname: "", valueInputSalary: "", valueSelect: "", gender: ["male", "female"],
			workers: [
				{name: "Вася", surname: "Пупкин", salary: 120, gender: "male"},
				{name: "Света", surname: "Иванова", salary: 130, gender: "female"},
				{name: "Петя", surname: "Петров", salary: 140, gender: "male"}]
		};
	}

	handleInputNameChange = (event) => {
		this.state.valueInputName = event.target.value;
		this.setState({valueInputName: event.target.value});
	};
	handleInputSurnameChange = (event) => {
		this.state.valueInputSurname = event.target.value;
		this.setState({valueInputSurname: event.target.value});
	};
	handleInputSalaryChange = (event) => {
		this.state.valueInputSalary = event.target.value;
		this.setState({valueInputSalary: event.target.value});
	};
	handleSelectChange = (event) => {
		this.state.valueSelect = event.target.value;
		this.setState({valueSelect: event.target.value});
	};
	formHandleSubmit = (event) => {
		event.preventDefault();
		let workers = [...this.state.workers];

		const select = this.state.gender[this.state.valueSelect] || this.state.gender[0];

		workers.push({
			name: this.state.valueInputName,
			surname: this.state.valueInputSurname,
			salary: this.state.valueInputSalary,
			gender: select
		});
		this.setState({
			workers: workers,
			valueInputName: "",
			valueInputSurname: "",
			valueInputSalary: "",
			valueSelect: ""
		});
	};

	render() {
		const itemTab = this.state.workers.map((item, index) => {
			return <tr key={index} style={{outline: "1px solid black"}}>
				<td>{item.name}</td>
				<td>{item.surname}</td>
				<td>{item.salary}</td>
				<td>{item.gender}
				</td>
			</tr>;
		});

		const options = this.state.gender.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<table style={{marginBottom: "20px"}}>
					<thead>
					<tr style={{outline: "1px solid black"}}>
						<th style={{display: "block", marginRight: "35px"}}>Имя</th>
						<th>Возраст</th>
						<th>Зарплата</th>
						<th>Пол</th>
					</tr>
					</thead>
					<tbody>
					{itemTab}
					</tbody>
				</table>
				<p>Введите данные в форму</p>
				<form action="#" onSubmit={this.formHandleSubmit}>
					<input type="text" value={this.state.valueInputName}
					       onChange={this.handleInputNameChange} style={{display: "block", marginBottom: "20px"}}/>

					<input type="text" value={this.state.valueInputSurname}
					       onChange={this.handleInputSurnameChange} style={{display: "block", marginBottom: "20px"}}/>

					<input type="text" value={this.state.valueInputSalary}
					       onChange={this.handleInputSalaryChange} style={{display: "block", marginBottom: "20px"}}/>

					<select value={this.state.valueSelect} onChange={this.handleSelectChange}
					        style={{display: "block", marginBottom: "20px"}}>
						{options}
					</select>
					<button type="submit" style={{display: "block"}}>Кнопка</button>
				</form>
			</div>
		);
	}
}
export default App;