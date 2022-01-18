import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const handleSubmit = ()=>{
        if (fname===''&&lname==='') {
            M.toast({html:'At least first name or last name is needed'})
        }else{
            console.log(fname,lname);
            setFname('');
            setLname('');
        }
        
    }
    return (
        <div id='tech-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4 className='center'>Add a technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='fname' value={fname} onChange={e=>setFname(e.target.value)}/>
                        <label htmlFor="fname" className='active'>First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lname' value={lname} onChange={e=>setFname(e.target.value)}/>
                        <label htmlFor="lname" className='active'>Last Name</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-light btn" onClick={handleSubmit}>Enter</a>
                </div>
            </div> 
        </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
};

export default AddTechModal
