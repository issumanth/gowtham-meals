import biryani from "../assets/menu/chicken-biriyani.jpg";
import roast from "../assets/menu/chicken-roast.jpg";
import fish from "../assets/menu/fish-biriyani.jpg";
import kushka from "../assets/menu/chicken-kushka.jpg";
import eggKushka from "../assets/menu/egg-kushka.jpg";
import chapathi from "../assets/menu/chepathi-chicken.jpg";
import eggRice from "../assets/menu/egg-rice.jpg";

function Menu({ lang }) {

  const phone = "917386064606";

  const menuItems = [
    {
      te: "చికెన్ బిర్యానీ",
      en: "Chicken Biryani",
      price: 170,
      img: biryani
    },
    {
      te: "చికెన్ రోస్ట్",
      en: "Chicken Roast",
      price: 140,
      img: roast
    },
    {
      te: "ఫిష్ బిర్యానీ",
      en: "Fish Biryani",
      price: 180,
      img: fish
    },
    {
      te: "చికెన్ కుష్కా",
      en: "Chicken Kushka",
      price: 120,
      img: kushka
    },
    {
      te: "ఎగ్ కుష్కా",
      en: "Egg Kushka",
      price: 90,
      img: eggKushka
    },
    {
      te: "చపాతీ చికెన్",
      en: "Chapathi Chicken",
      price: 100,
      img: chapathi
    },
    {
      te: "ఎగ్ రైస్",
      en: "Egg Rice",
      price: 80,
      img: eggRice
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 py-6 md:py-8">

      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-6 text-gray-900 drop-shadow-sm">
        {lang === "te" ? "మా మెనూ" : "Our Menu"}
      </h2>

      {/* MENU LIST */}
      <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto divide-y border rounded-lg overflow-hidden shadow-sm">

        {menuItems.map((item, i) => {
          const name = item[lang];

          const message = encodeURIComponent(
            `Hi, I want to order ${name} (₹${item.price}). Please share your address.`
          );

          return (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 hover:bg-blue-50 transition-all duration-200"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                alt={name}
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md shrink-0"
              />

              {/* TEXT */}
              <div className="flex-1 text-left min-w-0">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg truncate text-gray-800">
                  {name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  ₹{item.price}
                </p>
              </div>

              {/* ORDER BUTTON */}
              <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition"
              >
                {lang === "te" ? "ఆర్డర్" : "Order"}
              </a>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Menu;