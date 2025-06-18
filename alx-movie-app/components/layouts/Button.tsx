import React from "react";

interface LayoutButtonProps {
	children: React.ReactNode;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({ children }) => {
	return <button className="px-4 py-2 bg-gray-200 rounded">{children}</button>;
};

export default LayoutButton;
