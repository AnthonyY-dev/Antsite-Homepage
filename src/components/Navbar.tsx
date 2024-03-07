import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="tw-sticky tw-top-0 tw-bg-red-600 tw-p-4 tw-flex tw-flex-row">
      <img src={Logo} alt="My Logo" className="tw-size-8 tw-p-0" />
      Test
    </header>
  );
};

export default Navbar;
