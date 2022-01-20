import React,{useEffect} from 'react'
import TechItems from './TechItems';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({tech: { techs, loading },getTechs}) => {
    useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    },[])
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <ul className="collection with-header">
                    <li className="collection-header"><h4 className='center'>Technician lists</h4></li>
                    {!loading&&techs===null?(<p>No Technician added yet</p>):techs.map(tech=> <TechItems tech={tech} key={tech.id} />)}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({tech:state.tech})

export default connect(mapStateToProps,{getTechs})(TechListModal)
