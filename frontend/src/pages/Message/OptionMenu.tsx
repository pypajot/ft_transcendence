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

export const OptionMenu = ({ info }: { info: ContactType }) => {
  const menu = useMenuState();
  const [invitePeople, setInvitePeole] = useState<boolean>(false);

  return (
    <div>
      <MenuButton {...menu} variant="reset" size="reset">
        <MoreIcon decorative={false} title="More options" />
      </MenuButton>
      {info.channel && (
        <div>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Settings</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem
              {...menu}
              onClick={() => {
                setInvitePeole(true);
              }}
            >
              Invite Into Channel
            </MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Invite to Play </MenuItem>
          </Menu>{" "}
        </div>
      )}
      {info.user && (
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
