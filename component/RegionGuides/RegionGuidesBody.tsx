import { Fuser } from "../../types/api";
import { GuideMovieClip2 } from "../guideMovieClicp/GuideMovieClip";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";
import RegionGuidesBodyHorizonGrider from "./RegionGuidesBodyHorizonGrider";

interface IProp extends Partial<IHorizenGriderProp<Fuser>> {
    guides: Fuser[];
}

const RegionGuidesBody: React.FC<IProp> = ({ guides, ...props }) => {
    return (
        <RegionGuidesBodyHorizonGrider
            itemRedner={(item, props) => {
                return <GuideMovieClip2 user={item} {...props} />;
            }}
            items={guides}
            align={"auto"}
            wrap={props.align === "wrap"}
            {...props}
        />
    );
};

export default RegionGuidesBody;
