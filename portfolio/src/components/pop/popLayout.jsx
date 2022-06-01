import React from "react";
import { motion } from 'framer-motion'

function PopLayout({children}) {
    return (
        <motion.section 
            className="pop"
            initial={{opacity: "0"}}
            transition={{ duration: 2 }}
            animate={{opacity: "1"}}
        >
            <div className="pop__inner">
                <div className="pop__btnWrap">
                    <button>닫기</button>
                </div>
                {children}
            </div>
        </motion.section>
    );
}

export default PopLayout;
