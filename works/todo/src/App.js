import React, { Component } from 'react';

function List(props){
  return (
    <ul>
      {this.state.todo.map((todo, i) => {
      return (
        <li>
          <input type="button" value="×" onClick={this.deleteTodo(i)} />
          {todo.title}<br />
          {todo.contents}
        </li>
      )
    })}
    </ul>    
  )
}
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        {title: 'javascript', contents: 'ES2016覚える'},
        {title: 'VueJS', contents: 'データバインド覚える'},
        {title: 'React', contents: 'JSX覚える'},
        {title: 'Angular', contents: '？？'}
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    // 追加
    this.state.todo.push({
      title: this.refs.newText.value,
      contents: this.refs.newTextArea.value
    });
    // 保存
    this.setState({
      todo: this.state.todo
    });
    // 初期化
    this.refs.newText.value='';
    this.refs.newTextArea.value='';
  }
  
  // 削除機能
  deleteTodo(i){
    // 削除
    this.state.todo.splice(i, 1)
    // 保存
    this.setState({
      todo: this.state.todo
    });
  }
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <list todo={this.state.todo} />
        <input type="text" ref="newText" />
        <input type="textarea" ref="newTextArea" />
        <input type="button" value="追加" onClick={this.addTodo} />
      </div>
    );
  }
}
 
export default App;