/*
Модифицируйте предыдущую задачу. Пусть теперь у нас дан массив юзеров. Выведите их в виде списка ul. Сделайте так,
 чтобы каждого юзера можно было поредактировать, нажав на него.
 */
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', show: true},
				{name: 'Вася', show: true},
				{name: 'Петя', show: true},
			], value:''
		};
	}
	handleChange(index, event){
		this.state.users[index]['name']=event.target.value;
		this.setState({users: this.state.users});
	}
	handleBlur(index, event){

		this.state.users[index]['show']=!this.state.users[index]['show'];
		this.setState({users: this.state.users});
	}
	handleClick(index){
		this.state.users[index]['show']=!this.state.users[index]['show'];
		this.setState({users: this.state.users});
	}
	render() {

		const list = this.state.users.map((item, index)=>{
			if(item.show){
				var p = <p onClick={this.handleClick.bind(this,index)}>{item.name}
				</p>;
			}
			else{
				var input = <input
					value={item.name}
					onChange={this.handleChange.bind(this, index)}
					onBlur={this.handleBlur.bind(this, index)}
				/>
			}
			return <li key={index}>
				{p}
				{input}
			</li>

		});
		return <div>
			<ul>
				{list}
			</ul>
		</div>
	}
}
export default App;