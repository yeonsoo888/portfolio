import Layout from "../common/layout";
import img1 from '../../images/icon1.png'
import img2 from '../../images/icon1.png'
import img3 from '../../images/icon1.png'
import img4 from '../../images/icon1.png'
import img5 from '../../images/icon1.png'

export default function About() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <Layout title="about">
                <h4 className="mainTit">About Me</h4>
                <ul className="about__list">
                    <li>
                        <img src={img1} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Name</strong>
                            <p>김연수</p>
                        </div>
                    </li>
                    <li>
                        <img src={img2} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Birth</strong>
                            <p>1994.07.21</p>
                        </div>
                    </li>
                    <li>
                        <img src={img3} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Tell</strong>
                            <p><a href="tel:010 - 9846 - 2266">010 - 9846 - 2266</a></p>
                        </div>
                    </li>
                    <li>
                        <img src={img4} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Mail</strong>
                            <p><a href="mailTo:yeonsoo9846@gmail.com">yeonsoo9846@gmail.com</a></p>
                        </div>
                    </li>
                    <li>
                        <img src={img5} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Github</strong>
                            <p><a href="//github.com/yeonsoo888" target="_blank" >https://github.com/yeonsoo888</a></p>
                        </div>
                    </li>
                </ul>
            </Layout>
        </>
    )
}
