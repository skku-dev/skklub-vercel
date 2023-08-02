import { useEffect } from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { downloadAttachedFile } from "@/utils/fetch";

export default function NoticePopover({ anchorEl, setAnchorEl, files }) {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        handleClose();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const handleAttatchmentClick = (file) => {
    downloadAttachedFile(file.originalName, file.savedName);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List>
        {files &&
          files.map((file) => {
            return (
              <ListItem disablePadding key={file.id}>
                <ListItemButton>
                  <ListItemText
                    primary={file.originalName}
                    onClick={() => handleAttatchmentClick(file)}
                  />
                </ListItemButton>
                <ListItemIcon>
                  <DownloadForOfflineIcon />
                </ListItemIcon>
              </ListItem>
            );
          })}
      </List>
    </Popover>
  );
}
