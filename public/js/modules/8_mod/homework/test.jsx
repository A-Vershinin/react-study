/*
Модифицируйте предыдущую задачу. Пусть теперь у нас дан массив юзеров. Выведите их в виде списка ul. Сделайте так,
 чтобы каждого юзера можно было поредактировать, нажав на него.
 */
class Product extends React.Component {
	constructor(){
		super();
	}
	render() {
		return <div>
			<tr>
				<td>название: {this.props.name}</td>
				<td>колличество: {this.props.count}</td>
				<td>цена: {this.props.price}</td>
				<td>сумма:{this.props.count*this.props.price}</td>
				<td><button onClick={this.props.deleteProduct.bind(null, this.props.index)}>
					удалить
				</button> </td>
			</tr>

		</div>;
	}
}
class Addition extends React.Component{
	constructor(){
		super();
	}
	render() {
		return <div>
			<form onSubmit={this.props.createProduct.bind(null)}>
				<input value={this.props.valueName} onChange={this.props.AddProduct.bind(null)} />
				<input value={this.props.valueCount} onChange={this.props.AddCount.bind(null)} />
				<input value={this.props.valuePrice} onChange={this.props.AddPrice.bind(null)} />
				<input type="submit" value="Добавить продукт" />
			</form>
		</div>
	}
}
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			products:[{name: 'вода', count: 10, price:10, check: true},
				{name: 'сок', count: 20, price:20, check: true},
				{name: 'чай', count: 5, price:5, check: true},],
			valueName:'', valueCount:'', valuePrice:'', valuecheck:true,
		}
	}
	deleteProduct(index){
		this.state.products.splice(index, 1);
		this.setState({products: this.state.products})
	}
	handleNameChange( event){
		this.state.valueName=event.target.value;
		this.setState({products: this.state.products});
	}
	handleCountChange( event){
		this.state.valueCount=event.target.value;
		this.setState({products: this.state.products});
	}
	handlePriceChange( event){
		this.state.valuePrice=event.target.value;
		this.setState({products: this.state.products});
	}
	handleSubmit(event){
		event.preventDefault();
		this.state.products.push({
			name:this.state.valueName,
			count: this.state.valueCount,
			price: this.state.valuePrice
		});
		this.setState({products: this.state.products});
		this.setState({valueName:'', valueCount:'', valuePrice:''});
	}
	render() {
		const product=this.state.products.map((product, index)=>{
			return <Product key={index} name={product.name} count={product.count} price={product.price} index={index}
			                deleteProduct={this.deleteProduct.bind(this)}
			/>;
		});
		return <div>
			<table>
				{product}
			</table>

			<Addition value={this.state.value}
			          AddProduct={this.handleNameChange.bind(this)}
			          AddPrice={this.handlePriceChange.bind(this)}
			          AddCount={this.handleCountChange.bind(this)}
			          createProduct={this.handleSubmit.bind(this)}
			/>
		</div>;
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('content')
);
export default App;