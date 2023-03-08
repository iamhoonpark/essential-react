# React

## 1. 리액트(React)

### 1.1. 리액트란?

User Interfaces를 만들기 위한 JS 라이브러리

    -  SPA(Single Page Application): 한 어플리케이션 내에서 컴포넌트 네비게이션
    -  CSR(Client Side Rendering): 클라이언트 측에서 렌더링이 이루어짐

## 2. 라이브러리와 프레임워크 차이점

### 2.1. 라이브러리

    1. 큰 골격과 규칙이 정해지지 않고 작은 솔루션 단위
    2. 필요할 때 마다 원하는 것만 골라서 사용할 수 있는 자율성 보장

### 2.2. 프레임워크

    1. 개발하기 위해 필요한 모든 것들을 제공(UI, Routing, HTTP Clients, State management)
    2. 장점: 프레임워크에서 규정하고 있는 모든 것을 익여야 함
    3. 단점: 자율성이 떨어짐

## 3. 리액트 철학

- Renders UI and responds(or reacts) to events
- UI를 표기, 보여주고나서 event에 반응하도록 만들어진 라이브러리

### 3.1. 컴포넌트(Components)

    * 다른 컴포넌트들과는 연결되어 있지 않은 독립적인 응집도가 높은 UI 블록
    * 독립적(independent), 고립적(isolated), 재사용성(resuable)

#### 3.1.1 컴포넌트 단위

    1.  재사용성: DRY(Don't Repeat Yourself)
    2.  단일책임: SR(Single Responsibility)
        - 비록 재사용할 확률은 낮더라도 한 컴포넌트 안에 너무 많은 UI나 로직 등 정보가 많다면 분리

### 3.2. 컴포넌트 정의

- 함수 형태로 만드는 컴포너트를 함수형 컴포넌트
- 함수 반환 값으로 html처럼 생긴 마크업을 만환할 수 있는데, 이것을 JSX(JavaScript XML)이라 함
- 컴포넌트가 가지고 있는 데이터 즉, 상태는 useState라는 함수를 이용해서 변수형태로 상태값을 저장
- 외부에서 전달되는 값은 props(properties)라는 함수의 인자로 전달됨
- React 컴포넌트는 내부상태의 State, 외부로 부터 전달받은 상태인 Props, 두가지를 나타내는 Render로 구성

#### 3.2.1. 부분적으로 업데이트가 가능한 이유

- html 코드를 짜고 실행하면 브라우저에서는 이를 DOM Tree, 웹 페이지 구조를 tree 형태로 잡아놓음
- 리액트는 곧바로 브라우저 DOM Tree를 건드는 것이 아니라 가상의 Virtual DOM Tree를 가지고 어떤 상태값이 변경되어 업데이트가 된다면 바로 DOM Tree에 업데이트 하지 않고 이전의 Previous Tree와 비교 후 다른 점에 대해서만 브라우저에 DOM Tree에 업데이트를 시킴
- 그래서 어플리케이션에서 State를 아무리 많이 변경시킨다 하더라도 브라우저에서는 최종적으로 업데이트 되는 노드만 업데이트가 되기 때문에
  리액트가 조금 더 효율적으로 빠름
- 상태가 변결될 때 마다 re-render
- 실제로 변경된 부분만 화면에 업데이트

## 4. 리액트 훅(Hooks)

- 리액트의 스테이트와 라이프 사이클에 관련된 기능들을 갈고리처럼 연결할 수 있는 재사용 가능한 로직들
- Hooks(함수들)의 목적은 값의 재사용이 아니라 로직의 재사용을 위한 것
- 결론: 재사용 가능한 함수(대개 use로 시작함 useState, useEffect, useRef 등)

React 공식 사이트: https://reactjs.org/

React 베타 문서: https://beta.reactjs.org/

Create React App: https://create-react-app.dev/
