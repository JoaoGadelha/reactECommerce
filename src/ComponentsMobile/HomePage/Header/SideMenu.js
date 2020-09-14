import React, {  useEffect } from 'react'
import SMTop from './SMTop/SMTop'
import SMDepartments from './SMDepartments/SMDepartments'
import SMFooter from './SMFooter/SMFooter'


const SideMenu = (props) => {

   let sideMenuRef = props.inputRef;

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                sideMenuRef.current.style.left = '-100%';
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sideMenuRef]);

   

    return (
        <div className='side-menu' ref={sideMenuRef} >
            <SMTop refVar={sideMenuRef}/>
            <SMDepartments />
            <SMFooter/>
        </div>
    )
}

export default SideMenu