/*
Дан массив. Выведите элементы этого массив в виде списка ul. Сделайте так, чтобы по нажатию на li внутри нее появился
инпут, с помощью которого можно будет поредактировать текст этой li. По потери фокуса текст из инпута должен
записаться обратно в li, а инпут исчезнуть.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: [], valueTextarea: ""}
	};
	handleTextareaChange = (event) => {
		this.setState({valueTextarea: event.target.value});
	};

	handleInputChange(index, event) {
		this.state.items[index]['text'] = event.target.value;
		this.setState({items: this.state.items});
	}

	handleInputBlur(index, event) {
		event.target.style.display = "none";
		this.state.items[index]['status'] = !this.state.items[index]['status'];
		this.setState({items: this.state.items});
	}
	deleteItemHandle(index) {
		this.state.items.splice(index, 1);
		this.setState({items: this.state.items});
	};

	editItemHandle(index) {
		this.state.items[index].status = !this.state.items[index].status;
		this.setState({items: this.state.items})
	};

	addHandle = (event) => {
		event.preventDefault();
		const value = this.state.valueTextarea;
		const date = new Date;

		if (parseInt(value.length) === 0) {
			this.setState({valueTextarea: ""});
			return false;
		}
		const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		this.state.items.push({
			text: value,
			dates: time,
			status: false
		});
		this.setState({items: this.state.items, valueTextarea: "",});
	};

	render() {
		const element = this.state.items.map((item, index) => {
			if (item.status) {
				var input = <input value={item.text} onChange={this.handleInputChange.bind(this, index)}
				                   onBlur={this.handleInputBlur.bind(this, index)}/>
			}

			return <div key={index} style={{borderBottom: "1px solid black", marginBottom: "10px"}}>
				<div style={{display: "flex", justifyContent: "space-between", width: "500px"}}>
					<div>Заметка {index + 1}</div>
					<div>{item.dates}</div>
				</div>

				<span style={{marginRight: "20px"}}>{item.text}</span>
				<div>
					<button style={{marginRight: "20px"}} onClick={this.deleteItemHandle.bind(this, index)}>Удалить</button>
					<button style={{marginRight: "20px"}} onClick={this.editItemHandle.bind(this, index)}>Редактировать</button>
					{input}
				</div>
			</div>;
		});

		return (
			<div className="container">
				<p>Введите описание заметки</p>
				<form action="#" onSubmit={this.addHandle} style={{marginBottom: "20px"}}>
					<textarea value={this.state.valueTextarea} onChange={this.handleTextareaChange} />
					<button type="submit" style={{display: "block"}}>Добавить</button>
				</form>
				<div style={{marginBottom: "20px", borderBottom: "2px solid black"}}>Ваши заметки: </div>
				{element}
			</div>
		);
	}
}
export default App;