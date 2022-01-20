import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLogs } from '../../actions/logActions';
import { connect } from 'react-redux';

const AddLogModal = ({tech:{techs},addLogs}) => {
    const [message,setMessage]=useState('');
    const [attention,setAttention]=useState(false);
    const [technician,setTechnician]=useState('');
    const handleSubmit = ()=>{
        if (message===''&&technician==='') {
            M.toast({html:'Log message and Tech field should not be empty'})
        }else if (message==='') {
            M.toast({html:'Please Add Log message before submitting'})
        }else if (technician==='') {
            M.toast({html:'Please Add a Technician before submitting'})
        }else{
            const newLog = {
                message,
                attention,
                technician,
                date:new Date()
            }
            addLogs(newLog);
            M.toast({html:`log added by ${technician}`});
            setAttention(false);
            setMessage('');
            setTechnician('');
        }
        
    }
    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e=>setMessage(e.target.value)}/>
                        <label htmlFor="message" className='active'>Log message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        {techs===null?'Add a technitian before inserting a log':(
                            <select name="tech" value={technician} className='browser-default' onChange={e=>setTechnician(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            {techs.map((tech)=>(<option value={tech.firstName+tech.lastName} key={tech.id}>{tech.firstName+tech.lastName}</option>))}
                        </select>
                        )}
                    </div>
                </div> 
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={e=>setAttention(attention?false:true)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
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

const mapStateToProps = state => ({tech:state.tech})

export default connect(mapStateToProps,{addLogs})(AddLogModal)
