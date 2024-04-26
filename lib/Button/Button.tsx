import type { ReactNode } from "react";
import React from "react";

interface ButtonProps {
	children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
	return <button className="bg-red-400">{children}</button>;
};