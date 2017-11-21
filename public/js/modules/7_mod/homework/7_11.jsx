/*
Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в
виде таблицы. Причем выведите только первых 4 работников, а над таблицей сделайте ссылки: 1, 2, 3, 4 и так далее.
По нажатию на каждую ссылку в таблице будет отображаться заданный десяток работников. Ссылки над таблицей должны
сгенерироваться автоматически исходя из количества работников.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueInputName: "", valueInputSurname: "", valueInputSalary: "",
			valueSelect: "", gender: ["male", "female"],
			workers: [
				{name: "Вася", surname: "Пупкин", salary: 120, gender: "male"},
				{name: "Света", surname: "Иванова", salary: 130, gender: "female"},
				{name: "Петя", surname: "Петров", salary: 140, gender: "male"},
				{name: "Женя", surname: "Петров", salary: 450, gender: "male"},
				{name: "Саша", surname: "Петров", salary: 510, gender: "male"},
				{name: "Вася", surname: "Петров", salary: 560, gender: "male"},
				{name: "Петя", surname: "Петров", salary: 760, gender: "male"},
				{name: "галя", surname: "Петров", salary: 180, gender: "female"},
				{name: "Маша", surname: "Петров", salary: 60, gender: "female"},
				{name: "Аня", surname: "Петров", salary: 335, gender: "female"},
				{name: "Юля", surname: "Петров", salary: 220, gender: "female"},
				{name: "Катя", surname: "Петров", salary: 420, gender: "female"},
				{name: "Вика", surname: "Петров", salary: 175, gender: "female"},
				{name: "Артём", surname: "Сергеев", salary: 100, gender: "male"},
				{name: "Лена", surname: "Петров", salary: 440, gender: "female"}],
			workersOnPage: []
		};
		this.numberItemsShow = 4; //кол-во элементов для показана в таблице
		this.defaultNumberPage = 1; //номер страницы по умолчанию
		// добавляем в стейт нового массива кол-во эл.массива для первой страницы,
		// чтобы по-умолчанию показывались эл. как для одной первой страницы
		this.state.workersOnPage = this.getNumberPage(this.state.workers, this.defaultNumberPage);
	}
	getArrLinks(number) {
		let arr = [];
		for (let i = 1; i <= number; i++) {
			arr.push(i);
		}
		return arr;
	}

	getNumberPage(arr, numberPage) {
		return arr.slice((numberPage-1) * this.numberItemsShow, numberPage * this.numberItemsShow);
	}

	getLinks(arr) {
		return Math.ceil(arr.length / this.numberItemsShow);
	}

	handeLinkClick(pageNumber) {
		this.setState({workersOnPage: this.getNumberPage(this.state.workers, pageNumber)});
	};

	render() {
		const defaultArr = this.state.workers;
		// linksOnPage - сколько всего страниц
		const linksOnPage = this.getLinks(defaultArr);

		// allLinks - массив нужной длинны с номерами страниц
		const allLinks = this.getArrLinks(linksOnPage);

		const links = allLinks.map((item, index) => {
			return (
				<a key={index} href="#" style={{display: "inline-block", marginRight: "15px", padding: "5px 15px", border: "1px solid black"}}
				   onClick={this.handeLinkClick.bind(this, item)}>{item}</a>
			);
		});

		const itemTab = this.state.workersOnPage.map((item, index) => {
			return <tr key={index} style={{outline: "1px solid black"}}>
				<td>{item.name}</td>
				<td>{item.surname}</td>
				<td>{item.salary}</td>
				<td>{item.gender}
				</td>
			</tr>;
		});

		return (
			<div className="container">
				<p>Таблица с работниками</p>
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
				<div style={{marginBottom: "10px"}}>
					{links}
				</div>
			</div>
		);
	}
}
export default App;