import React from 'react';
import styled from 'styled-components';

import AboutMeImage from '../images/about-me.jpg';

const StyledAboutMe = styled.div`
  width: 75%;
  margin: auto;
  > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
  }
`;

const ProfileImage = styled.img`
  width: 25%;
  border-radius: 120px;
  margin-right: 20px;
`;

const StyledList = styled.ul`
    line-height: 4;
    list-style: none;
`;

const StrikeThrough = styled.span`
  text-decoration: line-through;
  margin-left: 5px;
  margin-right: 5px;
`;

const Link = styled.a.attrs({
    target: '_blank'
})`
  margin-left: 3px;
  margin-right: 3px;
`;

const About = () => {
    return (
        <StyledAboutMe>
            <div>
                <ProfileImage
                    src={AboutMeImage}
                />
                <div>
                    <StyledList>
                        <li>
                            Lead UI Engineer
                            <Link
                                href="http://rapid7.com"
                            >
                                 @Rapid7
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="http://github.com/chrislaughlin"
                            >
                                Opensource
                            </Link> contributor
                        </li>
                        <li>
                            <Link
                                href="https://www.sitepoint.com/author/claughlin/"
                            >
                                Site point
                            </Link> author
                        </li>
                    </StyledList>
                </div>
            </div>
            <p>
                JavaScript nerd based in
                <Link
                    href="https://en.wikipedia.org/wiki/Belfast"
                >
                    Belfast
                </Link>. I spend my days writing complex over engineered web applications
                and my nights reading and writing about JavaScript while drinking some fine hipster
                <StrikeThrough>coffee</StrikeThrough>beer.
            </p>
            <p>
                I can be usually found in the local
                <Link
                    href="https://dukeofyorkbelfast.com/"
                >
                    pub
                </Link> or at a very informative
                <Link
                    href="https://www.meetup.com/Belfast-JS/"
                >
                    meetup
                </Link>
            </p>
            <p>
                I have also talk at many meetups and conferences, most notable NI Dev Conf:
                <ul>
                    <li>
                        <Link
                            href="https://www.nidevconf.com/sessions/chrislaughlin"
                        >
                            <b>There’s no Imposters Here:</b>
                        </Link>
                        <span>
                            The google trend for imposter syndrome took a spike in December 2014, it wasn’t until mid 2017 that the topic reached peek in the tech industry. It is an indiscriminate force that affects all people in tech. Fueled by the constant bombardment of blog posts, tweets and new advancements in technology. Imposter syndrome can haunt someone throughout their career.
                            However “there are no imposters here” The tech community is actively working to remove barriers and provide inclusion for all. In these times we need to identify and stop imposter syndrome.
                        </span>
                    </li>
                    <li>
                        <Link
                            href="https://2017.nidevconf.com/sessions/chrislaughlin/"
                        >
                            <b>Top 5 Chrome Developer Tools Features:</b>
                        </Link>
                        <span>
                            A quick paced look at my top 5 most used and most useful Chrome Developers Tools features. From inspecting elements to profiles applications.
                        </span>
                    </li>
                </ul>
            </p>
        </StyledAboutMe>
    );
};

export default About;