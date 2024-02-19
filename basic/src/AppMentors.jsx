import React, { useState } from 'react';

export default function AppMentors() {
    const [person, setPerson] = useState({
        name: 'Jake',
        title: '프론트엔드 개발자',
        mentors: [
            {
                name: '박상훈',
                title: '시니어개발자',
            },
            {
                name: '제이크 park',
                title: '캡틴',
            },
        ],
    });

    return (
        <div>
            <h1>
                {person.name}은/는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는:
            </p>
            <ul>
                {
                    person.mentors.map((mentor, index) => (
                        <li key={index}>
                            {mentor.name} ({mentor.title})
                        </li>
                    ))
                }
            </ul>
            <button
                onClick={() => {
                    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
                    const curr = prompt('변경할 이름을 입력해주세요.');

                    setPerson((person) => ({
                        ...person,
                        mentors: person.mentors.map((mentor) => {
                            if (mentor.name === prev) {
                                return {...mentor, name: curr}
                            }
                            return mentor;
                        }),
                    }));
                    
                }}
            >
                멘토의 이름을 바꾸기
            </button>
        </div>
    );
}