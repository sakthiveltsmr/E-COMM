import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitweb = () => {
    window.location = "https://github-sakthi-profile.netlify.app/";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://lh3.googleusercontent.com/Wf4dl3grc3I1ictA1s_1eZD8CdLC4-YE-J5Pc1BKMT72oXx8HlUZAfLtqWX-Ao8M00MlSh1_HgsicY0KoExA3Vq_G7L_TScYL1tz2TXmQpoxDFSQzy70W2uC_QVCmuyOWlj_T65lJ65w2ktiiMVfuRAT-orDmJdYaUhce57LLkHG03A7XqlBQDYVdfpM6sSEa7DCyX1MdlHVRxB22qH2YljIHPdRmX85-D2Ao-mzUxlk8TvcIzfwRspHOuqw1eNHuXrRGYTBCLj0OPcesR2p3VTLEz7BuGOs3UyaSTOJh_nzkiVUoHCw09QI97Nc19SYvyIE3xciUJwGJLAL0ngRWEx21mkQ4DNPd6tz9tIvwO-F8U8GI-iAQ3QgpUZxbSgaeLl2D5M3WrVKzlpFY5vA_qB_O9wL7v_rO8qzQz0Dl7x4axj3CS9faNI8lErKidWn4xNOoqlm7k0ykC8npOsjTdtIBZPaxYXAZTjqeE-tbP84bSJ6Uprs6dgdDLoq9VqJmRjse3dGnQ4-003j-TiZSZ97ykfhs57Lff81R7HaaRgmkX0nPAEimcW0Hq2DuqpPqNqMGnEvzaC4nOJZPR5o1rsUptycUygH0yWJqpRTR6q6MUYid28dg9oz5jpNXhuBFV4A7juIAk_bjU-VyfbpPt8i58TIF4bbU6hp3mGXHq6qfEQds63A97atgA7vyPlrsz6bPbDriXicc353guY_g6b-=w670-h893-no?authuser=0"
              alt="Founder"
            />
            <Typography>Sakthivel R</Typography>
            <Button onClick={visitweb} color="primary">
              Visit website
            </Button>
            <span>iam looking for job in full stack developer</span>
          </div>
          {/* <div className="aboutSectionContainer2"> */}
          {/* <Typography component="h2">Our Brands</Typography> */}
          {/* <a */}
          {/* href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw" */}
          {/* target="blank" */}
          {/* > */}
          {/* <YouTubeIcon className="youtubeSvgIcon" /> */}
          {/* </a> */}

          {/* <a href="https://instagram.com/meabhisingh" target="blank"> */}
          {/* <InstagramIcon className="instagramSvgIcon" /> */}
          {/* </a> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
