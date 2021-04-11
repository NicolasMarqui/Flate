import { useClickOutside } from "@hooks/useClickOutside";
import { useRef } from "react";

interface DropdownProps {
    isOpen: boolean;
    handleChange?: (i: boolean) => any;
    children?: any;
    classes?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    isOpen,
    handleChange,
    children,
    classes,
}) => {
    const dropRef = useRef(null);

    useClickOutside(dropRef, () => {
        if (isOpen) handleChange(false);
    });

    return (
        <div
            className={`
            absolute flex-col right-0 w-96 p-4 mt-2 rounded-md shadow-lg z-20 bg-white drop__wrapper wrapper__white animate-fade-in-down
            ${isOpen ? "flex" : "hidden"}
            ${classes}
        `}
            ref={dropRef}
        >
            {children}
        </div>
    );
};

export default Dropdown;
