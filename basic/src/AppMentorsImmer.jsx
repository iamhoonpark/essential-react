import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
    const [person, updatePerson] = useImmer(initialPerson);

    const handleUpdate = () => {
        const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
        const current = prompt('변경할 이름을 입력해주세요.');
        
        updatePerson((person) => {
            // 찾고자하는 mentor의 이름을 찾아서
            const mentor = person.mentors.find((m) => m.name === prev);
            // 업데이트
            mentor.name = current;
        });
    };

    const handleAdd = () => {
        const name = prompt('추가할 이름을 입력해주세요.');
        const title = prompt('해당 멘토의 직함은?');
        
        /**
         * Error : updatePerson((person) => person.mentors.push({ name, title }));
         * 
         * Erorr Message : [Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
         *                 새로운 값을 반환하거나, draft를 수정하거나 둘중 하나만 하라는 의미
         * 
         * Error Solution : 괄호가 없는 arrow function은 return문으로 작동하기에 문제 발생
         *                  즉, {} 줄괄호를 추가해서 문제를 해결해야 함
         */

        // 기존 데이터를 받아와서 배열에 새로운 객체를 push
        updatePerson((person) => {
            person.mentors.push({name, title});
        });
    }

    const handleDelete = () => {        
        const name = prompt('삭제할 이름을 입력해주세요.');
        updatePerson((person) => {
            // 삭제하고자하는 mentors의 index를 찾아서
            const index = person.mentors.findIndex(m => m.name === name);

            // 존재하지 않는 이름이 입력될때
            if (index < 0) {
                return;
            }

            // splice api를 이용해서 해당 인덱스에 아이템을 하나 삭제
            person.mentors.splice(index, 1);
        });
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