import { PropsContainer } from '../../types/types'



export const SmallContainer = ({children}:PropsContainer ) => {
  return (
    <div className='flex justify-center items-center rounded-3xl transition duration-300 bg-[#1c053a9c] dark:bg-[#af72ff56] relative overflow-hidden col-span-1 aspect-square shadow-sm'>
        { 
        children 
        }
    </div>
  )
}
