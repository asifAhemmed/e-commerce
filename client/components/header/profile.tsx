import { User } from 'lucide-react';
import Link from 'next/link';

type Props = {
    profileOpen: boolean;
    setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ profileOpen, setProfileOpen }: Props) => {
  return (
    <>
      <li className="relative px-1">
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <User size={18} />
          <span className="text-xs font-semibold mt-1">Profile</span>
        </div>
        {profileOpen && (
          <div className="bg-white block z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14">
            <h6 className="font-semibold text-sm">Welcome</h6>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              To access account and manage orders
            </p>
            <Link
              href="/login"
              className="bg-transparent border border-gray-300 hover:border-blue-500 px-4 py-2 mt-4 text-sm text-blue-500 font-semibold cursor-pointer"
            >
              LOGIN
            </Link>
            <hr className="border-b-0 my-4 border-gray-300" />
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/order"
                  className="text-sm text-slate-500 hover:text-blue-500"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="text-sm text-slate-500 hover:text-blue-500"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default Profile;
