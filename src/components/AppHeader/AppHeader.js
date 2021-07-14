import './app-header.css'

const ApHeader = ({liked, allPosts}) => {
  return (
    <div className='app-header d-flex'>
      <h1>Mambetjanov Nursultan</h1>
      <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </div>
  )
}

export default ApHeader