/*
 Даны два селекта. С помощью первого селекта можно выбрать язык пользователя (русский или английский). Если в
 первом селекте выбран русский язык, то во втором селекте должен появится список дней недели по-русски. А если
 в первом селекте выбран английский - то и во втором дни недели будут по-английски.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			valueSelect: "", daysEnglish: ["Mn", "Tues", "Wed", "Thur", "Fr", "Sat", "Sun"],
			daysRussian: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
			langs: ['English', 'Русский'], 	newDays:[]
		};
	}

	handleSelectChange = (event) => {
		console.log(event.target.value);
		this.setState({valueSelect: event.target.value});

		if (parseInt(event.target.value) === 1) {
			this.state.newDays = this.state.daysRussian.map((item, index) => {
				return <option key={index} value={index}>{item}</option>;
			});
		}
		else{
			this.state.newDays = this.state.daysEnglish.map((item, index) => {
				return <option key={index} value={index}>{item}</option>;
			});
		}
		this.setState({newDays: this.state.newDays});
	};

	render() {

		const options = this.state.langs.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (
			<div className="container">
				<select value={this.state.valueSelect} onChange={this.handleSelectChange}
				        style={{display: "inline-block", marginRight: "40px"}}>
					{options}
				</select>
				<p>Ваш выбор языка: {this.state.langs[this.state.valueSelect]}</p>
				<select>
					{this.state.newDays}
				</select>
			</div>
		);
	}
}
export default App;