import NavBar from './components/NavBar';
import Form from './components/Form';


export default function App(){
    // const [mode, setMode] = useState("light")
    // const [AlertMe, serAlertMe] = useState('');

    const modeChange =(e)=>{
        if (e.target.value === "Dark") {
                document.querySelector('body').style.color = "white";
                document.querySelector('body').style.backgroundColor = "rgb(30 34 52)";
                document.querySelector('#exampleFormControlTextarea1').style.backgroundColor = "rgb(30 34 52)";
                document.querySelector('#exampleFormControlTextarea1').style.color = "white";
              
        } else {
                document.querySelector('body').style.color = "rgb(30 34 52)";
                document.querySelector('body').style.backgroundColor = "white";
                document.querySelector('#exampleFormControlTextarea1').style.backgroundColor = "white";
                document.querySelector('#exampleFormControlTextarea1').style.color = "rgb(30 34 52)";
        }
    //     return (
    //       document.querySelector('.alert').innerHtml=
    //       `<div className="alert alert-success alert-dismissible fade show"  style = {{padding:"5px"}} role="alert">
    //            ${e.target.value} mode Enabled Successfully!
    //           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style = {{padding:"16px", width:"2px", height:"2px"}}></button>
    //     </div>`
    // )
    const Alert = ()=> {
        console.log( document.querySelector('.alert').innerHTML)
        return (
            document.querySelector('.alert').innerHTML=
                `<div role="alert">
                     ${e.target.value} mode Enabled Successfully!
              </div>`
      )
      }
      Alert()
    
      }


    // if ( document.querySelector('body').style.color === "white") {
    //     serAlertMe("Dark")
    // }
    // else{
    //     serAlertMe("Light")
    // }
    
    return(
        <>
            <NavBar modeChange={modeChange} />
            <Form />
        </>
    )
}
