function Contact() {
  return (
    <section className="bg-blue-50 px-4 sm:px-6 md:px-8 py-8 md:py-10 text-center">

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
        సంప్రదించండి
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-5 md:mb-6 max-w-md mx-auto">
        ఆర్డర్ కోసం కాల్ చేయండి లేదా వాట్సాప్ లో మెసేజ్ చేయండి
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">

        {/* Call Button */}
        <a
          href="tel:7386064606"
          className="w-full sm:w-auto bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-blue-800 transition"
        >
          📞 కాల్ చేయండి
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917386064606?text=Hi%20I%20want%20to%20order%20food"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-green-500 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-green-600 transition"
        >
          💬 WhatsApp చేయండి
        </a>

      </div>

      {/* Extra Info */}
      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-5 md:mt-6">
        📍 వెల్దుర్తి, కర్నూలు జిల్లా
      </p>

    </section>
  );
}

export default Contact;