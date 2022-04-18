import React from 'react';
import useService from '../../../hooks/useService';
import ServiceCard from '../Servicecard/ServiceCard';

const Services = () => {
    /*  
    *here we fetched data using custom hook name useService() 
        from service.json.
     *service data is mapped and sen to serviceCard 
        component to design service dat for UI */

    // vanilla css is written in home.css file

    const [services] = useService();

    return (
        <div className='container service-container'>
            <h1 className='mb-5'>Services</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;