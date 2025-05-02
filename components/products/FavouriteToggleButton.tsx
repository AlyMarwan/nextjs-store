import { auth } from "@clerk/nextjs/server"
import { CardSignInButton } from "../form/Buttons"
import { fetchFavoriteId } from "@/utils/actions"
import FavouriteToggleForm from "./FavouriteToggleForm"

async function FavouriteToggleButton({ productId }: { productId: string }){
  const {userId} = await auth()
  if(!userId) return <CardSignInButton/>;
  const favoriteId = await fetchFavoriteId({productId})

  return (
    <FavouriteToggleForm favoriteId={favoriteId} productId={productId}/>
  )
}
export default FavouriteToggleButton