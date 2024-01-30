# 리액트


<details>
<summary>Bookmarks</summary>
<div markdown="1">

| Plugin | URL |
| ------ | ------ |
| React 배타문서 | https://beta.reactjs.org/ |
| React 공식사이트 | https://reactjs.org/ |
| Create React App | https://create-react-app.dev/ |
| HTML to JSX | https://transform.tools/html-to-jsx |
| CSS - BoxShadow | https://cssgenerator.org/box-shadow-css-generator.html |
| 리액트 개발툴 익스텐션 | https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi |
| 무료 사진 사이트 | https://unsplash.com/ |
| HTML > JSX | https://transform.tools/html-to-jsx |


## 단축어

※ 커맨트 팔레트 > Snippets: configure user snippets > global.code-snippets.json

1. rfc : react import
2. rsi : 함수 표현식, 리턴없이 소괄호로 값을 리턴, 상태가 없는 ui요소를 반환
3. si : import css
4. cn : className


</div>
</details>

<details>
<summary>1. 리액트(React)</summary>
<div markdown="1">

## 리액트
- UI를 표기·보여주고나서 이벤트에 반응
  (Renders UI and responds to(Reacts to) events)
- 심플한 정적 사이트부터 복잡한 규모까지 웹, 모바일앱을 손쉽게 만들 수 있음
- 유저 인터페이스를 만들기 위한 자바스크립트 라이브러리

#### 01. SPA(Single Page Application)
- 사용자가 버튼을 클릭했을 때, 다른 페이지를 다운받아서 깜빡거리면서 리프레시 되는 것이 아니라 한 어플리케이션에서 컴포넌트를 보여주고 숨기는 방식으로 페이지 내에서 자유자재로 네비게이션하는 것

#### 02. SCR(Client Server Rendering)
- 사용자가 웹 어플리케이션에 접속했을 때, 즉각적으로 html을 보여주는 것이 아니라, 우리가 작성한 코드 js뿐만 아니라 React 라이브러리도 함께 다운받아서 사용자 화면에 UI가 표기되기 때문에 Client측에서 리액트가 렌더링 됨
- React와 Gatsby 또는 Next.js 프레임워크를 함께 사용하면 SSG(Static Site Generation)과 SSR을 함께 구현할 수도 있음

## 컴포넌트
- UI를 component들 단위로 보여주고 이벤트에 반응도록 만들어나가는 라이브러리
- 응집도가 높은 UI 블락이면서 다른 컴포넌드들과는 연결되어 있지 않고 독립적인 응집도를 유지하고있는 빌딩 블록
  (A highly cohesive building block for UIs loosely coupled with other components)

