import Logo from "../assets/Logo.png";
import SettingsPage from "./SettingsPage";

const Navbar = () => {
  return (
    <>
      <header className="tw-sticky tw-top-0 navbar tw-flex tw-justify-between tw-p-5">
        <div className="tw-flex tw-flex-row tw-gap-2 tw-ml-2">
          <img src={Logo} alt="My Logo" className="tw-size-8 tw-p-0" />
          <p className="tw-font-semibold tw-mt-0.5">antsite.xyz</p>
        </div>
        <div className="navbar-buttons">
          <SettingsPage />
        </div>
      </header>
    </>
  );
};

export default Navbar;
