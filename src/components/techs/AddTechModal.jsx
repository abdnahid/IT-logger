import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux';
import { addTechs } from '../../actions/techActions';

const AddTechModal = ({addTechs}) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const handleSubmit = ()=>{
        if (firstName===''&&lastName==='') {
            M.toast({html:'At least first name or last name is needed'})
        }else{
            const newTech = {
                firstName,
                lastName
            }
            addTechs(newTech);
            M.toast({html:'new technician is added successfully'})
            setFirstName('');
            setLastName('');
        }
        
    }
    return (
        <div id='tech-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4 className='center'>Add a technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='fname' value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                        <label htmlFor="fname" className='active'>First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lname' value={lastName} onChange={e=>setLastName(e.target.value)}/>
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

export default connect(null,{addTechs})(AddTechModal)
