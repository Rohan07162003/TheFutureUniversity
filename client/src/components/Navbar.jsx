
import Link from 'next/link'
import { Icons } from './Icons'
import { Bell, AlignJustify, User } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    const user = null
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16 '>
            <header className='relative bg-white lg:w-[75%] w-[90%] mx-auto'>

                <div className='border-b border-gray-200'>
                    <div className='flex items-center h-16 '>
                        {/* mobile nav */}
                        <div className='ml-4 flex lg-ml-0 '>
                            <Link href={"/"}>
                                <Icons.logo className='h-10 w-10' />
                            </Link>
                        </div>
                        <div className='hidden z-50 lg:ml-8 lg:block'>
                            <div className='mx-auto max-w-7xl px-8 flex gap-x-7'>
                                <Link href='/'>Feed</Link>
                                <div>Contacts</div>
                                <div>Jobs</div>
                                <div>Messages</div>
                                <div>Updates</div>
                                <Link href='/admin'>Admin</Link>
                            </div>
                        </div>
                        <div className='ml-auto flex items-center'>
                            <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                <div className=''><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></div>
                                {user ? null : <span className='h-6 w-px bg-gray-200' aria-hidden='true' />}
                                {user ? <p></p> : <Link href='/sign-up' className="">
                                    <User />
                                </Link>}
                                {user ? <span className='h-6 w-px bg-gray-200' aria-hidden='true' /> : null}
                                {user ? null : <div className='flex lg:ml-6'>
                                    <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                                </div>}

                            </div>
                            <div className='block lg:hidden mr-10'>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <AlignJustify />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem><Link href='/'>Feed</Link></DropdownMenuItem>
                                        <DropdownMenuItem>Contacts</DropdownMenuItem>
                                        <DropdownMenuItem>Jobs</DropdownMenuItem>
                                        <DropdownMenuItem>Messages</DropdownMenuItem>
                                        <DropdownMenuItem>Updates</DropdownMenuItem>
                                        <DropdownMenuItem><Link href='/admin'>Admin</Link></DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                        </div>
                    </div>

                </div>

            </header>
        </div>
    )
}

export default Navbar