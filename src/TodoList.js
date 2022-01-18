import React,{useState, useEffect} from 'react'
import todosData from './todoData'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todo,setTodo] = useState({
        title:'',
        description:'',
        completed:'',
        tag:''
    })
    const [watch,setWatch]=useState(false);
    // let localData = JSON.parse(localStorage.getItem('idris'));

    const loadStorage=()=>{
        localStorage.getItem('idris') ? setTodos(JSON.parse(localStorage.getItem('idris'))): setTodos(todosData);
       
    // let localData = localStorage.getItem('idris');
    //   localData ? (
    //     setTodos(JSON.parse(localData))
    //   )
    //   :
    //   setTodos(todosData)
    //   localStorage.setItem('idris', todosData)
      
        
    }

    const handleChange=(e)=>{
        setTodo({...todo, [e.target.id] : e.target.value});
        
    }

    const showForm =()=>{
        setWatch(true);
    }
    const handleClose =()=>{
        setWatch(false);
    }

    const handleSave=()=>{
        let content = [...todos, todo];
        setTodos(content);
        localStorage.setItem('idris',JSON.stringify(content));
        setWatch(false);
        // alert(todo.title);
    }
    
    useEffect(()=>{
        loadStorage()
    },[])
    return (
        <div>
            <button onClick={showForm}>Add Todo</button>
            <ul>
                {
                    todos.length==0 
                    ? 
                    (
                    <>
                    <p>Hello, your todo list is empty</p>
                    <button onClick={showForm}>Click to add Todo</button>
                    </>
                    )
                    :
                    todos.map((todo)=>(
                        
                        <li>{todo.title}{todo.description}</li>
                        
                        
                        
                    ))
                    
                }
                {/* <li>{Object.keys(localData)}</li> */}
            </ul>
            {
                watch ?
            <div>
                <input type="text" id="title" onChange={handleChange}/>
                <input type="text" id="description" onChange={handleChange}/>
                <button onClick={handleSave}>Save Todo</button>
                <button onClick={handleClose}>Close</button>
            </div>
            : ''
            }
        </div>
    )
}

export default TodoList
