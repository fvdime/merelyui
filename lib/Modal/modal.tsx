import React, { useImperativeHandle, useState } from "react";

interface ModalBase {
  id?: string;
  title: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
}

interface ModalWithButton extends ModalBase {
  button: React.ReactElement;
  label?: never;
}

interface ModalWithoutButton extends ModalBase {
  label: string;
  button?: never;
}

export type ModalProps = ModalWithButton | ModalWithoutButton;

export interface ModalHandle {
  openModal: () => void;
  closeModal: () => void;
}

export const Modal = React.forwardRef<ModalHandle, ModalProps>(
  ({ body, footer, label, title, button }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useImperativeHandle(
      ref,
      () => ({
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }),
      []
    );

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="relative">
        {/* Toggle Button */}
        {button ? button : null}
        {label && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded mt-4"
            onClick={toggleModal}
          >
            {label}
          </button>
        )}

        <div
          onClick={toggleModal}
          className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus-outline-none bg-black/50 backdrop-blur-sm bg-opacity-70 ${
            isOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="relative w-full lg:w-1/2 my-8 mx-auto lg:max-w-3xl max-h-full lg:h-auto transition-transform transform duration-500">
            <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-8 rounded-t">
                <h3 className="text-xl font-semibold">{title}</h3>
                <button
                  onClick={toggleModal}
                  className="p-2 text-black hover:text-black/50 transition duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative p-8 flex-auto">{body}</div>
              <div className="flex flex-col p-10 gap-2">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
