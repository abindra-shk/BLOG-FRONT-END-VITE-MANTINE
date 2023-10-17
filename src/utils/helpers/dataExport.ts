import { read, utils, writeFile } from 'xlsx'

export const handleExport = (
    headers: any,
    data: any,
    type: string,
    reportType: string,
) => {
    const wb = utils.book_new()
    const ws = utils.json_to_sheet([])
    utils.sheet_add_aoa(ws, [headers])
    utils.sheet_add_json(ws, data, { origin: 'A2', skipHeader: true })
    utils.book_append_sheet(wb, ws, 'Report')

    if (type === 'xlsx') {
        writeFile(wb, reportType + '.xlsx')
    } else {
        writeFile(wb, reportType + '.csv')
    }
}
