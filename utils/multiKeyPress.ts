type TWithKey = "ctrl" | "alt" | "shfit";
interface WithKeySet {
    withKey: TWithKey;
    keys: string[];
}

export const whenMultiKeyPress =
    (
        withKeySets: WithKeySet[],
        callBack: (e: KeyboardEvent, key: string, withKey: TWithKey) => void
    ) =>
    (e: KeyboardEvent) => {
        withKeySets.forEach(({ keys, withKey }) => {
            keys.forEach((key) => {
                const ctrlAB = withKey === "ctrl" && e.ctrlKey;
                const altAB = withKey === "alt" && e.altKey;
                const shiftAB = withKey === "shfit" && e.shiftKey;
                const withkeyTriggered = ctrlAB || altAB || shiftAB;
                const keyMatched = e.key === key;

                // console.log("e.ky", e.key);

                // console.log("keyMatched", keyMatched);

                if (withkeyTriggered && keyMatched) {
                    callBack(e, key, withKey);
                }
            });
        });
    };
