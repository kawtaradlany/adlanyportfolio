
import './firstSection.sass'
import photocv from "../../../assets/img/photo avec smile (1).jpeg"

export const FirstSectionAbout = () => {
    return (
        <>

           
            <div className='bg-[#fae0df] flex flex-row h-[100vh] gap-11 justify-between items-center'>
                <div className="flex flex-row items-center">
                    <img className='hover:scale-110 duration-500  rounded-full' src={photocv} alt="" />
                </div>
                <div className=' flex flex-col gap-4 items-center gap-5'>
                    <h1 className='text-3xl font-serif '>"Hi, I'm Kawtar Adlany. A front-end developer and SEO copywriter."</h1>
                    <p className='font-serif'>I am a passionate front-end developer and SEO copywriter. My goal is to create engaging web experiences and produce content optimized for search engines. With expertise in web development and copywriting, I strive to deliver innovative and effective digital solutions for my clients</p>

                    <div className="border border-zinc-950 rounded-3xl p-4 w-[50%] text-center">
                        <h1 className="text-xl hover:translate-x-4 font-serif text-[#487ba6]">
                            "Web development is not just about creating pretty websites. It's about solving problems, building solutions, and crafting experiences that make a difference in people's lives."
                        </h1>
                    </div>
                    <p className='font-serif'>This quote resonates with me because it emphasizes that web development is about more than just aesthetics. As a woman in this field, I'm passionate about using technology to solve real problems and make a meaningful impact. For me, it's not about creating pretty websites for the sake of it; it's about building solutions that matter.</p>
                    <div className="border border-zinc-950 rounded-3xl p-4 w-[50%] text-center">
                        <h1 className="text-xl hover:translate-x-4 font-serif text-[#487ba6] ">
                            "SEO copywriting is the art of crafting words that not only engage and persuade, but also rank high in search engine results, ensuring your message reaches the right audience at the right time."                        </h1>
                    </div>
                    <p className='font-serif'>SEO copywriting is about crafting words that engage, persuade, and rank high in search results, ensuring your message reaches the right audience. This resonates with me as I prioritize creating impactful content over mere aesthetics.</p>
                    <div className=' flex flex-col '>

                    </div>

                </div>



            </div>




        </>
    )
}
