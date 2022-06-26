# JFGI Nuxt 3 예제 프로젝트

Nuxt 3 예제 프로젝트입니다.

## 프로젝트 사용하기

### 실행하기

```shell
# 패키지 설치
npm install

# 프로젝트 실행
npm run dev
```

### 필요한 Visual Studio Code 확장

\* 기호가 있는 확장은 반드시 필요합니다.

- \*[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar), \*[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin): Vue.js 구문 강조와 자동 완성 등을 위해 필요한 확장입니다.
- \*[Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): 커밋 문구 작성을 도와주는 확장입니다.
- \*[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), \*[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): 코드 형식과 품질 유지를 위해 사용되는 확장입니다.
- [Korean(사용법) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ko): VSCode의 언어를 한국어로 표시하는 확장입니다.
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css), [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion): 스타일 코드 작성을 도와주는 확장입니다.
- [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview): SVG 파일을 편집기에서 미리 보여주는 확장입니다.
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): 패키지 버전 확인 및 관리를 도와주는 확장입니다.
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): `import`나 `require`로 가져온 모듈의 크기를 보여주는 확장입니다.

## 프로젝트 구조

[Nuxt.js 3](https://v3.nuxtjs.org/)를 사용해 아래 구조로 되어 있습니다.

```
📦 Project
├ 📁 assets
├ 📁 components
├ 📁 node_modules
├ 📁 pages
├ 📁 public
├ 📄 .gitignore
├ 📄 .prettierrc.json
├ 📄 app.vue
├ 📄 nuxt.config.ts
├ 📄 package.json
├ 📄 README.md
└ 📄 tsconfig.json
```

### assets 폴더

사진이나 영상, 음성 등의 자산을 저장하는 폴더입니다. 자세한 설명은 `assets` 폴더의 `📘.md` 문서에서 볼 수 있습니다.

### components 폴더

Vue로 작성된 컴포넌트를 저장하는 폴더입니다. 자세한 설명은 `components` 폴더의 `📘.md` 문서에서 볼 수 있습니다.

### node_modules

사용되는 패키지가 저장되는 폴더입니다. 패키지를 설치할 때 자동으로 생성되며, 직접 관리하지 않아도 됩니다. 자세한 설명은 [NPM 문서](https://docs.npmjs.com/about-npm)에서 볼 수 있습니다.

### pages 폴더

페이지 별 Vue 컴포넌트를 저장하는 폴더입니다. 자세한 설명은 `pages` 폴더의 `📘.md` 문서에서 볼 수 있습니다.

### public 폴더

서버 최상위에 저장할 파일을 저장하는 폴더입니다. 자세한 설명은 `public` 폴더의 `📘.md` 문서에서 볼 수 있습니다.

### .gitignore 파일

깃으로 커밋을 할 때 포함시키지 않을 파일이나 폴더를 지정하는 파일입니다. Nuxt 프로젝트를 생성하면 기본 설정이 되어 있습니다.

### .prettierrc.json 파일

[Prettier](https://prettier.io/)를 사용해 코드를 형식을 맞출 때 사용되는 규칙을 지정하는 파일입니다. 프로젝트 설정을 사용하면 모두가 같은 형식으로 코드를 정리할 수 있습니다.

### app.vue 파일

프로젝트의 시작점이자 모든 페이지의 부모 컴포넌트인 파일입니다. 이 컴포넌트는 페이지가 변경되도 사라지거나 다시 렌더링되지 않습니다. 항상 유지되야 하는 기능을 정의할 때 사용됩니다. 자세한 설명은 [Nuxt 문서](https://v3.nuxtjs.org/guide/directory-structure/app)에서 볼 수 있습니다.

### nuxt.config.ts 파일

Nuxt 프로젝트를 사용할 때 필요한 설정을 지정하는 파일입니다. 자세한 설명은 [공식 문서](https://v3.nuxtjs.org/guide/directory-structure/nuxt.config)나 파일에서 볼 수 있습니다.

### package.json 파일

프로젝트에서 사용하는 패키지와 기본 정보를 저장하는 파일입니다. 패키지를 설치할 때는 이 파일을 기준으로 설치됩니다. 자세한 설명은 [NPM 문서](https://docs.npmjs.com/about-npm)에서 볼 수 있습니다.

### README.md 파일

지금 읽고있는 이 문서입니다 :) 자세한 설명은 [GitHub 문서](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)에서 볼 수 있습니다.

### tsconfig.json 파일

TypeScript를 사용할 때 필요한 설정을 지정하는 파일입니다. 보통 직접 관리하지 않아도 됩니다. 자세한 설명은 [TypeScript 문서](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)에서 볼 수 있습니다.

Nuxt에서는 자동 import 기능을 위해 사용하기도 합니다. 자세한 설명은 [Nuxt 문서](https://v3.nuxtjs.org/guide/directory-structure/tsconfig)에서 볼 수 있습니다.
