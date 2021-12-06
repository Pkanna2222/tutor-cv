import React from 'react'
import './headerbox.css'
import logo from './logo.png'
import image from './pic_tutor.png'
import image1 from './pic_student.png'
import {AccessAlarms, KeyboardVoiceOutlined, LocalPhoneOutlined, SettingsInputComponentOutlined, VideocamOutlined} from '@material-ui/icons';


const HeaderBox = () => {
    return (
        <div className='headerBoxContainer'>
          <div className='headerBoxHeading'>
          <img src={logo} alt='' className='logo'/>
          </div>
          <div className="headerImgs">
              <img src={image} alt='' className='myImg'/>
              <div className='smallImageContainer'>
              <span className='bubble bubble-bottom-left'>Audio/Video Settings</span>
              <SettingsInputComponentOutlined className='settingsIcon' style={{ fontSize: 20, padding:5 }}/>
              <img src={image1} alt='' className='myImg1'/>
              <div>
                  <VideocamOutlined className='videoIcon' style={{ fontSize: 25, padding: 5 }}/>
                  <KeyboardVoiceOutlined className='micIcon' style={{ fontSize: 25, padding: 5 }}/>
              </div>
              </div>
          </div>
          <div className='timer'>
              <AccessAlarms className="alaram_icon" style={{ fontSize: 30 }}/>
              <span>00:00</span>
          </div>
          <div className='rewardText'>
              <span>Puzzle and exciting rewards awaiting you right after the demo!</span>
          </div>
          <div className='contactDetails'>
              <LocalPhoneOutlined style={{fontSize: 30}} />
              <div>
              <span>For supprt</span><br/>
              <span>+91 9495123456</span>
              </div>
          </div>
        </div>
    )
}

export default HeaderBox
