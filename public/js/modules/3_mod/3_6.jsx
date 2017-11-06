/*
 Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя'].
 Выведите каждый элемент этого массива в отдельной <li> в списке ul. Вот так:
 <ul>
	<li>Коля</li>
	<li>Вася</li>
	<li>Петя</li>
</ul>
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {elems: ['Коля', 'Вася', 'Петя']};
	}


	render() {
		const list = this.state.elems.map((elem, index) => {
			return <li key={index}>{elem}</li>
		});
		return (
			<div className="container">
				<ul>{list}</ul>

			</div>
		);
	}
}


export default App;