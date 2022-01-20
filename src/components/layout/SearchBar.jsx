import React,{useRef} from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({searchLogs}) => {
    const text = useRef('');
    const handleChange=(e)=>{
        searchLogs(text.current.value);
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <form>
                <div className="input-field cyan">
                    <input id="search" type="search" onChange={handleChange} ref={text} placeholder='search logs'/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
                </form>
            </div>
        </nav>
    )
}

export default connect(null,{searchLogs})(SearchBar)
