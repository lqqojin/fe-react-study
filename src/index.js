import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProducts from './reactQuery/AppProducts';

// import AppCard from './AppCard';
// import AppTheme from './AppTheme';
// import AppProducts from './basic/AppProducts'; // 5.21~22 로딩, 에러 상태 추가
// import AppClass from './AppClass'; // 5.24 클래스 컴포넌트

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AppProducts />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>,
);
