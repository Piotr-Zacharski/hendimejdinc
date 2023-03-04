module.exports = {
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    trailingComma: "all",
    endOfLine: 'auto',
    importOrder: [
        "^(^react$|@react|react)",
        "^@mui/(.*)$",
        "<THIRD_PARTY_MODULES>",
        "^@/(.*)$",
        "^[./]"
    ],
    importOrderGroupNamespaceSpecifiers: true,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
}
