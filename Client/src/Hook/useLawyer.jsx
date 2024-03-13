import { useEffect, useState } from "react"

const useBuyer = email =>{
    const [isBuyer,setIsBuyer] = useState(false);
    useEffect( () =>{
        if(email){
            fetch(`https://attractive-ruby-cow.cyclic.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsBuyer(data.isBuyer);
            })
        }
    }, [email])
    return[isBuyer]
}
export default useBuyer;