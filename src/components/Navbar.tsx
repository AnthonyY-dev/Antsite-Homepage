import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="tw-sticky tw-top-0 navbar">
      <div className="tw-flex tw-flex-row tw-gap-2 tw-ml-2">
        <img src={Logo} alt="My Logo" className="tw-size-8 tw-p-0" />
        <p className="tw-font-semibold tw-mt-0.5">antsite.xyz</p>
      </div>
    </header>
  );
};

export default Navbar;
