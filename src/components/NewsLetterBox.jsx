

const NewsLetterBox = () => {
    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
            <p className="mt-3 text-gray-400">lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <form className="w-full sm:w-1/2 flex gap-3 my-6 border pl-3 items-center mx-auto">
                <input className="w-full sm:flex-1 outline-none" type="email" name="email" id="email" placeholder="Enter your email" required />
                <button type="submit" className="bg-black text-white text-xs px-10 py-4">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetterBox;