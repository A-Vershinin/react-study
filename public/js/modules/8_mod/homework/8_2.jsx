/*
Модифицируйте предыдущую задачу так, чтобы под таблицей появился еще и один отдельный компонент, в котором
будет выведена полная стоимость всех продуктов.
*/
class Total extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const producsAll = this.props.products
			.map(elem => elem.price * elem.quantity)
			.reduce((elem, index) => elem + index);

		return (
			<p>Полная стоимость всех продуктов: {producsAll} $</p>
		)
	}
}

class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr key={this.props.index} style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
				<td style={{display: "block", width: "100px"}}>
					<span>{this.props.name}</span>
				</td>
				<td style={{display: "block", width: "150px", textAlign: "center"}}>
					<span>{this.props.price}</span>
				</td>
				<td style={{display: "block", width: "250px", textAlign: "center"}}>
					<span>{this.props.quantity}</span>
				</td>
				<td style={{display: "block", width: "200px", textAlign: "center"}}>
					<span>{this.props.elemPrice}</span>
				</td>
				<td style={{display: "block", width: "100px"}}>
					<button onClick={this.props.deleteItem.bind(null, this.props.index)}>Удалить</button>
				</td>
			</tr>
		)
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{name: 'item1', price: 120, quantity: 14},
				{name: 'item2', price: 240, quantity: 15},
				{name: 'item3', price: 170, quantity: 25},
				{name: 'item4', price: 360, quantity: 17},
				{name: 'item5', price: 320, quantity: 8},
			]
		}
	}

	deleteItem(index) {
		this.state.products.splice(index, 1);;
		this.setState({products: this.state.products});
	}

	render() {

		const producsArr = this.state.products.map((elem, index) => {
			let elemPrice = elem.price * elem.quantity;
			return (
				<Item key={index} name={elem.name} price={elem.price} index={index} quantity={elem.quantity}
				      elemPrice={elemPrice} deleteItem={this.deleteItem.bind(this)}/>
			)
		});

		return (
			<div className="container">
				<p>Таблица</p>
				<table>
					<tbody>
					<tr style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
						<th style={{display: "block", width: "100px"}}>Имя</th>
						<th style={{display: "block", width: "150px"}}>Цена</th>
						<th style={{display: "block", width: "250px"}}>Колличество</th>
						<th style={{display: "block", width: "200px"}}>Полная стоимость</th>
						<th style={{display: "block", width: "100px"}}></th>
					</tr>
					{producsArr}
					</tbody>
				</table>
				<Total products={this.state.products}/>
			</div>
		);
	}
}
export default App;