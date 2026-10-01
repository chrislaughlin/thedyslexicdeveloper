import React from "react"
import styled from "styled-components"
import InLineLink from "../inLineLink"

const Section = styled.section`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 65px;
  border-top: 1px solid #7d9bc32e;
  padding: 44px 0;
  scroll-margin-top: 90px;
  @media (max-width: 850px) {
    grid-template-columns: 190px minmax(0, 1fr);
    gap: 35px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 32px 0;
    scroll-margin-top: 120px;
  }
`
const SectionNumber = styled.span`
  display: block;
  margin-bottom: 14px;
  color: #68c7ff;
  font: 10px/1.5 "Courier New", monospace;
  letter-spacing: 0.14em;
`
const SectionTitle = styled.h2`
  margin: 0;
  color: #f0f5ff;
  font: 700 28px/1.25 "Montserrat", sans-serif;
  letter-spacing: -0.04em;
`
const ProfileName = styled.p`
  color: #ff66b7;
  font-size: 15px;
  font-weight: 600;
  margin: 22px 0 6px;
`
const ProfileMeta = styled.p`
  margin: 0;
  color: #91a5c2;
  font-size: 12px;
  line-height: 1.9;
`
const SectionBody = styled.div`
  color: #b5c2d8;
  font-size: 15px;
  line-height: 1.9;
  min-width: 0;
  p {
    margin: 0 0 18px;
    max-width: 68ch;
  }
  > div {
    margin-top: 26px;
  }
  > :last-child {
    margin-bottom: 0;
  }
  a {
    color: #68c7ff;
    text-decoration: underline;
    text-decoration-color: #68c7ff55;
    text-underline-offset: 4px;
  }
  a:hover {
    color: #ff66b7;
    text-decoration-color: currentColor;
  }
`
const StyledWhoQuestion = styled.span`
  color: #ff66b7;
  font-style: italic;
  font-weight: 600;
`
const SubHeading = styled.h3`
  color: #ff66b7;
  font: italic 600 15px/1.9 "Montserrat", sans-serif;
  margin: 0;
`
const StyledHighLightedText = styled.span`
  font-style: italic;
  color: #ff66b7;
`
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  li {
    position: relative;
    padding: 12px 24px 12px 0;
    margin: 0;
    border-bottom: 1px solid #7d9bc31a;
    overflow-wrap: anywhere;
  }
  li:first-child {
    padding-top: 4px;
  }
  li:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
  li::after {
    content: "↗";
    position: absolute;
    right: 0;
    top: 12px;
    color: #ff66b7;
    font-size: 12px;
  }
  li:first-child::after {
    top: 4px;
  }
  a {
    margin: 0;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

export default function Resume() {
  return (
    <>
      <Section id="profile" aria-labelledby="profile-title">
        <div>
          <SectionNumber aria-hidden="true">01 / PROFILE</SectionNumber>
          <SectionTitle id="profile-title">Profile</SectionTitle>
          <ProfileName>Chris Laughlin</ProfileName>
          <ProfileMeta>
            Software developer
            <br />
            Northern Ireland
            <br />
            Building since 2010
          </ProfileMeta>
        </div>
        <SectionBody>
          <p>
            <StyledWhoQuestion>
              Who is the Dyslexic Developer?
            </StyledWhoQuestion>{" "}
            a great question that one one has asked. I still feel the need to
            explain.
          </p>
          <p>
            The Dyslexic Developer is{" "}
            <StyledHighLightedText>Chris Laughlin</StyledHighLightedText>, a
            software developer from{" "}
            <StyledHighLightedText> Northern Ireland </StyledHighLightedText>.
            He started his journey in the crazy world of development in 2010.
            Working with companies like{" "}
            <StyledHighLightedText> Microsoft </StyledHighLightedText>,
            <StyledHighLightedText> Asidua </StyledHighLightedText>, and{" "}
            <StyledHighLightedText> Rapid7 </StyledHighLightedText>. He spends
            way to much time on{" "}
            <StyledHighLightedText>Twitter </StyledHighLightedText> and{" "}
            <StyledHighLightedText> Github </StyledHighLightedText>
            trying to maintain some sort of open-source presence. He has a{" "}
            <StyledHighLightedText>TODO </StyledHighLightedText>
            list a mile long of things to try and learn that grows every day.
            Check out some of the adventures he's taken below.
          </p>
        </SectionBody>
      </Section>
      <Section id="talks" aria-labelledby="talks-title">
        <div>
          <SectionNumber aria-hidden="true">02 / TALKS</SectionNumber>
          <SectionTitle id="talks-title">Talks</SectionTitle>
        </div>
        <SectionBody>
          <p>
            I am a regular{" "}
            <StyledHighLightedText> speaker </StyledHighLightedText> at local
            <StyledHighLightedText> meetups </StyledHighLightedText> and have
            spoken at a number of
            <StyledHighLightedText> conferences </StyledHighLightedText>. I have
            also organized and spoken at internal work
            <StyledHighLightedText>
              {" "}
              lunch and learn{" "}
            </StyledHighLightedText>{" "}
            sessions.
          </p>
          <div>
            <SubHeading>Meetups:</SubHeading>
            <StyledList>
              <li>
                <InLineLink link="https://www.meetup.com/Belfast-JS/">
                  Belfast JS
                </InLineLink>
              </li>
            </StyledList>
          </div>
          <div>
            <SubHeading>Conferences:</SubHeading>
            <StyledList>
              <li>
                <InLineLink link="https://youtu.be/8GCRPffeAB8">
                  WFH Conf 2020: Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/EsEnOdqVukQ">
                  ReactiveConf 2019: Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/f8U1hoOlBUk">
                  JSDayIE 2019: Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/g-Mb-XlteAY">
                  NI Dev Conf 2019: All your packages are belong to us -
                  Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/K7EIiHqV7r0">
                  NI Dev Conf 2018: There’s no Imposters Here
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://2017.nidevconf.com/sessions/chrislaughlin/">
                  NI Dev Conf 2017: Top 5 Chrome Developer Tools Features
                </InLineLink>
              </li>
            </StyledList>
          </div>
        </SectionBody>
      </Section>
      <Section id="publications" aria-labelledby="publications-title">
        <div>
          <SectionNumber aria-hidden="true">03 / PUBLICATIONS</SectionNumber>
          <SectionTitle id="publications-title">Publications</SectionTitle>
        </div>
        <SectionBody>
          <p>
            I have been published on{" "}
            <StyledHighLightedText> external </StyledHighLightedText> blogs and
            contributed to
            <StyledHighLightedText> books </StyledHighLightedText>
          </p>
          <div>
            <SubHeading>Blogs:</SubHeading>
            <StyledList>
              <li>
                <InLineLink link="https://www.sitepoint.com/style-react-components-styled-components/">
                  SitePoint 2017: Styling in React: From External CSS to Styled
                  Components
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://www.sitepoint.com/getting-started-with-codemods/">
                  SitePoint 2017: Refactor Code in Your Lunch Break: Getting
                  Started with Codemods
                </InLineLink>
              </li>
            </StyledList>
          </div>
          <div>
            <SubHeading>Books:</SubHeading>
            <StyledList>
              <li>
                <InLineLink link="https://www.amazon.com/Understanding-Internet-Applications-Information-Professional/dp/1843344998">
                  Chandos Publishing 2009: Understanding the Internet: A Glimpse
                  into the Building Blocks, Applications, Security and Hidden
                  Secrets of the Web
                </InLineLink>
              </li>
            </StyledList>
          </div>
        </SectionBody>
      </Section>
      <Section id="live-streaming" aria-labelledby="live-streaming-title">
        <div>
          <SectionNumber aria-hidden="true">04 / LIVE STREAMING</SectionNumber>
          <SectionTitle id="live-streaming-title">Live Streaming</SectionTitle>
        </div>
        <SectionBody>
          <p>
            I run a weekly live stream on{" "}
            <StyledHighLightedText> Twitch </StyledHighLightedText>, where I try
            out new web tech and build small projects. I always have a{" "}
            <StyledHighLightedText> drink </StyledHighLightedText> at hand to
            help me along the way. All Streams are uploaded to{" "}
            <StyledHighLightedText> Youtube </StyledHighLightedText> after
          </p>
          <p>
            You can subscribe to the channel
            <InLineLink link="https://www.twitch.tv/chrislaughlin">
              here
            </InLineLink>{" "}
            and see all previous coding videos
          </p>
          <p>
            You can see all previous coding videos
            <InLineLink link="https://www.youtube.com/channel/UCMsliAfPkd00UdKJVAOzWWw/">
              here
            </InLineLink>
          </p>
        </SectionBody>
      </Section>
    </>
  )
}
