
// import Macaron from "./Macaron";
// import cakes from "./cakes.json";

// function App() {
//   return (
//     <>
//       <div className="App">"안녕하세요"</div>
//       {/*.map : 배열을 하나하나 가지고 와서 호출해준다. (= for in, for of, for each와 비슷)*/}
//       {/* props이름 : 택배사 이름이라고 생각하면된다. 데이터를 전송한다
//        상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터이다. */}
//       {cakes.map(cake => (
//         <Macaron 
//         // propsid, propsname, propsimage는 props의 속성이름이 된다, 뒤에 이름은 자유.
//         // cake(객체 하나).id(cakes.json에 있는 속성 이름)
//         propsid = {cake.id}
//         propsname = {cake.name}
//         propsimage = {cake.images}
//         />
//       ))}
//     </>
//   );
// }

// export default App;

// rce치면 바로 나옴..
import React, { Component } from 'react';
import Food from './Food';

class App extends Component {
  // 함수 주기 함수 4가지
  constructor(props){
    super(props);
    console.log('constructor 함수는 클래스형 컴포넌트가 생성할 때 호출됨');
  }

  componentDidMount(){
    console.log('componentDidMount 함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate 함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount 함수는 컴포넌트가 죽을 때 실행되는 함수')
  }

  state = {
    count: 0,
    sum: 0,
    avg: 0,
  }

  add =()=>{
    console.log('더하기');
    // this.state.count = 1;
    // this.setState({count:1});
    this.setState({count: this.state.count + 1});
  }
  minus =()=>{
    console.log('빼기');
    // this.state.count = -1;
    // this.setState({count:-1});
    // this.setState({count: this.state.count - 1});

    // 여러개의 속성 값을 변경하고 싶을 때 사용
    this.setState(current => (// current는 this.state
      {
        count: current.count -1,
        sum: current.sum -2,
        avg: current.avg -3,
      }
    ));
  }

  render() {
    //this : 현재 컴포넌트를 나타낸다. (여기서는 App컴포넌트)
    const {count, sum, avg} = this.state; //구조 분해 할당

    return (
      <>
      <div>App</div>
      <div>
        <h1>현재 숫자는 {count}입니다</h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
      </div>
      <Food />
      </>
    )
  }
}

export default App;
