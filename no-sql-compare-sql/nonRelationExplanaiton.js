//Please delete this and write your explanation ...

/*
관계형 database는 reference key를 사용해서 data table 간의 관계를 정의한다.
이 경우 원본 data가 바뀌면 이를 reference key로 참조한 data도 같이 수정되며
원본 data의 primary key만 단독으로 삭제할 경우 에러가 발생한다.

비관계형 database는 data가 독립적으로 저장되며,
연관 data의 일부가 수정될 경우 전체 database를 수정 해야할 수도 있다.

예) 비관계형에서 teacher table이 있고 teacher id를 포함한 lecture table이 있을경우
teacher table 이 수정되면 lecture table에서 수정사항을 하나하나 찾아서 수정해야한다.

*/