import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: 'Jake',
        title: '프론트엔드 개발자',
        mentor: {
            name: 'Hoon',
            title: '시니어개발자',
        },
    });

    return (
        <div>
            <h1>
                {person.name}은/는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt('당신의 멘토의 이름은 무엇입니까?');
                    setPerson(
                        // 기존에 person에 있는 데이터에 접근하기 보다는 이전 prev 인자를 받아옴
                        (prev) => ({
                            ...prev, // 기존에 person에 있는 key와 value들을 그대로 낱개로 풀어서 복사해옴
                            mentor: {
                                ...prev.mentor,
                                name, // key와 value의 명칭이 똑같다면 축약 가능 name: name
                            }, // mentor는 또 중첩객체이기 때문
                        }) // 객체를 소괄호로 묶어서 코드블록으로 판단하는 에러를 잡기
                    );// setPerson을 이용하여 업데이트
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt('당신의 멘토의 타이틀은 무엇입니까?');
                    setPerson((prev) => ({
                        ...prev,
                        mentor: {
                            ...prev.mentor,
                            title
                        }
                    }));
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}