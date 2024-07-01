const xhr = {
    responseType: false,
    responseText: "OK",
    response: {}
}

console.log(
    ( xhr.responseType || "text" ) !== "text"  ||
    typeof xhr.responseText !== "string" ?
        { binary: 1 } :
        { text: 2 }
)

// 条件一 和 条件二 均为false，因此实际应该打印 { text: 2 }