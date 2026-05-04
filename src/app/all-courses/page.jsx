import CourseCard from "@/components/CourseCard";


const AllCourses = async () => {
    const res = await fetch("https://skillsphere-three-zeta.vercel.app/data.json", {
    cache: "no-store",
  });
    const courses=await res.json()

    return (
        <div>
            <h1 className="text-2xl font-bold my-5">All Course</h1>
           <div>
            {courses.map(course=><CourseCard key={course.id} course={course}/>)}
           </div>
        </div>
    );
};

export default AllCourses;