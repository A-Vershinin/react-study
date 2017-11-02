
class App extends React.Component {
  constructor() {
    super();
	  this.state = {name: 'Иван', age: 25};
	  this.changeName = this.changeName.bind(this);
  }

	changeName() {
    this.setState({
      name: "Коля",
      age: 30
    });
  }

	render() {
		return (
      <div className="container">
        <h1 className="title">Знакомство с React</h1>


        <div className="body">
          <p>Name: {this.state.name}, age: {this.state.age}</p>
          <button onClick={this.changeName}>Show name</button>
        </div>
      </div>

		)
	}
}


export default App;