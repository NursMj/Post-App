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
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'That is so good', important: false, id: 2},
        {label: 'I need a breack...', important: false, id: 3}
      ]
    };
    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);

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

  render() {
    return (
      <div className='app'>
        <ApHeader/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostFilter/>
        </div>
        <PostList 
          posts={this.state.data}
          onDelete={this.deletePost}/>
        <PostAddForm
          onAdd={this.addPost}/>
      </div>
    )
  }
}