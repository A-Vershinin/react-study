/*
Дан массив с числами. Сделайте так, чтобы каждый элемент этого массива записался в свой инпут. С помощью
каждого инпута можно поредактировать тот элемент массива, который в нем записан. Сделайте так, чтобы под всеми
инпутами выводилась сумма элементов этого массива
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {numbers: [20, 40, 50]}};

	handleInputChange(index, event) {
		this.state.numbers[index]  =event.target.value;
		this.setState({numbers: this.state.numbers});
	}

	getSum = (arr) => {
		// let suma = 0;
		// let suma = arr.forEach(elem => {
		// 	elem === "" ? elem = 0 : false;
		// 	return suma += parseFloat(elem);
		// });
		// return suma;

		// более красивее решение
		const result = arr.reduce(function(suma, elem) {
			elem === "" ? elem = 0 : false;
			return suma + parseInt(elem);
		}, 0);
		return result;
	};


	render() {

		const list = this.state.numbers.map((elem, index) => {
			return 	<input type="text" key={index} value={this.state.numbers[index]} style={{display: "block", marginBottom: "20px"}}
			               onChange={this.handleInputChange.bind(this, index)} />
		});

		let result = 0;
		this.state.numbers.forEach(elem => result += elem);


		return (
			<div className="container">
				<p>Список инпутов</p>
				{list}
				<p>Сумма инпутов: {this.getSum(this.state.numbers)}</p>
			</div>
		);
	}
}
export default App;