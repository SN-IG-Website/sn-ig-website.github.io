import React from "react";
import "./AlumniCards.css";

function AlumniCard() {
  return (
    <>
      <div
        className="full"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/01/08/13/50/background-1127943_1280.jpg')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover"
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="text">
          <div
            className="Main-header"
            style={{
              paddingTop: "70px",
              paddingBottom: "10px",
              // backgroundColor: "#E3B7A0",
              // backgroundImage: "linear-gradient(150deg,#E3B7A0,#BF9270",
            }}
          >
            {/* <h4 className='heading' style={
                            {
                                textAlign: "center",
                                fontSize: "70px",
                                marginTop: "30px"
                            }
                        } > DISTINGUISHED ALUMNI </h4> */}
            <div className="site-heading text-center" style={{marginBottom:'5px'}}>
              <h5
                className="heading"
                style={{
                  textAlign: "center",
                  fontSize: "70px",
                  marginTop: "30px",
                  padding: "0 px",
                  fontWeight: "700",
                }}
              >
                {" "}
                DISTINGUISHED ALUMNI{" "}
              </h5>
              {/* <h2 style={{ marginTop: "30px",fontSizeAdjust: '70px'}}> DISTINGUISHED ALUMNI </h2> */}
              <h4> </h4>
            </div>
          </div>
          <div>
            <div
              className="Distinguished Alumni Awards"
              id="Distinguished Alumni Awards"
            >
              <h4
                style={{
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "40px",
                }}
              >
                {" "}
                Distinguished Alumni Awards{" "}
              </h4>
              <hr />
              <div className="Row">
                <br />
                <br />
                <div className="block-alum">
                  <img
                    src="https://lh6.googleusercontent.com/7mt2vkpxc1_eMIMs63OnrNuHY-9j2TkZ9WeLRsfYoOHnPL5sV43B6M2JAkywKSaeRk_MZK3K0vI9wjPf4UNP6rkWGARtp3a3WF7Hq3cjBYml-6kADQvZ72fOXwQaqYk_VjQ8jwc"
                    alt="error"
                  />
                  <h4>PROF SUSMITA SUR KOLAY</h4>
                  <p>
                    1980/BTech/EC
                    <br />
                    Professor, ACM Unit, Indian Statistical Institute, Kolkata
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://d3sr7cc30ek8f4.cloudfront.net/images/size:1500x1500/type:cover/prod/617a7995ded0510014acda99/unnamed1.jpg"
                    alt="error"
                  />
                  <h4>CHAITALI CHAKRABARTI</h4>
                  <p>
                    1984/B Tech/EC
                    <br />
                    Professor,Arizona State University (ASU)
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://lh5.googleusercontent.com/jFl5ABvdfNI53kIUBo7vgJqGCwtB6aW-YvQeRy3_s2Khydx8epkNn1XDJkHep1hUN0WJRqlcE9Va3E8qKJZKJgF-2gvtG8oIJuksBWC1FKrN79vg9NPbHYGs231c"
                    alt="error"
                  />
                  <h4>ARUNIMA ACHARYA</h4>
                  <p>
                    1973/M Tech/CH
                    <br />
                    Advisor to PfP Industries
                  </p>
                </div>
              </div>

              <div className="Row">
                <br />
                <br />
                <div className="block-alum">
                  <img
                    src="https://lh4.googleusercontent.com/Jcn-8qafh4VGUpDHXNgvoMv4E1CFeLBIp1wrTvJK1q28ml1J_NXgBCu3pWa__J-BJwgACzOGFl8CXbHzquNa0CGh8gk11WUfC0PxUIHTpsa4DGxmJYscsYsn2z94"
                    alt="error"
                  />
                  <h4>ANURADHA ACHARYA</h4>
                  <p>
                    1993/B Sc/PH
                    <br />
                    CEO & Director, Mapmygenome India Limited
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://lh6.googleusercontent.com/fxz70v0_tkluBfegMqUPmVCFybNv7veZCpyWjLfAFCyzb5bL9rx3lgL75mNkMD-1Wpiyd_gyoprAp-QegPwiCevOEWswv_sIi0WWTm7cDWPXcZK5f_I_Pj9qPfqM"
                    alt="error"
                  />
                  <h4>SANGHAMITRA BANDYOPADHYAY</h4>
                  <p>
                    1994/M Tech/CS
                    <br />
                    Director,ISI Kolkata
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div
                className="Distinguished Service Awards"
                id="Distinguished Service Awards"
              >
                <h4
                  style={{
                    marginTop: "60px",
                    textAlign: "center",
                    fontSize: "40px",
                  }}
                >
                  {" "}
                  Distinguished Service Awards{" "}
                </h4>
                <hr />
                <div className="Row">
                  <br />
                  <br />
                  <div className="block-alum">
                    <img
                      src="https://lh3.googleusercontent.com/KYnn1kR_cA7jxLvzY1_M3niaLO-DY6bFw5XTlVOQjOyoF_Tb14esuzLiiTtp9Uj98y985yeCHsZA7wwc431meQOd7ZXoTBLCsQwHDiTgFeSJX-eeCOW3jIX9IRuRH7jAZI8jpIA1"
                      alt="error"
                    />
                    <h4>RATUN LAHIRI</h4>
                    <p>
                      1991/B Tech/ME
                      <br />
                      Head of Global Development Programmes, London Stock
                      Exchange Group
                    </p>
                  </div>
                  <div className="block-alum">
                    <img
                      src="https://lh6.googleusercontent.com/kVColH19NSyIjOaldd2V_BY2duYukWGFPb4QtJFR_ec6sq1OHZQ7EwVMqei4JP-09ampBzOR-EXpqq14yFMbxDVmNLdwstt40zRDP5v-IAzjTEkaMbCofb6J6yUPTHLrplda1Og9"
                      alt="error"
                    />
                    <h4>MEENAKSHI KAUL</h4>
                    <p>
                      1984/B Sc/PH
                      <br />
                      Chief Product Officer, STEM-Away
                    </p>
                  </div>
                  <div className="block-alum">
                    <img
                      src="https://lh6.googleusercontent.com/u46jxoCRyRw2wTaifLKoRk1r60QzPiMTxdRxOFT_qW7qmpGFrGzm8XZdvwBDgPhPGt9UJ_N3M8iH6YS_fJFG8sRN42kyfYIeZRiERGUPbRWeKEW4qUW_0gGW3p212KIoEg0cOB5k"
                      alt="error"
                    />
                    <h4>NEETA JAIN</h4>
                    <p>
                      1968/B Arch/AR
                      <br />
                      Partner/VP, Samir Sharma & Associate
                    </p>
                  </div>
                </div>

                <div className="Row">
                  <br />
                  <br />
                  <div className="block-alum">
                    <img
                      src="https://lh6.googleusercontent.com/QiYXFCNSzE3-Ccq5oz13RfFHxeNHxdONWvHr78W9qyZrPaZVyGGud7i4iuzz_cE_1z8jdezd1wjDGCafk_Q4yxj5u7v-Cg_mXGMqtDAtmR0CICrnAba9lrvGNiKvLw6sWyez6OIw"
                      alt="error"
                    />
                    <h4>SUJATA ROY</h4>
                    <p>
                      1975/M Sc/PH
                      <br />
                      COO, NDL Project IIT Kharagpur
                    </p>
                  </div>
                  <div className="block-alum">
                    <img
                      src="https://lh4.googleusercontent.com/SYN447agD442Can2B2bRAsBmom_xsZrYvtQ20Gd4s0Czy5AsNFRmXWuigXYGz6s8zwXlw1edxj9sCbVUi-f2Cpm44cIIZlrCzq3MGigAOD0avKPJt4XD32WI4UVeB1XfEhwcVFc6"
                      alt="error"
                    />
                    <h4>PARVATI DEV</h4>
                    <p>
                      1968/B Tech/EC
                      <br />
                      CEO, SimTabs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="Young Alumni Achiever Awards"
              id="Young Alumni Achiever Awards"
            >
              <h4
                style={{
                  marginTop: "60px",
                  textAlign: "center",
                  fontSize: "40px",
                }}
              >
                {" "}
                Young Alumni Achiever Awards{" "}
              </h4>
              <hr />
              <div className="Row">
                <br />
                <br />
                <div className="block-alum">
                  <img
                    src="https://lh4.googleusercontent.com/ecbZyH0rxIg09qTgvoWKi7oeL7a4xKJGJ-mNnCOyk0YSDxH6txUli2vopgfhiSFMCEIU4IWT8s38ruTl9Apn_xn3UNIzZsuo-AS2PVt6s4LEdTIyDL-spG_HCDyN8w"
                    alt="error"
                  />
                  <h4>SHRUTI GHATGE</h4>
                  <p>
                    2013/M Sc/CY
                    <br />
                    Co-Founder and CEO, Zomentum
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://lh3.googleusercontent.com/OTN9-SlYQnIeSxHxxK4bAXNI8Vcyi0LjL7Q236xNrsjbzaoIQ_jY2vGgWJfIamgXhoZOptoTVzlgMxYjXW018_v_zoXAsE_FYV_nEQt6qPumIrsGXl-jX0-sH_lwgg"
                    alt="error"
                  />
                  <h4>SREEJA NAG</h4>
                  <p>
                    2009/M Sc/GG
                    <br />
                    Senior Research Engineer, NASA ARC and GSFC
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://lh4.googleusercontent.com/HPXB6dMyXAtE7lDZgQCKN87P6lv9v6bhxlM2MACGW_PwYK0IpSGJ3Ldv4tJb_d8F66dXuPDDoTZ0WXl1zHHGJrNHLGx__CDAdnBqJIUEMZktb6QR2QdVyRhk11mkgw"
                    alt="error"
                  />
                  <h4>PARUL KULSHRESHTHA</h4>
                  <p>
                    2005/B Arch/AR
                    <br />
                    Head- Business Development, GMR Hyderabad Air Cargo &
                    Logistics
                  </p>
                </div>
              </div>

              <div className="Row">
                <br />
                <br />
                <div className="block-alum">
                  <img
                    src="https://lh5.googleusercontent.com/JwnAsn423S5pZ4QVBDHHKVQx47OcjIWATIS46DZsZQVrthnlI-KHqBPxQuXOrOE02Wxge20JHZm4gCMU19MmHIelB-ZWFfFTnE_pJzq8DKwxuTc_tOjsv7iNzME0Kw"
                    alt="error"
                  />
                  <h4>ANITA V</h4>
                  <p>
                    2006/B Tech/BT
                    <br />
                    Principal, Roivant Health, Roivant Sciences
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://lh5.googleusercontent.com/oACOboFTMTMC-rDYJfUzOKm4lkATIiT-KfKFARJTPXCbmfNHEk2aJQNLaJiUZ_NpTH6VZiD1ThoCPv7cw_RwvdmgH-xO1lcEvKHROkwcvWsynjEvAhjI5_FWx03F6g"
                    alt="error"
                  />
                  <h4>S L SIVAREENA</h4>
                  <p>
                    2015/DD/ME
                    <br />
                    Co-Founder, PregBuddy (Google Launchpad)
                  </p>
                </div>
                <div className="block-alum">
                  <img
                    src="https://lh5.googleusercontent.com/jq1jy3IXoZBRPzb4p2OjT7zhNyZoJYvHH6Zc_B5-QCdN4gH-VrtxLzr_l4CrPShTj7WdmbdnefaegRGKO7wL_X5--MnRjqtE0Q0PB0__8S4skKr5cMOy9a21ohkqeA"
                    alt="error"
                  />
                  <h4>AKANKSHA SWARNIM</h4>
                  <p>
                    2012/B Arch/AR
                    <br />
                    Zonal Director, UPAY NGO
                  </p>
                </div>
              </div>

              <div className="Row">
                <div className="block-alum">
                  <img
                    src="https://lh3.googleusercontent.com/RKeqfL0l6wu84xxfYTm4gPHlXX1IYMXOv-hS98W9VnnOOsn2y2OsuijmiHrsQ61ZUz3KEEnIm6c8GoeWDV21VtvgOV6Fy46dy099L2JUBv0Amt1XnzI8MZEu1skTKQ"
                    alt="error"
                  />
                  <h4>POOJA RAI</h4>
                  <p>
                    2015/B Arch/AR
                    <br />
                    Co-founder, Anthill Creations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlumniCard;
