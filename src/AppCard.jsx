import React from 'react';

export default function AppCardAppCard() {

  return (
    <div>
      <Card>
        <p>정해진 구조가 아님</p>
      </Card>
      <Card>
        <h1>Card2</h1>
      </Card>
      <Card>
        <article>test</article>
      </Card>
    </div>
  );
}

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
};
