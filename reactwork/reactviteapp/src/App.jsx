
import Student from "./student"
function App() { 
  let a=10;
  const mystyle={
    backgroundColor:'yellow',
    color:'red',
  }
  return (
    <div style={{color:'cyan'}}>Abes Engineering college 
    <div style={mystyle} >{a}
    <Student college="Abes Engineering College" name="Sarthak" rollnumber="1234"
    branch="CSE"
    section="A "/>
    </div>
 
    </div>
  )
}
export default App