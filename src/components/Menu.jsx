function Menu({ lang }) {

  const phone = "917386064606";

  const menuItems = [
    {
      te: "చికెన్ బిర్యానీ",
      en: "Chicken Biryani",
      price: 170
    },
    {
      te: "చికెన్ రోస్ట్",
      en: "Chicken Roast",
      price: 140
    },
    {
      te: "ఫిష్ బిర్యానీ",
      en: "Fish Biryani",
      price: 180
    },
    {
      te: "చికెన్ కుష్కా",
      en: "Chicken Kushka",
      price: 120
    },
    {
      te: "ఎగ్ కుష్కా",
      en: "Egg Kushka",
      price: 90
    }
  ];

  return (
    <section className="bg-white px-4 py-8">

      <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-6 text-gray-900 drop-shadow-sm">
        {lang === "te" ? "మా మెనూ" : "Our Menu"}
      </h2>

      <div className="max-w-xl mx-auto divide-y border rounded-md">

        {menuItems.map((item, i) => {
          const name = item[lang];

          const message = encodeURIComponent(
            `Hi, I want to order ${name} (₹${item.price}). Please share your address.`
          );

          return (
            <a
              key={i}
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              className="flex justify-between px-4 py-3 hover:bg-blue-50"
            >
              <span>{name}</span>
              <span>₹{item.price}</span>
            </a>
          );
        })}

      </div>

    </section>
  );
}

export default Menu;