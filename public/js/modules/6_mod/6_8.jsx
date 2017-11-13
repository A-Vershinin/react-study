/*
Даны 3 селекта. В первом можно выбрать день, во втором месяц, а в третьем год (пусть с 1970 по текущий). Дан абзац.
Сделайте так, чтобы в этот абзац вывелся день недели за выбранную дату. Пусть по умолчанию в селекте отображается текущая дата.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueDays: "", valueMonths: "", valueYear: ""};
	}
	handleSelectChange1 = (event) => {
		this.setState({valueDays: event.target.value});
	};
	handleSelectChange2 = (event) => {
		this.setState({valueMonths: event.target.value});
	};
	handleSelectChange3 = (event) => {
		this.setState({valueYear: event.target.value});
	};

	render() {
		const date = new Date();
		const dateFrom = new Date(1970);

		// получение текущей даты
		const currentDay = date.getDay();
		const currentMonth = date.getMonth();
		const currentYear = date.getFullYear();
		const diffRangeYears = currentYear - dateFrom.getFullYear();

		// заполняем массивы с годами, месяцами и днями
		const arrYears = [];
		for (let i = 0; i < diffRangeYears + 1; i++) {
			let from = dateFrom.getFullYear();
			arrYears.push(from += i);
		}
		const arrMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
			"Август", "Сентябрь", "Октябрь", "Ноябрь", "Дебарь"];
		const arrDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

		//выбор дня в зависимости от даты
		const checkYear = arrYears[this.state.valueYear];
		const checkMonth = this.state.valueMonths;
		const newDate = new Date(checkYear, checkMonth);
		const targetDay = newDate.getDay();

		// опшины для селектов
		const option1 = arrDays.map((elem, index) => {
			return <option key={index} value={index}>{elem}</option>
		});
		const option2 = arrMonth.map((elem, index) => {
			return <option key={index} value={index}>{elem}</option>
		});
		const option3 = arrYears.map((elem, index) => {
			return <option key={index} value={index}>{elem}</option>
		});
		return (
			<div className="container">
				<p>Выбранная дата: {arrMonth[this.state.valueMonths]} {arrYears[this.state.valueYear]}</p>
				<p>День недели: {arrDays[targetDay]}</p>
				<select  onChange={this.handleSelectChange3} defaultValue={diffRangeYears} style={{display: "block", marginBottom: "15px"}}>
					{option3}
				</select>
				<select  onChange={this.handleSelectChange2} defaultValue={currentMonth} style={{display: "block", marginBottom: "15px"}}>
					{option2}
				</select>
				<select  onChange={this.handleSelectChange1} defaultValue={currentDay} style={{display: "block", marginBottom: "15px"}}>
					{option1}
				</select>
			</div>
		);
	}
}
export default App;