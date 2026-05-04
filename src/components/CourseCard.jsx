import React from 'react';

const CourseCard = ({topCourse}) => {
    return (
        <div
            key={topCourse.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition bg-white"
          >

            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={topCourse.image}
                alt={topCourse.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

              {/* Title */}
              <h2 className="font-bold text-lg line-clamp-2">
                {topCourse.title}
              </h2>

              {/* Instructor */}
              <p className="text-sm text-gray-600">
                👨‍🏫 {topCourse.instructor}
              </p>

              {/* Rating */}
              <p className="text-sm text-yellow-600">
                ⭐ {topCourse.rating}
              </p>

              {/* Button */}
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>

            </div>

          </div>
    );
};

export default CourseCard;