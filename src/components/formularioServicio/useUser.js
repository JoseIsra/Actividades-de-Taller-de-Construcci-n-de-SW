import {useState , useEffect} from 'react'
import { api } from '../../httprequestconfig/methods';
export const useUser = () => {
    const [user, setUser] = useState({
        name:''
    });

    useEffect(() => {
        api.getUser()
        .then(res => {
            setUser(user => ({
                name:res.data.cli_name
            }))
        })
        .catch(err => console.log(err))
        
    }, [])

    return {user};
    
    
}
