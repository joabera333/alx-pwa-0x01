import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 text-white p-4 mt-auto">
			<p>© {new Date().getFullYear()} Movie App</p>
		</footer>
	);
};

export default Footer;
