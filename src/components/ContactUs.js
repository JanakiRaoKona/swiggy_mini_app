const ContactUs = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="Name" />
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-sky-500 hover:bg-sky-700 rounded-lg" >Submit</button>
            </form>

        </div>
    )
}

export default ContactUs


