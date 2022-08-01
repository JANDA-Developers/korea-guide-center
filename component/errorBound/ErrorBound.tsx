import { useGA4React } from "ga-4-react";
import { useState } from "react";

export const ErrorBound: React.FC<{ children: any }> = ({
    children: Children,
}) => {
    const [err, setErr] = useState(false);
    const ga = useGA4React();

    try {
        return <div>{Children}</div>;
    } catch (e) {
        return null;
    }
};
