// images
import avatar from '../assets/avatar.png'

function Hero() {
    return (
        
        <div id='hero' className='flex flex-col gap-1'>

            <img className='w-16 h-16' src={avatar} alt="avatar"></img>
            <div id='hero-text' className='flex flex-col gap-0 mt-4'>
            <h3 className='text-lg text-zinc-100 font-semibold text-left'>I’m Ulaş ⸺ designer, developer of sounds and interaction</h3>
            <p className='text-lg text-zinc-500 text-left'>I love building products. I have 8 years of experience with several digital products.</p>
            </div>
        </div>
    
    );
}

export default Hero;