import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlogItem
  return (
    <Link to={`/blogs/${id}`} className="blog-item-container">
      <div className="container">
        <img src={imageUrl} alt="" className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt="" className="avatar-image" />
            <p className="avatar-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
