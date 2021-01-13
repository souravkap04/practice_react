import React , {Component} from 'react';
import classes from './Practice.module.css';


class Practice extends Component{
   
    render(){
        return(
            <div className={classes.Practice} >
                <p>{this.props.title}</p>
            </div>
            
        )
    }
}

export default Practice;