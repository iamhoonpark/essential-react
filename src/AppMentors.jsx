import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = () => {
        const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
        const current = prompt('변경할 이름을 입력해주세요.');
        dispatch({type: 'updated', prev, current});
    };

    const handleAdd = () => {
        const name = prompt('추가할 이름을 입력해주세요.');
        const title = prompt('해당 멘토의 직함은?');
        dispatch({type: 'added', name, title});
    }

    const handleDelete = () => {        
        const name = prompt('삭제할 이름을 입력해주세요.');   
        dispatch({type: 'deleted', name});
    }

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
            <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson = {
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
};