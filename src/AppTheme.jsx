import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    // <h1>HI</h1>
    <>
      <DarkModeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
//
const Header = () => {
  return <header className='header'>Header</header>;
};

const Main = () => {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
};

const Profile = () => {
  return (
    <div>
      Profile
      <User />
    </div>
  );
};

const User = () => {
  return <div>User</div>;
};

const Products = () => {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
};

const ProductDetail = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode: {darkMode ? (<span style={{ backgroundColor: 'black', color: 'white' }}> Dark Mode</span>) : (
        <span>Light Mode</span>)}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
};

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
