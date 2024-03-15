import React,{useState, useEffect} from 'react'
import Image from './image.jpg'


export default function Home() {

  const words = ['Shopify Developer','React js Developer','Backend Developer','Ecommerce','Node js Developer'];
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 100;

  useEffect(() => {
    const wordFlick = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }

      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
      setPart(newPart);

    }, speed);

    return () => clearInterval(wordFlick);
  }, [forwards, offset, i, skipCount]);

  return (
      <div className='home-section'>
        <div className='row'>
          <div className='col-md-7 pro-details'>
      <h2>Welcome to My Website</h2>
      <div className='intro'>
      <p>Hi, I am Mintu</p>
      <div className="typing_animation_line">
      <span className="word">{part}</span>
      <span className="typed-cursor">|</span>
    </div>
    <p>Based in India</p>
    </div>
      <p className='texts'>I'm an India based shopify & Mern Stack developer with <span>2+ years</span> of experience.</p>
      <button className='btn-pro'>Got a project?</button>
      <button className='btn-talk'>Lets talk</button>
    </div>
      <div className='col-md-5'>
        <img className="img" src={Image} alt="" />
      </div>
      </div>
      </div>
  )
}
