import Logo from "../assets/Logo.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <header className="tw-sticky tw-top-0 navbar tw-flex tw-justify-between tw-p-5">
        <div className="tw-flex tw-flex-row tw-gap-2 tw-ml-2">
          <img src={Logo} alt="My Logo" className="tw-size-8 tw-p-0" />
          <p className="tw-font-semibold tw-mt-0.5">antsite.xyz</p>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">
              <IoSettingsSharp
                className="tw-h-4 tw-w-4"
                size={"icon"}
              ></IoSettingsSharp>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Edit your account here, change your theme, etc!
              </DialogDescription>
            </DialogHeader>
            <div className="settings">
              <div className="settings-left"></div>
              <div className="settings-right"></div>
            </div>
          </DialogContent>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
