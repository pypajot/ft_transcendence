import { useMenuState } from "@twilio-paste/core";
import { useChatContext } from "../../context/ChatContext";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
} from "@twilio-paste/paste-reakit-fork";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { InviteToChannel } from "./InviteToChannel";
import { useState } from "react";

export const HeaderConversation = () => {
  const info = useChatContext().conversationInfo;
  const [displayInviteList, setDisplayInviteList] = useState<boolean>(false);

  const menu = useMenuState();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {info?.isChannel && (
        <h1>
          {info?.channel?.name}
          <MenuButton {...menu}>
            <MoreIcon decorative={false} title="More options"></MoreIcon>
          </MenuButton>
          <InviteToChannel
            open={displayInviteList}
            onClose={() => {
              setDisplayInviteList(false);
            }}
          />
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Settings</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem
              {...menu}
              onClick={() => {
                setDisplayInviteList(true);
              }}
            >
              Invite Into Channel
            </MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Invite to Play </MenuItem>
          </Menu>{" "}
        </h1>
      )}
      {info?.isUser && (
        <h1>
          {info?.channel?.name}
          <MenuButton {...menu}>
            <MoreIcon decorative={false} title="More options"></MoreIcon>
          </MenuButton>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Block</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Invite to Play </MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Profile</MenuItem>
          </Menu>{" "}
        </h1>
      )}
    </div>
  );
};
