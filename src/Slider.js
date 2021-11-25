import React from "react";
import data from "./data";
function Slider() {
  const [people, setPeople] = React.useState(data);
  const [value, setValue] = React.useState(2);
  React.useEffect(() => {
    const lastIndex = people.length - 1;
    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [value, people]);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [value, people]);

  return (
    <>
      <main>
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          let pos = "nextslide";
          if (index === value) {
            pos = "activeslide";
          }
          if (
            index === value - 1 ||
            (value === 0 && index === people.length - 1)
          ) {
            pos = "lastslide";
          }
          return (
            <section key={id} className={`review__box ${pos}`}>
              <figure className="img__box">
                <img className="image" src={image} alt="person__image" />
              </figure>
              <div className="button__slider">
                <button
                  onClick={() => setValue(value - 1)}
                  className="left__btn btn"
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <div className="person__info">
                  <h2 className="person__name">{name}</h2>
                  <p className="person__profession">{title}</p>
                </div>
                <button
                  onClick={() => setValue(value + 1)}
                  className="right__btn btn"
                >
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
              <div className="person__box">
                <p className="person__about">{quote}</p>
                <span className="quote">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </span>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default Slider;
