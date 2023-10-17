
export const formatName = (firstName: string, lastName: string) => {
    return !!firstName && !!lastName ? (firstName + ' ' + lastName).trim() : ''
}
