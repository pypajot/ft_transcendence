import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalFooterActions, ModalHeading } from '@twilio-paste/modal';
import { Button } from '@twilio-paste/button';
import { useUID } from '@twilio-paste/core/uid-library';
import { Paragraph } from '@twilio-paste/paragraph';
import { useSocketContext } from '../../context/WebSocketContext';
import { useNavigate } from 'react-router-dom';

interface InvitePendingProps {
	key: number;
	target: string;
	target_id: number;
}

export const InvitePending: React.FC<InvitePendingProps> = ({target, target_id}) => {
	// Modal properties
	const [isOpen, setIsOpen] = useState(true);
	const handleClose = () => setIsOpen(false);
	const modalHeadingID = useUID();
	const {socket} = useSocketContext();
	const navigate = useNavigate();
	const [response, setResponse] = useState<boolean>(false);

	console.log('invite pending to ' + target + ' ' + target_id + '');

	const handleCancel = () => {
		// console.log('you declined the game');
		socket?.emit('cancelGameInvite', {target_id});
		handleClose();
	}

	socket?.on('repliedGameInvite', (reply: boolean, from: string, mode: string) => {
		if (reply) {
			const opp_SocketId = from;
			handleClose();
			console.log(from + ' accepted the game');
			socket?.emit('launchGameFromChat', { opp_SocketId, mode });
			sessionStorage.setItem('gameInProgress', 'false');
			navigate('/game', { state: { mode: true } });
		} 
		else {
			setResponse(true);
			console.log(from + ' declined the game');
		}
	});

	return (
	  <div>
		<Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleCancel} size="default">
		  <ModalHeader>
			<ModalHeading as="h3" id={modalHeadingID}>
			  Invite sent to {target} !
			</ModalHeading>
		  </ModalHeader>
		  <ModalBody>
				{response ? (
					<Paragraph>
						{target} decline your invitation... probably scared.
					</Paragraph>
				) :
					<Paragraph>
						Waiting for a response from {target}...
					</Paragraph>
				}
		  </ModalBody>
		  <ModalFooter>
			<ModalFooterActions>
			  <Button variant="secondary" onClick={handleCancel}>
				Cancel invite
			  </Button>
			</ModalFooterActions>
		  </ModalFooter>
		</Modal>
	  </div>
	);
  };