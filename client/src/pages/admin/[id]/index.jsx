import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Perks from "@/components/Perks";

const AdminFormPage = () => {
    const { id } = useParams() || {};
    const router = useRouter();
    const [jobtitle, setjobTitle] = useState('');
    const [joblocation, setjobLocation] = useState('');
    const [addedPhotos, setAddedPhotos] = useState('');
    const [perks, setPerks] = useState([]);
    const [jobcompany, setjobCompany] = useState('');
    const [description, setDescription] = useState('');
    const [photoLink,setPhotolink]=useState('')
    const [salary, setSalary] = useState('');
    function inputheader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    function inputDesc(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    function preinput(header, description) {
        return (
            <>
                {inputheader(header)}
                {inputDesc(description)}
            </>
        );
    }
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get('/jobs/'+id).then(response =>{
            const {data}=response;
            setjobTitle(data.jobtitle);
            setjobLocation(data.joblocation);
            setjobCompany(data.jobcompany);
            setPerks(data.perks);
            setSalary(data.salary);
            setDescription(data.description);
            
        });
    }, [id]);
    async function saveJob(ev) {
        ev.preventDefault();
        const placeData={ jobtitle,joblocation,jobcompany,perks,description,salary};
        try{
            await axios.put('/jobs',{id,...placeData});
            router.push('/admin');
        }catch(err){
            console.error(err)
        }
    }
    
    return (
        <div className="p-2">
            <form onSubmit={saveJob}>
                {/* {id} */}
                {preinput('Job Title', 'Title for your job')}
                <input type="text" value={jobtitle} onChange={ev => setjobTitle(ev.target.value)} placeholder="title, for example: Cloud Engineer" />
                {preinput('Job Company', 'Company that is hiring')}
                <input type="text" value={jobcompany} onChange={ev => setjobCompany(ev.target.value)} placeholder="company" />
                {preinput('Job Location', 'Location for your job')}
                <input type="text" value={joblocation} onChange={ev => setjobLocation(ev.target.value)} placeholder="location(can be remote)" />
                {/* <h2 className="text-2xl mt-4">Photos</h2> */}
                {/* <div className="flex gap-2">
                    <input value={photoLink} onChange={ev => setPhotolink(ev.target.value)}
                        type="text" placeholder="Add using link ....jpg" />
                    <button onClick={addPhotobylink} className="bg-gray-200 px-4 rounded-2xl hover:text-gray-500">Add&nbsp;photo</button>
                    {addedPhotos.length>0 && addedPhotos.map((link)=>(
                        <div>{link}</div>
                    ))}
                </div> */}
                {preinput('Description', 'description of the job')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} placeholder="description" className="h-72 md:h-56 lg:h-48 "></textarea>
                {preinput('Salary', 'Could be a range or a single number')}
                <input type="text" value={salary} onChange={ev => setSalary(ev.target.value)} placeholder="salary" />

                {preinput('Perks', 'select all the perks of your place')}
                <div>
                    <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        <Perks selected={perks} onChange={setPerks} />
                    </div>
                </div>


                <Button className="px-8 mt-5 rounded-2xl" size="lg">Save</Button>
            </form>
        </div>
    )
}

export default AdminFormPage