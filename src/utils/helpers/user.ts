
export const getLabel = (v: any) => {
    if (!v.firstName?.length && !v.lastName?.length) {
        return v.username
    } else {
        return v.firstName + ' ' + v.lastName
    }
}
