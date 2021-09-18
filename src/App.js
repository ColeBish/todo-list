import { useState } from 'react';
import './App.css';

const App = () => {

  const [ListItem, setListItem] = useState("");
  const [ListArr, setListArr] = useState([]);

  // value={this.state.fields.name || ''}


  const handleSubmitTodo = (e) => {
    e.preventDefault();
    const newListItem = {
      ListItem: ListItem,
      checked: false,
    }
    setListArr([newListItem, ...ListArr]);
    setListItem("");
  }

  const handleDeleteTodo = (ListItemObjIndex) => {
    const filteredArr = ListArr.filter(
      (element, filterIndex) => filterIndex !== ListItemObjIndex
    );
    setListArr(filteredArr);
  }

  const handleCheckBox = (idx) => {
    const updatedTodos = ListArr.map((e, index) => {
      if (idx === index) {
        e.checked = !e.checked;




      }

      return ListArr;
    }

      // let updatedTodos = ListArr;
      // for (let i = 0; i < ListArr.length; i++) {
      //   if (idx === i) {
      //     ListArr[i].checked = !ListArr[i].checked;
      //   }

    )
    setListArr([...ListArr]);

  }

  return (
    <div className="App">
      <form onSubmit={(event) => handleSubmitTodo(event)}>
        <p>
          <input
            type="text"
            placeholder="Something to do?"
            onChange={(e) => setListItem(e.target.value)}
            value={ListItem}>
          </input>
        </p>
        <button type="submit">Add</button>
      </form>

      {ListArr.map((ListItem, index) => (
        <div key={index}>
          <span>{ListItem.checked ? <p style={{ textDecoration: "line-through" }}>{ListItem.ListItem}</p> : <p>{ListItem.ListItem}</p>}</span>
          <input type="checkbox" checked={ListItem.checked} onChange={(event) => { handleCheckBox(index) }} ></input>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => handleDeleteTodo(index)}
          >Delete</button>

          <hr />
        </div >
      ))
      }
    </div >
  );
}

export default App;
