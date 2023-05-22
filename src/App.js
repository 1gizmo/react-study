import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import ClickEvent from './component/chap01_event/ClickEvent';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';

function App() {

  const looping =  () => {
      const helloList = [];
          for (let i = 0; i < 5; i++){
           helloList.push(<SayHello />);
          }
          return helloList;
  }

  // jsx 문법에서는 스크립트를 코드를 직접사용 불가능
  // {} 안에서 함수호출문이나 변수참조를 할 수 없음
  return (

    <>
      <SubmitEvent />
    </>

  );
}

export default App;
