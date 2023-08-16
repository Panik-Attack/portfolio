import { PropsContainer } from '../../types/types'

export const SmallContainerBtn = ({children}:PropsContainer ) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'>
        { 
        children 
        }
    </div>
  )
}
