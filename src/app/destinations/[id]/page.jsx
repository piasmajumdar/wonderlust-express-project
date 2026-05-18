import { Button } from "@heroui/react";
import { descriptionVariants } from "@heroui/styles";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json();
    const { _id, imageUrl, price, destinationName, duration, country, description } = destination;

    // console.log(destination)
    return (
        <div className="max-w-7xl mx-auto my-10">

           <div className="flex justify-end">
            <Button variant="outline"  className={'rounded-none mt-5 mb-3'}><BiEdit/> Edit</Button>
           </div>

            <figure className=''>
                <Image
                    alt={destinationName}
                    src={imageUrl}
                    height={200}
                    width={600}
                    className='h-100 w-full object-cover rounded-md'>
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
                <h1 className="mt-10 text-2xl">Overview</h1>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default DestinationDetailsPage;