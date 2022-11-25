import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogListData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      imageUrl: eachData.image_url,
      title: eachData.title,
      topic: eachData.topic,
    }))
    this.setState({blogListData: updatedData, isLoading: false})
  }

  render() {
    const {blogListData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogListData.map(eachBlog => (
            <BlogItem key={eachBlog.id} eachBlogItem={eachBlog} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
