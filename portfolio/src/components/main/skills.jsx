import React from "react";
import Layout from "../common/layout";

export default function Skills() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <Layout title="skills">
                <h4 className="mainTit">Skills</h4>
                <ul className="skills__list">
                    <li>
                        <img src={`${path}/images/skill1.jpg`} alt="" />
                        <img src={`${path}/images/skill2.jpg`} alt="" />
                        <img src={`${path}/images/skill3.jpg`} alt="" />
                        <img src={`${path}/images/skill4.jpg`} alt="" />
                        <img src={`${path}/images/skill5.jpg`} alt="" />
                        <img src={`${path}/images/skill6.png`} alt="" />
                        <img src={`${path}/images/skill7.png`} alt="" />
                    </li>
                    <li>

                    </li>
                </ul>
            </Layout>
        </>
    )
}
