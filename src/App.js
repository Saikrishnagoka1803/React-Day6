import scifi from './Data/fantasy.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './Components/BookList'
import FetchComments from './Components/FetchComments';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BookList books={scifi} />
       
      </header>
    </div>
  );
}

export default App;
