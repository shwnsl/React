import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';
import countReducer from './components/countReducer';
import shopFn from './components/shopFn';
import moneyFn from './components/moneyFn';
import MemberList from './components/MemberList';


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
// import AddCap from './components/AddCap';
// import Submit from './components/Submit';
// import RadioMap from './components/RadioMap';
// import TextArea from './components/TextArea';
// import SelectBox from './components/SelectBox';
// import ImageComponent from './components/ImageComponent';
// import TotalCnt from './components/TotalCnt';

// 09 / 02
// import Button1 from './components/Button1';
// import StyledComponent from './components/StyledComponent';
// import ScssComponent from './components/ScssComponent';

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
  // const [val, valSet] = useState('안녕하세요');
  // const [font, setFont] = useState('10px');
  // function chgFont(size) {
  //   setFont(size)
  // }
  // const fontStyle = {
  //   fontSize : font
  // }

  // const [color, setColor] = useState('black');
  // function colChg(col) {
  //   setColor(col)
  // }
  // const fontColor = {
  //   color : color
  // }

  // const [txt, txtVal] = useState('하이요')
  // function txtChg(e) {
  //   txtVal(e.target.value)
  // }
  // function consoleTxt (e) {
  //   console.log(e.target.value);
  // }

  // 2. useStata() 설계 -> 초기값 : 객체
  // const [form, setForm] = useState(
  //   {username : ""},
  //   {message : ""}
  // )
  // function onChangeHandler(e) {
  //   // 객체나 배열의 값을 변경 => Spread 연산자
  //   // Spread 연산자로 값 복사한 경우 => 뒤에 나오는 값이 최신 값
  //   // 키를 만들때는 "e.target.name"으로 만들면 새로운 키 생성
  //   // 키를 만들 때는 반드시 []로 설정
  //   const newForm = {...form, [e.target.name] : e.target.value};
  //   // 원폰 form 객체를 newForm 값으로 변경
  //   setForm(newForm);
  // }

  // const [msg, setMsg] = useState({title: '제목'}, {color: 'black'})
  // function onTxt(ms) {
  //   const newTxt = {...msg}
  //   newTxt.title = ms
  //   newTxt.color = 'red'
  //   setMsg(newTxt)
  // }
  // function setAlert() {
  //   alert(msg.title)
  // }

  // const productList = [
  //   {
  //     name : '모자',
  //     price : 10000
  //   },
  //   {
  //     name : '신발',
  //     price : 30000
  //   },{
  //     name : '가방',
  //     price : 80000
  //   }
  // ]
  // const [cnt, cntVal] = useState(0);
  // function countUp() {
  //   cntVal((prev) => prev + 1)
  // }

  // 09 / 03
  // let [cnt, setCnt] = useState(0);
  // function cntUp() {
  //   setCnt(++cnt);
  // }
  // function cntDown() {
  //   setCnt(--cnt);
  // }
  
  // const [names, setNames] = useState(['jun', 'react']);
  // const [input, setInput] = useState('');
  // function inputChange(e) {
  //   setInput(e.target.value)
  // }
  // function uploadInput() {
  //   // state 기존 값을 유지하면서 새로운 값을 추가하려면 setState()의 콜백함수에 preState 값을 전달해서 유지
  //   setNames((prevState) => [input, ...prevState])
  // }

  // const [names2, setNames2] = useState(() => heavyWork()); // 콜백함수로 최초에 1번만 호출되게함
  // const [input2, setInput2] = useState('');
  // function inputChg(e) {
  //   setInput2(e.target.value)
  // }
  // function uploadInp() {
  //   // state 기존 값을 유지하면서 새로운 값을 추가하려면 setState()의 콜백함수에 prevState 값을 전달해서 유지
  //   setNames2((prevState) => [input2, ...prevState])
  // }
  // function heavyWork() {
  //   for (let i = 0; i < 10; i++) {
  //     console.log('줜나 길죠?')      
  //   }
  //   return ['앙','기모찌']
  // }
  // useEffect(()=> {
  //   console.log("렌더링 완료");
  //   console.log({names2});
  // },[names2])
  
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');
  // function countUp() {
  //   setCount(count + 1);
  // }
  // function chgText(e) {
  //   setText(e.target.value)
  // }
  // useEffect(() => {
  //   console.log("렌더링이 완료되어버려버려버려버려쓰마다");
  // },[])
  // useEffect(() => {
  //   console.log('count값이 변경되씀')
  // },[count])
  // useEffect(() => {
  //   console.log('text값이 변경되씀')
  // },[text])

  // const [cnt2, setCnt2] = useState(0);
  // const increment = () => {
  //   console.log("before update:", cnt2);
  //   setCnt2(cnt2 + 1);
  // }
  // useEffect(() => {
  //   console.log("after update:", cnt2);
  // },[cnt2])

  // function UseRef() {
  //   const ref = useRef('hi~');
  //   console.log("변경 전 ref값 : ", ref.current);
  //   ref.current = "fuck you~"
  //   console.log("변경 전 ref값 : ", ref.current);
  // }

  // const [state, setState] = useState(0);
  // const refs = useRef(0);
  // function upState() {
  //   console.log('state 변경')
  //   setState(state + 1);
  // }
  // function upRef() {
  //   refs.current = refs.current + 1;
  //   console.log(refs.current)
  // }

  // const [refresh, setRefresh] = useState(0); // 렌더링
  // const ref = useRef(0);
  // let lets = 0;
  // function upRefCnt() {
  //   ref.current = ref.current + 1;
  //   console.log('ref :', ref.current)
  // }
  // function upLet() {
  //   lets++;
  //   console.log('let :', lets)
  // }
  // function renderOn() {
  //   setRefresh(refresh + 1);
  // }

  // const [count2, setCount2] = useState(0);
  // const renderCnt = useRef(0);
  // useEffect(() => {
  //   renderCnt.current = renderCnt.current + 1;
  //   console.log('render finish')
  // })

  // const inputRef = useRef();
  // useEffect(() => {
  //   console.log(inputRef)
  //   inputRef.current.focus();
  // },[])

  // const [text2, setText2] = useState('')
  // const inputText = useRef(); // inputText = { current : <input> }
  // function sentText() {
  //   // input 태그 안의 내용 : inputText.current
  //   setText2(inputText.current.value) // 렌더링 -> inputText.currnet.value 화면 업데이트
  //   console.log('렌더링 완료')
  // }

  // const [name, setName] = useState('jun');
  // const [age, setAge] = useState(23);
  // const nameRef = useRef();
  // const ageRef = useRef();

  // const [hardNum, setHardNum] = useState(1);
  // const [easyNum, setEasyNum] = useState(1);
  // const hardSum = useMemo(() => hardCalc(hardNum), [hardNum]);
  // const easySum = easyCalc(easyNum);
  // function hardCalc(number) { // number = hardNum
  //   for (let i = 0; i < 100; i++) {
  //     console.log(i)      
  //   }
  //   return number + 10000;
  // }
  // function easyCalc(number) {
  //   return number + 1;
  // }

  //  09 / 04
  const [count, setCount] = useState(0);
  const clkFn = useCallback(() => {
    console.log('count :', count)
  },[count])
  useEffect(() => {
    console.log('렌더링 완료')
  },[clkFn])

  const [count2, setCount2] = useState(0);
  const updateFn = useCallback(() => {
    console.log('update');
  },[])

  const [state, dispatch] = useReducer(countReducer, 0);
  function numUp() {
    dispatch({type: "increment", icon: "♠"})
  }
  function numDown() {
    dispatch({type: "decrement", icon: "♣"})
  }

  const [price, shop] = useReducer(shopFn, 0);
  function hamburger() {
    shop({type: 'hamburger', price: 5000})
  }
  function fried() {
    shop({type: 'fried', price: 3000})
  }
  function cola() {
    shop({type: 'cola', price: 1000})
  }

  const [money, moneyFunc] = useReducer(moneyFn, 200000)
  const [bank, setBank] = useState(0)
  function getMoney() {
    moneyFunc({type: 'get', price: bank})
  }
  function sendMoney() {
    moneyFunc({type: 'send', price: bank})
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "addMember":
        return{
          count: state.count + 1,
          member: [...state.member, action.newUser],
        }
        case "deleteMember":
          return{
            count: state.count - 1,
            member: state.member.filter((user) => user.name !== action.username),
          }
      default:
        return state;
    }
  }
  
  const initialState = {
    count: 0,
    member: []
  }
  
  const [userList, dispatch2] = useReducer(reducer, initialState);
  const [newUser, setNewUser] = useState({});
  function changeHandler(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
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
      {/* <h3 style={fontStyle}>{val}</h3>
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
      <h3>내용 : {form.message}</h3> */}
      {/* 1. input 태그에 name 설정 */}
      {/* 3. 함수 설정 */}
      {/* <input type='text' name='username' onChange={onChangeHandler}></input>
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
      <TotalCnt onCnt = {countUp}/> */}

      {/* 09 / 02  */}
      {/* <Button1 />
      <StyledComponent />
      <ScssComponent/> */}

      {/* 09 / 03 */}
      {/* <h2>현재 카운터 값은 {cnt}입니다.</h2>
      <button onClick={cntUp}>+1</button>
      <button onClick={cntDown}>-1</button>
      <hr/>
      <input type='text' onChange={inputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (<p key={idx}>{name}</p>))}
      </div>
      <hr/>
      <input type='text' onChange={inputChg} />
      <button onClick={uploadInp}>추가</button>
      <ul>
        {names2.map((name, idx) => (<li key={idx}>{name}</li>))}
      </ul>
      <hr/>
      <h1>{count}</h1>
      <button onClick={countUp}>+1</button>
      <hr/>
      <input type='text' onChange={chgText}></input>
      <h3>{text}</h3>
      <hr/>
      <p>Count : {cnt2}</p>
      <button onClick={increment}>increment</button>
      <hr />
      <h3>state 값 : {state}</h3>
      <h3>ref 값 : {refs.current}</h3>
      <button onClick={upState}>state</button>
      <button onClick={upRef}>ref</button>
      <hr/>
      <h3>Ref 값 : {ref.current}</h3>
      <h3>변수 값 : {lets}</h3>
      <button onClick={upRefCnt}>ref</button>
      <button onClick={upLet}>let</button>
      <button onClick={renderOn}>rendering</button>
      <hr/>
      <h1>Count : {count2}</h1>
      <h1>Render : {renderCnt.current}</h1>
      <button onClick={() => setCount2(count2 + 1)}>click</button>
      <hr />
      ID : <input type='text' ref={inputRef}></input>
      <hr/>
      <input type='text' ref={inputText}></input>
      <button onClick={sentText}>전송</button>
      <h3>전송된 단어 : {text2}</h3>
      <hr/>
      <h3>input 태그 value 값 지정</h3>
      이름 : <input type='text' value={name} ref={nameRef} onChange={(e) => setName(nameRef.current.value)}></input><br/>
      나이 : <input type='number' value={age} ref={ageRef} onChange={(e) => setAge(ageRef.current.value)}></input>
      <hr />
      <h3>어려운 계산기</h3>
      <input type='number' value={hardNum} onChange={(e) => setHardNum(parseInt(e.target.value))}></input>
      <span> + 10000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input type='number' value={easyNum} onChange={(e) => setEasyNum(parseInt(e.target.value))}></input>
      <span> + 10000 = {easySum}</span> */}

      {/* 09 / 04 */}
      <input type='number' value={count} onChange={(e) => setCount(e.target.value)}></input>
      <button onClick={clkFn}>숫자 출력</button>
      <hr/>
      <input type='number' onChange={(e) => setCount2(e.target.value)} />
      <ChildComponent update={updateFn} />
      <hr/>
      <p>현재 카운터 값은 <b>{state}</b></p>
      <button onClick={numUp}>+1</button>
      <button onClick={numDown}>-1</button>
      <hr/>
      <h1>햄버거 가게</h1>
      <h2>지불할 금액 : {price}</h2>
      <h3>주문 목록 : </h3>
      <button onClick={hamburger}>hamburger</button>
      <button onClick={fried}>fried</button>
      <button onClick={cola}>cola</button>
      <hr/>
      <h1>금액 입력</h1>
      <input type="number" step={1000} value={bank} onChange={(e) => setBank(parseInt(e.target.value))}/>
      <h2>입금 또는 출금 버튼 클릭</h2>
      <button onClick={sendMoney}>입금</button>
      <button onClick={getMoney}>출금</button>
      <p>현재 잔액 : {money}</p>
      <hr/>
      <h1>전체 회원 수 : {userList.count}</h1>
      이름 : <input type='text' name="name" onChange={changeHandler}/>
      나이 : <input type='number' name="age" onChange={changeHandler}/>
      지역 : <input type='text' name="address" onChange={changeHandler}/><br/>
      <button onClick={() => {dispatch2({type: "addMember", newUser: newUser})}}>추가</button>
      <MemberList userList={userList.member} dispatch2={dispatch2}/>
    </div>
  );
}
export default App;

