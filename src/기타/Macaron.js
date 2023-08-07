//Macaron.js
// 클래스형 컴포넌트 rce

/*
import React, { Component }from 'react'

// Component은 원본이다.
// 리엑트에 있는 class Component를 Macaron이 상속받는다라는 뜻
// 누구나 상속 받을 수 있는 건 없다
// export 없어도 ok
export class Macaron extends Component{
  // render() : 화면으로 출력하는 것을 돕는다.
  render(){
    return(
      <div>Macaron</div>
    )
  }
}

export default Macaron
*/

// 함수형 컴포넌트 rfce
import React from "react"

//App에서 작성한 props 프로퍼티가 들어와 있기 때문에 매개변수에 props를 적으면 콘솔에 찍힌다.

// 기본형태
// function Macaron(props){
//   console.log(props);
//   return(
//     // {props.속성이름}을 작성하면 그대로 들어간다
//     <div>
//       <h1>No. {props.propsid}</h1>
//       <h2>Name : {props.propsname}</h2>
//       <img src={props.propsimage} alt={props.propsname} width={200} height={200}/>
//     </div>
//   )
// }

// function Macaron(props){
//   console.log(props);
//   const {propsname, propsid, propsimage} = props; //구조분해할당
//   return(
//     // 구조분해할당을 사용하면 객체 속성 이름만 적어도 된다.
//     <div>
//       <h1>No. {propsid}</h1>
//       <h2>Name : {propsname}</h2>
//       <img src={propsimage} alt={propsname} width={200} height={200}/>
//     </div>
//   )
// }

//함수 자체를 구조분해 할당의 모습으로 내보낼 수 있다(주로 이 형식을 사용함)
function Macaron({propsname, propsid, propsimage}){
  return(
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name : {propsname}</h2>
      <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}

export default Macaron