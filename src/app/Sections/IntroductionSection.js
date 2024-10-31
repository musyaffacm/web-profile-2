'use client'
import Navbar from "@/components/Navbar";
import VillageSrc from "@/assets/images/village.svg"
import SunMountainSrc from "@/assets/images/sun_mountain.svg"
import DeerSrc from "@/assets/images/deer.svg"
import CloudSrc from "@/assets/images/cloud.svg"
import Image from "next/image"

const IntroductionSection = () => {
    return <div className="h-screen bg-gradient-to-b from-[#BAEEFF] to-[#7DE374] text-[#073447]">
        <Navbar />
        <div className="relative h-full">
            <Image className="absolute top-0 z-0" src={CloudSrc} />
            <Image className="absolute top-0 z-10" src={SunMountainSrc} />
            <Image className="absolute bottom-0 z-20" src={VillageSrc} />
            <Image className="absolute bottom-0 z-30" src={DeerSrc} />
            <div className="flex flex-col items-center gap-y-32 px-[20%] absolute h-full w-full z-40 text-[#073447]">
                <span className="text-[110px] font-passion_one"> Hi, I’m Musyaffa </span>
                <span className="font-medium text-[32px]">I'm a dedicated software engineer with 2 years of experience. Let my skills and passion for software development contribute to your team's success!</span>
                <button className="px-[70px] py-5 rounded-full bg-[#073447] text-white font-poppins text-2xl font-medium">
                    About Me
                </button>
            </div>
        </div>
    </div>
}

export default IntroductionSection