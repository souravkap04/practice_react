import React , {Component} from 'react';
import Practice from '../Practice/Practice';
import classes from './Blog.module.css';


class Blog extends Component{
    render(){
        return(<div className={classes.Blog}>
            <Practice/>
            <Practice/>
        </div>)
    }
}
export default Blog;