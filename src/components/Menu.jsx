function Menu() {

  const menuItems = [
    { name: "చికెన్ కర్రీ", desc: "చికెన్ కర్రీ", price: 120 },
    { name: "చికెన్ రోస్ట్", desc: "చికెన్ రోస్ట్", price: 140 },
    { name: "చికెన్ బిర్యానీ", desc: "2 పీస్, రైస్, పెరుగు", price: 170 },
    { name: "చికెన్ రోస్ట్ బిర్యానీ", desc: "రోస్ట్ చికెన్, బిర్యానీ రైస్", price: 180 },
    { name: "ఫిష్ బిర్యానీ", desc: "ఫిష్ పీస్, బిర్యానీ రైస్", price: 180 },
    { name: "ఫిష్ రోస్ట్ బిర్యానీ", desc: "ఫిష్ రోస్ట్, బిర్యానీ రైస్", price: 190 },
    { name: "చికెన్ కుష్కా", desc: "కుష్కా రైస్, చికెన్ గ్రేవీ", price: 120 },
    { name: "ఎగ్ కుష్కా", desc: "కుష్కా రైస్, ఎగ్ కర్రీ", price: 90 },
    { name: "చపాతీ చికెన్", desc: "2 చపాతీ, చికెన్ కర్రీ", price: 100 },
    { name: "ఎగ్ రైస్", desc: "ఎగ్ ఫ్రైడ్ రైస్, కూర", price: 80 }
  ];

  const phoneNumber = "917386064606";

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 py-6 md:py-8">

      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-5 text-blue-900">
        మా మెనూ
      </h2>

      <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto divide-y border rounded-md">

        {menuItems.map((item, index) => {

          const message = encodeURIComponent(
            `Hi, I want to order ${item.name} (₹${item.price}). Please share your address.`
          );

          return (
            <a
              key={index}
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center px-3 sm:px-4 py-3 hover:bg-blue-50 transition cursor-pointer"
            >

              {/* LEFT */}
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                  {item.desc}
                </p>
              </div>

              {/* RIGHT */}
              <span className="font-bold text-blue-700 text-sm sm:text-base ml-2 shrink-0">
                ₹{item.price}
              </span>

            </a>
          );
        })}

      </div>

    </section>
  );
}

export default Menu;