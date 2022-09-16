import type { FC, ReactElement } from 'react';

import type { ModalProps } from './props';

const Modal: FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	subtitle,
	additionalClassNames = '',
}: ModalProps): ReactElement => (
	<div className={`${isOpen ? 'visible' : 'invisible'} ${additionalClassNames}`}>
		<div className="fixed top-[45%] left-0 right-0 bottom-0 z-50 overflow-auto">
			<div className="bg-secondary-complementary rounded-lg shadow-xl p-7 mx-auto max-w-xl flex justify-center items-center flex-col border border-primary-color relative">
				<div className="flex justify-between items-center">
					<h3 className="text-2xl font-bold text-center">{title}</h3>
				</div>
				<p className="text-center">{subtitle}</p>
				<button
					onClick={onClose}
					className="absolute bg-transparent hover:bg-transparent text-white hover:text-primary-color font-bold top-2 right-2 w-6">
					X
				</button>
			</div>
		</div>
	</div>
);

export default Modal;
