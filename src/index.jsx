require('./style/main.scss');
import React from 'react';
import { render, findDOMNode } from 'react-dom';

var TodoList = React.createClass({
    changeTab : function(e){
        var type = e.target.getAttribute('type');
        this.setState({type:type})
    },
    getInitialState: function() {
        return {type:'all'};
    },
    render: function() {
        var style = {};
        if(this.props.items.length === 0){
            style = {display:'none'};
        }

        return <div className="itemList">
            <div className="clearfix">
                {this.props.items.length} items
                <nav style={style}>
                    <a className={this.state.type === 'all'?'navTab active':'navTab'} type='all' onClick={this.changeTab}>ALL</a>
                    <a className={this.state.type === 'active'?'navTab active':'navTab'} type='active' onClick={this.changeTab}>ACTIVE</a>
                    <a className={this.state.type === 'done'?'navTab active':'navTab'} type='done' onClick={this.changeTab}>COMPLETE</a>
                </nav>
            </div>
            <ul>
                {this.props.items.map((item, index)=>{
                        if(this.state.type === 'all'||this.state.type === item.status){
                            return <li key={index} id={index} className={item.status}>
                            <input type="checkbox" className="toggle" onChange={this.props.changeStatus} checked={item.status === 'done'}/>
                            <lable>{item.text}</lable>
                            <button className="remove" onClick={this.props.removeItem}></button>
                        </li>;
                        }
                    })
                }
            </ul>
        </div>;
    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        var itemsFromStorage = localStorage.getItem('TODOs')?window.JSON.parse(localStorage.getItem('TODOs')):[];
        return {items: itemsFromStorage, text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, status:'active'}]);
        var nextText = '';
        var itemJson = JSON.stringify(nextItems);
        localStorage.setItem('TODOs',itemJson);
        this.setState({items: nextItems, text: nextText});
    },
    changeStatus: function(e) {
        var key = e.target.parentNode.getAttribute('id');
        var items = this.state.items;
        var status = this.state.items[key]['status'];
        if (status === 'done'){
            items[key]['status'] = 'active';
        }else{
            items[key]['status'] = 'done';
        }
        this.changeStates(items);
    },
    changeStates: function(items) {
        this.setState({items: items});
        localStorage.setItem('TODOs',JSON.stringify(items));
    },
    removeItem: function(e) {
        var key = e.target.parentNode.getAttribute('id');
        var items = this.state.items;
        items.splice(key, 1);
        this.changeStates(items);
    },
    render: function() {
        return (
            <div className="pure-u-11-12">
                <header>
                    <h3>TODOs</h3>
                </header>
                <form onSubmit={this.handleSubmit} className='submitForm'>
                    <input type='text' className='submitInput pure-u-3-4 pure-u-md-5-6 pure-u-lg-7-8' onChange={this.onChange} value={this.state.text} placeholder="What needs to be done?"/>
                    <button className='submitBtn pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8' disabled={this.state.text===''}>{'Add'}</button>
                </form>
                <TodoList items={this.state.items} changeStatus={this.changeStatus} removeItem={this.removeItem}/>
            </div>
        );
    }
});

render(<TodoApp />, document.getElementsByTagName('div')[0]);