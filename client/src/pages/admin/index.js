import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function AdminPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('/jobs').then(({ data }) => {
      setJobs(data);
    });
  }, []);
  async function deleteJob(id) {
    try {
      await axios.delete(`/jobs/${id}`);
      setJobs(jobs.filter(job => job._id !== id)); // Update the jobs state after deletion
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div>

      <div>
        <div className="text-center">
          <Link className="inline-flex gap-1 text-white bg-orange-600 py-2 px-6 mt-12 rounded-full hover:bg-opacity-95 text-center" href='/admin/new'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            Add New Job
          </Link>
        </div>
        <div className="mt-4">
          {jobs.length > 0 && jobs.map(job => (
            <div className="relative">
              <Link href={'/admin/' + job._id} className="mb-2 flex cursor-pointer gap-4 bg-gray-200 p-4 rounded-2xl">
                <div className="flex w-32 h-32 bg-gray-100 shrink-0">
                  {job.photos.length > 0 && (
                    <img className="object-cover" src={'http://localhost:4000/uploads/' + job.photos[0]} alt="" />
                  )}
                </div>
                <div className="grow-0 shrink">
                  <h2 className="text-xl font-semibold">{job.jobtitle}</h2>
                  <p className="text-sm mt-2 font-normal">{job.description}</p>

                </div>



              </Link>

              <button className="absolute right-2 top-2">
                <Popover>
                  <PopoverTrigger><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg></PopoverTrigger>
                  <PopoverContent>
                  <button onClick={() => deleteJob(job._id)}>
                      Delete this Job?
                  </button>
                  </PopoverContent>
                </Popover>

              </button>
            </div>
          ))}
        </div>

      </div>


    </div>
  );
}


