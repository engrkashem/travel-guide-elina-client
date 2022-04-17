import React from 'react';
import useService from '../../../hooks/useService';
import ServiceCard from '../Servicecard/ServiceCard';

const Services = () => {

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