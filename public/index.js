const STYLES = `
  <style>
    body {
      background-color: #eee;
      color: #494949;
      font-family: Arial, sans-serif;
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .title, .content, .profilePic {
      padding: 2rem;
    }
    .title {
      text-align: center;
      text-transform: uppercase;
      font-weight: 200;
    }
    .content {
      font-size: 1.35em;
    }
    .profilePic img {
      display: block;
      border-radius: 50%;
      border: 1px solid black;
    }
  </style>
`;

const returnHTMLtempate = (content) => {
  return (
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>What Julian did yesterday</title>
      </head>
      ${STYLES}
      <body>
        <div class="main">
          <div class="title">
            <h1>Hello, my name is Julian</h1>
          </div>
          <div class="profilePic">
            <img src="https://avatars0.githubusercontent.com/u/2480604?s=460&v=4"/>
          </div>
          <div class="content">
            <p>
              ${content}
            </p>
          </div>
        </div>
        <script src="http://code.responsivevoice.org/responsivevoice.js"></script>
        <script type="text/javascript">
          window.onload = function () {
            responsiveVoice.speak("${content.replace(/<\/?br\/?>|\"/g, '')}", "UK English Male", {pitch: 0.9, rate: 0.9});
          }
        </script>
      </body>
      </html>
    `
  )
};

module.exports = returnHTMLtempate;
