import { Bold, Flex } from "@janda-com/front";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const FooterContact = () => {
    const { s } = useContext(AppContext);

    const BottomInfo = ({ label, value }: { label: string; value: string }) => {
        return (
            <Flex vCenter mr>
                <Bold mr="tiny">{label}</Bold> {value}
            </Flex>
        );
    };

    return (
        <div className="col-50 footer-contact">
            <div className="footer__infoDetail">
                <BottomInfo label={s("footer_ceo")} value={s("itsguide_CEO")} />
                <BottomInfo
                    label={s("footer_transferNum")}
                    value={"2020-부산영도-0215"}
                />
                <BottomInfo
                    label={s("footer_businessNumber")}
                    value={"863-86-01971"}
                />
                <div className="textTransformClear">
                    <BottomInfo
                        label={s("footer_email")}
                        value={"kguidecenter@gmail.com"}
                    />
                </div>
                <BottomInfo label={s("footer_fax")} value={s("itsguide_FAX")} />
                <BottomInfo
                    label={s("footer_address")}
                    value={s("itsguide_adress")}
                />
                <BottomInfo
                    label={s("footer_accountNum")}
                    value={`301-0308-0055-81`}
                />
            </div>
        </div>
    );
};

export default React.memo(FooterContact);
