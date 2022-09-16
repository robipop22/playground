export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	subtitle: string;
	additionalClassNames?: string;
}
