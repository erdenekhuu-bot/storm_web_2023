import { useState } from 'react'
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/data';

function App() {
  const [profileState, setProfileState] = useState(profiles)
  const profs = profileState.map((profile) => {
    return (
      <ProfileCard
        imgUrl={profile.imgUrl}
        name={profile.name}
        profession={profile.profession}
        about={profile.about}
        skills={profile.skills}
        email={profile.email}
      />
    )
  });
  return (
    <div className='font-sans flex justify-center items-center h-screen m-0 bg-gray-200'>
      {profs}
    </div>
  )
}

export default App;
