// function Football() {
//     const shoot = (arg) => {
//         alert(arg);
//     };

//     return (
//         // <button type="button" onClick={shoot()}>Take the shot!</button>
//         <button type="button" onClick={() => shoot("The tremendese Goal Son!!!!")}>Take the shot!</button>
//     );
// }
//리액트에서 트리거하는 버튼 클릭

// 12/16

function Football() {
    const shoot = (a, e) => {  //a= arg e=event
        alert(a + ", " + e.type);
    };
    // 리액트에서 event를 처리하기위한 사용법
    return (
        <button type="button" onClick={(event)=> shoot("The tremendese Goal Son!!!", event)}>Take the shot!</button>
    ); //리액트가 이벤트를 호출할때 쓰는방법 arg 값으로 event를 넣어주면 shoot에 arg값을 "son " event e 값을 event로 전달
}

export default Football;

// 12/16