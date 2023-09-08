import Link from "next/link"
import { GoHome, GoSearch, GoPeople, GoHistory, GoHeart, GoVideo, GoSignIn, GoGear } from 'react-icons/go'

const Navbar = () => {
    interface SideBarProps {
        icon: JSX.Element
        title: string
    }

    const IconSize: number = 25

    const SidebarData: SideBarProps[] = [
        {icon: <GoHome size={IconSize} />,title: 'home'},
        {icon: <GoSearch size={IconSize} />, title: 'search'},
        {icon: <GoPeople size={IconSize} />, title: 'following'},
        {icon: <GoHistory size={IconSize} />, title: 'history'},
        {icon: <GoHeart size={IconSize} />, title: 'favourites'},
        {icon: <GoVideo size={IconSize} />, title: 'videos'},
    ]

    const SidebarDataBottom: SideBarProps[] = [
        {icon: <GoGear size={IconSize} />,title: 'settings'},
        {icon: <GoSignIn size={IconSize} />, title: 'sign in'}
    ]

    return (
        <nav className="flex flex-col justify-between items-center pt-12 gap-10 w-20">
            <div className="flex flex-col items-center gap-2">
                {SidebarData.map((item) => (
                    <Link href="#">
                        <section className="flex flex-col items-center hover:bg-opacity-50 hover:transition-all hover:duration-700 hover:ease-in-out hover:bg-black w-20 p-2 gap-1 rounded-lg">
                            {item.icon}
                            <span className="text-xs">{item.title}</span>
                        </section>
                    </Link>
                    
                ))}
            </div>

            <div className="flex flex-col items-center gap-2">
                {SidebarDataBottom.map((item) => (
                    <Link href="#">
                        <section className="flex flex-col items-center hover:bg-opacity-50 hover:transition-all hover:duration-700 hover:ease-in-out hover:bg-black w-20 p-2 gap-1 rounded-lg">
                            {item.icon}
                            <span className="text-xs">{item.title}</span>
                        </section>
                    </Link>
                    
                ))}
            </div>
        </nav>
    )
}

export default Navbar