import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalFooterActions, ModalHeading } from '@twilio-paste/modal';
import { Button } from '@twilio-paste/button';
import { useUID } from '@twilio-paste/core/uid-library';
import { Paragraph } from '@twilio-paste/paragraph';

interface PopUpProps {
	from: string;
}

export const PopUpInvite: React.FC<PopUpProps> = ({from}) => {
	// Modal properties
	const [isOpen, setIsOpen] = useState(true);
	const handleClose = () => setIsOpen(false);
	const modalHeadingID = useUID();
  
	return (
	  <div>
		<Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
		  <ModalHeader>
			<ModalHeading as="h3" id={modalHeadingID}>
			  Invite to game ! Shall you accept the challenge ?
			</ModalHeading>
		  </ModalHeader>
		  <ModalBody>
			<Paragraph>
				{from} invited you to a game of pong !
			</Paragraph>
		  </ModalBody>
		  <ModalFooter>
			<ModalFooterActions>
			  <Button variant="secondary" onClick={handleClose}>
				Decline
			  </Button>
			  <Button variant="primary">Accept</Button>
			</ModalFooterActions>
		  </ModalFooter>
		</Modal>
	  </div>
	);
  };