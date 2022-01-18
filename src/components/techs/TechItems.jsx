import React from 'react'

const TechItems = ({tech}) => {
    return (
        <li className='collection-item'>
            <div>
                <span className='grey-text'>
                    <span className='black-text'>{tech.firstName} {tech.lastName} </span>
                </span>
                <a href="!#" className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

export default TechItems
