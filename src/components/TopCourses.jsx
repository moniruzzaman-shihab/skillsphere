import CourseCard from "./CourseCard";

const TopCourses = async () => {
  const res = await fetch("https://skillsphere-three-zeta.vercel.app/data.json", {
    cache: "no-store",
  });

  const courses = await res.json();
  const topCourses = courses.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      
      <h1 className="text-2xl font-bold mb-6">
        Top Rated Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {topCourses.map((topCourse) => (
          
          <CourseCard key={topCourse.id} topCourse={topCourse}/>

        ))}

      </div>
    </div>
  );
};

export default TopCourses;