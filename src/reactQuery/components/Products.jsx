import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  // const [loading, error, products] = useProducts({ salesOnly: checked });
  const { isLoading, error, data: products } = useQuery(['products', checked], async () => {
    console.log('fetching...', checked);
    return fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(async (res) => {
        return res.json();
      });
  }, {
    staleTime: 5000,
  });

  const handleChange = (() => setChecked(prev => !prev));

  if (isLoading) return (<p>Loading...</p>);
  if (error) return (<p>{error}</p>);
  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only Sale</label>
      {
        <ul>
          {
            products.map((product) => {
              return (
                <li key={product.id}>
                  <article>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </article>
                </li>
              );
            })
          }
        </ul>
      }
      <button onClick={() => {
        setCount((prev) => prev + 1);
      }}>{count}</button>
    </>
  );
}
