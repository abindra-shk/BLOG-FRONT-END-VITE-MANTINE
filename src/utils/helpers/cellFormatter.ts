
export const formatCell = (key: number, temp: string) => {
    let val = temp
    if (!isNaN(+val)) {
        if ([0].includes(key)) {
            val = val === '' ? '' : parseFloat(val).toLocaleString()
        }
        if ([1, 2, 5, 6].includes(key)) {
            val =
                +val !== 0
                    ? '$' + parseFloat((+val).toFixed(0)).toLocaleString()
                    : ''
        }
        if ([3, 7, 8].includes(key)) {
            val = val === '' ? '' : (+val * 100).toFixed(2) + '%'
        }
    }
    return val
}

export const formatCellFinancial = (temp: string, key: number) => {
    let val = temp
    if (!isNaN(+val)) {
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(key)) {
            val =
                +val !== 0
                    ? '$' +
                      replaceHyphenWithBrackets(
                          parseFloat((+val).toFixed(0)).toLocaleString(),
                      )
                    : '$0'
        }
        if ([13, 14, 15].includes(key)) {
            val =
                val === ''
                    ? ''
                    : replaceHyphenWithBrackets((+val * 100).toFixed(2)) + '%'
        }
    }
    return val
}

export const formatPercentage = (temp: string) => {
    let val = temp
    if (!isNaN(+val)) {
        val = val === '' ? '' : (+val * 100).toFixed(2) + '%'
    }
    return val
}

export const formatAmount = (formattedVal: any) =>
    +formattedVal !== 0
        ? '$' +
          replaceHyphenWithBrackets(
              parseFloat((+formattedVal).toFixed(2)).toLocaleString(),
          )
        : '$0'

export const replaceHyphenWithBrackets = (temp: string) => {
    let val = temp
    if (val.includes('-')) {
        val = '(' + val.replace(/-/g, '') + ')'
    }
    return val
}

export const sortByKey = (array: any, sortVal: any, keyVal: string) => {
    if (sortVal.type === 'Client Name' || sortVal.type === 'Organization') {
        return array
    }
    return array.sort((a: any, b: any) => {
        const x = a[keyVal] ?? 0
        const y = b[keyVal] ?? 0
        if (sortVal.isReverse) {
            return x < y ? 1 : x > y ? -1 : 0
        } else {
            return x < y ? -1 : x > y ? 1 : 0
        }
    })
}

export const millionConverter = (val: any) =>
    '$' +
    (val > 1000000 ? val / 1000000 : val / 1000).toFixed(2) +
    (val > 1000000 ? 'M' : 'k')
export const percentConverter = (val: any) => (val * 100).toFixed(2) + '%'
