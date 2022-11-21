import React, { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault(); // submit 버튼을 누르면 페이지 refresh 되기 때문에 필요하지 않다면 해당 이벤트 넣기
  };
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input type='text' id='name' name='name' value={form.name} onChange={handleChange} />
      <label htmlFor='email'>이메일:</label>
      <input type='email' id='email' name='email' value={form.email} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
