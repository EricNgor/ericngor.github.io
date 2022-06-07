import React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import './home.css';

const Home: React.FC = () => {
  // const [age, setAge] = useState<number>(0);

  // useEffect(() => { // []
  //   const bd = new Date(2000, 7, 13);
  //   const now = new Date(Date.now());
  //   let time_dif = now.getTime() - bd.getTime();
  //   // millis in a year
  //   const one_year = (1000 * 60 * 60 * 24 * 365);
  //   const years = Math.floor(time_dif / one_year);
  //   setAge(years);
  // }, []);

  return (
    <div className="home-component">
      <article className="main-box">
        <h1>Eric Ngor</h1>
        <h2>Full Stack Engineer</h2>
        <div className="links">
          <a href="https://github.com/EricNgor" title="Follow on GitHub"><GitHub size="36"/></a>
          <a href="https://linkedin.com/in/eric-ngor" title="Connect on LinkedIn"><Linkedin size="36"/></a>
        </div>
      </article>
      {/* <article className="about-box">
        <p>I recently graduated with a B.S. with Honors in Computer Science from 
          the University of California, Santa Cruz.

        </p>
      </article> */}
      <h3>Work in progress!</h3>
      {/* <img src="./Eric-Ngor-Resume.pdf" alt="" /> */}
      {/* <object
        data="/Eric-Ngor-Resume.pdf"
        type="application/pdf"
      >
      </object> */}
    </div>
  );
}

export default Home;