#### 01. 컴포넌트를 나누는 기준
- 재사용성(Don't Repeat Yourself)
- 단일책임(Single Responsibility): 다른 곳에서 재사용될 확률이 낮더라도, 한 컴포넌트 안에서 너무 많은 UI나 Logic이 있다면 작은 단위로 한 UI에서는 하나의 도메인을 담당해서 보여줄 수 있도록 잘게 나누어서 컴포넌트를 만들 수 있음

#### 02. 리액트 동작원리
- 리액트는 컴포넌트의 집합체
- 리액트는 데이터를 내부상태를 가지고있는 State와 외부로부터 전달받는 상태 Props가 있고 이 두가지의 데이터를 나타내는 render가 존재
- 상태(State 또는 Props)이 변경될때마다 re-render가 이루어짐
- 어플리케이션 화면에는 실제로 변경된 부분만 화면에 효율적으로 업데이트가 됨

#### 03. React DOM
- 우리가 HTML로 작성한 것이 브라우저에 표기가 되기 위해서 DOM tree로 구성되는데, 이는 리액트에서도 마찬가지
- 대신에 리액트는 바로 브라우저에 있는 DOM tree를 변경하는 것이 아니라, 가상의 돔트리(Virtual Dom Tree)를 가지고 있고 어떤 상태값이 변경되어서 무언가 업데이트가 된다면, 변경이 일어나기 전에 VDT와 PT(예전상태 Previous tree)를 비교 후에 다른 노드를 판단 후 실제 브라우저에서 필요한 DOM TREE요소를 업데이트
- 따라서 리액트 어플리케이션에서 State를 많이 변경하더라도 실제 브라우저에서는 업데이트 되는 노드만 변경이 이루어짐에 따라 리액트가 조금 더 효율적으로 빠르게 브라우저를 업데이트 해줌
- 사용자가 느끼기에 빠르고 스무스하게 업데이트가 일어나기 위해서는 60fps를 유지하는 것이 중요 -> 리액트에서 자체적으로 진행
- 그렇다고 리액트가 완벽하기 때문에 개발자가 코드를 막 짜면 안되고, 컴포넌트를 효율적으로 만들어나가야 함

## 훅(Hooks)
- State와 LifeCycle에 관련된 기능들을 재사용 가능한 로직과 연결할 수 있는 함수
- Hooks은(함수들은) 값의 재사용이 아니라 로직의 재사용을 위한 것

#### 01. 훅
- useState: 상태관리 로직
- useEffect : 컴포넌트 생애주기 관리 로직
- useUser : 서버에서 받아온 사용자
- 커스텀훅
</div>
</details>

<details>
<summary>2. 개발환경 설정</summary>
<div markdown="1">

| Plugin | URL |
| ------ | ------ |
| VS Code | https://code.visualstudio.com/download |
| Terminal for Mac | https://iterm2.com |
| Terminal for Win | https://gist.github.com/kevin-smets/8568070 |
| NodeJS | https://nodejs.org/en/ |
| Git | https://git-scm.com/downloads |

```sh
## 사용한 커맨드
node -v
npm -v
git --version
corepack enable // yarn 설치
yarn -v
```
</div>
</details>

<details>
<summary>3. NodeJS</summary>
<div markdown="1">

## 노드JS
- 자바스크립트를 브라우저 밖에서 실행할 수 있게 해주는 자바스크립트 실행환경
- 컴퓨터에서 스크립트를 작성하거나 서버를 만들 때도 자바스크립트를 활용 가능
- server-side rendering, command line tools 또는 back-end까지 js로 만들 수 있음

#### 01. npm
- NodeJS를 설치하면 자동으로 설치되는 패키지 매니저
- 프로젝트를 만들 때, 우리가 만드는 코드 뿐만 아니라 외부 dependencies(라이브러리)를 가져와서 쉽게 설치하고 버전을 관리할 수 있게 함
- package.json : 프로젝트 이름, 버전, 모든 외부 라이브러리 디펜던씨 명시 및 관리

#### 02. npx
- npm이 설치될 때, 함께 설치됨
- npm은 패키지를 관리한다면, npx는 패키지들을 개별적으로 실행할 수 있게 도와주는 tool

#### 03. yarn
- npm을 대체해서 사용 가능한 패키지 매니저 (by facebook)
- npm과 서로 호환이 가능하지만 추천되는 방식은 아니라서 일관성 있게 npm 또는 yarn 한가지만 일관성있게 고정적으로 사용
- npm에서 살짝 부족한 단점을 커버하기 위해 만들어짐
- npm은 사용하는 라이브러리가 많을 수록 프로젝트를 실행하는 속도가 현저히 떨어짐, 필요한 라이브러리를 순차적으로 설치하고 실행하기 때문
- yarn은 필요한 라이브러리를 병렬적으로 동시에 설치하고 실행, 보완관련 측면에서도 뛰어남
- fater, consistent, and secure 빠르고, 일관성있고 안전

</div>
</details>

<details>
<summary>4. 프로젝트 구조</summary>
<div markdown="1">

## 프로젝트 구조
1) /.yarn : yarn을 실행하기 위해 필요한 것들
2) /node_modules : npm을 이용해서 설치한 라이브러리들
3) .pnp(play&plug) : yarn을 이용해서 설치한 라이브러리들
   - /node_modules 에 있는 파일 빌드(파일입출력)가 상당히 소모적
   - 따라서 yarn에서는 .pnp 파일로 관리
4) yarn.lock : 라이브러리 버전정보
5) /public : static한 리소스
   - manifest.json : pwa(progressive web appliction)에 필요한 정보(앱 이름, 아이콘 등)
   - robots.txt : 웹 앱을 배포했을 때, 크롤링하는 로봇들에게 사이트에 대한 정보를 명시
6) /src : 작성하는 코드들
   - reportWebVitals.js : 웹 성능 측정
   - setupTests.js : 유닛테스트
7) package.json : 프로젝트 전반적인 정보 및 스크립트
   - name : 프로젝트 이름
   - version : 프로젝트 정보
   - private : private or public
   - dependencies : 라이브러리에 대한 정보를 확인
   - scripts : create react-app 으로 설치되었을 경우 사용가능한 명령어
   - eslintConfig : eslintConfig
   - browserslist : 브라우저 정보
     - production : 배포할 때, 어떤 버전까지, >0.2%는 전체 브라우저 시장에서 0.2이상 사용되는 모든 브라우저 이상
     - development : 개발할 때, 어느 버전까지 js를 변환

