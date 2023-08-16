import {PropsContainer} from '../../types/types'

export const MainContainer = ( {children}:PropsContainer ) => {
  return (
    <div className='relative col-span-3 aspect-square md:aspect-auto transition duration-300 md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden'>
      {children}
    </div>
  )
}
