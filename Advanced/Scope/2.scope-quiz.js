{
    const x =1;
    {
        const y = 2;
        console.log(x); //1
    }
    console.log(x); // 1
    // console.log(y); // app crush
}
// 블럭 안에 있는 변수는 해당 블럭 외부에서 참조할 수 없다.
// 하지만 내부에서는 그 상위 블럭의 변수를 참조 할 수 있다.


const text = 'global'   // 전역 변수(글로벌 변수), 전역 스코프( 글로벌 스코프) : 블럭 외부에 , 파일에 정의되어 있는 변수,
{
    const text = 'inside block1' //지역 변수(로컬변수), 지역 스코프(로컬 스코프)
    {
        console.log(text); //inside block1
    }
}

// 해당 스코프에서 참조를 했는데 해당 스코프에 없다면 그 상위 스코프에서 참조 대상을 찾는다.