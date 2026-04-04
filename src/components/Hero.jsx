function Hero({ lang }) {

  const content = {
    te: {
      title: "గౌతమ్ మీల్స్",
      tagline: "రుచి • నమ్మకం • మన ఇంటి వంట",
      desc: `మన ఇంట్లో చేసుకునేలా సాదాగా, నమ్మకంగా పెడతాం.
ఒకసారి తింటే మళ్ళీ మళ్ళీ వస్తారు!

పెళ్లిళ్లు, ఫంక్షన్స్, ఏ ఈవెంట్ అయినా క్యాటరింగ్ తీసుకుంటాం —
మీ ఫంక్షన్ భోజనం మా బాధ్యత!`,
      call: "📞 కాల్ చేయండి",
      location: "📍 లొకేషన్ చూడండి"
    },
    en: {
      title: "Gowtham Meals",
      tagline: "Taste • Trust • Home-style Food",
      desc: `Simple food like home, served with trust.
Once you taste, you will come again!

We also provide catering for all events —
Your function food is our responsibility!`,
      call: "📞 Call Now",
      location: "📍 View Location"
    }
  };

  const t = content[lang];

  return (
    <section className="bg-blue-50 px-4 py-10 text-center">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        {t.title}
      </h1>

      <p className="mt-2">{t.tagline}</p>

      <p className="mt-4 whitespace-pre-line max-w-xl mx-auto">
        {t.desc}
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

        <a
          href="tel:7386064606"
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          {t.call}
        </a>

        <a
          href="https://maps.google.com/?q=Veldurthi,Kurnool"
          target="_blank"
          className="border border-blue-700 text-blue-700 px-4 py-2 rounded"
        >
          {t.location}
        </a>

      </div>

    </section>
  );
}

export default Hero;