
export default function ProfileCard({imgUrl, name, about, skills, profession, email}) {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden mx-2 my-4 p-6 text-center">
            <img src={imgUrl} alt={name} className="w-32 h-40 mx-auto mb-4 custom-radius"/>
            <h1 className="text-lg">{name}</h1>
            <p>{profession}</p>
            <div className="mt-4">
                <p><strong>About Me:</strong>{about}</p>
                <p><strong>Skills:</strong>{skills}</p>
                <p><strong>Contacts:</strong><a href={email} className="text-gray-800 no-underline hover:underline">{email}</a></p>
            </div>
            </div>
        </div>
    )
}