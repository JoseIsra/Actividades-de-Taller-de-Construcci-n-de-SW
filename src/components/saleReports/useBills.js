
import {useState, useEffect} from 'react';
import { api } from '../../httprequestconfig/methods';

export const useBills = () => {
    const [bills , setBills] = useState([]);

        useEffect(() => {
            api.getBills()
            .then(response => {
                setBills(response.data);
            })

        }, [])


    return {bills};
    
}

