/*
Дан селект с двумя значениями: 'отмечено' и 'не отмечено'. Дан также чекбокс. Сделайте так,
чтобы при изменении значения селекта, чекбокс менял свое состояние с 'отмечено' на 'не отмечено' и наоброт.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueSelect: "", valueСhecked: false, texts: ["Отмечено", "Не отмечено"]};
	}

	handleSelectChange = (event) => {
		this.setState({valueSelect: event.target.value});
	};
	handleCheckboxChange = () => {
		this.setState({valueСhecked: !this.state.valueСhecked});
	};

	render() {
		const options = this.state.texts.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});
		const isChecked = parseInt(this.state.valueSelect) ? this.state.valueСhecked : !this.state.valueСhecked;

		return (
			<div className="container">
				<p>Выбирите пункт из списка</p>
				<select value={this.state.valueSelect} onChange={this.handleSelectChange} style={{display: "block", marginBottom: "20px"}}>
					{options}
				</select>
				<input type="checkbox" checked={isChecked} onChange={this.handleCheckboxChange}
				       style={{display: "block", marginBottom: "20px"}}/>
			</div>
		);
	}
}
export default App;