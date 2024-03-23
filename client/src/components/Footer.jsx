import Link from "next/link"

const footerlink = [
    {
        title: "Bookings support",
        links: [
            { title: 'COVID-19', href: '/' },
            { title: 'Help-Center', href: '/' },
            { title: 'Support', href: '/' },
            { title: 'Trust & Safety', href: '/' },
            
        ],
    },
    {
        title: "Community",
        links: [
            { title: 'Against Discrimination', href: '/' },
            { title: 'Invite friends', href: '/' },
            { title: 'Gift Cards', href: '/' },
        ],
    },
    {
        title: "About",
        links: [
            { title: 'How it works', href: '/' },
            { title: 'Careers', href: '/' },
            { title: 'About Us', href: '/' },
            { title: 'Media', href: '/' },
        ],
    },
    {
        title: "Become an employer",
        links: [
            { title: 'Post your job', href: '/' },
            { title: 'Business account', href: '/' },
            { title: 'Resource Center', href: '/' },
            { title: 'Community', href: '/' },
        ],
    },

]
const Footer = () => {
    return (
        <footer className="mt-12 border-t border-white-a08 py-[5.6rem] text-sm">
            <div className="flex flex-col justify-between lg:flex-row">
                
                <div className="flex flex-wrap pl-16 md:pl-[20%]">
                    {footerlink.map(column => (
                        <div key={column.title} className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]">
                            <h3 className="font-medium mb-3">{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.title} className="[&_a]:last:mb-0">
                                        <Link className="mb-3 block text-gray-500  hover:text-gray-950" href={link.href}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer