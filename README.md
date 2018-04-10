# carefree

Call a promise or callback function without care any exception

```js

const carefree = require('carefree');

(async ()=> {
  await carefree(async()=>{ throw new Error()});
  console.log('Do not care the error above. Just run!');
})();

```

## API

```js
carefree(fn: AsyncFunction | Function | Promise): Promise<Error|null>
```
