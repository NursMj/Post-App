import ApHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';

const App = () => {
  return (
    <div className='app'>
      <ApHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
      </div>
    </div>
  )
}

export default App;