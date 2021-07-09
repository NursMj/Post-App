import {StarIcon, TrashIcon, HeartIcon} from '@primer/octicons-react'
import './post-list-item.css'

const PostListItem = () => {
    return (
        <li className='add-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
                Hello Nurs
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type='button' 
                    className='btn-star btn-sm'>
                    <StarIcon />
                </button>
                <button 
                    type='button' 
                    className='btn-trash btn-sm'>
                    <TrashIcon />
                </button>
                <HeartIcon />
            </div>
        </li>
    )
}

export default PostListItem