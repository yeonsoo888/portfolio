import React from "react";
import { motion } from 'framer-motion'

function PopLayout({children,setIsPop}) {
    const closePop = (e) => {
        if(e.target.tagName == "SECTION") {
            console.log("ok");
            setIsPop("");
        }
    }

    return (
        <motion.section 
            className="pop"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0 , transition: { duration: 0.5 } }}

            onClick={(e) => {closePop(e)}}
        >
            <div className="pop__inner">
                <button className="pop__btn" onClick={() => {setIsPop("")}}>닫기</button>
                {children}
            </div>
        </motion.section>
    );
}

export default PopLayout;
