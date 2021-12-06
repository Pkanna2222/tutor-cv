import React from 'react'
import './tutordetails.css'
import image from './pic_tutor.png'
import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'
import image4 from './4.png'
import image5 from './5.png'
import footerImg from './footer_design.png'


const TutorDetails = () => {
    return (
        <div className='tutorContainer'>
            <div className='tutorDetailsWapper'>
                <div className='tutorDetails'>
                    <div className='tutorHeading'>
                      <span>Meet your tutor</span><br/>
                      <span className='tutorName'>Ankita Sharma</span>
                    </div>
                    <div className='tutorFullDetails'>
                        <div className='tutor_img_container'><img src={image} 
                        alt='tutor_image' 
                        className='tutorImg image'
                        /></div>
                        <div className='tutor_activity_details'>
                        <div>
                          <img src={image1} alt='' className='tutor_activity_logo img1' />
                          <span className='tutor_activity_text1'>I'm from Indore, India</span>
                        </div>
                        <div className='tutor_activity_info'>
                          <img src={image2} alt='' className='tutor_activity_logo img2' />
                          <span className='tutor_activity_text2'>I studied Msc Maths at college </span>
                        </div>
                        <div>
                          <img src={image3} alt='' className='tutor_activity_logo img3' />
                          <span className='tutor_activity_text3'>when I'm not tutoring, I love to listen music and play cards</span>
                        </div>
                        <div>
                          <img src={image4} alt='' className='tutor_activity_logo img4' />
                          <span className='tutor_activity_text4'>I have been a math tutor for 4 years</span>
                        </div>
                        <div>
                          <img src={image5} alt='' className='tutor_activity_logo img5' />
                          <span className='tutor_activity_text5'>I have a Level III International Math expert certificate</span>
                        </div>                          
                        </div>
                    </div>
                    </div>
            </div>
            <img src={footerImg} alt='' className='footerImg' />
        </div>
    )
}

export default TutorDetails