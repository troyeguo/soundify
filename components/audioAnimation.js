export const AudioAnimation = () => (
  <div className="root">
    <div className="audio-anim-frame">
      <div className="audio-anim-block first-block"></div>
      <div className="audio-anim-block second-block"></div>
      <div className="audio-anim-block third-block"></div>
      <div className="audio-anim-block fourth-block"></div>
      <div className="audio-anim-block fifth-block"></div>
      <div className="audio-anim-block sixth-block"></div>
      <div className="audio-anim-block seventh-block"></div>
      <div className="audio-anim-block eighth-block"></div>
      <div className="audio-anim-block ninth-block"></div>
      <div className="audio-anim-block tenth-block"></div>
      <div className="audio-anim-block eleventh-block"></div>
    </div>

    <style jsx>{`
      .audio-anim-block {
        display: inline-block;
        width: 6px;
        height: 90px;
        background-color: rgb(0, 84, 148);
        margin: 2px;
        border-radius: 5px;
      }

      @keyframes first-block {
        0% {
          transform: scaleY(0.3);
        }
        25% {
          transform: scaleY(0.6);
        }
        50% {
          transform: scaleY(0.3);
        }
        100% {
          transform: scaleY(0.2);
        }
      }

      .audio-anim-block.first-block {
        animation-name: first-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      @keyframes second-block {
        0% {
          transform: scaleY(0.6);
        }
        25% {
          transform: scaleY(0.7);
        }
        50% {
          transform: scaleY(0.9);
        }
        100% {
          transform: scaleY(0.7);
        }
      }

      .audio-anim-block.second-block {
        animation-name: second-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      @keyframes third-block {
        0% {
          transform: scaleY(1);
        }
        25% {
          transform: scaleY(0.9);
        }
        50% {
          transform: scaleY(0.2);
        }
        100% {
          transform: scaleY(1);
        }
      }

      .audio-anim-block.third-block {
        animation-name: third-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes fourth-block {
        0% {
          transform: scaleY(0.2);
        }
        25% {
          transform: scaleY(0.5);
        }
        50% {
          transform: scaleY(0.9);
        }
        100% {
          transform: scaleY(0.1);
        }
      }

      .audio-anim-block.fourth-block {
        animation-name: fourth-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes fifth-block {
        0% {
          transform: scaleY(0.9);
        }
        25% {
          transform: scaleY(0.1);
        }
        50% {
          transform: scaleY(0.5);
        }
        100% {
          transform: scaleY(0.6);
        }
      }

      .audio-anim-block.fifth-block {
        animation-name: fifth-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes sixth-block {
        0% {
          transform: scaleY(0.6);
        }
        25% {
          transform: scaleY(0.8);
        }
        50% {
          transform: scaleY(0.1);
        }
        100% {
          transform: scaleY(0.5);
        }
      }

      .audio-anim-block.sixth-block {
        animation-name: sixth-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes seventh-block {
        0% {
          transform: scaleY(0.4);
        }
        25% {
          transform: scaleY(0.7);
        }
        50% {
          transform: scaleY(0.9);
        }
        100% {
          transform: scaleY(0.2);
        }
      }

      .audio-anim-block.seventh-block {
        animation-name: seventh-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes eighth-block {
        0% {
          transform: scaleY(0.2);
        }
        25% {
          transform: scaleY(0.5);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(0.3);
        }
      }

      .audio-anim-block.eighth-block {
        animation-name: eighth-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes ninth-block {
        0% {
          transform: scaleY(0.7);
        }
        25% {
          transform: scaleY(0.9);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(0.6);
        }
      }

      .audio-anim-block.ninth-block {
        animation-name: ninth-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes tenth-block {
        0% {
          transform: scaleY(0.5);
        }
        25% {
          transform: scaleY(0.6);
        }
        50% {
          transform: scaleY(0.4);
        }
        100% {
          transform: scaleY(0.3);
        }
      }

      .audio-anim-block.tenth-block {
        animation-name: tenth-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes eleventh-block {
        0% {
          transform: scaleY(0.1);
        }
        25% {
          transform: scaleY(0.5);
        }
        50% {
          transform: scaleY(0.6);
        }
        100% {
          transform: scaleY(0.2);
        }
      }

      .audio-anim-block.eleventh-block {
        animation-name: eleventh-block;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    `}</style>
  </div>
);
export const AudioStop = () => {
  return (
    <div className="root">
      <div className="audio-anim-frame">
        <div className="audio-anim-block first-block"></div>
        <div className="audio-anim-block second-block"></div>
        <div className="audio-anim-block third-block"></div>
        <div className="audio-anim-block fourth-block"></div>
        <div className="audio-anim-block fifth-block"></div>
        <div className="audio-anim-block sixth-block"></div>
        <div className="audio-anim-block seventh-block"></div>
        <div className="audio-anim-block eighth-block"></div>
        <div className="audio-anim-block ninth-block"></div>
        <div className="audio-anim-block tenth-block"></div>
        <div className="audio-anim-block eleventh-block"></div>
      </div>
      <style jsx>{`
        .audio-anim-frame {
          display: flex;
          align-items: center;
        }
        .audio-anim-block {
          display: inline-block;
          width: 6px;
          height: 90px;
          background-color: rgb(0, 84, 148);
          margin: 2px;
          border-radius: 5px;
        }
        .first-block {
          height: 30px;
        }
        .second-block {
          height: 50px;
        }
        .third-block {
          height: 50px;
        }
        .fourth-block {
          height: 30px;
        }
        .fifth-block {
          height: 70px;
        }
        .sixth-block {
          height: 50px;
        }
        .seventh-block {
          height: 80px;
        }
        .eighth-block {
          height: 40px;
        }
        .ninth-block {
          height: 50px;
        }
        .tenth-block {
          height: 70px;
        }
        .eleventh-block {
          height: 30px;
        }
      `}</style>
    </div>
  );
};
