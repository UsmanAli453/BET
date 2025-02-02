import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { themeContext } from "../../Context/Context";

const data = {
    title: "Key Features of Our Web Development Course:",
    benefits: [
        {
            title: "Comprehensive Curriculum",
            points: "Our course covers a wide range of topics, including HTML, CSS, and Advanced JavaScript ,React and Backend Technologies like Node Express and MongoDb. You'll learn the essentials and advanced techniques required to excel in the field of web development."

        },
        {
            title: "Expert Instructors",
            points: "Our instructors are industry professionals with years of experience in web development. They provide personalized guidance and mentorship throughout the course, ensuring you receive the best education and practical insights."
        },
        {
            title: "Hands-on Training",
            points: "We believe in a practical approach to learning. Through hands-on exercises and real-world projects, you'll apply your knowledge and develop the skills necessary to tackle real web development challenges."
        },
        {
            title: "Responsive Web Design",
            points: "With the increasing use of mobile devices, responsive web design has become crucial. Our course emphasizes creating websites that adapt seamlessly to different screen sizes, providing an optimal user experience."
        },
        {
            title: "Career Support",
            points: "Black Edge Tech is committed to your success even after the course completion. We offer career support, including job placement assistance, resume building, and interview preparation, helping you kickstart your career in web development."
        },
    ],
};

const KeyFeatures = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true }); // Initialize AOS with desired options
    }, []);

    const { theme } = useContext(themeContext)

    return (
        <div className={`py-16 max-w-8xl space-y-14 text-left`}>
            <div className="space-y-8">
                <h1
                    className={` text-gray-800 text-4xl font-bold`}
                    data-aos="fade-up" // AOS animation type
                >
                    {data.title}
                </h1>
                <div className='bg-CustomYellow w-40 h-1'></div>
            </div>


            {/* Benefits Section */}
            <div className="space-y-8">
                {data.benefits.map((benefit, index) => (
                    <div
                        key={index}
                        data-aos="fade-up" // AOS animation type
                        data-aos-delay={index * 200 + 300} // Staggered animation
                    >
                        <h2 className={` ${theme === "dark" ? "text-CustomWhite" : " text-gray-800"} text-xl font-semibold mb-4`}>
                            {benefit.title}
                        </h2>
                        <p className={` ${theme === "dark" ? "text-CustomWhite" : " text-gray-700"} space-y-2`}>
                            {benefit.points}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;
