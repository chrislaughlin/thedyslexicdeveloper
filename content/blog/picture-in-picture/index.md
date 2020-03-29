---
title: Picture In Picture
date: "2020-03-29"
---

The Picture in Picture APi allows users to continue to consume video content on your site while also exploring the rest
of the sites content, even allowing users to move onto new pages. A Great example of this in on the YouTube site.

![Picture in Picture Youtube](./youTube-example.gif)

The API is very easy to work with and can add value to your site. Lets get started with a simple example. All the code
for this can be found [here](https://github.com/chrislaughlin/thedyslexicdeveloper/blob/master/src/pages/pic-in-pic.js) with the final working example [here](/picture-in-picture)

### Setting up the video content

First things first we need a video to control, for this example I pulled an old Youtube clip of myself down locally. I
then added this content to my site. I can then reference this in the video tag:

```jsx
    <video
      ref={videoRef}
      controls
      src='some-video.mp4'
    />
```

For this example we are going to be using React hence the addition of the ref attribute. So lets set up out ref:

```jsx
const PicInPic = () => {
    const videoRef = useRef();

    return (
        <video
          ref={videoRef}
          controls
          src='some-video.mp4'
        />
    )
}
```

We now have a video player but other than allowing the user to play the video we can't do much. So lets start getting
some picture in picture controls on the go.

### Picture in Picture Controls

Lets add some controls to turn on and all picture in picture. First a button that can take our video and tigger the
picture in picture API.

```jsx
        <button
          onClick={enterPictureInPicture}
        >
          Picture In Picture
        </button>
```

Simples? well not completely. We need to add some checks for the API, according to [caniuse.com](https://caniuse.com/#feat=picture-in-picture)
is supported by most modern browsers but as usual we have no IE support. Lets add some support checks.

```jsx
const [ supportedState, setSupportedState ] = useState('checking');

useEffect(() => {
    if ('pictureInPictureEnabled' in document) {
      setSupportedState('supported');
    } else {
      setSupportedState('not supported');
    }
}, [])

<button
  disabled={supportedState === 'checking' || supportedState === 'not supported'}
  onClick={enterPictureInPicture}
>
  Picture In Picture {supportedState === 'not supported' && `(not supported)`}
</button>
```

This will now handle the rendering of the button and check if the API is supported for the browser. Now to trigger the
API. We can grab our video element, trigger the API and also keep track if the video is currently in picture in picture
mode.

```jsx
const enterPictureInPicture = () => {
    videoRef
      .current
      .requestPictureInPicture()
      .then(() => {
        setSupportedState('in pip')
      })
      .catch(pipError => {
        console.error(pipError.message)
      })
  }
```

The `requestPictureInPicture` function returns a Promise which allows us to catch when the video has moved to picture in
picture or if the call has failed. The failure and be for a number of reasons, the video element has not valid e.g the
src content is not valid video data or the action that triggered `requestPictureInPicture` was not valid.

`requestPictureInPicture` can only be triggered from a set of valid user actions e.g. click, change, mouseup etc.
Interestingly scroll is not supported. This means that you can't trigger a picture in picture when the user scrolls. This
is most likely to prevent the abuse of the API with the likes of adds.

Once in picture in picture mode we can also exist it. Lets wire up a button to handle that.

```jsx
const exitPictureInPicture = () => {
    document
      .exitPictureInPicture()
      .then(() => {
        setSupportedState('supported')
      })
      .catch(pipError => {
        console.error(pipError.message)
      });
}

{
  supportedState === 'in pip' &&
  <button
    onClick={exitPictureInPicture}
  >
    Close
  </button>
}
```

We only want to show the exist button when we know the current state is `in pip` Again the exitPictureInPicture returns
a Promise which allows use to update out current status or handles errors. So putting this all together we can build a
fully functional picture in picture player as seen below.


![Final Example](./final-example.gif)

