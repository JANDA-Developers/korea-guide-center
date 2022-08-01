import React from "react";

export const columns = [
    {
        header: () => "이름",
        key: "name",
        body: function (data: any) {
            return data[this.key]
        },

        style: {
            maxWidth: "100px",
            minWidth: "20px"
        }
    },
    {
        header: () => "나이",
        key: "age",
        body: function (data: any) {
            return data[this.key]
        },
        style: {
            maxWidth: "100px",
            minWidth: "20px"
        }
    },
    {
        header: () => "성별",
        key: "gender",
        body: function (data: any) {
            return data[this.key]
        },
        style: {
            maxWidth: "100px",
            minWidth: "20px"
        }
    }
]

export const data = [
    {
        name: "yelee",
        age: 27,
        gender: "female"
    },
    {
        name: "hyosang",
        age: 31,
        gender: "male"
    },
    {
        name: "misuk",
        age: 57,
        gender: "female"
    }
]