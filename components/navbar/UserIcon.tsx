import {LuUser} from 'react-icons/lu'
import {currentUser, auth} from '@clerk/nextjs/server'

async function UserIcon() {
  try{
  const user = await currentUser()
  const profileImage = user?.imageUrl
  if(profileImage){
    return <img src={profileImage} className='w-6 h-6 rounded-full object-cover'/>
  }
  return (
    <LuUser className='w-6 h-6 bg-primary rounded-full text-white'/>
  )}catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}
export default UserIcon