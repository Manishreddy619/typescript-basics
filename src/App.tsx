import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Searchsong from './components/Searchsong';

// interface song {
// 	songs: { data: song[] };
// }
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Searchsong />
			</header>
		</div>
	);
}

export default App;
