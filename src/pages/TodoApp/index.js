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

  const [inputData, setInputData] = useState('');
  const [todosData, setTodosData] = useState(['Eat breakfast at 8PM', 'Walk dog to the park', 'Talk to your friend from Dalas']);

  const [navIcon, setNavIcon] = useState(cactus);
  const [navItems, setNavItems] = useState(['Todos', 'Planned', 'Important']);
  const [showNavInput, setShowNavInput] = useState(false);
  const [navInputData, setNavInputData] = useState('');
  Class.setLocalStorageFromArray(todosData);

  // Functions and handlers
  function handleDay() {
    const now = new Date().toLocaleString(undefined, {
      month: "short", day: "numeric", weekday: "long"
    });
    setDate(now);
  }
  useEffect(handleDay, []);

  function allStorage() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }
    return values;
  }

  function handleNavIcon() {
    navIcon === cactus ? setNavIcon(mountain) :
    navIcon === mountain ? setNavIcon(wave) :
    navIcon === wave ? setNavIcon(cactus) : setNavIcon();
  }

  // Creating todos
  function handleNewTodo() {
    if (inputData === '') return;

    setTodosData([...todosData, inputData]);
    setInputData('');
  }

  function renderTodos(provided) {
    return todosData.map((data, id) => {
      return (
        <Draggable key={id} draggableId={(id).toString()} index={id} {...provided.droppableProps}>
          {(provided) => (
            <ListItem provided={provided} id={id}>{data}</ListItem>
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
        <NavLink to="/"><i className="fas fa-angle-left"></i></NavLink>

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
                  <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} id="name" placeholder={placeholders[Class.randomNumFromArray(placeholders)]} /><br />
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
                  <button onClick={() => setModalOpen(true)} className="buttonAdd"><i className="fas fa-plus"></i>Add</button>
                  <button onClick={() => {setAdjustmentsOpen(!adjustmentsOpen);}}><i className="far fa-clone"></i></button>
                  <button onClick={() => {setDisplayOpen(!displayOpen);}}><i className="fas fa-ellipsis-h"></i></button>
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
              <div>Dreaming bout you</div>
            </Adjustments>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default TodoApp;