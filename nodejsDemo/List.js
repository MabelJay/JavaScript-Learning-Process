import React,{Component} from 'react';
import ListItem from './ListItem';

class List extends Component{
    render(){
        return <ul>
            {this.props.arr.map((num,index)=><ListItem key={index} num={num}></ListItem>)}
        </ul>;
    }
}

export default List;