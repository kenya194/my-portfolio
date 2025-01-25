import React from 'react'
import './experience.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills acquired</h5>
      <h2> My skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Overview</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Programming Languages</h4>
                <small className='text-light'> JavaScript, HTML, CSS, SQL, Python, C#</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Technologies & Frameworks</h4>
                <small className='text-light'> Node.js, React.Js, Native, Express, MongoDB, Firebase, Django</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Tools</h4>
                <small className='text-light'> Git, GitHub, Visual Studio Code, Postman, Linux</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Microsoft Technologies</h4>
                <small className='text-light'>SharePoint, Exchange, Teams, OneDrive, Excel</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Soft skills</h4>
                <small className='text-light'> Problem-solving, troubleshooting, team collaboration, communication, time management</small>
            </article>
            
          </div>
        </div>

            <div className="experience__otherSkills">
              <h3>Other Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Communication</h4>
                <small className='text-light'> Proficient</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Leadership</h4>
                <small className='text-light'> Experienced</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4> Writing</h4>
                <small className='text-light'>Very good</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Spanish</h4>
                <small className='text-light'> Level - B2</small>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>German</h4>
                <small className='text-light'> Level - B2</small>
            </article>

            </div>
        </div>

      </div>
    </section>
  )
}

export default Experience