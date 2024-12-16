const style = document.createElement('style');
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

  * {
      box-sizing: border-box;
  }

  body {
      background-color: #ffe4e1;
      background-image: linear-gradient(to bottom, #ffdde1 0%, #fcd6ff 50%, #d7f9ff 100%);
      font-family: 'Muli', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      color: #ffffff;
  }

  nav {
      background: linear-gradient(45deg, #3a6186, #89253e);
      padding: 30px;
      width: 222px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      box-shadow: 0 9px 17px rgba(0, 0, 0, 0.8);
      transition: width 0.8s ease-in-out, border-radius 0.6s ease-in-out, background-color 0.6s ease-in-out;
  }

  nav.active {
      width: 555px;
      border-radius: 33px;
      background: linear-gradient(90deg, #4b6cb7, #182848);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.8);
  }

  nav ul {
      display: flex;
      justify-content: space-evenly;
      list-style-type: none;
      padding: 0;
      margin: 0;
      width: 0;
      overflow: hidden;
      transition: width 0.6s ease-in-out;
  }

  nav.active ul {
      width: 100%;
  }

  nav ul li {
      transform: scale(0);
      opacity: 0;
      transition: transform 0.6s ease-in-out, opacity 0.5s ease-in-out;
  }

  nav.active ul li {
      transform: scale(1);
      opacity: 1;
  }

  nav ul li:hover {
      transform: scale(1.1);
  }

  nav ul a {
      position: relative;
      color: #fcd6ff;
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
      margin: 0 10px;
      transition: color 0.8s ease-in-out;
      white-space: nowrap;
  }

  nav ul a:hover {
      color: #69f0ae;
  }

  .icon {
      background-color: #424242;
      border: 0;
      cursor: pointer;
      padding: 0;
      position: relative;
      height: 45px;
      width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.2s ease-in-out;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  .icon:hover {
      background-color: #69f0ae;
  }

  .icon:focus {
      outline: 0;
  }

  .icon .line {
      background-color: #ff6f61;
      height: 4px;
      width: 25px;
      position: absolute;
      border-radius: 2px;
      transition: transform 0.4s ease-in-out, background-color 0.3s ease-in-out;
  }

  .icon .line1 {
      top: 12px;
  }

  .icon .line2 {
      top: 24px;
  }

  .icon:hover .line {
      background-color: #fcd6ff;
  }

  nav.active .icon .line1 {
      transform: rotate(45deg) translate(5px, 5px);
      top: 18px;
  }

  nav.active .icon .line2 {
      transform: rotate(-45deg) translate(5px, -5px);
      top: 18px;
  }

  nav.active .icon:hover .line {
      background-color: #42a5f5;
  }

  nav ul li:hover a {
      text-shadow: 0 3px 5px rgba(156, 218, 11, 0.5);
  }

  body {
      animation: gradient-animation 2s infinite alternate;
  }

  @keyframes gradient-animation {
      0% {
          background-image: linear-gradient(to bottom, lightgreen, lightyellow, lightpink);
      }
      50% {
          background-image: linear-gradient(to bottom, goldenrod, lightblue, gray);
      }
      100% {
          background-image: linear-gradient(to bottom, skyblue, orange pink);
      }
  }
`;
document.head.appendChild(style);

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('active'));
