export default () => (
  <div className="root">
    <div>
      <p>Enjoy music with Soundify</p>
      <p>A third party client for spotify</p>
      <p>Click the following button to authorize</p>
      <div>Sign in with spotify</div>
    </div>

    <style jsx>{`
      .loader {
        position: relative;
        margin: 0 auto;
        width: 100px;
      }
      .loader:before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      .circular {
        animation: rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }

      .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
      @keyframes color {
        100%,
        0% {
          stroke: #d62d20;
        }
        40% {
          stroke: #0057e7;
        }
        66% {
          stroke: #008744;
        }
        80%,
        90% {
          stroke: #ffa700;
        }
      }
      body {
        background-color: #eee;
      }

      .showbox {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 5%;
      }
    `}</style>
  </div>
);
