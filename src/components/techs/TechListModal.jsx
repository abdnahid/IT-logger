import React,{useState,useEffect} from 'react'
import TechItems from './TechItems';

const TechListModal = () => {
    const [techs,setTechs]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    },[])
    const getTechs = async ()=>{
        setLoading(true);
        const res = await fetch("/techs");
        const data = await res.json();
        console.log(data);
        setTechs(data);
        setLoading(false);
    }
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <ul className="collection with-header">
                    <li className="collection-header"><h4 className='center'>Technician lists</h4></li>
                    {!loading&&techs.length===0?(<p>No Technician added yet</p>):techs.map(tech=> <TechItems tech={tech} key={tech.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
