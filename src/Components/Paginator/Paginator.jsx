import React, { useState } from 'react';
import s from './Paginator.module.css'
import { useHistory } from 'react-router-dom';


const Paginator = (props) => {
    let currentPage = Number(props.currentPage);
    let totalPages = props.pageSize;
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPages); i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let portionsCount = Math.ceil(totalPages / props.portionSize);
    let leftPortion = (portionNumber - 1) * props.portionSize + 1;
    let rightPortion = portionNumber * props.portionSize;
    const history = useHistory();
   

    return (
        <ul className="pagination center-align">
            {portionNumber >= 2 && <li onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} className={s.changePortion}> {<i className="material-icons">chevron_left</i>}</li>}
            {pages.filter(p => p >= leftPortion && p <= rightPortion)
                .map(p => {
                    return <li className={currentPage === p ? 'active' : 'waves-effect'}
                        onClick={(e) => {
                            props.onPageCurrentChange(p);
                            history.push(`${props.path}${p}`)
                        }} key={p}><a >{p}</a></li>
                })}
            {portionsCount > portionNumber && <li onClick={() => {
                setPortionNumber(portionNumber + 1);
            }} className={s.changePortion}>{<i className="material-icons">chevron_right</i>}
            </li>
            }
        </ul>
    )
}

export default Paginator;