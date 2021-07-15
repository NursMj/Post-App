import { Component } from 'react';
import ApHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import PostFilter from '../PostFilter/PostFilter';
import PostList from '../PostList/PostList';
import PostAddForm from '../PostAddForm/PostAddForm';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {label: 'Going to learn React', important: true, like: false, id: 1},
        {label: 'That is so good', important: false, like: false, id: 2},
        {label: 'I need a breack...', important: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    };
    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4
  }

  deletePost(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  addPost(text) {
    const newPost = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newPost]

      return {
        data: newArr
      }
    })
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, important: !old.important}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, like: !old.like}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  }

  onUpdateSearch(term) {
    this.setState({term});
  }

  filterPosts(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <div className='app'>
        <ApHeader liked={liked} allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        {visiblePosts.length ? <PostList 
          posts={visiblePosts}
          onDelete={this.deletePost}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/> :  <p>No posts!</p>}
        <PostAddForm
          onAdd={this.addPost}/>
      </div>
    )
  }
}