# Turborepo with shadcn/ui and story book

Turborepo shadcn/ui tailwind storybook 세팅  
[베이스프로젝트](https://github.com/dan5py/turborepo-shadcn-ui)

> [!NOTE] > `pnpm` 을 패키지 매니저로 사용하고 있습니다.

## 사용 방법

### 컴포넌트 추가

Use the pre-made script:

```sh
pnpm ui add <component-name>
```

> `shadcn/ui` CLI를 사용하는 것 처럼 동작합니다.

### Add a new app

터보 레포를 이용해 새로운 패키지를 추가합니다.

```sh
pnpm turbo gen workspace --name <app-name>
```

`apps` directory에 새로운 프로젝트를 추가합니다.

새로운 프로젝트를 복재하기를 원한다면 아래 커맨드를 입력하세요.

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE] > `pnpm install` 을 까먹지 마세요!

### Utilities

TypeScript, EsLink, Prettier 설정이 추가 되어 있습니다.

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

### Build

빌드를 하려면 아래 명령어를 입력하세요

```sh
cd 디렉토리
pnpm build
```

### Develop

개발 모드로 실행 시키려면 아래 명령어를 입력하세요

```sh
cd 디렉토리
pnpm dev
```

```sh
npx turbo link
```

## Useful Links

터보래포

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

shadcn/ui

- [shadcn](https://ui.shadcn.com/docs)
