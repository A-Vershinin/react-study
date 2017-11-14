/*
Дан массив с туристическими маршрутами. Выведите эти маршруты на экран так, чтобы рядом с каждым стояла
радио-кнопочка. Пользователь может выбрать один из маршрутов. Его выбор должен отобразиться на экране в абзаце.
 */
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ["London", "Moscow", "Kiev"], valueOption: ""}
	};

	handleRadioChange = (event) => {
		this.setState({valueOption: event.target.value})
	};

	render() {
		const elem = this.state.items.map((item, index) => {
			return <div key={index}>
				<span>{item}</span>
				<input type="radio" value={item} checked={this.state.valueOption == item}
				       onChange={this.handleRadioChange}/>
			</div>
		});

		return (
			<div className="container">
				<p>Выбирите маршрут</p>
				<form action="#">
					{elem}
				</form>
				<p>Вы выбрали: {this.state.valueOption}</p>
			</div>
		);
	}
}
export default App;