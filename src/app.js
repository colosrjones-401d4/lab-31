import React from 'react';

import Todo from './components/todo/todo';
import Item from '../src/components/items';
import Header from '../src/components/header';
import Form from '../src/components/form'

import './components/todo/todo';

function App(props) {
  return (
    <section>
       <Header /> 
      <div>
        <Todo />
      </div>
      <div>
        <Item />
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
}

export default App;