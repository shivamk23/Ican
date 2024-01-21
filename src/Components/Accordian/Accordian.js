import React, { useState } from 'react';
import {MdOutlineArrowDropDown,MdOutlineArrowDropUp} from "react-icons/md"
import data from './AccordianData';
import "./Accordian.css";
import { Container } from 'react-bootstrap';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <Container fluid className='d-flex justify-content-start align-items-center mt-5'>
            <div className='wrapper'>
                <div className='accordion'>
                    {data.map((item, i) => (
                        <div className={selected === i ? 'item active' : 'item'} key={i}>
                            <div className='item-header' onClick={() => toggle(i)}>
                               <div className='d-flex flex-column'>
                                    <div>
                                <h className="acc_title">{item.question}</h>
                                <span style={{marginLeft:"1%",color:"#fff"}}>
                        {selected === i ? (
                               <MdOutlineArrowDropUp />
                      
                        ) : (
                            <MdOutlineArrowDropDown  />
                        )}
                      </span>

                                </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                {item.answer}
                            </div>
                            </div>
                            
                            </div>
                            </div>
                     
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Accordion;
