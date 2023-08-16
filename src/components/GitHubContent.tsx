import GITHUB_ICON from '../assets/icons/githubIcon.svg'
import REDIRECT_ICON from '../assets/icons/redirectIcon.svg'

export const GitHubContent = () => {
    return (
        <a href="https://github.com/Panik-Attack" target='blank'>
            <div className="flex h-full w-full bg-[#d4b802]/75 justify-center items-center p-2">
                <div className='absolute transition duration-300 opacity-0 hover:opacity-100 top-0 w-full h-full p-2 bg-[black]/25 bg-transparent'>
                    <img className='absolute right-3 top-3 w-[10%] h-[10%] md:right-5 md:top-5' src={REDIRECT_ICON} alt="REDIRECT_ICON" />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img src={GITHUB_ICON} alt="GITHUB_ICON" className='w-[40%] md:w-[80%]'/>
                    <h1 className="text-white text-xs text-xl md:text-4xl">GitHub</h1>
                </div>
            </div>

        </a>
    )
}
