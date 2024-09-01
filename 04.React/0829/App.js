import { useState } from 'react';
import './App.css';
import AddCap from './components/AddCap';
import Submit from './components/Submit';
import RadioMap from './components/RadioMap';
import TextArea from './components/TextArea';
import SelectBox from './components/SelectBox';
import ImageComponent from './components/ImageComponent';
import TotalCnt from './components/TotalCnt';


// 08 / 28
// import logo from './logo.svg';
// import TDPlan from './components/TDPlan';
// import HeaderComponent from './components/HeaderComponent';
// import BodyComponent from './components/BodyComponent';
// import FooterComponent from './components/FooterComponent';
// import MenuWrap from './components/MenuWrap';
// import BooleanComponent from './components/BooleanComponent';
// import DefaultComponet from './components/DefaultComponet';
// import Wrapper from './components/Wrapper';
// import Introduce from './components/Introduce';
// import Name from './components/Name';
// import PropTypesComponent from './components/PropTypesComponent';

// 08 / 29
// import MovieComponent from './components/MovieComponent';
// import PriceList from './components/PriceList';
// import TodoList from './components/TodoList';
// import ChangeProps from './components/ChangeProps';
// import SpreadAction from './components/SpreadAction';
// import ChildLift from './components/ChildLift';
// import UserID from './components/UserID';
// import UserPW from './components/UserPW';

// 08 / 30

