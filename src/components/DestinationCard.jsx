import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({ destination }) => {
    const { imageUrl, price, destinationName, duration, country } = destination;

    return (
        <div className='border p-4 rounded-md'>
            <figure className='h-[200px] overflow-hidden'>
                <Image
                    alt={destinationName}
                    src={imageUrl}
                    height={600}
                    width={600}
                    className='h-full bg-cover rounded-md'>
                </Image>
            </figure>

            <div>
                <div className='flex items-center gap-1'>
                    {" "}
                    <LuMapPin></LuMapPin>
                    <span>{country}</span>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <h2 className='text-xl font-bold'>{destinationName}</h2>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaRegCalendar />
                            {duration}
                        </div>
                    </div>

                    <div><h3 className='text-2xl font-bold'>$ {price}</h3></div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;