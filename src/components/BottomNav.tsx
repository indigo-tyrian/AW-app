
// import { HomeIcon } from "./svg/HomeSvg"
// import { MagnifyingGlassIcon } from "./svg/MagnifyingGlassSvg"
// import { PostIcon } from "./svg/PostSvg"
// import { SavedIcon } from "./svg/SavedSvg"
// import { SettingIcon } from "./svg/SettingPersonSvg"
import { Style, containerStyle, iconStyle, iconTextStyle, svgContainerStyle } from "./styles/bottomNav.css"
import 'src/components/styles/global.css'
import { phoneAreaBase } from "src/components/styles/global.css"
import { MouseEvent, useState } from "react"
import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Box from '@mui/material/Box';
import Link from "next/link";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);


  return (
    <Box sx={{ width: "100vw" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction classes="" label="Home" icon={<Link href="/"><HomeIcon /></Link>} />
        <BottomNavigationAction label="Saved" icon={<BookmarkIcon />} />
        <BottomNavigationAction label="Post" icon={<PostAddIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Setting" icon={<PersonIcon />} />

      </BottomNavigation>
    </Box>

  );
}