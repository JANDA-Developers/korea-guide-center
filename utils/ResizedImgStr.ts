import { fileExtendDivider } from "./fileExtendDivider";

export class ResizedImgStr {
    constructor(private str: string) {}

    attach(imgWidth: number) {
        const { extend, namePart } = fileExtendDivider(this.str || ".");
        return namePart + "---" + imgWidth + "." + extend;
    }

    getOrigin() {
        const [origin, sufix] = this.str.split("---");
        const [num, extention] = sufix.split(".");
        return origin + "." + extention;
    }
}
