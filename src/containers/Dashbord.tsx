import React, { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../context/todoContext";
import CardView from "../components/common/card";
import { Todo } from "../types/type";
import { Container, Row } from "react-bootstrap";
import { ListManager } from "react-beautiful-dnd-grid";

const Dashboard: React.FC = () => {
    const { state, getUsers } = useAppContext();
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    // const [filteredTodos,setFilteredTodos]=useState<Todo[]>([]);
    useEffect(() => {
        getUsers();
    }, []);
    useEffect(() => {
        setTodos(state.todos);

    }, [state])



    // const filterTodo=useCallback(()=>{

    // })
    const filteredTodos = todos.filter((todo) => todo.todo.toLowerCase().includes(searchText.toLowerCase()))

    if (state.isLoading) return <p>Loading...</p>;
    if (state.errorMsg) return <p>Error: {state.errorMsg}</p>;
    return (
        <div style={{ backgroundColor: '#e8e8e8' }}>
            dashboard
            <input onChange={(e) => setSearchText(e.target.value.toLowerCase())} value={searchText} placeholder="Search todos" />
            <div style={{ backgroundColor: '#e8e8e8        ' }}>
                <Container>
                    
                    <Row>
                        {
                            filteredTodos.map((todo: any) => {
                                return (
                                    <CardView cardData={todo} />
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Dashboard;