## 숨겨진 툴
- create react-app을 통해서 프로젝트를 만들면 scripts(package.json)에는 start, build, test, eject가 있고, yarn.lock 파일에는 무언가 많이 설치가 되어 있고 사용되어 있는 것을 확인 가능
- 설치되어 있는 것을 일일이 하나하나 설정을 바꾸고 싶다면 eject을 사용하면 되지만 한번 eject한 경우에는 다시 포장이 불가
```sh
yarn eject
? Are you sure you want to eject? This action is permanent.
Y
```
- package.json 파일 dependencies에 즉각적으로 숨겨져있던 툴들이 표기됨
  - babel, webpack 등 라이브러리 등
    - css를 축약하는 웹팩, 환경변수 설정, eslint(코드를 잘 작성하는지 감시) 등

## 중요한 툴

#### 1. Babel
- 바벨은 자바스크립트 트랜스컴파일러(JavaScript transcompiler)
- 대부분의 사용자들은 최신 브라우저 버전을 사용하지만, 아직까지도 예전 브라우저 버전을 사용하거나 최신 JS문법을 지원하지 않는 브라우저를 사용할 수도 있음
- 리액트를 개발할 때, 최신 자바스크립트 문법을 사용해도 바벨을 이용해서 프로젝트를 빌드할 때, 사용자에게 배포 전 최신 문법을 예전 버전으로 변환해주는 작업을 해줌
- 사용자의 브라우저 버전을 걱정하지 않고 마음껏 최신 버전으로 개발하거나 TS, JSX로 프로그래밍을 할 수 있는 것이 바벨의 역할으로 예전 JS 버전으로 변환

#### 2. Webpack
- Bundling the code, JavaScript module bundler
- 코드를 잘 번들링(포장)해서 사용자에게 배포할 수 있게 도와주는 모듈 번들러
- 프로젝트를 많은 파일들을(js, sass, hbs, cjs jpg, png 등) 웹팩을 통해서 사용자 전송
  - html, 이미지 파일들 등 어떤 것들을 그룹을 지어서 처음으로 사용자에게 전송해야 하는지 번들링 해줌
  - create react-app을 사용할 때 기본적인 설정을 해줌
  - 번들링 이외에도 쓰이지 않는 코드는 삭제하고 코드를 압축하고 코멘트를 제거해서 사용자에게 전달
  - css파일 이름을 축약한 버전으로 만들어서 파일 사이즈를 줄여줌
- 개발자도구 > network > bundle.js 파일

#### 3. ESLint
- 코드를 올바르게 작성하고 있는지 체크하는 역할

#### 4. Jest
- 유닛 테스트를 작성하고, 코드가 원하는 대로 동작하는지 테스팅하는 프레임워크

#### 5. PostCSS
- expandable CSS libraries
- tool for transforming CSS with JavaScript

## 설치 익스텐션
| VSCode Extentions | DETAILS |
| ------ | ------ |
| Material Theme | 현재 사용하고 있는 테마(dark) |
| Material Icon Theme | 현재 사용하고 있는 아이콘들 |
| Auto Import | 자동으로 import 해줌 |
| Prettier - Code formatter | 코드를 이쁘게 포맷  |
| CSS Modules | 나중에 PostCSS 쓸때 유용함 |

| HTML·CSS Extentions |
| ------ |
| IntelliSense for CSS class names in HTML |
| HTML to CSS autocompletion |
| HTML CSS Support |
| CSS Peek |
| Auto Rename Tag |

</div>
</details>

<details>
<summary>5. CSR(Client Side Render)</summary>
<div markdown="1">

## CSR(Client Side Render)

> 리액트가 어떻게 브라우저에서 동작하는지 <br/>
> Client Side Rendering이 어떤 순서대로 일어나는지

- 사용자가 html을 받았을 때는 html요소에 어떤 ui(html요소들)도 확인할 수 없고 body 요소 안에는 오로지 id가 root인 div요소만 존재
- 리액트는 CSR이기 때문에 텅빈 html document를 보내주고 작성된 코드와 리액트 코드가 함께 브라우저에 전송되면서 Client Side에서 코드가 동작하면서 작성한 코드대로 필요한 DOM요소를(UI요소를) 동적으로 다이나믹하게 생성

#### 1. 동작순서
※ Network탭: 어떤 순서대로 어떤 파일들이 다운로드 되어 브라우저에 표기되어 있는지 확인 가능<br/>
⑴ localhost Document : html 페이지<br/>
⑵ bundle.js : 프로젝트를 브라우저에 보여주기 이전에 webpack이 코드*들을 압축해서 하나의 파일로 보여줌<br/>
　＊app코드와 리액트를 동작하기 위한 코드<br/>
⑶ 여러가지 정적 이미지, 파일 등

