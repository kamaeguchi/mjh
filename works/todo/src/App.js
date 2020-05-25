import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField'
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      memo: '',
      todo: [
        {title: '買出し', memo: '牛乳を買う'},
        {title: '家賃振込み', memo: '○○銀行'}
      ]
    };
    this.inputChange = this.inputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  // 値を保持
  inputChange(e) {
    let name = e.target.name; // フォームのname属性を取得 
    this.setState({
      [name]: e.target.value
    })
  }

  // 新規追加
  addTodo() {
    // 追加
    this.state.todo.push({
      title: this.state.title,
      memo: this.state.memo
    });
    // 保存
    this.setState({
      todo : this.state.todo,
      title : '', // 初期化
      memo : ''   // 初期化
    });
  }
 
  // 削除機能
  deleteTodo(i) {
    // 削除
    this.state.todo.splice(i, 1);
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
 
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography color="inherit">
            TODOアプリ
            </Typography>
          </Toolbar>
        </AppBar>

        <TextField
          name="title"
          placeholder="タイトル"
          onChange={this.inputChange}
          value={this.state.title}
        />
        <TextField
          name="memo"
          placeholder="メモ"
          onChange={this.inputChange}
          value={this.state.memo}
        />
        <Button color="primary" size="large" variant="outlined" aria-label="add" onClick={this.addTodo}>
          <AddIcon />
        </Button>

        <ul>
          {this.state.todo.map( (todo, i) => {
            return <li key={i}>
                    {todo.title} - {todo.memo} 
                    <Button aria-label="delete" onClick={() => this.deleteTodo(i)}>
                      <DeleteIcon />
                    </Button>
                  </li>
          })}
        </ul>
        {this.state.title} {this.state.memo}
      </div>
    );
  }
}
export default App;