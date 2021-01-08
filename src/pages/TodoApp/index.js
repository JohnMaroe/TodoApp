import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';


import { Container } from './styles';
import './triangles.css';

import Modal from '../../components/Modal';
import Adjustments from '../../components/TodoApp/Adjustments';

import Class from '../../functions';


function TodoApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [adjustmentsOpen, setAdjustmentsOpen] = useState(false);
  const [date, setDate] = useState();
  const [placeholders,] = useState(['Discord call incoming!', 'Take out the thrash', 'Study \'till midnight', 'Hang out with friends', 'Vet at 12:00PM']);

  function handleDay() {
    const now = new Date().toLocaleString(undefined, {
      month: "short", day: "numeric", weekday: "long"
    });
    setDate(now);
  }
  useEffect(handleDay, []);

  function handleForm(e) {
    e.preventDefault();
    
  };

  const main = useRef(null);
  useEffect(() => {adjustmentsOpen ? 
      main.current.style.paddingRight = '270px' : main.current.style.paddingRight = '23px'}, [adjustmentsOpen]);


  const theme = {
    navBg: '#c5ad6f',
    mainBg: '#292d2e',
    textColor: '#eee'
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <main>
          <div className="bg"></div>
          <div className="triangle t1"></div>
          <div className="triangle t2"></div>
          <div className="triangle t3"></div>
          <div className="triangle t4"></div>
          
          <section>
            <div className="area nav">
              <p>asihash</p>
              <a href="#"><i className="fas fa-frog"></i></a>
            </div>

            <div ref={main} className="area main">
              <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <h2>Add a to-do</h2>
                <hr/>
                <form onSubmit={handleForm}>
                  <label htmlFor="name">Name:</label><br/>
                  <input type="text" id="name" placeholder={placeholders[Class.randomNumFromArray(placeholders)]} /><br />
                  <label>Category:</label>
                  <button>Add</button>
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
              
              <div>
                
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