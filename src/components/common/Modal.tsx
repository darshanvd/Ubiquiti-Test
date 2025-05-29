import React from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <pre className="overflow-auto max-h-[60vh] bg-gray-100 p-4 rounded text-xs">
                    {children}
                </pre>
            </div>
        </div>
    );
};

export default Modal;