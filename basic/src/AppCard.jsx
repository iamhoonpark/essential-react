import React from 'react';

export default function AppCard() {
    return (
        <>
            <Card>
                <p>카드 준비중 입니다.</p>
            </Card>

            <Card>
                <h1>블랙카드</h1>
                <p>결제금액 상위 1%에 해당하는 사람들만 발급가능합니다.</p>
            </Card>
        </>
    );
}

function Card({ children }) {
    return (
        <div
            style={{
                backgroundColor: 'black',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxWidth: '200px',
                margin: '1rem',
                padding: '1rem',
                textAlign: 'center',
            }}
        >
                {children}
        </div>
    );
}
