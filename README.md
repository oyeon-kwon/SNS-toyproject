# SNS-toyproject

## 완성본 미리보기
![demo](https://user-images.githubusercontent.com/61301574/167523966-ead6717f-70be-41d0-a8e7-880ca4669342.gif)


## 프로젝트 실행 방법
```
cd client
npm install
npm run start
```

## Stack
* React

## 구현한 기능 목록
* Facebook Feed처럼 글을 올리고 그 글에 댓글을 달아 사용자간 소통이 가능한 소셜피드 서비스
* 회원가입, 로그인 기능
* 포스팅 입력 및 포스트 기능
* 포스트 보기 기능
* 댓글 작성 기능

## 에러 핸들링
* 댓글이 새로 등록될 때 mockData 에 추가는 되지만, 화면 상에 새롭게 렌더링이 되지 않는 문제
    * 해결 방법: useEffect 를 활용해서 컴포넌트 코멘트의 상태가 변경될 때마다 리렌더링이 이루어질 수 있도록 구현
