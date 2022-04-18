import { useEffect, useState } from "react";


const useService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/engrkashem/data-hostiong/main/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return [services, setServices];

}

export default useService;