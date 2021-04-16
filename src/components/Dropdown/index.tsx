import { useClickOutside } from "@hooks/useClickOutside";
import { useRef } from "react";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            className={`${classes} 
            absolute flex-col right-0 w-96 p-4 mt-2 rounded-md shadow-lg z-30 bg-white drop__wrapper wrapper__white animate-fade-in-down
            ${isOpen ? "flex" : "hidden"}
            
        `}
            ref={dropRef}
        >
            {children}
        </motion.div>
    );
};

export default Dropdown;
