interface CitySectionProps {
  id: string;
  cityLabel: string;
  cityName: string;
  cityNameItalic: string;
  cityKey: string;
}

export default function CitySection({ id, cityLabel, cityName, cityNameItalic, cityKey }: CitySectionProps) {
  const handleSlide = (direction: number) => {
    const slideFunc = (window as any).slide;
    if (slideFunc) slideFunc(cityKey, direction);
  };

  return (
    <section className="city-section" id={id}>
      <div className="city-header reveal">
        <div className="city-name-wrap">
          <div className="city-label">{cityLabel}</div>
          <h2 className="city-name">
            {cityName} <em>{cityNameItalic}</em>
          </h2>
        </div>
        <div className="city-meta">
          <div className="city-nav-btns">
            <button className="cnav" onClick={() => handleSlide(-1)}>←</button>
            <button className="cnav" onClick={() => handleSlide(1)}>→</button>
          </div>
        </div>
      </div>
      <div className="carousel-outer">
        <div className="carousel-track" id={`track-${cityKey}`}>
        </div>
      </div>
    </section>
  );
}
