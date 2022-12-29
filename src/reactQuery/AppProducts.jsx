import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  const client = useQueryClient();
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
      <button onClick={() => {
        client.invalidateQueries(['products', false]);
      }}>정보가 업데이트 되었음!
      </button>
    </div>
  );
}
