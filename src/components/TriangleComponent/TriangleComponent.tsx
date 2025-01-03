import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

type IconRowProps = {
    count: number; // Number of icons to display
    containerClassName?: string; // Class for the container
    iconClassName?: string; // Class for the icons
};

const TriangleComponent: React.FC<IconRowProps> = ({
                                                       count,
                                                       containerClassName = "", // Default to an empty string for custom container styles
                                                       iconClassName = "", // Default to an empty string for custom icon styles
                                                   }) => {
    if (count <= 0) {
        return null; // Return nothing if count is zero or negative
    }

    return (
        <div
            className={`flex flex-row flex-wrap gap-2 p-2 bg-transparent ${containerClassName}`}
        >
            {Array.from({ length: count }, (_, index) => (
                <AiFillCaretLeft
                    key={index}
                    className={`text-white text-2xl sm:text-xl xs:text-lg ${iconClassName}`}
                />
            ))}
        </div>
    );
};

export default TriangleComponent;
