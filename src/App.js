import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './PureComp';
//import PureComp from './components/PureComp';

//import Form from './components/Form';
function App() {
  return (
    <div className="App">



      <FragmentDemo/>
      <Table/>
      <LifecycleA/>
     <Inline/>
      <Greet/>
     <Welcome/>
     <Hello/>
     <Message/>
     <Counter/>
     <FunctionClick/>
     <ClassClick/>
     <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <Stylesheet/>
    
          </div>
  );
}

export default App;
