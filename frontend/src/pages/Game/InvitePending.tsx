import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalFooterActions, ModalHeading } from '@twilio-paste/modal';
import { Button } from '@twilio-paste/button';
import { useUID } from '@twilio-paste/core/uid-library';
import { Paragraph } from '@twilio-paste/paragraph';
import { useSocketContext } from '../../context/WebSocketContext';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../context/GameContext';

interface InvitePendingProps {
	key: number;
	target: string;
	target_id: number;
}

export const InvitePending: React.FC<InvitePendingProps> = ({target, target_id}) => {
	// Modal properties
	const [isOpen, setIsOpen] = useState(true);
	const modalHeadingID = useUID();
	const {socket} = useSocketContext();
	const navigate = useNavigate();
	const [response, setResponse] = useState<string>('');
	const { clearGameInvite } = useGameContext();

	const handleClose = () => {
		socket?.emit('gameInviteOff');
		setIsOpen(false);
		clearGameInvite();
	}

	useEffect (() => {
		socket?.emit('gameInviteOn');

		return () => {
			socket?.emit('gameInviteOff');
		}
	}, []);

	const handleCancel = () => {
		if (response === '') {
			socket?.emit('cancelGameInvite', {target_id});
		}
		handleClose();
	}

	useEffect	(() => {
		socket?.on('repliedGameInvite', (reply: boolean, from: string, mode: string) => {
			if (reply) {
				const opp_SocketId = from;
				handleClose();
				socket?.emit('launchGameFromChat', { opp_SocketId, mode });
				sessionStorage.setItem('gameInProgress', 'false');
				navigate('/game', { state: { mode: true } });
			} 
			else {
				setResponse('decline');
			}
		});

		socket?.on('targetUnavailable', (status: string) => {
			setResponse(status);
			});

		return () => {	
			socket?.off('repliedGameInvite');
			socket?.off('targetUnavailable');
		};
	}, []);

	return (
	  <div>
		<Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleCancel} size="default">
		  <ModalHeader>
			<ModalHeading as="h3" id={modalHeadingID}>
			  Invite sent to {target} !
			</ModalHeading>
		  </ModalHeader>
		  <ModalBody>
				{response === 'decline' ? (
					<Paragraph>
						{target} decline your invitation... probably scared.
					</Paragraph>
				) : response === '' ? (
					<Paragraph>
						Waiting for a response from {target}...
					</Paragraph>
				) : (
					<Paragraph>
						{target} is currently {response}... maybe later ?
					</Paragraph>
				)}
		  </ModalBody>
		  <ModalFooter>
			<ModalFooterActions>
				{response === '' && (
				<Button variant="secondary" onClick={handleCancel}>
					Cancel invite
				</Button>
				)}
			</ModalFooterActions>
		  </ModalFooter>
		</Modal>
	  </div>
	);
  };