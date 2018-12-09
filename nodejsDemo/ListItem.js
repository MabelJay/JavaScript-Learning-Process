import React,{Component} from 'react';

class ListItem extends Component{
    render(){
        return <li>{this.props.num}</li>;
    }
}

export default ListItem;