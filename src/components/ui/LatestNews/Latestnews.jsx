import { getAllNews } from '@/utilities/getAllNews';
import Image from 'next/image';
import React from 'react';

const Latestnews = async() => {

    const { data } = await getAllNews()
    return (
        <div className='grid md:grid-cols-2 gap-5 my-5'>
            Left side
            <div className="card bg-base-100  shadow-sm">
    
                    <Image className='w-full'
                    
                        src={data[0]?.thumbnail_url} width={500} height={400}
                        alt="image" />
            
                <div className="card-body">
                    <div>
                        <button className="btn bg-green-600  text-white rounded-2xl">{data[0].category}</button>
                    </div>
                    <h2 className="card-title">{data[0].title}</h2>

                    
                    <p>{data[0].details.length>300? data[0].details.slice(0.250): data[0].details}</p>

                </div>
            </div>
            {/*four item */}
            <div className='grid grid-cols-2 gap-5 my-5'>
                {
                    data.slice(1,5).map(news=><div key= {news._id}className="card bg-base-100  shadow-sm">
                        <figure>
                          <Image className='w-full h-60'
                            src="news.thumbnail_url"
                            alt="news" width={400} height={400} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{news.title}</h2>
                          <p>{news.details.length>150 ?news.details.slice(0,170):news.details}</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>)
                }
            </div>
        </div>
    );
};

export default Latestnews;