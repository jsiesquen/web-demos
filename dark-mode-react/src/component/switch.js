import React, { useRef, useEffect } from 'react'
import './switch.css'

function Switch() {
    const ref = useRef(null);
    function handleDarkModeChange(event) {
        // 1 method: event.target.checked
        // 2 method: ref.current.checked; useRef using hook
        if (ref.current.checked) {
            document.body.classList.remove('is-light-mode');
            document.body.classList.add('is-dark-mode');
        } else {
            document.body.classList.remove('is-dark-mode');
            document.body.classList.add('is-light-mode');
        }
    }

    useEffect(() => {
        if (window.matchMedia('(prefers-colors-scheme: dark)').matches) {
            ref.current.setAttribute("checked", true)
        }
    }, [])  // 2° param: When this component each rendering only

    return (
            <div className="dark-mode">
                <p className="dark-mode-title">Dark Mode</p>
                <input ref={ref} onChange={handleDarkModeChange} type="checkbox" className="checkbox" name="checkbox" id="checkbox" />
                <label className="switch" htmlFor="checkbox"></label>
            </div>
        );
}

export default Switch