import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Пылесос'}
        ]
        this._brands = [
            {id: 1, name:'Samsung'},
            {id: 2, name:'Xiaomi'}
        ]
        this._devices = [
            {id: 1, name: 'Samsung Холодильник', price: 40000, rating: 4, img:'//'},
            {id: 2, name: 'Xiaomi Пылесос', price: 9000, rating: 5, img:'//'}
        ]
        makeAutoObservable(this)
    }


setTypes(types){
    this._types = types
}

setBrands(brands){
    this._brands = brands
}

setDevices(devices){
    this._devices = devices
}


get isAuth(){
    return this._isAuth
}

get user(){
    return this._user
}

}