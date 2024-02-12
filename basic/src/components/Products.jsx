import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false); // check가 되어 있지 않은 상태
    const handleChange = () => setChecked((prev) => !prev); // 함수를 호출하면 setCheck를 이전 값과 반대로 토글링

    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data=', data);
                setProducts(data)
            });
        return () => {
            console.log('컴포넌트가 unmount될 때, 깨끗하게 청소해야 할 때');
        }
    }, [checked]); // 디펜던시 명시: checked 라는 스테이트가 변경될 때마다 useEffect를 실행

    return (
        <>
            <input 
                id='checkbox'
                type="checkbox" 
                value={checked} 
                onChange={handleChange} 
            />
            <label htmlFor='checkbox'>show Only 🔥 Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}