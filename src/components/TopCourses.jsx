


const TopCourses = async () => {
  const res = await fetch("https://skillsphere-three-zeta.vercel.app/data.json")
  const courses = await res.json()
  const topCourses = courses.slice(0, 3)
  return (
    <div>
      <h1 className="font-2xl font-bold mt-5">Top Rated Courses</h1>
      <div>
        {topCourses.map(topCourse => <div key={topCourse.id}>
          {topCourse.title}
          </div>

          
        )}
      </div>
    </div>
  );
};
export default TopCourses;