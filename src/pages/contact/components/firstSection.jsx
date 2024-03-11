
import './firstSection.sass'
import photocv from "../../../assets/img/photo avec smile (1).jpeg"

export const FirstSection = () => {
    return (
        <>


            <div className='bg-[#fae0df] p-5 h-[150vh]'>
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-serif text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p class="mb-8 lg:mb-16 font-light font-serif text-center text-gray-500 dark:text-gray-400 sm:text-xl">"Facing a coding challenge? Crafting compelling content? Striving for SEO excellence? I'm here to help. Reach out with your questions or feedback!"</p>
                </div>
                <form action="#" class="space-y-8 flex flex-col items-center mx-auto w-1/2 text-center">
                    <div class="w-full">
                        <label for="email" class="block mb-2 text-2xl font-serif text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                        </input>
                    </div>
                    <div class="w-full">
                        <label for="subject" class="block mb-2 text-2xl font-serif text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                        </input>
                    </div>
                    <div class="sm:col-span-2 w-full">
                        <label for="message" class="block mb-2 text-2xl font-serif text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="font-serif py-3 px-5 text-2xl font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 hover:border-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-black">Send message</button>

                </form>





            </div>



        </>
    )
}
