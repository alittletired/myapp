import * as requestService from './requestService';



export  function login(user) {
    return requestService.post('/login', user).then(data =>
    {
       
        return data

    });
       
		
}


	
