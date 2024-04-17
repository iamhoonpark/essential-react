import React, { useEffect, useState } from 'react';

export default function Products() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(); // default: undefined;
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false); // check가 되어 있지 않은 상태
    const handleChange = () => setChecked((prev) => !prev); // 함수를 호출하면 setCheck를 이전 값과 반대로 토글링

    useEffect(() => {
        setLoading(true);   // useEffect가 시작될 때, Loading 시작
        setError(undefined); // Error 초기화
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data=', data);
                setProducts(data)
            }).catch(e => setError('에러가 발생했음!', e))
            .finally(() => setLoading(false)); // 네트워크 요청이 끝날 때
        return () => {
            console.log('컴포넌트가 unmount될 때, 깨끗하게 청소해야 할 때');
        }
    }, [checked]); // 디펜던시 명시: checked 라는 스테이트가 변경될 때마다 useEffect를 실행

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