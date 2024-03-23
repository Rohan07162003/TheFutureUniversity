import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { useParams } from "next/navigation";
import AddressLink from "@/components/AddressLink";
export default function JobPage() {
    const { id } = useParams();
    const router = useRouter();
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/jobs/${id}`).then(response => {
            setJob(response.data);
        });
    }, [id])
    if (!job) return '';
    return (
        <div className="mt-8 bg-gray-100 px-8 pt-8 pb-6">
            <div className="text-2xl my-2 flex gap-2 items-center font-semibold">
                <h1>{job.jobtitle} at</h1>
                <span className="text-2xl my-2">{job.jobcompany}</span>
            </div>
            <div className="flex">
                <AddressLink>{job.joblocation}</AddressLink>
            </div>
            <h2 className="my-2 text-2xl">Description</h2>
            <p>{job.description}</p>
            <h2 className="mt-4 mb-2 text-2xl">Salary</h2>
            <p className="mb-6">{job.salary}</p>
            <div className="bg-white -mx-8 px-8 py-8 border-t">
                <h2 className="font-semi-bold text-xl md:text-2xl pb-2">Additional Perks</h2>
                <div className="grid grid-cols-2 md:grid-cols-3">
                    {job.perks.length > 0 && job.perks.map(perk => (
                        <div className="text-gray-700 pb-1">
                            {perk === 'hours' && (
                                <div className="border py-4 px-2 flex rounded-md gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    <span className="text-sm md:text-base"> Flexible Hours</span>
                                </div>
                            )}
                            {perk === 'health' && (
                                <div className="border py-4 px-2 flex rounded-md gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6v4" /><path d="M14 14h-4" /><path d="M14 18h-4" /><path d="M14 8h-4" /><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" /><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" /></svg>
                                    <span className="text-sm md:text-base">Health insurance</span>
                                </div>
                            )}
                            {perk === 'paidleaves' && (
                                <div className="border py-4 px-2 flex rounded-md gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
                                    <span className="text-sm md:text-base">Paid Leaves</span>
                                </div>
                            )}
                            {perk === 'commuting' && (
                                <div className="border py-4 px-2 flex rounded-md gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                                    <span className="text-sm md:text-base">Commuting benefits</span>
                                </div>
                            )}
                            {perk === 'refreshments' && (
                                <div className="border py-4 px-2 flex rounded-md gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" /></svg>
                                    <span className="text-sm md:text-base">Free refreshments</span>
                                </div>

                            )}
                            {perk === 'growth' && (
                                <div className="border py-4 px-2 flex rounded-md gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                                    <span className="text-sm md:text-base">Growth opportunities</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <button className="my-4 border rounded-full bg-orange-600 px-6 py-2 text-white font-medium">Apply Now</button>
            </div>
        </div>
    );
}