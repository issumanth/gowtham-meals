function Contact({ lang }) {
  return (
    <section className="bg-blue-50 px-4 py-10 text-center">

      <h2 className="text-xl font-bold mb-4">
        {lang === "te" ? "సంప్రదించండి" : "Contact Us"}
      </h2>

      <p className="mb-6">
        {lang === "te"
          ? "ఆర్డర్ కోసం కాల్ చేయండి లేదా వాట్సాప్ చేయండి"
          : "Call or WhatsApp us to order"}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">

        <a
          href="tel:7386064606"
          className="bg-blue-700 text-white px-5 py-2 rounded"
        >
          📞 {lang === "te" ? "కాల్ చేయండి" : "Call"}
        </a>

        <a
  href="https://wa.me/917386064606"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition"
>
  {/* WhatsApp SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="currentColor"
  >
    <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.893.754 5.614 2.06 7.98L0 32l7.843-2.052a15.94 15.94 0 0 0 8.157 2.252c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.226c-2.54 0-5.027-.682-7.2-1.975l-.514-.305-4.654 1.217 1.243-4.538-.334-.525A13.54 13.54 0 0 1 2.46 16.4C2.46 8.923 8.523 2.86 16 2.86c7.477 0 13.54 6.063 13.54 13.54 0 7.476-6.063 13.54-13.54 13.54zm7.437-10.158c-.406-.203-2.406-1.188-2.78-1.324-.374-.135-.647-.203-.92.203-.27.406-1.055 1.324-1.293 1.594-.237.27-.474.304-.88.102-.406-.203-1.712-.632-3.26-2.015-1.204-1.075-2.017-2.402-2.254-2.808-.237-.406-.025-.625.178-.827.182-.18.406-.474.609-.711.203-.237.27-.406.406-.677.135-.27.068-.507-.034-.711-.102-.203-.92-2.22-1.26-3.04-.334-.803-.674-.694-.92-.707l-.784-.014c-.27 0-.711.102-1.083.507s-1.423 1.39-1.423 3.39c0 2 1.457 3.93 1.66 4.2.203.27 2.87 4.384 6.96 6.15.974.42 1.732.67 2.324.857.976.31 1.864.267 2.566.162.783-.117 2.406-.983 2.744-1.934.338-.95.338-1.766.237-1.934-.102-.169-.372-.27-.778-.474z" />
  </svg>

  WhatsApp
</a>

      </div>

      <p className="mt-6 text-sm">
        📍 Veldurthi, Kurnool
      </p>

    </section>
  );
}

export default Contact;