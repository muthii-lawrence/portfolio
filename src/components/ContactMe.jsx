import React from "react";

const ContactMe = () =>{
    return(
        <div id="ContactMe" className="max-3-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]"></h1>
            <form action=""method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap4 w-full py-2">
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Name</label >
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="text" 
                    name="name" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="name" />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="Subject" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='1o' name="message"></textarea>
                </div>
                <button
                    className="bg-[001b52] text-gray-00 mt-4 w-full p-4 rounded-lg">
                        send Message 
                </button>
            </form>
        </div>
    );
};

export default ContactMe