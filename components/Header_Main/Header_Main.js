import React from "react";
import Head from "next/head";
import Image from "next/image";
import logoq from "../../public/logoq.png";
import { Input, Avatar, Tooltip, Popover, Button } from "@nextui-org/react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import UserTwitterCard from "./UserTwitterCard";
import UploadFileQ from "./UploadFileQ";

import { useSession } from "next-auth/react";

function Header_Main() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center">
      <div className="relative w-36 h-16 m-1 ml-4 p-2 flex justify-center items-center">
        <Image src={logoq} objectFit="contain" />
      </div>
      <div className="relative flex flex-grow max-w-3xl">
        <Input
          placeholder="Search Photos"
          fullWidth
          contentLeft={<SearchOutlinedIcon />}
        />
      </div>
      <div className="flex justify-center items-center space-x-3 cursor-pointer">
        <div>
          <Popover placement="left">
            <Popover.Trigger>
              <Button
                css={{ color: "#616161", background: "#ffffff" }}
                auto
                flat
              >
                <div className="flex items-center m-1 text-gray-600">
                  <FileUploadIcon />
                  <p>Upload</p>
                </div>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <UploadFileQ />
            </Popover.Content>
          </Popover>
          
        </div>
        <HelpOutlineOutlinedIcon className="m-1 text-gray-600" />
        <SettingsOutlinedIcon className="m-1 text-gray-600" />
        <AppsOutlinedIcon className="m-1 text-gray-600" />
        <div className="m-3 hover:opacity-75">
          <Popover placement="bottom-right">
            <Popover.Trigger>
              <Avatar
                pointer
                size="md"
                src={session?.user?.image}
                color="gradient"
                zoomed
                css={{
                  marginRight: "$10",
                }}
              />
            </Popover.Trigger>
            <Popover.Content>
              <UserTwitterCard />
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header_Main;
