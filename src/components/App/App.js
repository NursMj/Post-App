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
      ]
    };
    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);

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

  render() {
    const liked = this.state.data.filter(item => item.like).length;
    const allPosts = this.state.data.length;

    return (
      <div className='app'>
        <ApHeader liked={liked} allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostFilter/>
        </div>
        <PostList 
          posts={this.state.data}
          onDelete={this.deletePost}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
        <PostAddForm
          onAdd={this.addPost}/>
      </div>
    )
  }
}