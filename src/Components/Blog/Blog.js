import React , {Component} from 'react';
import Practice from '../Practice/Practice';
import classes from './Blog.module.css';
import axios from 'axios';

class Blog extends Component{
    state={
        blogs:[],
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response=>{
             const blogs = response.data.slice(0,4);
             const updatedBlog = blogs.map(blog=>{
                return{
                    ...blog,
                }
             })
             this.setState({blogs:updatedBlog});
             
         })
    }
    render(){
        const blog = this.state.blogs.map(post=>{
            return <Practice 
                      title={post.title}/>
        })
        return(<div className={classes.Blog}>
            {blog}
        </div>)
    }
}
export default Blog;