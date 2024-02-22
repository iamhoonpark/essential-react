import { createContext, useState } from 'react';

/**
 * 1) 리액트에서 제공해주는 createContext API를 이용해서 컨텍스트를 생성
 *    - 이것은 필요한 데이터를 컨텍스트에 담고 간직하고 있는 역할
 */
export const DarkModeContext = createContext();


/**
 * 2) 컨텍스트를 만들 때, 항상 같이 만들어야 하는 프로바이더
 *    - 이것은 데이터를 잘 가지고 보여주고 있는 엄브렐라(우산)을 만드는 것으로
 *      밑에 있는 하위 컴포넌트들을 감싸줄 수 있는 부모 우산 컴포넌트
 *    - 리턴할 때 내부적으로 컨텍스트에 있는 프로바이더를 사용
 *    - 이 프로바이더 컴포넌트를 외부에서 편하게 쓰기 위해서 엄브렐라를 만들어주는 것
 */
export function DarkModeProvider({ children }) {
    /**
     * 3) 글로벌하게 기억하고 싶은 데이터와 이 데이터를 처리하고 싶은 함수들을 이 공간에서 제작
     */
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            { children }
        </DarkModeContext.Provider>
    );

    /**
     * - 외부에서 컴포넌트를 받을 수 있는 컴포넌트(프로바이더)로 외부에서 어떤 특정 컨텐츠를 받아와서 진행
     * - 이 컴포넌트는 UI적으로 기능은 없지만, children을 감싸는, 데이터를 가지고 있는 엄브렐라 역할
     * - 내부적으로 가져오는 데이터는 darkMode 딱 하나이며, 해당 상태를 토클링할 수 있는 함수가 존재
     * - 하위에 있는 자식요소 children이 해당 기능을 사용하고 싶으면 value속성으로 지정해야 함
     * - 축약형으로 선언 되어 있음 → {darkMode: darkMode, toggleDarkMode: toggleDarkMode}
     */
}

/**
 *  정리
 * - 리액트에서 컨텍스트를 사용하는 것은 우산을 만들고 씌우는 것
 * - 그 우산을 특정 컴포넌트 위에 씌우면 하위에 있는 자식요소들이 그 우산에 있는 데이터에 접근이 가능
 * - 특정 상태변수와 set함수까지 children에게 제공해주는 것
 * - 무작정 최상위 컴포넌트에 씌우지 않아도 되고 필요한 곳에서만 감싸면 됨
 */