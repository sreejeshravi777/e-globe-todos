import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/todoContext";
import CardView from "../components/common/card";
import InputText from "../components/common/input.text";
import FixedSizeGrid from "../components/common/FixedSizeGrid";
import { TodoFormErrors, TodoFormData, Todo } from "../types/type";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { validateTodoForm, clearFieldError } from "../services/formValidation";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import {
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Header from "../components/header";

const SortableCard: React.FC<{ todo: Todo }> = ({ todo }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardView cardData={todo} />
    </div>
  );
};

const Dashboard: React.FC = () => {
    const { state, getUsers } = useAppContext();
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const divElement = document.getElementById('parent');

    const [formData, setFormData] = useState<TodoFormData>({
        todo: '',
        userId: ''
    });
    const [errors, setErrors] = useState<TodoFormErrors>({
        todo: '',
        userId: ''
    });
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );
    
    useEffect(() => {
        getUsers();
    }, []);
    
    useEffect(() => {
        setTodos(state.todos);
    }, [state])

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        
        if (over && active.id !== over.id) {
            const oldIndex = todos.findIndex((todo) => todo.id === active.id);
            const newIndex = todos.findIndex((todo) => todo.id === over.id);
            setTodos((items) => arrayMove(items, oldIndex, newIndex));
        }
    };

    const handleModalOpen = () => {
        setModalIsOpen(true);
        setFormData({ todo: '', userId: '' });
        setErrors({ todo: '', userId: '' });
    };

    const handleClose = () => {
        setModalIsOpen(false);
        setFormData({ todo: '', userId: '' });
        setErrors({ todo: '', userId: '' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof TodoFormErrors]) {
            setErrors(prev => clearFieldError(name as keyof TodoFormErrors, prev));
        }
    };

    const validateForm = () => {
        const { errors: newErrors, isValid } = validateTodoForm(formData);
        setErrors(newErrors);
        return isValid;
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value.toLowerCase());
    }

    const handleSubmit = () => {
        if (validateForm()) {
            const newTodo: Todo = {
                id: Math.max(...todos.map(t => t.id), 0) + 1,
                todo: formData.todo.trim(),
                userId: Number(formData.userId),
                completed: false
            };
            setTodos(prev => [...prev, newTodo]);
            
            // Scroll to bottom after adding new todo
            setTimeout(() => {
                const scrollBotton = document.getElementById('parent');
                if (scrollBotton) {
                  scrollBotton.scrollTop = scrollBotton.scrollHeight;
                }
            }, 100);

            handleClose();
        }
    };
    const filteredTodos = todos.filter((todo) => todo.todo.toLowerCase().includes(searchText.toLowerCase()))

    if (state.isLoading) return <p>Loading...</p>;
    if (state.errorMsg) return <p>Error: {state.errorMsg}</p>;
    return (
        <div style={{ backgroundColor: '#e8e8e8' }} id="parent">
            <Header onChange={handleSearch} value={searchText}/>
            {/* <input onChange={(e) => setSearchText(e.target.value.toLowerCase())} value={searchText} placeholder="Search todos" /> */}
            <button className="createButton" onClick={handleModalOpen}>+</button>
            <div style={{ backgroundColor: '#e8e8e8        ' }}>
            <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
  <Modal show={modalIsOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
                 <Modal.Body>
           <div className="mb-3">
             <InputText 
               label="Todo" 
               placeholder="Enter todo description" 
               type="text" 
               id="todo"
               name="todo"
               value={formData.todo}
               onChange={handleInputChange}
               className={errors.todo ? 'is-invalid' : ''}
             />
             {errors.todo && <div className="invalid-feedback">{errors.todo}</div>}
           </div>
           
           <div className="mb-3">
             <InputText 
               label="User ID" 
               placeholder="Enter user ID" 
               type="number" 
               id="userId"
               name="userId"
               value={formData.userId}
               onChange={handleInputChange}
               className={errors.userId ? 'is-invalid' : ''}
             />
             {errors.userId && <div className="invalid-feedback">{errors.userId}</div>}
           </div>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Cancel
           </Button>
           <Button variant="primary" onClick={handleSubmit}>
             Create Todo
           </Button>
         </Modal.Footer>
      </Modal>
    </div>
                <Container>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        {React.createElement(SortableContext as any, {
                            items: filteredTodos.map(t => t.id),
                            strategy: rectSortingStrategy,
                            children: (
                                <FixedSizeGrid
                                    items={filteredTodos}
                                    columns={3}
                                    renderItem={(todo) => (
                                        <div className="mb-3 todoCard">
                                            <SortableCard todo={todo} />
                                        </div>
                                    )}
                                    itemClassName="mb-3"
                                />
                            )
                        })}
                    </DndContext>
                </Container>
            </div>

        </div>
    );
};

export default Dashboard;