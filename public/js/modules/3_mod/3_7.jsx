/*
Переделайте предыдущую задачу так, чтобы в каждой li кроме элемента массива еще и стоял его порядковый
номер в массиве. Вот так:
<ul>
	<li>Коля - 1</li>
	<li>Вася - 2</li>
	<li>Петя - 3</li>
</ul>
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {elems: ['Коля', 'Вася', 'Петя']};
	}


	render() {
		const list = this.state.elems.map((elem, index) => {
			return <li key={index}>{elem} - {index+1}</li>
		});
		return (
			<div className="container">
				<ul>{list}</ul>
			</div>
		);
	}
}


export default App;