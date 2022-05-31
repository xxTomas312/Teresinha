import React from "react";

function Login(){
    return(
        <>
        <body className="flex justify-center items-center">
            <section className="flex mt-8 w-4/5">
                {/* Login Container */}
                <div className="mr-4 w-1/2">
                    {/*Titles container*/}
                    <div className="mt-2 ml-4 mb-6">
                        <h1 className="text-left text-3xl">Who's There?</h1>
                        <h2 className="text-left text-3xl">Common customer?</h2>
                    </div>
                    {/* Input Container */}
                    <div className="flex flex-col justify-center mb-2"> 
                        <input type="email" placeholder=" Enter your email" className="w-3/5 h-12 ml-4 border-2 border-black mb-4"/>
                        <input type="text" placeholder=" Password" className="w-3/5 h-12 ml-4 border-2 border-black mb-6" />
                    </div>
                    {/* Button Container */}
                    <div className="ml-4">
                        <button className="cursor-pointer w-2/6 h-10">Login</button>
                    </div>
                </div>
                {/* Register Container */}
                <div className="mr-4 w-1/2">
                    {/*Titles container*/}
                    <div className="mt-2 ml-4 mb-6">
                        <h1 className="text-left text-3xl">New Client?</h1>
                    </div>
                    {/* Input Container */}
                    <div className="flex flex-col justify-center mb-2">
                        <input type="text" placeholder=" First Name" className="w-3/5 h-12 ml-4 border-2 border-black mb-4"/>
                        <input type="text" placeholder=" Last Name" className="w-3/5 h-12 ml-4 border-2 border-black mb-6" />
                        <input type="email" placeholder=" Enter your email" className="w-3/5 h-12 ml-4 border-2 border-black mb-4"/>
                        <input type="text" placeholder=" Enter your Password" className="w-3/5 h-12 ml-4 border-2 border-black mb-2" />
                        <p className="text-xs ml-4 mr-4">At least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number. </p>
                        {/* CheckBox Container */}
                        <div className="flex ml-4 mt-4 mb-6">
                            <input type="checkbox" className="w-4 h-4"/>
                            <p className="ml-2 -mt-1">I agree to receive new's from this site.</p>
                        </div>
                    </div>
                    {/* Button Container */}
                    <div className="ml-4">
                        <button className="cursor-pointer border-2 border-red w-2/6 h-10">Register</button>
                    </div>
                </div>
            </section>
        </body>
        </>
    )
}

export default Login;