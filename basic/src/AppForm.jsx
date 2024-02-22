import React, { useState } from 'react';

export default function AppForm() {
    const [form, setForm] = useState({name: '', email: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // 기존 form 데이터는 그대로 유지하며
        // 현재 input이 변경되고 있는 이름의 key에 지금 전달받은 value를 덮어 씌움
        setForm({...form, [name]: value });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름:</label>
            <input 
                type="text" 
                id='name' 
                name='name' 
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="email">이메일:</label>
            <input 
                type="email" 
                id='email' 
                name='email'
                value={form.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}