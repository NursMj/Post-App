import ApHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import PostFilter from '../PostFilter/PostFilter';
import PostList from '../PostList/PostList';
import PostAddForm from '../PostAddForm/PostAddForm';
import './app.css';

const App = () => {

  const data = [
    {label: 'Going to learn React', important: true, id: 1},
    {label: 'That is so good', important: false, id: 2},
    {label: 'I need a breack...', important: false, id: 3}
  ];

  return (
    <div className='app'>
      <ApHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;