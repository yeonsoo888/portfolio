import Layout from "../common/layout";


export default function About() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <Layout title="about">
                <h4 className="mainTit">About Me</h4>
                <ul className="about__list">
                    <li>
                        <img src={`${path}/images/icon3.png`} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Name</strong>
                            <p>김연수</p>
                        </div>
                    </li>
                    <li>
                        <img src={`${path}/images/icon1.png`} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Birth</strong>
                            <p>1994.07.21</p>
                        </div>
                    </li>
                    <li>
                        <img src={`${path}/images/icon4.png`} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Tell</strong>
                            <p><a href="tel:010 - 9846 - 2266">010 - 9846 - 2266</a></p>
                        </div>
                    </li>
                    <li>
                        <img src={`${path}/images/icon2.png`} alt="" className="icon" />
                        <div className="about__txt">
                            <strong>Mail</strong>
                            <p><a href="mailTo:yeonsoo9846@gmail.com">yeonsoo9846@gmail.com</a></p>
                        </div>
                    </li>
                    <li>
                        <img src={`${path}/images/icon5.png`} alt="" className="icon" />
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
