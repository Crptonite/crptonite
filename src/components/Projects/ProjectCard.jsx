import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>

      {imageSrc && (
        <img
          src={getImageUrl(imageSrc)}
          alt={title}
          className={styles.image}
        />
      )}

      <h3 className={styles.title}>{title}</h3>

      <p className={`${styles.description} ${expanded ? styles.expanded : ""}`}>
        {description}
      </p>

      {/* READ MORE BUTTON */}
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
            <a href={demo} className={styles.link} target="_blank">
              Demo
            </a>
          )}

          {source && (
            <a href={source} className={styles.link} target="_blank">
              Source
            </a>
          )}
        </div>

    </div>
  );
};
