export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated': {
            /**
             * 이 코드를 축약한 버전
             * const prev = action.prev;
             * const current = action.current;
             */
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return {...mentor, name: current}
                    }
                    return mentor;
                }),
            };
        }
        case 'added': {
            const { name, title } = action;
            return {
                ...person,
                mentors: [ ...person.mentors, { name, title } ],
            };
        }
        case 'deleted': {
            const { name } = action;
            return {                
                ...person,
                mentors: person.mentors.filter((m) => m.name !== name),
            };
        }
        // 각 케이스에 해당하지 않는다면 에러를 던져줌
        default: {
            throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
        }
    }
}