#### 2. 동작원리
- /src : 동적으로 만드는 코드를 작성하는 곳
- index.js : 리액트의 시작점
```sh
// 1) ReactDOM에 createRoot라는 API를 이용해서 div를 가져와서 root를 만들어줌
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2) root에다가 첫번째 컴포넌트에 렌더를 진행
root.render(
  <React.StrictMode>

    // 3) 그게 바로 App이라는 컴포넌트
    <App />

  /* 4) App 컴포넌트는 StrictMode에 감싸져 있고 JS에서 stric mode를 활성화시키는 처럼 개발할 때, 엄격한 모드에서 개발을 해나가고, 배포할 땐, 해당 모드가 잠시 꺼진다.
  그래서 무언가 잘못 작성하고 있다면 경고나 warning을 받아볼 수 있도록 감싸져있다. */
  </React.StrictMode>

  // 실제로 const root에 첫번째로 렌더링되는 컴포넌트는 App이다.
);
```
① 따라서, 사용자가 id가 root인 div요소가 담아져있는 html을 다운로드 받고, 리액트와 소스코드를 전부 다운로드 받으면<br/>
② 브라우저 상에서 id가 root인 요소를 찾아서 root라는 가상의 요소(const root)를 만들고<br/>
③ 여기에 App이라는 컴포넌트를 연결해줌<br/>
④ 그러면 react가 내부적으로 App컴포넌트를 들어가서 return되는 jsx문법을 확인한 후에<br/>
⑤ 브라우저에서 제공하는 create-element 라는 동적으로 DOM요소를 생성하는 API를 통해서 정해진 순서대로 해당되는 태그를 동적으로 만들어줌<br/>
⑥ 그래서 우리는 index.js에서 컴포넌트를 만들어가지 않고 App.js에서 컴포넌트 작업을 진행한다

</div>
</details>

<details>
<summary>6.문법정리</summary>
<div markdown="1">

> - 리액트 컴포넌트는 함수형태로 만들고 함수명은 대문자로 시작하며 반환(return)하는 것은 컴포넌트가 어떻게 ui를 표기할 것인지 명시하는 JSX문법을 사용 <br/>
> - 그리고 외부로부터 데이터를 주입받는 props와 각각의 컴포넌트 그 상태를 가지고 있는 state가 있음

## JSX
- JSX(JavaScript XML)는 기존 html을 작성하는 것과 동일하지만 유의사항 3가지<br/>
  ⑴ JSX를 반환할 때는 단 하나의 태그로만 반환 가능<br/>
    - 스타일링을 하거나 부모의 태그가 필요한 것이아니라 다수의 태그를 감싸는 역할만 하고 싶다면 텅텅빈 ```<></>``` 태그만 반환하면 된다<br/>
    - 해당 ```<></>``` 태그는 리액트 내부에서 ```<Fragment></Fragment>```라는 태그를 사용<br/>

  ⑵ html에서는 class라는 속성을 사용하지만, JSX에서는 className를 사용<br/>

  ⑶ JavaScript 코드를 작성할 때는 중괄호{}를 사용한다
    - App컴포넌트는 App.js안에 존재(basic > src > App.js > App)
    - 따라서 오브젝트{} 문법을 이용해서 자바스크립트 코드를 작성

- 명명규칙

  ⑴ 파일명
  - 리액트에서는 파일명을 따로 규정하고 있지 않음
    - e.x. CamelCase, underscore 등 회사마다 다르나 보통 리액트는 CamelCase으로 파일명을 작성
    - e.g. nextjs에서는 kebab-case를 주로 사용
  - 다만, 함수명과 export명만 동일하게 설정
  ```sh
    function App() {
      ...
    }
    export default App;
  ```

  ⑵ 확장자명
  - 리액트 컴포넌트라면 .jsx라고 하는 것을 더 선호
  - 순수 js파일과 컴포넌트 js파일을 쉽게 구분 가능
  - JavaScript로 개발한다면 .js/.jsx
  - TypeScript로 개발한다면 .ts/.tsx

※ https://react.dev/learn/writing-markup-with-jsx

## /basic
- React는 컴포넌트 들의 집합체이고
- 컴포넌트들을 재사용가능하고 외부상태에 고립되어 있는 독립된 하나의 단위로 만들어나가는 것이 중요하다
- 처음부터 완벽한 컴포넌트를 만드려고 하지 말고, 만들다가 재사용 가능한 작은 단위가 생기면 다시 잘게 만들면 됨
- e.g. Profile.jsx → Avatar.jsx

</div>
</details>