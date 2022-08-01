import "raf/polyfill";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";
import "regenerator-runtime/runtime";

if (!Element.prototype.matches) {
    // @ts-ignore
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty("append")) {
            return;
        }
        Object.defineProperty(item, "append", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function append() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(
                        isNode
                            ? argItem
                            : document.createTextNode(String(argItem))
                    );
                });

                this.appendChild(docFrag);
            },
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

if (typeof window.URL !== "function") {
    // @ts-ignore
    window.URL = function (url) {
        var protocol = url.split("//")[0],
            comps = url
                .split("#")[0]
                .replace(/^(https\:\/\/|http\:\/\/)|(\/)$/g, "")
                .split("/"),
            host = comps[0],
            search = comps[comps.length - 1].split("?")[1],
            tmp = host.split(":"),
            port = tmp[1],
            hostname = tmp[0];

        search = typeof search !== "undefined" ? "?" + search : "";

        var params = search
            .slice(1)
            .split("&")
            // @ts-ignore
            .map(function (p) {
                return p.split("=");
            })
            // @ts-ignore
            .reduce(function (p, c) {
                // @ts-ignore
                var parts = c.split("=", 2).map(function (param) {
                    return decodeURIComponent(param);
                });
                // @ts-ignore
                if (parts.length == 0 || parts[0] != param)
                    // @ts-ignore
                    return p instanceof Array && !asArray ? null : p;
                // @ts-ignore
                return asArray
                    ? p.concat(parts.concat(true)[1])
                    : parts.concat(true)[1];
            }, []);

        return {
            hash: url.indexOf("#") > -1 ? url.substring(url.indexOf("#")) : "",
            protocol: protocol,
            host: host,
            hostname: hostname,
            href: url,
            pathname:
                "/" +
                comps
                    .splice(1)
                    // @ts-ignore
                    .map(function (o) {
                        return /\?/.test(o) ? o.split("?")[0] : o;
                    })
                    .join("/"),
            search: search,
            origin: protocol + "//" + host,
            port: typeof port !== "undefined" ? port : "",
            searchParams: {
                // @ts-ignore
                get: function (p) {
                    return p in params ? params[p] : "";
                },
                getAll: function () {
                    return params;
                },
            },
        };
    };
}

// ES6, in case of using Babel in a project

if (typeof window.URL !== "function") {
    // @ts-ignore
    window.URL = function (url) {
        let protocol = url.split("//")[0],
            comps = url
                .split("#")[0]
                .replace(/^(https\:\/\/|http\:\/\/)|(\/)$/g, "")
                .split("/"),
            host = comps[0],
            search = comps[comps.length - 1].split("?")[1],
            tmp = host.split(":"),
            port = tmp[1],
            hostname = tmp[0];

        search = typeof search !== "undefined" ? "?" + search : "";

        const params = search
            .slice(1)
            .split("&")
            // @ts-ignore
            .map((p) => p.split("="))
            // @ts-ignore
            .reduce((obj, pair) => {
                const [key, value] = pair.map(decodeURIComponent);
                return { ...obj, [key]: value };
            }, {});

        return {
            hash: url.indexOf("#") > -1 ? url.substring(url.indexOf("#")) : "",
            protocol,
            host,
            hostname,
            href: url,
            pathname:
                "/" +
                comps
                    .splice(1)
                    // @ts-ignore
                    .map(function (o) {
                        return /\?/.test(o) ? o.split("?")[0] : o;
                    })
                    .join("/"),
            search,
            origin: protocol + "//" + host,
            port: typeof port !== "undefined" ? port : "",
            searchParams: {
                // @ts-ignore
                get: (p) => (p in params ? params[p] : ""),
                getAll: () => params,
            },
        };
    };
}
/* Polyfill IE 11 end */

if (!String.prototype.repeat) {
    String.prototype.repeat = function (count) {
        "use strict";
        if (this == null)
            throw new TypeError("can't convert " + this + " to object");

        var str = "" + this;
        // To convert string to integer.
        count = +count;
        // Check NaN
        if (count != count) count = 0;

        if (count < 0)
            throw new RangeError("repeat count must be non-negative");

        if (count == Infinity)
            throw new RangeError("repeat count must be less than infinity");

        count = Math.floor(count);
        if (str.length == 0 || count == 0) return "";

        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28)
            throw new RangeError(
                "repeat count must not overflow maximum string size"
            );

        var maxCount = str.length * count;
        count = Math.floor(Math.log(count) / Math.log(2));
        while (count) {
            str += str;
            count--;
        }
        str += str.substring(0, maxCount - str.length);
        return str;
    };
}
