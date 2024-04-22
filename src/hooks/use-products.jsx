import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(); // default: undefined;
    const [products, setProducts] = useState([]);    

    useEffect(() => {
            setLoading(true);   // useEffect가 시작될 때, Loading 시작
            setError(undefined); // Error 초기화
            fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('data=', data);
                    setProducts(data)
                }).catch(e => setError('에러가 발생했음!', e))
                .finally(() => setLoading(false)); // 네트워크 요청이 끝날 때
            return () => {
                console.log('컴포넌트가 unmount될 때, 깨끗하게 청소해야 할 때');
            }
        }, [salesOnly]); // 디펜던시 명시: salesOnly 라는 스테이트가 변경될 때마다 useEffect를 실행

    return [loading, error, products];
}