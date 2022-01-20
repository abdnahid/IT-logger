import React from 'react'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLogs,setCurrent } from '../../actions/logActions';

const LogItems = ({log,deleteLogs,setCurrent}) => {
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention?'red-text':'blue-text'}`} onClick={()=>setCurrent(log)}>{log.message}</a>
                <br />
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> Last updated by <span className='black-text'>{log.technician} </span>
                    on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="!#" className='secondary-content' onClick={()=>deleteLogs(log.id)}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null,{deleteLogs, setCurrent})(LogItems)
