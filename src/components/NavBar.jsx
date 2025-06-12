import React from "react";

const NavBar = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Favorites", icon: "person-outline", dis: "translate-x-16" },
    { name: "Cart", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];

  return (
    <div className='w-full h-screen bg-gray-950 flex justify-center items-center'>
      <div className='bg-white max-h-[4.4rem] px-6 rounded-t-xl'>
        <ul className='flex relative'>
          {Menus.map((menu, i) => (
            <li
              key={i}
              className='w-16'
            >
              <a className='flex flex-col text-center'>
                <span className='text-xl cursor-pointer'>
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
