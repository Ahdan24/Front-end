import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-slate-600">
      <div className="container mx-auto flex justify-between p-4 items-center">
        <h1>Logo</h1>
        <h1 className="hidden md:block ">Profile</h1>
        <div className="md:hidden">
          <HiMenu size="20px" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
