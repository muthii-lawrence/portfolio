import React from "react";
import TrackList from './TrackList'

const data = [
    {
        Year: 2021,
        Title: 'Treasurer',
        Organisation: 'MKU Finance Club',
        Details: ['Budget preparation, Final statements preparation, Fundraising']
    },
    {
        Year: 2022,
        Title: 'Accounts Intern',
        Organisation: 'Stellar Hr solutions',
        Details: ['Cash flow Management, financial statements preparation, End year adjustments']
    },
    {
        Year: 2023,
        Title: 'Software Engineer',
        Organisation: 'Freelancer',
        Details: ['developing na deploying websites, maintaining websites, Amending websites']
    }
]
const Track = () => {
    return (
        <div id='track' className=" max-w-[1040] m-auto md:p-20 p-4 py-16">
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Track</h1>
            {data.map((item, idx) => (
                <TrackList key = {idx} Year={item.Year} Title={item.Title} Organisation={item.Organisation} Details={item.Details} />
            ))}
        </div>
    )
}
export default Track