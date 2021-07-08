import ApHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import PostFilter from '../PostFilter/PostFilter';
import PostList from '../PostList/PostList';
import PostAddForm from '../PostAddForm/PostAddForm';

const App = () => {
  return (
    <div className='app'>
      <ApHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostFilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  )
}

export default App;