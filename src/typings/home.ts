interface ISliders {
    ulr: string
}
interface ILession {
    title: string,
    video: string,
    poster: string,
    price: number,
    category?: string
}
interface ILessions {
    hasMore: boolean,
    loading: boolean,
    offset: number,
    limit: number,
    list: ILession[]
}
export interface IHomeState {
    currentCategory: CATOGORY_TYPES,
    sliders: ISliders[],
    lessions: ILessions
}

export enum CATOGORY_TYPES  {
    ALL,
    REACT,
    VUE
}
