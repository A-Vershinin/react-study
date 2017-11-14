/*
Дан массив. Выведите элементы этого массив в виде списка ul. Сделайте так, чтобы по нажатию на li внутри нее появился
инпут, с помощью которого можно будет поредактировать текст этой li. По потери фокуса текст из инпута должен
записаться обратно в li, а инпут исчезнуть.
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
		this.state.texts[index]["valueСhecked"] = !this.state.texts[index]['valueСhecked'];
		this.setState({texts: this.state.texts});
	}
	handleInputChange(index, event) {
		this.state.texts[index]['text'] = event.target.value;
		this.setState({texts: this.state.texts});
	}
	handleInputBlur(index, event) {
		event.target.style.display = "none";
		this.state.texts[index]['valueСhecked'] = !this.state.texts[index]['valueСhecked'];
		this.setState({texts: this.state.texts});
	}

	render() {

		const list = this.state.texts.map((item, index) => {
			if (item.valueСhecked) {
				var input = <input type="text" value={item.text}
				                   onChange={this.handleInputChange.bind(this, index)} onBlur={this.handleInputBlur.bind(this, index)}
				/>
			}

			return <li key={index}>
				<span>{item.text}</span>
				<input type="checkbox" checked={item.valueСhecked} onChange={this.handleCheckboxChange.bind(this, index)}/>
				{input}
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