
import Rectangle from '../../../assets/Rectangle 2.png'
import hearth from '../../../assets/heart.png'
import share from '../../../assets/share.png'

const LineFirst = function(){
    return (
        <div style={{width: 897}}>
            <img src={Rectangle} alt="" /> <p></p>
            <b style={{fontSize: 29, fontFamily: 'sans-serif'}}>Theme Installation</b> <p></p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{display: 'flex',alignItems: 'center'}}><img src={hearth} alt="" /> <b>23</b></span>
                <span><img src={share} alt="" /></span>
            </div> <br />
            <span style={{fontSize: 20}}> 
                Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour. 
            </span> 
            <p></p>
            <ul>
                <li>By the end of step 3: You’ll be up and ready to serve customers </li>
                <li>By the end of step 6: Your team will be smiling and at their most productive.</li>
            </ul>
            <p></p>
            <b style={{fontSize: 23}}>The 6 steps to setup success</b>
            <ol>
                <li>Get your email into Help Scout</li>
                <li>Customize your Mailbox</li>
                <li>Collaborate with a friend</li>
                <li>Get organized and optimized</li>
                <li>Integrate your favorite apps</li>
                <li>What’s up, Docs?</li>
            </ol>
            <p></p>
            <span>Take 10-20 minutes on each step per day to get set up in a week, or be an overachiever and knock through all of them in a couple of hours.</span> <p></p>
            <b style={{fontSize: 23}}>Parent Theme Installation</b> <p></p>
            <span>When you unzip the downloaded file, you will see a bunch of folders. The most important one is the THEME folder which contains the installable theme .ZIP.</span>
        </div>
    )
}
export default LineFirst