import {
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  useMenuState,
} from "@twilio-paste/core";
import { ContactType } from "../../../public/Types/contact.entity";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { useState } from "react";
import { InviteToChannel } from "./InviteToChannel";
import { User } from "../../context/AuthContext";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";

export const OptionMenu = ({
  info,
}: {
  info: ConversationInformation | undefined;
}) => {
  const menu = useMenuState();
  const [displayInviteList, setDisplayInviteList] = useState<boolean>(false);

  //do we set the invite to play to any member of a channel ?
  return (
    <div>
      <MenuButton {...menu} variant="reset" size="reset">
        <MoreIcon decorative={false} title="More options" />
      </MenuButton>
      {info?.ischannel && (
        <div>
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
        </div>
      )}
      {info?.isUser && (
        <div>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Block</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Invite to Play </MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Profile</MenuItem>
          </Menu>{" "}
        </div>
      )}
    </div>
  );
};
