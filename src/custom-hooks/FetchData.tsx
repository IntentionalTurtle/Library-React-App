import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ carData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    
    useEffect( () => {
        handleDataFetch();
    }, []) 
    //Syntax is odd for useEffect. If no '[]' then useEffect will happen on every change
    //If '[]' is used, then will activate on 'mount' (when the component comes into being)
    //If '[componentName]' then it will watch for changes on just the named component and then refresh/activate

    return { carData, getData:handleDataFetch}
}