import {Component} from 'react';
import {StarFillIcon, TrashIcon, HeartFillIcon} from '@primer/octicons-react'
import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span 
                className='app-list-item-label'
                onClick={onToggleLiked}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        type='button' 
                        className='btn-star btn-sm'
                        onClick={onToggleImportant}>
                        <StarFillIcon />
                    </button>
                    <button 
                        type='button' 
                        className='btn-trash btn-sm'
                        onClick={onDelete}>
                        <TrashIcon />
                    </button>
                    <span className='fa-heart'>
                        <HeartFillIcon />
                    </span>
                </div>
            </div>
        )
    }
}
