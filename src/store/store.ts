import { create } from 'zustand';
import { produce } from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import cityData from '../data/cityData';


export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            CityList: cityData,
            FavoritesList: [],
            addToFavoriteList: (type: string, id: string) =>
                set(
                    produce(state => {
                        if (type == 'Coffee') {
                            for (let i = 0; i < state.CoffeeList.length; i++) {
                                if (state.CoffeeList[i].id == id) {
                                    if (state.CoffeeList[i].favourite == false) {
                                        state.CoffeeList[i].favourite = true;
                                        state.FavoritesList.unshift(state.CoffeeList[i]);
                                    } else {
                                        state.CoffeeList[i].favourite = false;
                                    }
                                    break;
                                }
                            }
                        } else if (type == 'city') {
                            for (let i = 0; i < state.CityList.length; i++) {
                                if (state.CityList[i].id == id) {
                                    if (state.CityList[i].favourite == false) {
                                        state.CityList[i].favourite = true;
                                        state.CityList.unshift(state.CityList[i]);

                                    } else {
                                        state.CityList[i].favourite = false;
                                    }
                                }
                            }
                        }
                    }),
                ),
            deleteFromFavoriteList: (type: string, id: string) =>
                set(
                    produce(state => {
                        if (type == 'Coffee') {
                            for (let i = 0; i < state.CoffeeList.length; i++) {
                                if (state.CoffeeList[i].id == id) {
                                    if (state.CoffeeList[i].favourite == true) {
                                        state.CoffeeList[i].favourite = false;
                                    } else {
                                        state.CoffeeList[i].favourite = true;
                                    }
                                    break;
                                }
                            }
                        } else if (type == 'city') {
                            for (let i = 0; i < state.CityList.length; i++) {
                                if (state.CityList[i].id == id) {
                                    if (state.CityList[i].favourite == true) {
                                        state.CityList[i].favourite = false;
                                    } else {
                                        state.CityList[i].favourite = true;
                                    }
                                    break;
                                }
                            }
                        }
                        let spliceIndex = -1;
                        for (let i = 0; i < state.FavoritesList.length; i++) {
                            if (state.FavoritesList[i].id == id) {
                                spliceIndex = i;
                                break;
                            }
                        }
                        state.FavoritesList.splice(spliceIndex, 1);
                    }),
                )
        }),
        {
            name: 'coffee-app',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
