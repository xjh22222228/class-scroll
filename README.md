## Demo

[demo.js](./demo.js)

## Install

```bash
npm install class-scroll
# or
yarn add class-scroll
# or
pnpm add class-scroll
```

## Usage

```js
import ClassScroll from 'class-scroll'

const classScroll = new ClassScroll([
  el: '#app',
  className: 'animate__animated animate__fadeIn',
  threshold: 0.5,
  delay: 0,
]).init()
```

## Config

| Fields     | Descriptions                                                                                        | 类型              |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------- | -------- | ---- |
| el         | `required` Node or selector                                                                         | Element / String  |
| className  | `required` The class that needs to be added when the element is visible                             | String            |
| delay      | Delay adding class                                                                                  | Number            |
| threshold  | [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold)   | Number / Number[] |
| root       | [root](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root)             | Element           | Document | null |
| rootMargin | [rootmargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) | Element           | String   |
| onVisible  | Callback method when element is visible                                                             | Function          |
| onHidden   | Callback method when element is not visible                                                         | Function          |
