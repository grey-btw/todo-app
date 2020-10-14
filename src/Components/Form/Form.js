import React, { useEffect, useRef } from 'react';
import shortid from 'shortid';
import './Form.css';

const Form = ({ statusFilter, setstatusFilter, todos, setTodos, input, setInput}) => {
    
    const stick = useRef(null);
    const btnRef = [
        useRef(null),
        useRef(null),
        useRef(null)
    ];
    const btnFilter = ['All', 'Active', 'Completed'];

    useEffect(() => {
        handleStickToState();
    }, []);
    
    const indicator = (event, index) => {
        stick.current.style.left = event.target.offsetLeft + "px";
        stick.current.style.width = btnRef[index].current.clientWidth + "px";
    }

    const handleChangeFilter = (val) => {
        setstatusFilter(val);
    }

    const handleInput = (e) => { 
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input !== '') {
            setTodos([...todos, {
                text: input, 
                completed: false,
                id: shortid.generate()
            }])
            setInput('');
        }
    }

    const handleStickToState = () => {
        btnFilter.forEach((state, index) => {
            if(state === statusFilter) {
                stick.current.style.left = btnRef[index].current.offsetLeft + "px";
                stick.current.style.width = btnRef[index].current.clientWidth + "px";
            }
        })
    }
    
    window.addEventListener("resize", handleStickToState);

    return(
        <div className="form">
            <div className="form--filter">
                <ul>
                    {
                        btnFilter.map((act, index) => {
                            return (
                                <li onClick={(e) => { indicator(e, index); handleChangeFilter(act); }}
                                    className={statusFilter === btnFilter[index] ? "form--filter_active" : ''}
                                    key={index}
                                    ref={btnRef[index]}
                                >
                                    {act}
                                </li>
                                
                            )
                        })
                    }
                </ul>
                <div id="stick" ref={stick}></div>
            </div>
            {
                statusFilter !== "Completed" ? (
                    <form className="form--input">
                        <input type="text" placeholder="Add details" 
                            value={input}
                            onChange={handleInput}
                        />
                        <button className="btn" onClick={handleSubmit}>Add</button> 
                    </form>  
                ) : (
                    <div></div>
                )
            }
    
        </div>
    );
}

export default Form;
