import './Stundent.css'
import App from './App'
function student(props) {
  return (
   <div className='icard'>
    <table>
        <tbody>
            <tr style={{backgroundColor:'white'}}>
                <td colSpan={8}>{props.college}</td>
            </tr>
            <tr><td>name</td>
            <td>{props.name}</td>
            </tr>
            <tr><td>RollNumber</td>
            <td>{props.rollnumber}</td>
            </tr>
            <tr><td>Brach</td>
            <td>{props.branch}</td>
            </tr>
            <tr><td>section</td>
            <td>{props.section}</td>
            </tr>

            
        </tbody>
        </table>
   </div>
  )
}

export default student