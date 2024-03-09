import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingsPage = () => {
  const pages = [
    {
      pageTitle: "General",
      button: { icon: <IoSettingsSharp />, text: "General" },
      content: (
        <>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Theme</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
          <IoSettingsSharp className="tw-h-4 tw-w-4"></IoSettingsSharp>
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
                key={index}
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
        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsPage;
