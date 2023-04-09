import styled from "styled-components";
// import GlobalStyle from '../../components/GlobalStyle';
import {Helmet} from 'react-helmet';
import MainContainer from '../../components/MainContainer';
import Topbar from '../../components/Topbar';
import PageContents from '../../components/PageContents';

const Words = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding-bottom: 20px;
    a {
        color: white;
    }
    hr {
        width: 500px;
    }
    h3 {
        border-bottom: 1px solid white;
        padding-bottom: 5px;
    }
`;

const PageImg = styled.img`
    width: 90%;
    height: auto;
    margin: auto;
    z-index: 0;
    top: 5px;    
    padding: 7px 10px 10px 7px;
`;

const TopbarEntriesFavSites = {
    "About": {
        "About Me": "/about/about_me"
    },
    "Cool Places": {
        "Favorite Websites": "../places/favorite_sites"
    },
    "Projects": {
        "Current Projects": "current_projects",
        "Past Projects": "past_projects",
        "Projects I wish I had time to work on": "piwihttwo"
    }
};

export default function favorite_sites() {
    return(
        <>
            <Helmet>
              <title>Past Projects</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesFavSites}/>
                <PageContents>
                    <Words>
                        <h2>Past Projects</h2>
                        <h3>Farming Turtle AI</h3>
                        <ul>
                            <li>
                                Are you obsessed with automation like I am? So what if I told you that you could automate
                                farming in Minecraft? Look no further! (If you want the nuts and bolts, skip to the third paragraph) 
                                I've been playing Minecraft since I was a wee young lad and Modded Minecraft ever since I discovered this YouTuber named PopularMMOs (yes I was a kid when PopularMMOs was in his heyday). 
                                I'm a huge fan of Factorio, so here recently, and when I say recently, more like in the last five years (basically when early access Factorio came out), 
                                I put together a modpack termed "Acer's Tiered Minefactory" (forked from my previous pack named "Acer's Fantasy World Arena"),
                                which I have since restructured into a REVAMED version for 1.12.2 named "Acer's Tiered Minefactory Revamped".
                                The original modpack, "Acer's Fantasy World Arena", was actually used in a server I hosted during my highschool years.
                                The modpack was a large conglomeration of magic and "tech" mods, Blood Magic, Thaumcraft, Mekanism, Computer Craft, Industrial Craft 2, 
                                and Galacticraft to name a few. At the height of the server, I had around 4 to 6 people playing at a time. Many of my
                                close friends would in fact remember playing on this modded server because I had created an installer for them to configure
                                their Minecraft installations for the server. At its height one of the players had a massive Blood Magic circle that
                                was causing many problems during the playthrough (kek). Anywho, the main premise for the "Fantasy World Arena" was to pose a magic vs tech 
                                scenario. My main goal was to progress through enough technological innovation to make it to space and dominate the
                                server with machines. Of course, magic actually won this one unfortunately. A particular blood magic user (COUGH) got so powerful with the voodoo crap the
                                server eventually became unplayable for us techians (lol). This all ocurred over the span of 6 months. Ever since, I've never really lost the
                                Modded Minecraft bug. Factorio is great, but something about playing what is essentially Factorio in Minecraft gets me going. So yes,
                                I've been playing modded Minecraft like this for probably 8 years now. It's been a great pastime to unwind and set the weeks, years, all of life's problems aside.
                                <br/>
                                <br/>
                                I know this is a long winded answer to describe what this project is and why I undertook it. In fact, I still work on this project to this very day.
                                But essentially, I created the Farmbot AI a few years ago to farm potatoes and "hemp" (not weed) plants for Immersive Engineering biodiesel production.
                                The production of these bots would contribute to the sustenance of me (the player), since I eventually expanded the bot's manageable farming library, and it would additionally
                                allow for automated farming and power production. This would contribute wholly to progression through each tecnologically innovative tier until the space
                                tier was reached. Believe it or not, I have yet to actually progress through a <i>survival</i> playthrough of the current modpack and make it to space.
                                It is in theory possible as I have tested it many times in Creative, but survival playthroughs of this modpack are incredibly time consuming. What would take around
                                15 minutes to set up as a "factory" in Factorio could take upwards of several hours in Minecraft. It took me roughly 20 hours to build and launch a rocket in Factorio.
                                And that by no means is ground breaking. You can imagine how long the process of building a rocket, now with the mod "Advanced Rocketry", would take in Minecraft
                                with the amount of intermediary steps I have set up with this modpack.
                                <br/>
                                <br/>
                                Anyways, enough with the babbling. At this point, Computer Craft is no longer a supported mod (as of 1.12.2). So this was all coded using CC:Tweaked, a fork of Computer Craft, 
                                which itself provides a Lua Script api interface for "Turtles" which can be programmatically controlled. OpenComputers was another mod, which I did include in the current pack,
                                that could do the same; however, I chose to develop using CC:Tweaked due to the lower resource cost in constructing a Turtle in CC:Tweaked vs OpenComputers. Essentially,
                                you configure the program within a CC:Tweaked farming turtle with the farm plot bounds and the bot/program takes care of the rest, provided it has a supply of fuel in its
                                origin chest. This program is not advanced by any means really. The statement "AI" is more of an allure in stating the program is self sustaining. In fact, a recent addition I've 
                                worked on is batch configuration and control using wireless networking by means of a command computer. I have also given the program the ability to save and resume states. 
                                I'll include pictures of this project below. I have been on the fence on whether this should be a project I highlight on GitHub. This has been more of a personal endeavor 
                                for a one-off modded Minecraft playthrough that I have yet to complete. I don't think many others would find use of this program other than me, but I could be wrong. Thanks for
                                reading if you read all of this :P.
                                <br/>
                                <br/>
                                <p>Image of Turtle Console:</p>
                                <PageImg src="/images/Pic_Of_Console.png" alt="Picture of farming turtle AI program console."/>
                                <br/>
                                <p>Image of Turtle farming Potatoes:</p>
                                <PageImg src="/images/2023-03-31_22.22.06_2.png" alt="Picture of running turtle farming potatoes after configuring program."/>
                            </li>
                        </ul>
                        <h3>SAM L11 TrustZone LED Flashing</h3>
                        <ul>
                            <li>
                                This project took 10 minutes to do lol. I got an LED to flash using peripherals on a dev board which were
                                securely configured using ARM's hardware security isolation extension called the TrustZone. The TrustZone
                                is basically a separate region of memory within the SAM L11 microcontroller that could only be accessed
                                with the appropriate user privileges (though it's not really "user privileges", devices and programs could
                                be initialized in this region of memory). Link to project below.
                            </li>
                            <li>
                                Link: <a href="https://github.com/jh-1607/LEDBlinkTrustZone" target="blank" rel="noopener noreferrer">LEDBlinkTrustZone</a>
                            </li>
                        </ul>
                        <h3>VulDetect</h3>
                        <ul>
                            <li>
                                This project was a research project I worked on during my academic tenure as a research assistant.
                                It never really reached a "finished state", but the proof of concept did. Essentially, the application 
                                (written in Python) aims to visually identify individuals introducing vulnerabilies into github repositories. 
                                The end goal for the project was to provide insight to the user the commonalities between all individuals contributing 
                                to a repository that were introducing vulnerabilities. The application used the DeepWalk algorithm to produce clusterings
                                with these insights. I'll link the project below for more info. (Don't think much has occurred with it since I was an RA) 
                            </li>
                            <li>Link: <a href="https://github.com/nexus-lab/vul-detect" target="_blank" rel="noopener noreferrer">nexus-lab/vul-detect</a></li>
                        </ul>
                    </Words>
                </PageContents>
            </MainContainer>
        </>
    )
}
