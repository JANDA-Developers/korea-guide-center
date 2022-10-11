import React from "react";

const Section = ({ children }: any) => {
    return (
        <section
            className="px-80"
            style={{
                margin: "20px 0 20px 0",
            }}
        >
            {children}
        </section>
    );
};

export default Section;
