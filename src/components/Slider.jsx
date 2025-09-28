import React from 'react';

const Slider = ({ sliderImages, currentSlide, setCurrentSlide, isSliderVisible }) => {
  return (
    <div className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
      isSliderVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderImages.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <div className="h-96 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
