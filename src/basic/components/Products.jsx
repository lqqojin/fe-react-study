import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = (() => setChecked(prev => !prev));

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(async (res) => {
        return res.json();
      })
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch(() => {
        setError('에러 발생!');
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);
  console.log({ loading, error });
  if (loading) {

    return (<p>Loading...</p>);
  }
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
