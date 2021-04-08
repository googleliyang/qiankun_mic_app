

> A basic project of Qiankun 2.0 which integrated with Vue.js、typescript 、elementUI

## main app
```
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── common
│   │   ├── components
│   │   ├── constants
│   │   └── http
│   ├── components
│   │   └── HelloWorld.vue
│   ├── config.ts
│   ├── layouts
│   │   ├── main
│   │   └── user
│   ├── main.ts
│   ├── mic-child-app.ts
│   ├── package.json
│   ├── router
│   │   └── index.ts
│   ├── shared
│   │   └── action.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   └── index.ts
│   ├── types
│   │   └── index.d.ts
│   └── views
│       ├── About.vue
│       ├── Debug.vue
│       ├── Home.vue
│       └── auth
├── tsconfig.json
└── vue.config.js
```

### child app

```
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── bootstrap.ts
│   ├── common
│   │   └── constants
│   ├── components
│   │   └── HelloWorld.vue
│   ├── config.ts
│   ├── main.ts
│   ├── public-path.ts
│   ├── router
│   │   └── index.ts
│   ├── shared
│   │   └── action.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   └── index.ts
│   ├── types
│   │   ├── index.d.ts
│   │   └── qiankun
│   └── views
│       ├── About.vue
│       └── Home.vue
├── tsconfig.json
└── vue.config.js
```

## Examples
Running the examples:

```bash
$ cd cms_frame && npm install && npm run dev
$ cd mic_child && npm install && npm run dev
```

## FAQ
We have collected some frequently asked questions. Before reporting an issue, please search if the FAQ has the answer to your problem.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-present Evan You
