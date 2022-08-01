export interface companyRecords {
    year: string;
    list: string[];
    index: number;
}

export const HistoryList: React.FC<companyRecords> = ({
    year,
    list,
    index,
}) => {
    return (
        <div className="introFooter__block" key={`footer__block${index}`}>
            <div className="introFooter__year">
                <h5 className="introFooter__yearTitle">{year}</h5>
            </div>
            <div className="introFooter__list">
                <ul>{historyRecords(list)}</ul>
            </div>
        </div>
    );
};

function historyRecords(lists: string[]) {
    return lists.map(function (list: string, index: number) {
        return (
            <li className="introFooter__record" key={`footer__record${index}`}>
                <p>{list}</p>
            </li>
        );
    });
}
