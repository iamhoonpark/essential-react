import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>                
                <Avatar
                    image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
                    name='Bob'
                    size={200}
                />
                <p>자기소개: 2년차 개발자 박상훈입니다.</p>
            </Navbar>

            <Navbar>
                <p>안녕하세요? 전 자기소개서 말고 인삿말만!</p>
            </Navbar>
        </div>
    );
}

function Navbar({children}) {
    return (
        <header style={{ backgroundColor: 'yellow' }}>
            {children}
        </header>
    );
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
        </div>
    )
}