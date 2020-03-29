import React, { useEffect, useState, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const STATES = {
  CHECKING: 'checking',
  SUPPORTED: 'supported',
  NOT_SUPPORTED: 'notSupported',
  IN_PIP: 'inPicturePicture'
}

const PictureInPicture = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [ videoData, setVideoData ] = useState('test-video.mp4');
  const [ supportedState, setSupportedState ] = useState(STATES.CHECKING);
  const [ error, setError ] = useState(null);
  const videoRef = useRef();

  useEffect(() => {
    if ('pictureInPictureEnabled' in document) {
      setSupportedState(STATES.SUPPORTED);
    } else {
      setSupportedState(STATES.NOT_SUPPORTED);
    }
  }, [])

  const enterPictureInPicture = () => {
    videoRef
      .current
      .requestPictureInPicture()
      .then(() => {
        setSupportedState(STATES.IN_PIP)
      })
      .catch(pipError => {
        console.error(pipError.message)
        setError(pipError.message)
      })
  }

  const exitPictureInPicture = () => {
    document
      .exitPictureInPicture()
      .then(() => {
        setSupportedState(STATES.SUPPORTED)
      })
      .catch(pipError => {
        console.error(pipError.message)
        setError(pipError.message);
      });
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} />
      <h1>
        Picture In Picture Example
      </h1>
      <section>
        <button
          disabled={supportedState === STATES.CHECKING || supportedState === STATES.NOT_SUPPORTED}
          onClick={enterPictureInPicture}
        >
          Picture In Picture {supportedState === STATES.NOT_SUPPORTED && `(not supported)`}
        </button>
        {
          supportedState === STATES.IN_PIP &&
          <button
            onClick={exitPictureInPicture}
          >
            Close
          </button>
        }
        <button
          onClick={() => setVideoData('')}
        >
          Clear Video Data
        </button>
        <div>
          {error}
        </div>
        <video
          ref={videoRef}
          controls
          src={videoData}
        />
      </section>
    </Layout>
  )
}

export default PictureInPicture

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
