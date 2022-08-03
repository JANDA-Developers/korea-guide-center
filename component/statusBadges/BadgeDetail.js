function BadgeDetail({ name }) {
    return (
        <div
            style={{
                display: "flex",
                color: "#4D4D4D",
                fontSize: "13.6px",
                marginRight: "0.5vh",
                marginTop: "0.4vh",
                marginBottom: "0.5vh ",
                alignItems: "center",
            }}
        >
            {name}
        </div>
    );
}

export default BadgeDetail;
