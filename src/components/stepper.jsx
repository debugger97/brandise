const Stepper = () => {
    const steps = [
        { number: 1, text: "Understand Why", description: "Even though you’ve read all the self-help books and followed all the rules — you’re still single and how to make our secret technology work for you so that you attract the hot, high-quality man your heart desires." },
        { number: 2, text: "Learn 4 Characteristics that Attract Men", description: "Not just any men, but men who are open, vulnerable, and committed, so that no man will ever disappear on you again." },
        { number: 3, text: "Reprogram Your Dating GPS", description: "Understand why now matter HOW you meet a man it won’t ever work until you reprogram your dating GPS so that you become “the destination” for the men you want." },
        { number: 4, text: "Learn what “feminine” means now", description: "Especially as a successful woman so that you don’t have to jump into the girly-girl bucket to attract a high quality man." },
        { number: 5, text: "Remove Limiting Beliefs", description: "Eliminate the “nothing works for me” belief in your head so that the universe knows you are loveable and sends you the right man to love." }
    ];

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center px-5 py-5 mt-9">
            <h1 className="text-center text-[#4b4334] font-bold font-PlayfairDisplay-Bold  text-3xl mb-5 py-4 px-5">
                What’s on <br></br>the agenda
            </h1>
            <div className="flex flex-col">
                {steps.map((step, index) => (
                    <div className="flex" key={index}>
                        <div className="flex flex-col justify-center">
                            <span className="size-7 bg-[#e99077] text-white flex justify-center items-center font-medium rounded-full">
                                {step.number}
                            </span>
                            <div className="ml-3 w-[3px] opacity-20 h-[100px] bg-[#e99077]"></div>
                        </div>
                        <span className="block text-sm font-medium text-gray-800 ml-3">
                            <p className="font-bold mb-3  font-PlayfairDisplay-Bold text-1xl">{step.text}</p>
                            <p className="font-Oxygen-Regular text-[#7e7666] m3-5 mt-3 lg:w-[380px]">{step.description}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Stepper;
