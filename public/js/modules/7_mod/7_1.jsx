/*
Дан массив. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы внутри каждой li
был чекбокс, по нажатию на который содержимое li будет перечеркиваться.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			texts: [
				{text: "item1", valueСhecked: false},
				{text: "item2", valueСhecked: false},
				{text: "item3", valueСhecked: false}
			]
		}};

	handleCheckboxChange(index) {
		this.state.texts[index]['valueСhecked'] = !this.state.texts[index]['valueСhecked'];
		this.setState({texts: this.state.texts});
	}

	render() {

		const list = this.state.texts.map((item, index) => {
			return <li key={index}>
				<span className={item.valueСhecked ? "cross" : "no-cross"}>{item.text}</span>
				<input type="checkbox" checked={item.valueСhecked} onChange={this.handleCheckboxChange.bind(this, index)}/>
			</li>;
		});

		return (
			<div className="container">
				<p>Список</p>
				<ul>{list}</ul>
			</div>
		);
	}
}
export default App;