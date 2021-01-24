import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// Styles
import { Container } from './styles';
import './triangles.css';
import cactus from '../../assets/icons/cactus.svg';
import mountain from '../../assets/icons/mountain.svg';
import wave from '../../assets/icons/wave.svg';

// Components
import Modal from '../../components/Modal';
import Adjustments from '../../components/TodoApp/Adjustments';
import ListItem from '../../components/TodoApp/ListItem';
import NavItem from '../../components/TodoApp/NavItem';

import Class from '../../functions';
import DisplayConfig from '../../components/TodoApp/DisplayConfig';


function TodoApp() {
  // Data states
  const [modalOpen, setModalOpen] = useState(false);
  const [adjustmentsOpen, setAdjustmentsOpen] = useState(false);
  const [displayOpen, setDisplayOpen] = useState(false);

  const [date, setDate] = useState();
  const [placeholders,] = useState(['Discord call incoming!', 'Take out the thrash', 'Study \'till midnight', 'Hang out with friends', 'Vet at 12:00PM']);

  const [modalInputData, setModalInputData] = useState('');
  const [todosData, setTodosData] = useState([]);

  const [navIcon, setNavIcon] = useState(cactus);
  const [navItems, setNavItems] = useState(['Todos', 'Planned', 'Important']);
  const [showNavInput, setShowNavInput] = useState(false);
  const [navInputData, setNavInputData] = useState('');

  // Functions and handlers
  function handleDay() {
    const now = new Date().toLocaleString(undefined, {
      month: "short", day: "numeric", weekday: "long"
    });
    setDate(now);
  }
  useEffect(handleDay, []);

  async function handleNavIcon() {
    navIcon === cactus ? setNavIcon(mountain) :
    navIcon === mountain ? setNavIcon(wave) :
    navIcon === wave ? setNavIcon(cactus) : setNavIcon();
  }

  // Creating todos
  async function handleNewTodo() {
    if (modalInputData === '') return;

    try {

      const body = { modalInputData };
      setModalInputData('')

      const todo = await fetch("http://localhost:4000/db" || process.env.DATABASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: 'cors',
        body: JSON.stringify(body)
      })
    } catch (err) {
      console.error(err);
    }
  }

  async function getTodos() {
    try {
      
      const response = await fetch("http://localhost:4000/db" || process.env.DATABASE_URL);
      const data = await response.json();

      setTodosData(data.result.results);

    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, [])

  function renderTodos(provided) {
    return todosData.map( (todo) => {
      return (
        <Draggable key={todo.todo_id} draggableId={(todo.todo_id).toString()} index={todo.todo_id} {...provided.droppableProps}>
          {(provided) => (
            <ListItem provided={provided} changeTodoList={[todosData, setTodosData]} databaseId={todo.todo_id} id={todo.todo_content.split(' ').join('')}>{todo.todo_content}</ListItem>
          )}
        </Draggable>
      )
    });
  }

  function renderNavItems() {
    return navItems.map((data, index) => (
      <NavItem key={index}><i className="fas fa-sticky-note"></i> {data}</NavItem>
      ))
    }
  
  function handleNavInputSubmit(e) {
    e.preventDefault()
    setNavItems([...navItems, navInputData]);

    setNavInputData('');
    setShowNavInput(false);
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(todosData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodosData(items);
  }

  const main = useRef(null);
  useEffect(() => {adjustmentsOpen ? 
      main.current.style.paddingRight = '270px' : main.current.style.paddingRight = '23px'}, [adjustmentsOpen]);

  const theme = {
    navBg: '#c5ad6f',
    mainBg: '#292d2e',
    textColor: '#eee'
  };

  // Actual component
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavLink to="/"><i title="Go back" className="fas fa-angle-left"></i></NavLink>

        <main>
          <div className="bg"></div>
          <div className="triangle t1"></div>
          <div className="triangle t2"></div>
          <div className="triangle t3"></div>
          <div className="triangle t4"></div>
          
          <section>
            <div className="area nav">
              <div className="nav__title">
                <p>Your lobby</p>
                <img onClick={handleNavIcon} src={navIcon} alt={navIcon.toString()} />
              </div>
              <ul>
                {renderNavItems()}
              </ul>
              {showNavInput && 
                (
                  <form onSubmit={(e) => handleNavInputSubmit(e)}>
                    <input type='text' value={navInputData} onChange={(e) => setNavInputData(e.target.value)} /> 
                  </form>
                )
              }

              <footer>
                <p onClick={() => setShowNavInput(true)}><span>+</span> New page</p>
              </footer>
            </div>

            <div ref={main} className="area main">
              <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <h2>Add a to-do</h2>
                <hr/>
                <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
                  <label htmlFor="name">Name:</label><br/>
                  <input type="text" value={modalInputData} onChange={(e) => setModalInputData(e.target.value)} id="name" placeholder={placeholders[Class.randomNumFromArray(placeholders)]} /><br />
                  <label>Category:</label>
                  <button onClick={handleNewTodo}>Add</button>
                </form>
              </Modal>

              <header>
                <div>
                  <h1>Todos</h1>
                  <p>{date}</p>
                </div>

                <div className="buttonsDiv">
                  <button title="Add new todo" onClick={() => setModalOpen(true)} className="buttonAdd"><i className="fas fa-plus"></i>Add</button>
                  <button title="See more" onClick={() => {setAdjustmentsOpen(!adjustmentsOpen);}}><i className="far fa-clone"></i></button>
                  <button title="Change style" onClick={() => {setDisplayOpen(!displayOpen);}}><i className="fas fa-ellipsis-h"></i></button>
                </div>
              </header>
              
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className="todos">
                  <Droppable droppableId="list">
                    {(provided) => (
                      <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {renderTodos(provided)}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              </DragDropContext>
            </div>

            <DisplayConfig open={displayOpen} adjustOpen={adjustmentsOpen} />
              
            <Adjustments open={adjustmentsOpen}>
              <div>
                <h1>Info</h1>
                <p>Created at: 12:00AM 12/02/1998</p>
                <p>Last update: 12:00PM 19/01/2021</p>
                <p>Owner: John</p>
                <p>Favorites: [array of favorites]</p>
              </div>
            </Adjustments>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default TodoApp;