import React from 'react'
import './About.css'
import Back from './../Common/Back/Back';
import img from '/images/about.jpg'
import Heading from './../Common/Heading';

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum
              ipsa vitae dicta, est quia explicabo provident fugit excepturi
              quibusdam totam magnam rerum assumenda? Cum aspernatur
              necessitatibus voluptatum fuga qui consequatur ab ullam, libero
              fugiat hic, accusamus consequuntur. Officiis nobis aspernatur
              praesentium minus aliquam in non animi officia laboriosam, veniam
              tempore facere similique molestias quo voluptates. Ut animi
              consequatur, 
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              officiis facilis autem assumenda temporibus, nostrum quasi! Sequi
              ducimus non nostrum sapiente exercitationem corrupti fugit! Dolor
              voluptatem impedit sunt dolorem illo culpa expedita ab temporibus
              fugiat soluta. Itaque, voluptatem pariatur, esse voluptas adipisci
              ducimus aliquid exercitationem ut magni, quaerat ratione delectus!
            </p>
            <button className="btn2">More About Us</button>
          </div>

          <div className="right row">
            <img src="/images/immio.jpg" className='img' alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About