import React from "react";
import styles from "./CodeStorm.module.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import data from "./data.json";

const CodeStorm = () => {
  console.log(data);
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>Grand Tech Adventures</span> CodeStorm
              </p>

              <p className={styles.fv_tagline}>
                GTA CodeStorm is a 24-hour hackathon which is organized in
                partnership with the Kerala Knowledge Economy Mission. CodeStorm
                has 3 tracks, namely, software, design, hardware.
              </p>
              <div className={styles.event_partners}>
                <div className={styles.partners}>
                  <p className={styles.event_partners_heading}>
                    Event Partners
                  </p>
                  <div className={styles.partner}>
                    <img
                      src="/assets/events/gtacodestorm/kkem.webp"
                      alt=""
                      className={styles.partner_image}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.fv_images}>
              <img
                src="/assets/events/gtacodestorm/mainlogo.webp"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>

          {/* <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.image_container}>
                {Array.from(Array(16).keys()).map((i) => {
                  return (
                    <img
                      src={`/assets/events/gtacodestorm/${i}.webp`}
                      alt=""
                      className={styles.image}
                    />
                  );
                })}
              </div>
            </div>
          </div> */}
        {/*Slider Code */}
        <div className={styles.wrapper}>
          <div className={styles.slider}>
            <div className={styles.slide_track}>
            
              <img
                  src="/assets/events/gtacodestorm/1.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/2.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/3.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/4.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/5.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/6.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/7.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/8.webp"
                  alt=""
                  className={styles.slide}
              />
              
              <img
                  src="/assets/events/gtacodestorm/9.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/10.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/11.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/12.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/13.webp"
                  alt=""
                  className={styles.slide}
                />
              
              <img
                  src="/assets/events/gtacodestorm/14.webp"
                  alt=""
                  className={styles.slide}
                />
                <img
                  src="/assets/events/gtacodestorm/15.webp"
                  alt=""
                  className={styles.slide}
                />
              <img
                  src="/assets/events/gtacodestorm/16.webp"
                  alt=""
                  className={styles.slide}
                />
              {/*} Img Code End -->*/}
              
            </div>
          </div>
        </div>
        {/*Slider code ends*/}
          


          <div className={styles.third_view_container}>
            <div className={styles.third_view}>
              <div className={styles.tv_texts}>
                <p className={styles.tv_heading}>
                  <span>GTA:CodeStorm</span> Winners
                </p>
                <p className={styles.tv_tagline}>
                  The winners of CodeStorm 2023 are as shown below. Each team
                  has put in a lot of effort and hardwork to achieve this feat.
                  We congratulate them on their success and wish them all the
                  best for their future endeavours.
                </p>
              </div>

              <div className={styles.tv_listing_container}>
                <div className={styles.tv_listing}>
                  {data &&
                    data.map((item) => (
                      <div className={styles.tv_card}>
                        <p className={styles.team_code}>
                          <span>Team Code:</span> {item.code}
                        </p>
                        <p className={styles.team_name}>
                          <span>Team Name:</span> {item.name}
                        </p>
                        
                        <p className={styles.team_place}>
                          <span>{item.domain} Domain</span>
                          <br />
                          {item.place} Place
                        </p>
                        <div className="team_n">
                        <p className={styles.team_memb}>Team Members</p>
                        <p className={styles.team_members}>{item.team}</p>
                        </div>
                        <a
                          href={item.link1}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className={styles.team_link}>
                            View Project
                          </button>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CodeStorm;
