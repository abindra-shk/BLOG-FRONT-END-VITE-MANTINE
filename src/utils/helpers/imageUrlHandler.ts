
import placeholderImg from '../../assets/images/placeholder.jpg'
import { IMAGE_URL } from '../../config/baseURL'

export const getImageUrl = (img: string) => {
    if (img?.includes('http')) {
        return img
    } else {
        return IMAGE_URL + `${img}`
    }
}

export const getImageLink = (img: string) => {
    if (img?.includes('http')) {
        return img.replace(IMAGE_URL, '')
    } else {
        return img
    }
}

export const onErrorImage = (event: any) => {
    event.target.src = placeholderImg
}
