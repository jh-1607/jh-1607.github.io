import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import {Helmet} from 'react-helmet';
import MainContainer from '../components/MainContainer';
import Topbar from '../components/Topbar';

const RickGif = styled.img`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    height: auto;
    margin: auto;
    filter: saturate(0.25) grayscale(0.8) brightness(0.03) blur(5px);
`;

const TopbarEntries = {
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

/**Index page for website.
 * 
 * @returns Main website front page.
 */
export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Helmet>
              <title>jh-1607</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntries}/>
                <RickGif src="/images/Rick g.gif"/>
            </MainContainer>
        </>
    )
}
