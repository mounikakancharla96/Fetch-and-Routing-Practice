import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getEachItemDetails()
  }

  getEachItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      content: data.content,
      author: data.author,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, avatarUrl, imageUrl, content, author} = blogData

    return (
      <div className="main-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info-container">
            <h1 className="blog-title-heading">{title}</h1>
            <div className="author-details-container">
              <img src={avatarUrl} alt={author} className="author-pic" />
              <p className="author-details-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-image" />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
