
import {useState, useEffect} from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { api } from '../../httprequestconfig/methods';

export const useBills = () => {
    const [bills , setBills] = useState([]);
    const [{client}] = useDataLayerValue();
        useEffect(() => {
            api.getBills(client.idclient)
            .then(response => {
                setBills(response.data);
            })

        }, [])


    return {bills};
    
}

