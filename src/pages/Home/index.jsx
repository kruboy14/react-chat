import React from 'react';
import Message from '../../components/Message';

const Home = () => {
  return (
    <div className="home">
      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        text="Hello! What's up?"
        
        date={Date.parse("Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)")}
      />
    </div>
  );
};

export default Home;
