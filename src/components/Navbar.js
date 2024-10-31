'use client'
import Image from "next/image"
import CodeIcon from "@/assets/images/code.svg"
import EngFlag from "@/assets/images/eng-flag.svg"
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const route = useRouter()
    const MenuItems = [
        {
            title: "Resume",
            onclick: () => route.push('/resume')
        },
        {
            title: "Projects",
            onclick: () => route.push('/projects')
        },
        {
            title: "About",
            onclick: () => route.push('/about')
        },
    ]
    return (
        <div className="flex justify-between px-[10%] pt-[5%] items-center">
            <button className="flex items-center gap-x-5">
                <Image src={CodeIcon} height={30} /> <span className="font-bold text-[40px] font-passion_one">musyaffacm.me</span>
            </button>
            <div className="flex gap-x-20">
                {MenuItems.map(({ title, onclick }) => (
                    <button
                        className="font-semibold text-2xl place-self-center"
                        onClick={() => onclick()}
                    >
                        {title}
                    </button>
                ))}
                <button className="w-10">
                    <Image src={EngFlag} />
                </button>
                <button className="h-16 w-40 bg-[#f2fef1] flex justify-center items-center gap-x-6 rounded-full shadow-inner shadow-[#ccd6cb]">
                    <span className="font-medium text-2xl text-[#0D4751]">Day</span>
                    <div className="w-10 h-10 bg-[#e7f0bd] rounded-full shadow-inner shadow-[#b9bb89]"></div>
                </button>
            </div>
        </div>
    )
}

export default Navbar