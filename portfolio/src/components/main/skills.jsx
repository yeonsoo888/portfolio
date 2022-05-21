import React from "react";
import Layout from "../common/layout";
import img1 from '../../images/skill1.jpg'
import img2 from '../../images/skill2.jpg'
import img3 from '../../images/skill3.jpg'
import img4 from '../../images/skill4.jpg'
import img5 from '../../images/skill5.jpg'
import img6 from '../../images/skill6.png'
import img7 from '../../images/skill7.png'


export default function Skills() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <Layout title="skills">
                <h4 className="mainTit">Skills</h4>
                <ul className="skills__list">
                    <li>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                    </li>
                    <li>

                    </li>
                </ul>
            </Layout>
        </>
    )
}
