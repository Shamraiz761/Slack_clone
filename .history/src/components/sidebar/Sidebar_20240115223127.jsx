import React, { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import db from "../../firebase";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [channels, setChannels] = useState([]);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="relative " style={{overflow:'hidden'}}>
      <aside
        id="sidebar-multi-level-sidebar"
        style={{minHeight:'100vh'}}
        className=" sticky top-full left-0   bg-[#45013b] w-66  "
        aria-label="Sidebar"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="ml-4">
            <h1 className="font-bold text-lg text-gray-100">
              Clever Programmer
            </h1>
            <h3 className="text-xs  text-white mt-1 ">
              <FiberManualRecordIcon
                className="text-green-600 mr-1"
                style={{ fontSize: "10px" }}
              />
              Muhammad Shamraiz
            </h3>
          </div>

          <AppRegistrationIcon
            className="text-white mr-3"
            style={{ fontSize: "35px" }}
          />
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
              >
                <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xs">Threads</span>
              </a>
            </li>
            <li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                >
                  <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-xs">
                    Mentions And Reactions
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                >
                  <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-xs">
                    Saved Items
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                >
                  <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-xs">
                    Channel Browser
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                >
                  <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-xs">
                    People & User Groups
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                >
                  <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-xs">Apps</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                >
                  <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap text-xs">
                    File Browser
                  </span>
                </a>
              </li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group hover:bg-[#57014a] dark:text-white "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown}
              >
                <svg
                  className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-xs">
                  Channels
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {open && (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
                    >
                      <AddIcon className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" />
                      <span className="flex-1 ms-3 whitespace-nowrap text-xs">
                        Add Channel
                      </span>
                    </a>
                  </li>
                  {channels.map((channel) => (
                    <li>
                      <a
                        href="#"
                        id={channel.id}
                        className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-[#57014a] dark:text-white "
                      >
                        # {channel.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-xs">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-[#57014a]  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-xs">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

  
    </div>
  );
}

export default Sidebar;
