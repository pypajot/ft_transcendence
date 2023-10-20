import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalFooterActions, ModalHeading } from '@twilio-paste/modal';
import { Button } from '@twilio-paste/button';
import { useUID } from '@twilio-paste/core/uid-library';
import { Paragraph } from '@twilio-paste/paragraph';
import { useSocketContext } from '../context/WebSocketContext';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';

interface PopUpProps {
	key: number;
	from: string;
	from_id: number;
	mode: string;
}

export const PopUpInvite: React.FC<PopUpProps> = ({from, from_id, mode}) => {
	// Modal properties
	const [isOpen, setIsOpen] = useState(true);
	const modalHeadingID = useUID();
	const {socket} = useSocketContext();
	const navigate = useNavigate();
	const [canceled, setCanceled] = useState<boolean>(false);
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

	const handleAccept = () => {
		const reply = true;
		socket?.emit('replyGameInvite', {reply, from_id, mode});
		sessionStorage.setItem('gameInProgress', 'false');
		navigate('/game', { state: { mode: true } });
		handleClose();
	}

	const handleDecline = () => {
		const reply = false;
		socket?.emit('replyGameInvite', {reply, from_id, mode});
		handleClose();
	}

	useEffect (() => {
		socket?.on('canceledGameInvite', () => {
			setCanceled(true);
		});
		return () => {	
			socket?.off('canceledGameInvite');
		};
	}, []);

	return (
	  <div>
		<Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleDecline} size="default">
		  <ModalHeader>
			<ModalHeading as="h3" id={modalHeadingID}>
			  Invite to game ! Shall you accept the challenge ?
			</ModalHeading>
		  </ModalHeader>
		  <ModalBody>
			{canceled ? (
				<Paragraph>
					{from} canceled this invite... probably scared.
				</Paragraph>
			) : (
				<Paragraph>
					{from} invited you to a game of pong !
				</Paragraph>
			)}
		  </ModalBody>
		  <ModalFooter>
			{!canceled && (
			<ModalFooterActions>
			  <Button variant="secondary" onClick={handleDecline}>
				Decline
			  </Button>
			  <Button variant="primary" onClick={handleAccept}>
				Accept</Button>
			</ModalFooterActions>
			)}
		  </ModalFooter>
		</Modal>
	  </div>
	);
  };