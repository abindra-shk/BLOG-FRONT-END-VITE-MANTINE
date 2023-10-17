
import moment from 'moment'

export const formatDate = (date: any) => {
    const temp = new Date(date)
    return moment(temp).format('MMM DD, YYYY')
}

export const formatDateWithTime = (date: any) => {
    const temp = new Date(date)
    return moment(temp).format('MMM DD, YYYY HH:mm')
}
