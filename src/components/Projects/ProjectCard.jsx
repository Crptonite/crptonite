import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProjectCard = ({
  project: { title, imageSrc, videoSrc, description, skills, demo, source },
}) => {

  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // create media array
  const media = [
    imageSrc ? { type: "image", src: imageSrc } : null,
    videoSrc ? { type: "video", src: videoSrc } : null,
  ].filter(Boolean);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className={styles.card}>

      {/* MEDIA SECTION */}
      {media.length > 0 && (
        <div className="position-relative">

          {media[currentIndex].type === "image" ? (
            <img
              src={getImageUrl(media[currentIndex].src)}
              alt={title}
              className={styles.image}
            />
          ) : (
            <video
              src={getImageUrl(media[currentIndex].src)}
              className={styles.image}
              controls
            />
          )}

          {/* Bootstrap arrows */}
          {media.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                onClick={prev}
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                onClick={next}
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </>
          )}
        </div>
      )}

      <h3 className={styles.title}>{title}</h3>

      <p className={`${styles.description} ${expanded ? styles.expanded : ""}`}>
        {description}
      </p>

      {description.length > 120 && (
        <button
          className={styles.readMore}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <span key={id} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}

        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
      </div>

    </div>
  );
};
