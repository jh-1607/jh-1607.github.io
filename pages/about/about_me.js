import styled from "styled-components";
import GlobalStyle from '../../components/GlobalStyle';
import {Helmet} from 'react-helmet';
import MainContainer from '../../components/MainContainer';
import Topbar from '../../components/Topbar';
import PageContents from '../../components/PageContents';

const AboutMeDiv = styled.div`
    font-family: "default_sans";
    color: white;
    text-align: left;
`;

const ProfilePic = styled.img`
    position: relative;
    float: right;
    top: 5px;    
    padding: 7px 10px 10px 7px;
`;

const TopbarEntriesAboutMe = {
    "About": {
        "About Me": "/about/about_me"
    },
    "Cool Places": {
        "Favorite Websites": "/places/favorite_sites"
    },
    "Projects": {
        "Current Projects": "/projects/current_projects",
        "Past Projects": "/projects/past_projects",
        "Projects I wish I had time to work on": "/projects/piwihttwo"
    }
};

export default function about_me () {
    return (
        <>
            <GlobalStyle />
            <Helmet>
              <title>About Me</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesAboutMe}/>
                <PageContents>
                    <AboutMeDiv>
                        <h2>About Me</h2>
                        <ProfilePic src="data:image/jpeg;base64,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"></ProfilePic>
                        <p>
                            Hey it's Vsauce here. Actually my name is Jacob. I just recently graduated with a Bachelor's degree in Computer Science: Software Systems 
                            and a minor in Economics from the University of Tennessee at Chattanooga. In my free time I enjoy mountain biking, gaming, programming, and 
                            tinkering/repairing electronics and cars. I'm not a huge fan of social media so I don't really post much online. 
                        </p>
                        <p>
                            Regarding Programming, I have experience with Python, Java, JavaScript, C#, C, PHP, SQL, and Lua. I honestly
                            believe that languages aren't as much an experitise as they are in knowing the structure of modern programming languages. 
                            Most modern programming langauges are imperative, object-oriented languages. So really, if you understand the fundamentals
                            of these types of languages, such as polymorphism, coercion, functions, types, loops, exceptions, parameters, and scope, 
                            you should be fine. Then, it's just a matter of syntax.
                        </p>
                        <p>
                            Anyways, I'm excited for what the future has to offer! I love learning new things, seeing new places, and meeting 
                            new people. I'm not entirely sure what the main purpose of this website will be other than as my sort of personal 
                            website blog thing. I'll probably experiment around with it when I'm bored or not working on one of many of my stupid projects. 
                            As George Carlin once said, "I have lots of ideas. Trouble is, most of them suck."
                        </p>
                        <br></br>
                        <p>
                            56 65 6E 69 2C 20 76 69 64 69 2C 20 76 69 63 69 2C 20 76 69 78 69
                        </p>
                    </AboutMeDiv>
                </PageContents>
            </MainContainer>
        </>
    )
}
