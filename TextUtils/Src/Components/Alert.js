// import react from 'react';

const Alert = (Props) => {
    const capitailze = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    var styles ={
       
        headline: {
            textAlign: 'center', // <-- the magic
            marginLeft:900,
            fontSize: 18,
            marginTop: 0,
            width: 300,
            color: 'white',
            backgroundColor: 'black',
            borderColor:'black',
            }
    
    
    
    };
      return (<div style={{height:'50px'}}>
      {Props.alert && <div style={styles.headline} className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{capitailze(Props.alert.type)}</strong>&nbsp;&nbsp;&nbsp;{Props.alert.msg}
    </div>}
    </div>);
}

export default Alert;