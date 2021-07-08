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
                    <i className='far fa-star'></i>
                </button>
                <button 
                    type='button' 
                    className='btn-trash btn-sm'>
                    <i className='far fa-trash'></i>
                </button>
                <i class="fas fa-camera"></i>
            </div>
        </li>
    )
}

export default PostListItem