import Link from "next/link";

const Header = () => {
  return (
    <div className=" bg-black flex flex-row gap-5 justify-center w-full text-gray-100 fill-white">
      <div>
        <Link href="/">
          <h1 className="font-serif font-semibold mr-auto cursor-pointer text-gray-100">
            Nima Hakimi
          </h1>
        </Link>
      </div>
      <div className="hidden-md: inline-flex items-center space-x-5 text-gray-100">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Follow</h3>
        <Link href="https://www.linkedin.com/in/nima-hakimi-387716175/?originalSubdomain=no">
          <img src="/Linkedin.svg" alt="Linkedin Logo" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
