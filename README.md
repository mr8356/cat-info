## 고양이 인스타 백엔드

- 고양이들이 회원가입하고 로그인해서 사진도 올릴수 있고, 조회할수 있는 고양이 인스타를 제작했습니다.
- 프론트엔드 코드는 미완성입니다.
- aws브랜치에 보시면 aws 버킷이랑 연동하는 코드도 있습니다.


- 로그인은 JWT 토큰화를 이용해서 로그인하면 토큰을 발급해 bearer 헤더에 요청을 보내서 로그인 하도록 했습니다.
- .env 파일을 숨겼으므로 clone만으로는 동작하지 않습니다.





## 기술 Stack

TypeScript , MongoDB , NestJS , AWS




## 네스트란?

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>
네스트JS는 nodejs 프레임워크로 npm을 이용해 설치할수 있습니다.
주 언어는 TS이고, 구조가 java 스프링이랑 거의 동일합니다.





## Installation

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
