import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import './triangles.css';

// Components
import Modal from '../../components/Modal';
import Adjustments from '../../components/TodoApp/Adjustments';
import ListItem from '../../components/TodoApp/ListItem';

import Class from '../../functions';


function TodoApp() {
  // Data states
  const [modalOpen, setModalOpen] = useState(false);
  const [adjustmentsOpen, setAdjustmentsOpen] = useState(false);
  const [date, setDate] = useState();
  const [placeholders,] = useState(['Discord call incoming!', 'Take out the thrash', 'Study \'till midnight', 'Hang out with friends', 'Vet at 12:00PM']);
  const [inputData, setInputData] = useState('');
  const [todosData, setTodosData] = useState(['Eat breakfast at 8PM', 'Walk dog to the park', 'Talk to your friend from Dalas']);
  Class.setLocalStorageFromArray(todosData);

  // Functions and handlers
  function handleDay() {
    const now = new Date().toLocaleString(undefined, {
      month: "short", day: "numeric", weekday: "long"
    });
    setDate(now);
  }
  useEffect(handleDay, []);

  // Creating todos
  function handleNewTodo() {
    if (inputData === '') return;

    setTodosData([...todosData, inputData]);
    setInputData('');
  }

  function createTodos() {
    return todosData.map((data, index) => {
      return <ListItem key={index} id={index}>{data}</ListItem>;
    });
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
              <p>Your lobby</p>
              <ul>
                <li>Todos</li>
                <li>Planned</li>
                <li>Important</li>
              </ul>
              {/*create a component here!*/}
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

                <div>
                  <button onClick={() => setModalOpen(true)}><i className="fas fa-plus"></i></button>
                  <button onClick={() => {setAdjustmentsOpen(!adjustmentsOpen);}}><i className="far fa-clone"></i></button>
                </div>
              </header>
              
              <div className="todos">
                <ul>
                  {createTodos()}
                </ul>
              </div>
            </div>
              
            <Adjustments open={adjustmentsOpen}>
              <div>Fuck Yeah</div>
            </Adjustments>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default TodoApp;