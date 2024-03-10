import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/hooks/theme-provider";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const generalFormSchema = z.object({
  theme: z.string({ required_error: "Please select your theme." }),
});

const SettingsPage = () => {
  const { setTheme } = useTheme();

  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      theme: "",
    },
  });

  function generalOnSubmit(values: z.infer<typeof generalFormSchema>) {
    // @ts-ignore
    setTheme(values.theme);
  }

  const pages = [
    {
      pageTitle: "General",
      button: { icon: <IoSettingsSharp />, text: "General" },
      content: (
        <>
          <Form {...generalForm}>
            <form
              onSubmit={generalForm.handleSubmit(generalOnSubmit)}
              className="space-y-8"
            >
              <FormField
                control={generalForm.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Themes</SelectLabel>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      This is the way your page will look.
                    </FormDescription>
                    <Button
                      type="submit"
                      id="save"
                      style={{ display: "none" }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </>
      ),
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
            <Button variant={"outline"}>Close</Button>
          </DialogClose>
          <Button
            onClick={() => {
              document.getElementById("save")?.click();
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsPage;
