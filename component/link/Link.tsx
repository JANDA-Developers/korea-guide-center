import { HTMLAttributes } from "react";

interface ILink extends HTMLAttributes<HTMLAnchorElement> {
    link?: string;
}

export const LinkText: React.FC<ILink> = ({ link, className, ...props }) => {
    return (
        <a
            className={`JDlink ${className}`}
            href={link}
            target="_blank"
            {...props}
        />
    );
};
