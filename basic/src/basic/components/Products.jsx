import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
    const [checked, setChecked] = useState(false); // check가 되어 있지 않은 상태
    const [loading, error, products] = useProducts({ salesOnly: checked });
    const handleChange = () => setChecked((prev) => !prev); // 함수를 호출하면 setCheck를 이전 값과 반대로 토글링

    // 네트워크 통신중일 경우
    if (loading) return <p>Loading...</p>;

    // 서버통신 에러시
    if (error) return <p>{error}</p>;

    // 서버통신 성공시
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