import React from "react";

function Layout({title,children}) {
    return (
        <>
            <section className={`${title} mainSec`}>
                <div className="inner mainInner">
                    {children}
                </div>
            </section>
        </>
    );
}

export default Layout;
