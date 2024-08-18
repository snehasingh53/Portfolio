import React from 'react';
import './Projects.css';

const Projects = () => {
  const staticImages = [
    { id: 1, src: "mentorify.jpg", alt: "mentorify" },
    { id: 2, src: "weatherApp.png", alt: "WeatherApp" },
    { id: 3, src: "spotify.png", alt: "spotify" },
    { id: 4, src: "moviebooking.png", alt: "Movie Booking" },
    { id: 5, src: "analog-clock.jpg", alt: "analog-clock" },
    { id: 6, src: "Churn.png", alt: "Churn" },
    { id: 7, src: "to-do.png", alt: "to-do" },
    { id: 8, src: "calc.jpg", alt: "Calc" },

  ];

  const services = [
    { title: "Mentorify" },
    { title: "Weather App" },
    { title: "Spotify Clone" },
    { title: "Movie Booking" },
    { title: "Analog Clock" },
    { title: "Bank Churn" },
    { title: "To-Do List" },
    { title: "Calculator" }
  ];

  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-skills">
        <div className="container grid grid-three-cols">
          {services.map((service, index) => {
            const image = staticImages[index % staticImages.length]; // Use modulo to cycle through images

            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    width="100%" 
                    height="auto" 
                  />
                </div>
                <div className="card-details">
                  <p>{service.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
