import { userList_UserList_items } from "../../types/api";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import { useRouter } from "next/router";

const BadgeAndNameContainer = styled.div`
    margin: 15px 0px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
`;

const Badge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d0242b;
    color: white;
    font-weight: 600;
    padding: 3px 15px;
    border-radius: 20px;
    margin-right: 10px;
    font-size: 0.8rem;
`;
const Name = styled.span`
    font-weight: 600;
`;

const Desc = styled.div`
    padding: 0px 10px;
`;

const CategoryContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    bottom: 0;
`;

const CategoryText = styled.span`
    font-weight: 600;
    margin-right: 5px;
`;

interface IRecommendGuideSliderProps {
    item: userList_UserList_items[];
    offset: number;
    index: number;
}

const RecommendGuideSliderItem = ({
    item,
    offset,
    index,
}: IRecommendGuideSliderProps) => {
    const { l } = useContext(AppContext);
    const router = useRouter();
    const onClickGuide = () => {
        router.push("/");
    };

    return (
        <>
            {item.slice(offset * index, offset * index + offset).map((i) => {
                return (
                    <div className="slider__LongSliderItems">
                        <div
                            className="slider__GuideSliderItemImage"
                            style={{
                                backgroundImage: `url(${i.profileMediumImage?.uri})`,
                            }}
                        />
                        <BadgeAndNameContainer>
                            <Badge>{i.role}</Badge>
                            <Name>{i.name}</Name>
                        </BadgeAndNameContainer>
                        <hr />
                        <Desc>
                            {l(i.introduce).length > 90
                                ? l(i.introduce).slice(0, 90) + "..."
                                : l(i.introduce)}
                        </Desc>
                        <CategoryContainer></CategoryContainer>
                    </div>
                );
            })}
        </>
    );
};

export default RecommendGuideSliderItem;
