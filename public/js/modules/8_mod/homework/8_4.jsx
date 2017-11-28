/*
Модифицируйте предыдущую задачу так, чтобы появился еще и один отдельный компонент для добавления
нового продукта в таблицу.
*/
// не доделал обнуление полей после сабмита в форме
// спросить за названия методов при передаче в дочерний комп.
class Total extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const producsAll = this.props.products.map(elem => {
			if (elem.checked) {
				return elem.price * elem.quantity;
			} else {
				return 0;
			}
		}).reduce((elem, index) => elem + index);

		return (
			<p>Полная стоимость всех продуктов: {producsAll} $</p>
		)
	}
}

class AddItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form onSubmit={this.props.createItem.bind(null)}
			      style={{marginBottom: "30px", outline: "1px solid black", padding: "20px"}}>
				<div>Форма добавления нового товара в таблицу</div>
				<div>
					<span style={{marginRight: "20px"}}>Имя</span>
					<input type="text"  value={this.props.valueName} onChange={this.props.addInputName.bind(null)}/>
				</div>
				<div>
					<span style={{marginRight: "20px"}}>Цена</span>
					<input type="text" value={this.props.valuePrice}
					       onChange={this.props.addInputPrice.bind(null)}/>
				</div>
				<div>
					<span style={{marginRight: "20px"}}>Колличество</span>
					<input type="text" value={this.props.valueQuantity}
					       onChange={this.props.addInputQuantity.bind(null)}/>
				</div>
				<button type="submit">Добавить</button>
			</form>
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
				<td style={{display: "block", width: "100px", textAlign: "center"}}>
					<input type="checkbox" checked={this.props.checked}
					       onChange={this.props.handleCheckboxChange.bind(null, this.props.index)}/>
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
				{name: 'item1', price: 120, quantity: 14, checked: true},
				{name: 'item2', price: 240, quantity: 15, checked: true},
				{name: 'item3', price: 170, quantity: 25, checked: true},
				{name: 'item4', price: 360, quantity: 17, checked: true},
				{name: 'item5', price: 320, quantity: 8, checked: true},
			],
			forms: {valueName: "", valuePrice: "", valueQuantity: ""},
		}
	}

  deleteItem(index) {
    let products = [...this.state.products];
    products.splice(index, 1);
    this.setState({products: products});
  }
	handleCheckboxChange(index) {
		this.state.products[index]['checked'] = !this.state.products[index]['checked'];
		this.setState({products: this.state.products});
	}
	handleInputNameChange(event) {
		this.state.forms.valueName = event.target.value;
		this.setState({products: this.state.products});
	};
	handleInputPriceChange(event) {
		this.state.forms.valuePrice = event.target.value;
		this.setState({products: this.state.products});
	};
	handleInputQuantityChange(event) {
		this.state.forms.valueQuantity = event.target.value;
		this.setState({products: this.state.products});
	};

	addItemInTable(event) {
		event.preventDefault();
		console.log(event.target);
		let products = [...this.state.products];
		let name = this.state.forms.valueName;
		let price = this.state.forms.valuePrice;
		let quantity = this.state.forms.valueQuantity;

		products.push({
			name: name,
			price: price,
			quantity: quantity,
			checked: true
		});

		this.setState({products: products});
    this.setState({
      forms: {
        valueName: "",
        valuePrice: "",
        valueQuantity: ""
      }
    });
	};

	render() {

		const producsArr = this.state.products.map((elem, index) => {
			let elemPrice = elem.price * elem.quantity;
			return (
				<Item key={index} name={elem.name} price={elem.price} index={index} quantity={elem.quantity} checked={elem.checked}
				      elemPrice={elemPrice} deleteItem={this.deleteItem.bind(this)} handleCheckboxChange={this.handleCheckboxChange.bind(this, index)}
				/>
			)
		});

		return (
			<div className="container">
				<p>Таблица</p>
				<AddItem createItem={this.addItemInTable.bind(this)}
				         addInputName={this.handleInputNameChange.bind(this)}
				         addInputPrice={this.handleInputPriceChange.bind(this)}
				         addInputQuantity={this.handleInputQuantityChange.bind(this)}
				/>
				<table>
					<tbody>
					<tr style={{outline: "1px solid black", display: "flex", justifyContent: "space-between"}}>
						<th style={{display: "block", width: "100px"}}>Имя</th>
						<th style={{display: "block", width: "150px"}}>Цена</th>
						<th style={{display: "block", width: "250px"}}>Колличество</th>
						<th style={{display: "block", width: "200px"}}>Полная стоимость</th>
						<th style={{display: "block", width: "100px"}}>Статус</th>
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
