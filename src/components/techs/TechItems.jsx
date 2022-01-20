import React from 'react';
import { connect } from 'react-redux';
import { deleteTechs } from '../../actions/techActions';

const TechItems = ({tech,deleteTechs}) => {
    return (
        <li className='collection-item'>
            <div>
                <span className='grey-text'>
                    <span className='black-text'>{tech.firstName} {tech.lastName} </span>
                </span>
                <a href="!#" className='secondary-content' onClick={()=>deleteTechs(tech.id)}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null,{deleteTechs})(TechItems)
