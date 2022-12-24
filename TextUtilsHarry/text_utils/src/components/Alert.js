import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '40px'}}>
            {/* props.alert && ==> if props.alert value is null then statement after && operator will not proceed*/}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{padding: '0 0 0 10px', borderRadius: '0'}}>
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert
