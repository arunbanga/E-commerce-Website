import React from "react"

const Header = () => {
    return (
        <>
            <div className="px-5 flex justify-between items-center bg-[#89717E] h-[100px]">
                <div>
                    <p className="text-4xl text-white">Your Results</p>
                    <p className="text-white text-base">Birch™ Fetal sex</p>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div>
                <img className="block md:hidden" src="../assets/img/divider_grid_4.svg" alt="" width="100%" height="100px" />
                <img className="hidden md:block xl:hidden" src="/assets/img/divider_grid_8.svg" alt="" width="100%" height="100px" />
                <img className="hidden xl:block 2xl:hidden" src="/assets/img/divider_grid_12.svg" alt="" width="100%" height="100px" />
                <img className="hidden 2xl:block" src="/assets/img/divider_grid_12XL.svg" alt="" width="100%" height="100px" />
            </div>
        </>
    );
};

const Footer = () => {
    return (
        <div>
            <img className="block xl:hidden" src="/assets/img/cactus_footer_grid_4.svg" alt="" width="100%" height="100px" />
            <img className="hidden xl:block 2xl:hidden" src="/assets/img/cactus_footer_grid_12.svg" alt="" width="100%" height="100px" />
            <img className="hidden 2xl:block" src="/assets/img/cactus_footer_grid_12XL.svg" alt="" width="100%" height="100px" />
        </div>
    );
};

const BodyChromosome = () => {
    return (
        <div className="w-full mt-6 md:mt-3 mb-40 pt-6">
            <div className="m-auto w-5/6 md:w-4/6 xl:w-[750px]">
                <div>
                    <img src="/assets/img/birch_fetal_sex_y_detected.png" alt="y" width="176" height="176" className="m-auto" />
                </div>
                <div className="w-full justify-between mt-5">
                    <p className="text-2xl text-center text-zinc-800 font-sans">
                    Y chromosome was detected in your sample
                    </p>
                </div>
                <div className="w-full border-2 md:mt-8 border-b-0 mt-11 mb-5 border[rgba(0,0,0,0.12)" />
                <p className="text-base">Juno Birch™ Fetal sex test is reliable, and is able to identify Y chromosome material with ##% accuracy.</p>
                <div className="w-full border-2 md:mt-8 border-b-0 mt-11 mb-5 border[rgba(0,0,0,0.12)" />
                <div className="w-full md:flex mt-11 block ">
                    <button className="w-full md:[w-49%] border-2 justify-center mr-3 mt-3 rounded-md px-2 py-2 bg-[#573B52] text-white text-sm focus:outline-none hover:hover:bg-[#89717E] font-semibold">
                        All done
                    </button>
                </div>
            </div>
        </div>
    );
};

const Gender = () => {
    return (
        <>
            <Header />
            {/* <BodyBoyOrGirl isBoy={true}/> */}
            <BodyChromosome />
            <Footer />
        </>
    );
};

export default Gender;
