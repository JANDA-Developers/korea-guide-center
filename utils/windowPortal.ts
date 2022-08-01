import React from "react";
import ReactDOM from "react-dom";

interface IWindowOpenString {
    width: number;
    height: number;
    left: number;
    top: number;
}

interface IProps {
    closeWindowPortal: () => void;
    openParam: Partial<IWindowOpenString>;
}

//새창열고 안에 리엑트 삽입해주는 모달
export class WindowPortal extends React.PureComponent<IProps> {
    public externalWindow: Window | null;
    public containerEl: HTMLDivElement;
    public openStr: string;

    constructor(props: IProps) {
        super(props);
        this.containerEl = document.createElement("div"); // STEP 1: create an empty div
        this.externalWindow = null;

        let openStrings: string[] = [];
        for (const [key, value] of Object.entries(props.openParam)) {
            if (value) {
                const param = key + "=" + value;
                openStrings.push(param);
            }
        }

        this.openStr = openStrings.join(",");
    }

    componentDidMount() {
        this.externalWindow = window.open("", "", this.openStr);

        this.externalWindow!.document.body.appendChild(this.containerEl);

        this.externalWindow!.document.title = "A React portal window";

        this.externalWindow!.addEventListener("beforeunload", () => {
            this.props.closeWindowPortal();
        });
    }

    componentWillUnmount() {
        this.externalWindow!.close();
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.containerEl);
    }
}
