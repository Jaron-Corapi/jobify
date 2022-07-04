import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Welcome to the landing page of Jobify. A full stack MERN application built 
            by yours truly. It has been quite the journey to get here but I finally made 
            it. Here's to not letting dreams be dreams.</p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
      </div>
      </Wrapper>
  )
}

export default Landing