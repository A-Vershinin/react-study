/*
Дан массив. Выведите каждый элемент этого массива в отдельном абзаце. Сделайте так, чтобы над каждым абзацем был
чекбокс, со следующим поведением: если он отмечен - абзац под ним есть на экране, а если не отмечен - абзаца нет.
По умолчанию пусть все чекбоксы отмечены.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			texts: [
				{text: "item1", valueСhecked: true},
				{text: "item2", valueСhecked: true},
				{text: "item3", valueСhecked: true}
			]
		}};

	handleCheckboxChange(index) {
		this.state.texts[index]['valueСhecked'] = !this.state.texts[index]['valueСhecked'];
		this.setState({texts: this.state.texts});
	}

	render() {

		const div = this.state.texts.map((item, index) => {
			return <p key={index}>
				<input type="checkbox" checked={item.valueСhecked} onChange={this.handleCheckboxChange.bind(this, index)}/>
				<p className={item.valueСhecked ? "show" : "hidden"}>{item.text}</p>
			</p>;
		});

		return (
			<div className="container">
				<p>Список</p>
				{div}
			</div>
		);
	}
}
export default App;