import styled from "styled-components";
// import GlobalStyle from '../../components/GlobalStyle';
import {Helmet} from 'react-helmet';
import MainContainer from '../../components/MainContainer';
import Topbar from '../../components/Topbar';
import PageContents from '../../components/PageContents';

const Words = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    a {
        color: white;
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    p {
        margin: 0px 10px 0px 10px;
    }
`;

const TopbarEntriesFavSites = {
    "About": {
        "About Me": "/about/about_me",
        "Links": "/about/links"
    },
    "Cool Places": {
        "Favorite Websites": "../places/favorite_sites"
    },
    "Projects": {
        "Current Projects": "../projects/current_projects",
        "Past Projects": "../projects/past_projects",
        "Projects I wish I had time to work on": "../projects/piwihttwo"
    }
};

export default function favorite_sites() {
    return(
        <>
            <Helmet>
                <title>Favorite Websites</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesFavSites}/>
                <PageContents>
                    <Words>
                        <h2>Favorite sites</h2>
                        <p>Here is a list of some websites I generally like to visit from time to time:</p>
                        <Links>
                            <a href="https://www.anandtech.com/" target="_blank" rel="noopener noreferrer">AnandTech</a>
                            <p>- Great source of hardware related tech news.</p>
                        </Links>
                        <Links>
                            <a href="https://arstechnica.com/" target="_blank" rel="noopener noreferrer">Ars Technica</a>
                            <p>- A good news source for techies.</p>
                        </Links>
                        <Links>
                            <a href="https://cultists.network/" target="_blank" rel="noopener noreferrer">Cultists Network</a>
                            <p>- The go to spot for PC Builders and enthusiasts alike for hardware component rankings.</p> 
                        </Links>
                        <Links>
                            <a href="https://thebulletin.org/#navbar-brand" target="_blank" rel="noopener noreferrer">Bulletin of the Atomic Scientists</a>
                            <p>- A well known site for the famous "Doomsday Clock".</p>
                        </Links>
                        <Links>
                            <a href="https://www.govdeals.com/" target="_blank" rel="noopener noreferrer">GovDeals</a>
                            <p>- Often find myself perusing the vehicle section of this site.</p>
                        </Links>
                        <Links>
                            <a href="https://grabify.link/" target="_blank" rel="noopener noreferrer">Grabify</a>
                            <p>- Wanna snag some IP addresses? Here's an easy way of doing that.</p>
                        </Links>
                        <Links>
                            <a href="https://www.guru3d.com/" target="_blank" rel="noopener noreferrer">Guru3D</a>
                            <p>- Great site for in-depth enthusiast level hardware reviews.</p>
                        </Links>
                        <Links>
                            <a href="https://mediabiasfactcheck.com/" target="_blank" rel="noopener noreferrer">MediaBiasFactCheck.com</a>
                            <p>- Not every news site is 100% accurate. And neither is this site. But I still use it to weigh different news sources.</p>
                        </Links>
                        <Links>
                            <a href="https://openai.com/blog/openai-codex" target="_blank" rel="noopener noreferrer">OpenAI Codex</a>
                            <p>- Lets be honest, if you don't know what this is, then you aren't a programmer.</p>
                        </Links>
                        <Links>
                            <a href="https://www.rbauction.com/" target="_blank" rel="noopener noreferrer">Ritchie Bros Auction</a>
                            <p>- Auctions are my single largest weakness.</p>
                        </Links>
                        <Links>
                            <a href="https://www.tindie.com/" target="_blank" rel="noopener noreferrer">Tindie</a>
                            <p>- No not Tinder. Tindie is a great place to get homebrew hardware mods for legacy game consoles and vintage computers.</p>
                        </Links>
                        <Links>
                            <a href="http://toastytech.com/" target="_blank" rel="noopener noreferrer">Toasty Tech</a>
                            <p>- Crazy site made by a guy named Nathan with a great sense of humor.</p>
                        </Links>
                        <Links>
                            <a href="https://www.virustotal.com/gui/home/upload" target="_blank" rel="noopener noreferrer">Virus Total</a>
                            <p>- Ever curious if a website, file or domain is a little suspect? This is your go to site just for that. Accuracy depends.</p>
                        </Links>
                    </Words>
                </PageContents>
            </MainContainer>
        </>
    )
}