function App() {
  // 08 / 28
  // const name = 'jun'
  // const styler = {
  //   backgroundColor: 'red',
  //   color : 'yellow'
  // }

  // 08/ 29
  // const movieList = [
  //   {name: '어벤져스1', date: '2012.04.15', src: "https://i.namu.wiki/i/mtRB0r36gtDzvae0RPzJd4C_iC7EtxvDcHe056ICVcrE9d5X-Up3zUzZWMVqetYhMR5m8oHiJFH7RZ320jRStA.webp"},
  //   {name: '어벤져스2', date: '2014.07.15', src: "https://i.namu.wiki/i/orGW03fkt13RSflpjclnOg3dBmlAAdIDJMiR0EsmN29A_5bWidWRMwQwjdpnRAH72HK8v6hyXMZcynazmkqvYw.webp"},
  //   {name: '어벤져스3', date: '2020.05.15', src: "https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp"},
  //   {name: '어벤져스4', date: '2021.05.15', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gEwTT0O-wnJfIL8t02RGs2OwCJ_xENWGug&s"},
  // ];
  // const todoList = [
  //   {task: '빨래', fin: false},
  //   {task: '공부', fin: true},
  // ]
  // const priceList = [1000, 2000, 3000, 5000];
  // const names = ['HTML','CSS','JavaScript','React'];
  // const nameList = names.map(name =><li>{name}</li>)
  // // state
  // const [인사, 인사변경] = useState(['안녕','병신','호구','새끼들아?']);
  // const [font, setFont] = useState("100px");
  // const fontStyle = {
  //   fontSize: font
  // }
  // let [value, setValue] = useState(0);
  // function onClk() {
  //   setValue(++value)
  // }
  // function onCl() {
  //   setValue(value = 0)
  // }
  // let [val, setVal] = useState('안녕하쇼')
  // function logIn() {
  //   setVal('로긴')
  // }
  // function logOut() {
  //   setVal('로갓')
  // }

  // const [val1, setVal1] = useState(['안녕', '하이'])
  // function changeArr() {
  //   const newVal = [...val1];
  //   newVal[1] = 'hello'
  //   setVal1(newVal)
  // }

  // const [val2, setVal2] = useState('');
  // function addDataHandler(data) {
  //   setVal2(data);
  // }

  // const [idVal, idValSet] = useState('')
  // const [pwVal, pwValSet] = useState('')
  // function addIdHandler(id) {
  //   idValSet(id)
  // }
  // function addPwHandler(pw) {
  //   pwValSet(pw)
  // }
  // function loginChk() {
  //   if(idVal === 'jun' && pwVal === '789123') {
  //     alert('success')
  //   } else {
  //     alert('fail')
  //   }
  // }

  // 08 / 30
  // const [val,valSet] = useState('')
  // function hello() {
  //   valSet('안녕하세요')
  // }
  const [val, valSet] = useState('안녕하세요');
  const [font, setFont] = useState('10px');
  function chgFont(size) {
    setFont(size)
  }
  const fontStyle = {
    fontSize : font
  }

  const [color, setColor] = useState('black');
  function colChg(col) {
    setColor(col)
  }
  const fontColor = {
    color : color
  }

  const [txt, txtVal] = useState('하이요')
  function txtChg(e) {
    txtVal(e.target.value)
  }
  function consoleTxt (e) {
    console.log(e.target.value);
  }

  // 2. useStata() 설계 -> 초기값 : 객체
  const [form, setForm] = useState(
    {username : ""},
    {message : ""}
  )
  function onChangeHandler(e) {
    // 객체나 배열의 값을 변경 => Spread 연산자
    // Spread 연산자로 값 복사한 경우 => 뒤에 나오는 값이 최신 값
    // 키를 만들때는 "e.target.name"으로 만들면 새로운 키 생성
    // 키를 만들 때는 반드시 []로 설정
    const newForm = {...form, [e.target.name] : e.target.value};
    // 원폰 form 객체를 newForm 값으로 변경
    setForm(newForm);
  }

  const [msg, setMsg] = useState({title: '제목'}, {color: 'black'})
  function onTxt(ms) {
    const newTxt = {...msg}
    newTxt.title = ms
    newTxt.color = 'red'
    setMsg(newTxt)
  }
  function setAlert() {
    alert(msg.title)
  }

  const productList = [
    {
      name : '모자',
      price : 10000
    },
    {
      name : '신발',
      price : 30000
    },{
      name : '가방',
      price : 80000
    }
  ]
  const [cnt, cntVal] = useState(0);
  function countUp() {
    cntVal((prev) => prev + 1)
  }
  return (
    <div>
      {/* 08/28  */}
      {/* <h1 style={styler}>안녕?</h1>
      <div className='bgStyle'>{name}</div>
      <div style={{ color: 'yellow', backgroundColor: 'blue' }}>
        { name === 'jun' ? (<p>준희</p>) : (<p>병신</p>) }
      </div>
      <div>
        { name === 'jun' && (<p>준희</p>) }
      </div>
      <TDPlan />
      <br />
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
      <MenuWrap />
      <Wrapper>
        <BooleanComponent study/>
        <BooleanComponent />
        <DefaultComponet name = "시발련" />
        <DefaultComponet />
      </Wrapper>
      <Introduce name="노주니" age={24} address="서울" />
      <Name>
        노준희
      </Name>
      <PropTypesComponent item = "candy" price={2000}/> */}

      {/* 08/29 */}
      {/* {
        movieList.map((movie) => (
          <MovieComponent name={movie.name} date={movie.date} src={movie.src}/>
        ))
      }
      {
        todoList.map(todo => <TodoList task = {todo.task}/>)
      }
      <h1>가격목록</h1>
      {
        priceList.map((price, index) => (
          <PriceList price={price} key={index}/>
        ))
      }
      <ul>
        {nameList}
      </ul>
      <ChangeProps name = 'jun'/> 
      <div style={fontStyle}>{인사[0]}</div>
      <div>{인사[1]}</div>
      <div>{인사[2]}</div>
      <div>{인사[3]}</div>
      <h1>{value}</h1>
      <button onClick={onClk} onMouseOut={onCl}>클릭</button>
      <h1>{val}</h1>
      <button onClick={logIn}>로긴</button>
      <button onClick={logOut}>로갓</button>
      <br/>
      <SpreadAction />
      <h1>{val1[0]}</h1>
      <h1>{val1[1]}</h1>
      <button onClick={changeArr}>배열바꾸기</button>
      <h1>ChildComponet로부터 전달받은 데이터 : {val2} </h1>
      <ChildLift onAddData={addDataHandler} />
      <br/>
      <UserID onAddId={addIdHandler}/>
      <UserPW onAddPw={addPwHandler}/>
      <button onClick={loginChk}>배열바꾸기</button> */}

      {/* 08 / 30 */}
      {/* <h1>{val}</h1>
      <button onClick={hello}>클릭</button> */}
      <h3 style={fontStyle}>{val}</h3>
      <button onClick={() => {chgFont('50px')}}>변환</button>
      <button onClick={() => {setFont('80px')}}>변환</button>

      <h3 style={fontColor}>글자색 변경</h3>
      <button onClick={() => {colChg('red')}}>빨</button>
      <button onClick={() => {colChg('green')}}>초</button>
      <button onClick={() => {colChg('blue')}}>파</button>

      <h3>{txt}</h3>
      <input type='text' onChange={txtChg}></input>
      <input type='text' onChange={consoleTxt}></input>
      <input type='text' onChange={(e) => {console.log(e.target.value)}}></input>
      <input type='text' onChange={(e) => {txtVal(e.target.value)}}></input>

      <h3>사용자 이름 : {form.username}</h3>
      <h3>내용 : {form.message}</h3>
      {/* 1. input 태그에 name 설정 */}
      {/* 3. 함수 설정 */}
      <input type='text' name='username' onChange={onChangeHandler}></input>
      <input type='text' name='message' onChange={onChangeHandler}></input>

      <h3 style={{color : msg.color}}>{msg.title}</h3>
      <hr/>
      <input type='text' name="title" onChange={(e) => {onTxt(e.target.value)}}></input>
      <button onClick={setAlert}>클릭</button><hr/>

      <AddCap list = {productList}/>
      <Submit />
      <RadioMap/>
      <TextArea/>
      <SelectBox/>
      <ImageComponent/>
      <h1>Total Count : {cnt} </h1>
      <TotalCnt onCnt = {countUp}/>
      <TotalCnt onCnt = {countUp}/>
    </div>
  );
}
export default App;

