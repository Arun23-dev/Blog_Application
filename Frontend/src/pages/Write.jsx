// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
function Write() {
    return (
        <div className='flex flex-col'>

            <h1 className='font-bold text-2xl '>Create a post</h1>
            <button className='rounded-2xl  bg-amber-100 px-3 py-2 text-xl font-semibold mt-3 w-1/5'>Add cover image</button>
            <input type="text" placeholder='My awesome story' className='text-2xl px-2 mt-3 font-extrabold' />
            <div className='flex gap-3 text-xl mt-4'>
                <label htmlFor="Choose a Category:">Choose a Category </label>
                <select name="cat" id="">
                    <option value="Development">Development</option>
                    <option value="Finance ">Finance</option>
                    <option value="Economic">Economic</option>
                    <option value="Political">Political</option>
                </select>
            </div>


            <textarea name="desc" placeholder='short description ' className='h-[100px] w-full rounded-2xl text border-1 border-amber-100 mt-5' />
            <button>Send</button>

            {/* <ReactQuill theme="snow"/> */}


        </div>
    )
}

export default Write;