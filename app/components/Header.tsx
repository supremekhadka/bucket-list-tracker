import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs";


export default function Header() {

    const { userId } = auth();

  return (
      <>
        <nav className="bg-black py-4 px-6 h-20 flex items-center justify-between">
              <div className="flex items-center">
                  <Link href='/'>
                      <div className="text-lg uppercase font-bold text-white">
                          Bucket List Tracker
                      </div>
                  </Link>
              </div>
              <div className="text-white flex">
                  {!userId && (
                      <>
                        <Link href='/sign-in' className="text-gray-300 mr-4 hover:text-white">
                            Sign In
                        </Link>
                        <Link href='/sign-up' className="text-gray-300 mr-4 hover:text-white">
                            Sign Up
                        </Link>
                      </>
                    )
                  }

                <div className="ml-auto">
                      <UserButton />
                </div>
            </div>
        </nav>
      </>
  )
}
