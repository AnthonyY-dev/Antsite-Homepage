import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const SettingsPage = () => {
  const pages = [
    {
      pageTitle: "General",
      button: { icon: <IoSettingsSharp />, text: "General" },
      content: (
        <>
          <Input></Input>
        </>
      ),
    },
    {
      pageTitle: "Account",
      button: { icon: <FaUser />, text: "Account" },
      content: <p>Todo</p>,
    },
  ];
  const [currentPage, goToPage] = useState(0);
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" size={"icon"}>
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
          <div className="settings-left">
            {pages.map((page, index) => (
              <Button
                variant={currentPage == index ? "default" : "outline"}
                className="settingPageBtn"
                onClick={() => {
                  goToPage(index);
                }}
              >
                {page.button.icon} {page.button.text}
              </Button>
            ))}
          </div>
          <div className="settings-seperator" />
          <div className="settings-right">
            <h1 className="settingPageTitle">{pages[currentPage].pageTitle}</h1>
            {pages[currentPage].content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsPage;
