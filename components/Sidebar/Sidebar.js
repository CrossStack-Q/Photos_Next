import React from "react";
import SidebarOptions from "./SidebarOptions";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Sidebar() {
  return (
    <div className="flex-col">
      <SidebarOptions text="Photos" Icon={<InsertPhotoOutlinedIcon />} active />
      <SidebarOptions text="Explore" Icon={<SearchIcon />} />
      <SidebarOptions text="Sharing" Icon={<PeopleOutlineOutlinedIcon />} />
      <p className="text-gray-600 ml-3 -mb-3 font-bold text-xs">LIBRARY</p>
      <SidebarOptions text="Favourites" Icon={<StarOutlineOutlinedIcon />} />
      <SidebarOptions text="Album" Icon={<PhotoAlbumOutlinedIcon />} />
      <SidebarOptions text="Utilities" Icon={<CheckBoxOutlinedIcon />} />
      <SidebarOptions text="Archive" Icon={<ArchiveOutlinedIcon />} />
      <SidebarOptions text="Bin" Icon={<DeleteOutlineOutlinedIcon />} />
    </div>
  );
}

export default Sidebar;
