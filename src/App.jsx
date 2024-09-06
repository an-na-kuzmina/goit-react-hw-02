import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './App.css';

const App = () => {
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
};

export default App;
