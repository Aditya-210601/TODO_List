import { deleteTodo, getAllTodos } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Todo_task from "./Todo_task";
import Tabs from "./Tabs";
import { ALL_TODOS,DONE_TODOS,ACTIVE_TODOS } from "../redux/actions/type";

const Todos = () => {
    
    const dispatch = useDispatch();
    const todo_item = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(()=>{
        dispatch(getAllTodos());
    },[])

    const getTodo = () =>{
        if(currentTab === ALL_TODOS){
            return todo_item
        } else if(currentTab === ACTIVE_TODOS){
            return todo_item.filter(todo => !todo.done)
        } else if(currentTab === DONE_TODOS){
            return todo_item.filter(todo => todo.done)
        }
    }

    const removeDoneTodos = () => {
        todo_item.forEach(({done, _id}) => {
            if(done){
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />
                {
                    todo_item.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ): null
                }
            </div>
            <ul>
                {
                    getTodo().map(todo => (
                        <Todo_task 
                            todo={todo}
                            key={todo._id}/>
                    ))
                }
            </ul>
        </article>
    )
}
export default Todos;