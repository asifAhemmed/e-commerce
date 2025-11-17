import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const links = [
    {
      id: 1,
      title: "Men",
      url: "/products/men",
    },
    {
      id: 2,
      title: "Women",
      url: "/products/women",
    },
    {
      id: 3,
      title: "Kids",
      url: "/products/kids",
    },
    {
      id: 4,
      title: "Home & Living",
      url: "/products/home-and-living",
    },
    {
      id: 5,
      title: "Beauty",
      url: "/products/beauty",
    }
  ];
  return (
    <ul className="lg:ml-12 lg:flex lg:gap-x-8 max-lg:space-y-3">
      <li className="mb-6 hidden max-lg:block">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-9 h-9"
            width={100}
            height={100}
          />
        </Link>
      </li>

      {links.map(
        (item) => (
          <li
            key={item.id}
            className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-blue-500 lg:after:w-0 lg:hover:after:w-full lg:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300"
          >
            <Link
              href={item.url}
              className={` ${pathname === item.url ? "font-bold" : ""} text-slate-900 block text-sm`}
            >
              {item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Navigation;
