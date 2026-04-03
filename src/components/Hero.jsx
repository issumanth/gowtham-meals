function Hero() {
  return (
    <section className="bg-blue-50 min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8">

      <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full bg-white shadow-md rounded-xl p-5 sm:p-6 md:p-8 text-center">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 leading-tight">
          గౌతమ్ మీల్స్
        </h1>

        {/* Tagline */}
        <p className="text-xs sm:text-sm md:text-base text-blue-700 font-medium mb-3 md:mb-4">
          రుచి • నమ్మకం • మన ఇంటి వంట
        </p>

        {/* Divider */}
        <div className="w-10 sm:w-12 h-[2px] bg-blue-700 mx-auto mb-3 md:mb-4"></div>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-5 md:mb-6 px-1 sm:px-2">
          మన ఇంట్లో చేసుకునేలా సాదాగా, నమ్మకంగా పెడతాం.  
          ఒకసారి తింటే మళ్ళీ మళ్ళీ వస్తారు!

          <br /><br />

          పెళ్లిళ్లు, ఫంక్షన్స్, ఏ ఈవెంట్ అయినా క్యాటరింగ్ తీసుకుంటాం —  
          మీ ఫంక్షన్ భోజనం మా బాధ్యత!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">

          {/* Call */}
          <a
            href="tel:7386064606"
            className="w-full sm:w-auto bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-blue-800 transition"
          >
            📞 కాల్ చేయండి
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/o3P7jmMeB6bZFiA39"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-blue-700 text-blue-700 px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-blue-100 transition"
          >
            📍 లొకేషన్ చూడండి
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;