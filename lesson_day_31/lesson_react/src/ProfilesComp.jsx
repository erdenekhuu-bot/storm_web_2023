import React from 'react';
import zurag from './assets/pretty_girl.jpeg'

function ProfileCard(){
    return (
        <div className="flex justify-center items-center h-screen bg-white-200">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <img src={zurag} alt="Your Name" className='radius-custom mx-auto w-32 h-40'/>
                <h1 className='text-4xl font-semibold text-center p-1 font-bold m-6'>Your Name</h1>
                <p className='text-gray-700 text-center'>Your Profession or Tagline</p>
                <div className='mt-4 text-center'>
                    <p><strong>About Me:</strong>Brief description or bio goes here.</p>
                    <p><strong>Skills:</strong>Skill 1, Skill 2, Skill 3</p>
                    <p><strong>Contact:</strong><a href="mailto:your,email@example.com" className='text-blue-500 hover:text-blue-700'>your.email@example.com</a></p>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;