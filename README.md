# install

### code formatter prettier

- ref: https://prettier.io/

### redux (client state)

- ref: https://ko.redux.js.org/introduction/getting-started/

```
$ yarn add @reduxjs/toolkit react-redux redux-persist redux-saga
```

1. 함수형에서 hooks사용법

### react-query (server state)

- server state? : api response의 캐싱된 데이터를 의미한다.

- ref: https://tanstack.com/query/v4

-ref: https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery

```
$ yarn add @tanstack/react-query
```

### lodash

```
$ lodash
```

### fake api 사용

```
- ref: https://jsonplaceholder.typicode.com/
```

# css frameworl

### tailwind

### mui, styled components

### react는 mvc?

- ref: https://reactjs.org/blog/2013/06/05/why-react.html

### 페이스북 팀에서 상속을 강력하게 권장하지 않는 이유

- ref: https://reactjs.org/docs/composition-vs-inheritance.html
  일반적인 상속은 react의 적이다. 이것을 react의 철학에 맞춰 해석할 필요가 있다.(hoc, children)

  ### HOC 설명

- ref: https://reactjs.org/docs/higher-order-components.html
- ref: https://ko.reactjs.org/docs/composition-vs-inheritance.html (번역)

### atomic design?

- ref: https://bradfrost.com/blog/post/atomic-web-design/

하지만 위 내용은 디자인을 중점으로 둔 개념이고 react에선 이것을 해석하여 기능을 중점으로 쪼갠다.

이로인해 react 세계관에선 모듈화가 중요하고 번들링 퍼포먼스가 중요하다.
시대의 니즈로 인하여

- vite
  ref: https://vitejs-kr.github.io/guide/

- nextjs swc bundler
  ref: https://nextjs.org/docs/advanced-features/compiler
  (rust 언어로 탈 babel화)

### react에서 solid 원칙 적용하기

- ref: https://medium.com/dailyjs/applying-solid-principles-in-react-14905d9c5377

### rerender issue

### react set interval(with closer)

- ref: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
