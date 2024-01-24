<details>
  <summary>1. 리액트(React)</summary>
  <div markdown="1">
    1. 리액트
    - UI를 표기·보여주고나서 이벤트에 반응
      (Renders UI and responds to(Reacts to) events)
    - 심플한 정적 사이트부터 복잡한 규모까지 웹, 모바일앱을 손쉽게 만들 수 있음
    - 유저 인터페이스를 만들기 위한 자바스크립트 라이브러리

    01) SPA(Single Page Application)
    - 사용자가 버튼을 클릭했을 때, 다른 페이지를 다운받아서 깜빡거리면서 리프레시 되는 것이 아니라 한 어플리케이션에서 컴포넌트를 보여주고 숨기는 방식으로 페이지 내에서 자유자재로 네비게이션하는 것

    02) SCR(Client Server Rendering)
    - 사용자가 웹 어플리케이션에 접속했을 때, 즉각적으로 html을 보여주는 것이 아니라, 우리가 작성한 코드 js뿐만 아니라 React 라이브러리도 함께 다운받아서 사용자 화면에 UI가 표기되기 때문에 Client측에서 리액트가 렌더링 됨
    - React와 Gatsby 또는 Next.js 프레임워크를 함께 사용하면 SSG(Static Site Generation)과 SSR을 함께 구현할 수도 있음


    2. 컴포넌트
    - UI를 component들 단위로 보여주고 이벤트에 반응도록 만들어나가는 라이브러리
    - 응집도가 높은 UI 블락이면서 다른 컴포넌드들과는 연결되어 있지 않고 독립적인 응집도를 유지하고있는 빌딩 블록
      (A highly cohesive building block for UIs loosely coupled with other components)

    01) 컴포넌트를 나누는 기준
    - 재사용성(Don't Repeat Yourself)
    - 단일책임(Single Responsibility): 다른 곳에서 재사용될 확률이 낮더라도, 한 컴포넌트 안에서 너무 많은 UI나 Logic이 있다면 작은 단위로 한 UI에서는 하나의 도메인을 담당해서 보여줄 수 있도록 잘게 나누어서 컴포넌트를 만들 수 있음

    02) 리액트 동작원리
    - 리액트는 컴포넌트의 집합체
    - 리액트는 데이터를 내부상태를 가지고있는 State와 외부로부터 전달받는 상태 Props가 있고 이 두가지의 데이터를 나타내는 render가 존재
    - 상태(State 또는 Props)이 변경될때마다 re-render가 이루어짐
    - 어플리케이션 화면에는 실제로 변경된 부분만 화면에 효율적으로 업데이트가 됨

    03) React DOM
    - 우리가 HTML로 작성한 것이 브라우저에 표기가 되기 위해서 DOM tree로 구성되는데, 이는 리액트에서도 마찬가지
    - 대신에 리액트는 바로 브라우저에 있는 DOM tree를 변경하는 것이 아니라, 가상의 돔트리(Virtual Dom Tree)를 가지고 있고 어떤 상태값이 변경되어서 무언가 업데이트가 된다면, 변경이 일어나기 전에 VDT와 PT(예전상태 Previous tree)를 비교 후에 다른 노드를 판단 후 실제 브라우저에서 필요한 DOM TREE요소를 업데이트
    - 따라서 리액트 어플리케이션에서 State를 많이 변경하더라도 실제 브라우저에서는 업데이트 되는 노드만 변경이 이루어짐에 따라 리액트가 조금 더 효율적으로 빠르게 브라우저를 업데이트 해줌
    - 사용자가 느끼기에 빠르고 스무스하게 업데이트가 일어나기 위해서는 60fps를 유지하는 것이 중요 -> 리액트에서 자체적으로 진행
    - 그렇다고 리액트가 완벽하기 때문에 개발자가 코드를 막 짜면 안되고, 컴포넌트를 효율적으로 만들어나가야 함
  </div>
</details>