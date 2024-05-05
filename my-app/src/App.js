//import Header from "./components/header";
//import Counter from './components/Counter';
//import './manu.css'
//mport './index.css'
//import { useState } from 'react';
//import Navbar from './components/Navbar/Navbar';
//import Banner from './components/Banner/Banner';
//import Rowpost from './components/Rowpost/Rowpost';
//import { Actions, oringinal ,Horrer} from './components/constant/url';

//calling routers and context apisss

/*function App(){
  return(
    <div>
  <Navbar/>
  <Banner/>
  <Rowpost url={oringinal} title='Netflix Original'/>
  <Rowpost url={Actions} title='Actions' isSmall={true}/>
  <Rowpost url={Horrer} title='Horrer' isSmall={true}/>
  </div>
  )
}*/



import { useState } from 'react';
import Mydata from './components/dummy/Mydata';
import Myprofile from './components/dummy/Myprofile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Appcontext } from './Appcontext';
import { Firebase } from './config/config'
import { collection, getDoc, doc, getDocs, addDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';

import { getFirestore } from "firebase/firestore";


function App() {
  const [state, setState] = useState(10);
  const history = useNavigate()
  return (

    <div>
      <h1>dummy</h1>
      <button onClick={() => { history('/mydata') }}>mydatabroo</button>
      <button onClick={() => { history('/myprofile') }}>mydatabroo</button>
      <br />
      <button onClick={async () => {
      let db = getFirestore(Firebase)
        let data={
          id:'123',
          name:'manu',
          house:'vadukunnapuza'
        }
       let col=collection(db,'users')
        const docRef =await getDocs(collection(db,'users')) ;
        if(docRef){
          console.log('complete');
           docRef.forEach((elm)=>{
            deleteDoc(elm.ref)
           })
        }
    
      }}>Firebase datas</button>

      <Appcontext.Provider value={{ data: state }}>
        <Routes>
          <Route path='/mydata' Component={Mydata} />
          <Route path='/myprofile' element={<Myprofile></Myprofile>} ></Route>
        </Routes>
      </Appcontext.Provider>
    </div>




  );
}

export default App;

