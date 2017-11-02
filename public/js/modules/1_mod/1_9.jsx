class App extends React.Component {
	render() {

		const arr = ['a', 'b', 'c', 'd', 'e'];
		const list = arr.map(function(elem, index) {
			return <li key={index}>{elem}</li>
		});

		return (
			<div>
				<ul>{list}</ul>
			</div>
		)
	}
}
export default App;