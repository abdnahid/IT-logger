import React,{useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLogs } from '../../actions/logActions';

const EditLogModal = ({current,updateLogs}) => {
    const [message,setMessage]=useState('');
    const [attention,setAttention]=useState(false);
    const [tech,setTech]=useState('');
    useEffect(()=>{
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    },[current]);
    const handleSubmit = ()=>{
        if (message===''&&tech==='') {
            M.toast({html:'Log message and Technician field should not be empty'})
        }else if (message==='') {
            M.toast({html:'Please Add Log message before submitting'})
        }else if (tech==='') {
            M.toast({html:'Please Add a Technician before submitting'})
        }else{
            const updatedLog = {
                id:current.id,
                message,
                attention,
                tech,
                date:new Date()
            }
            updateLogs(updatedLog);
            M.toast({html:`log updated by ${updatedLog.tech}`});
            setMessage('');
            setAttention(false);
            setTech('');
        }
        
    }
    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
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
                        <select name="tech" value={tech} className='browser-default' onChange={e=>setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="Sam Wilson">Sam Wilson</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Jack Wilson">Jack Wilson</option>
                        </select>
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
const mapStateToProps= (state)=>({current:state.log.current})

export default connect(mapStateToProps,{updateLogs})(EditLogModal)
