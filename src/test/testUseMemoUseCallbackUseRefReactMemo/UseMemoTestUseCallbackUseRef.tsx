import React, { useCallback, useMemo, useRef, useState } from "react";
import Child from "./Child";
const sideObj = { name: "Eldar" };
const sideArr = [{ name: "Eldar", sname: "Alibeyli" }];

export default function UseMemoUseCallbackUseRefTest() {
  console.log("Parent Re-Render");
  const [number, setNumber] = useState(0);

  const [text, setText] = useState("");
  //PRIMITIF TIPLER NUMBER STRING BOOLEAN
  const dataNumber = 1;
  //-----------------------------------USEMEMO----------------------------------------------

  /* const dataObj = { name: "Elmar" }; */
  const dataObj = useMemo(()=>{
    return { name: "Elmar" }
  },[]);

  /*/
    const dataObj = useMemo(()=>{
      return { name: "Elmar" }
    },[number]);
    number deyisdiyinde useMemo yeniden chalisir ve yenede { name: "Elmar" } bu objectin
    Rumda yeri deyisir
  /*/

  /* const dataArr = [{ name: "Elmar", sname: "Alibeyli" }]; */
  const dataArr = useMemo(()=>{
    return [{ name: "Elmar", sname: "Alibeyli" }];
  },[]);

  //----------------------------------USECALLBACK-----------------------------------------------
  
  /* function calc() {
    return 5 + 6;
  } */
  const calc = useCallback(()=> {
      return 5 + 6;
  },[]);
  //------------------------------------USEREF---------------------------------------------
  const refObj = useRef({name: "Rəşad", sname: "Alibeyli"});
  let str = "Ali";
  let  dataObj1 = {name: "Ramin"}

  const inputRef = useRef<HTMLInputElement | null>(null);
  const changeRef = () => {
    dataObj1 = {name: "Elcin"}
    str = "Ceyhun"
    refObj.current = {name: "Eldar",sname: "Alibeyli"}
    inputRef.current?.focus();
  }
  
  const useMomeRefObjCurrently = useMemo (()=> { return refObj.current },[])
  const nameRef:React.LegacyRef<HTMLInputElement> = useRef<HTMLInputElement | null>(null);
  const passRef: React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
  const onApiRequest = (e: React.SyntheticEvent) => {
    e.preventDefault();
  //API CALL
    const name = nameRef.current?.value;
    const password = passRef.current?.value;
    console.log({name , password})
  }
  return (
    <div className="App">
      <Child 
        dataNumber={dataNumber} 
        dataObj={dataObj} 
        dataArr={dataArr} 
        sideObj = {sideObj}
        sideArr = {sideArr}
        calc = {calc}
        refObj = {refObj}
        refCurrently = {useMomeRefObjCurrently}
        ref = { inputRef}
      />
      <hr />
      <h1>Parent Number is {number} </h1>
      <button onClick={() => setNumber((number) => number + 1)}>
        IncNumber
      </button>
      <div>
        useRef object { JSON.stringify(refObj.current)}
      </div>
      <div>
        useRef object { JSON.stringify(useMomeRefObjCurrently)}
      </div>
      <div>
        str is {str}
      </div>
      <div>
        dataObj is {JSON.stringify(dataObj1)}
      </div>
      <button onClick={changeRef}>
        Change refObject current value
      </button>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
      <hr/>
        API ISDEK ONCLICK VE YA ONSUBMIT
        <form onSubmit={(e: React.SyntheticEvent)=>onApiRequest(e)}>
          <p>name : <input ref={nameRef} /> </p>
          <p>password : <input ref={passRef}/> </p>
          <button type="submit"> Send Request </button>
        </form>
      <hr/>
      <br/>
      <br/>
      <h1 style={{color: "red"}}> 
          Qayda 1<br/>
          Valideyinin Xaricinde yaradilan arrey ve object tiplerin 
          Yaddaşda yerleri eynidi Və VALİDEYİNDƏ olan Rerenderler 
          Valideyinin daxilini tetikleyir və bu zaman 
          Xaricindeki deyisenler yeniden yardilmir ve React.memo ile
          Child Componenti Sarmaladiqimiz üçün Uşaq Componentdə
          Props objesinin deyerlərindən Hər Hansi biri dəyişmədiyi
          zaman Uşaq Componentidə artiq ReRender olmur React.memo ya 
          Görə indi useMemodan istifadə ederek Valideyinin daxilində
          olan object və Arrey tiplerində dəyəri dəyişmədiyi zaman
          Uşaqlarda Rerenderlər Yaratmasin Bunun üçün Valideyindəki bu 
          Object Və Arrey tipleri useMemo ile yaradaq 
        </h1>
      
      <hr/>
      <br/>
      <br/>
      <h1 style={{color: "red"}}>
        Qayda 2 <br/>
        Eger useMemo Object ve ya Arrey geriye return ederse ve bu useMemo ya
        asliliq verersek ve bu asliliqin deyeri deyisdiyinde useMemo yeniden chalisar
        daxilindeki deyer object ve ya arrey olduqu üçün yeniden bu deyerlerin Yadaşda
        yeri deyişər 
      </h1>
      <hr/>
      <br/>
      <br/>
      <h1 style={{color: "red"}}>
        Qayda 3 <br/>
        Funuksialarda Bu ishleri useCallback ile edirler yoxsa her rerenderde
        Componentin daxilindeki Funuksia yeniden yaradilir çünki function özide
        Referans Tipdi Arrey ve Objectler kimi  
      </h1>
      <hr/>
      <br/>
      <br/>
      <h1 style={{color: "red"}}>
        Qayda 4 <br/>
        useRef  React.MutableRefObject di eyni yerə Referans eder yəni
        Yadaşda eyni yerde durar ve içindəki deyer current objesi deyişməz 
        ama current objesini onun içindən alib Uşaq Componenetə göndərdikdə 
        adi object olur və useRef in deyeri deyişilir Uşaq Componentde Rerender
        yaranmiyana qeder Ref objesinin deyeri yenilenmir
        biz Ref Objesinin deyerini çölə alib her hansisa bir deyişəndə
        saxlayiriq bu zaman o dəyişən bir object olur və
        her rerenderde bu object yaradilir  !!!
      </h1>

      <hr/>
      <br/>
      <br/>
      <h1 style={{color: "red"}}>
        Qayda 5 <br/>
        useRef  React.MutableRefObject di eyni yerə Referans eder yəni
        Yadaşda eyni yerde durar ve içindəki deyer current objesi deyişməz 
        ama current objesini onun içindən alib Uşaq Componenetə göndərdikdə 
        adi object olur 
      </h1>
    </div>
    
  );
}
