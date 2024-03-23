import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const JobCardList = ({ data }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
            {data.length > 0 && data.map(job => (
                <div className="border border-gray-300 rounded-2xl aspect-w-1 aspect-h-1">
                    <Link href={'/job/' + job._id} className="px-2 md:px-8 pt-20 pb-12 block h-full">
                        
                        <h3 className="font-bold">{job.jobtitle}</h3>
                        <div className="flex gap-4">
                            <h2 className="text-sm text-gray-700">{job.joblocation}</h2>
                            <h2 className="text-sm text-gray-700">{job.jobcompany}</h2>
                        </div>
                        <div className="mt-8">
                            <span className="font-semibold text-sm md:text-base border rounded-full px-5 py-2">{job.salary}</span>
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    )
}
function Suggestions({data,setSearchText}) {
    const handleClick = (ev) => {
        ev.preventDefault();
        setSearchText(data); // Update the search text when suggestion is clicked
    };
    return (
        <button onClick={handleClick} className="flex gap-2 items-center border rounded-full px-4 py-2">
            <p className="text-sm font-semibold">{data}</p>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></div>
        </button>
    )


}
export default function Feed() {
    const [jobs, setJobs] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return jobs.filter(
            (item) =>
                regex.test(item.jobtitle) ||
                regex.test(item.jobcompany) ||
                regex.test(item.joblocation)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    useEffect(() => {
        axios.get('/jobs').then(response => {
            setJobs([...response.data])
        })
    }, [])
    return (
        <div className="py-4">
            <div className="text-center mb-20">
                <form className="relative w-full md:w-[80%] flex-center mx-auto">
                    <input type="text"
                        placeholder="Job Title, keyword or company"
                        value={searchText}
                        onChange={handleSearchChange}
                        required
                        className="search_input peer " />


                </form>
            </div>
            <p className="mb-3">Suggested Job Searches</p>
            <div className="py-2 flex flex-wrap gap-4 justify-center ">
                <Suggestions data="Founder" setSearchText={setSearchText} />
                <Suggestions data="Founding partner" setSearchText={setSearchText} />
                <Suggestions data="Board Member" setSearchText={setSearchText} />
                <Suggestions data="Enterpreneur in residence" setSearchText={setSearchText} />
                <Suggestions data="Personal Assistant" setSearchText={setSearchText} />
                <Suggestions data="Sales" setSearchText={setSearchText} />
                <Suggestions data="Co-founder" setSearchText={setSearchText} />
                <Suggestions data="Developer" setSearchText={setSearchText} />
                <Suggestions data="Managing director" setSearchText={setSearchText} />
            </div>
            <p className="mb-3">Recommended for you</p>
            {searchText ? (
                <JobCardList
                    data={searchedResults}
                />
            ) : (
                <JobCardList data={jobs} />
            )}

        </div>
    );
}
