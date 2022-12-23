import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppCard from './AppCard';
// import AppTheme from './AppTheme';
// import AppProducts from './basic/AppProducts'; // 5.21~22 로딩, 에러 상태 추가
// import AppClass from './AppClass'; // 5.24 클래스 컴포넌트
import App from './reactRouter/App'; // css 관련하여 비교
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
