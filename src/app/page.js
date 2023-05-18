import Image from "next/image";
import defImg from "../img/user.png";
import {IoCalendar, IoImage, IoJournal} from "react-icons/io5";
import {FaVideo} from "react-icons/fa";
export default function Home() {
  return (
    <main className="">
      <div className="container w-8/12 m-auto mt-3">
        <div className="grid grid-cols-5 items-start">
          <div className="border border-red-100 bg-slate-500 w-full h-80" />
          <div className="m-auto w-9/12 col-span-3">
            <div className="post-add bg-white py-3 ">
              <div className="post-add-header  flex p-4">
                <Image src={defImg} className="rounded-full" />
                <div className="w-full border-solid border-2 h-10 rounded-full indent-4 py-1 hover:bg-slate-400 hover:cursor-pointer">
                  Ajouter une publication
                </div>
              </div>
              <div className="flex justify-around items-center ">
                <div className="flex items-center">
                  <IoImage size={30} className="text-green-500 mr-1" />
                  <span className="text-sm">Image</span>
                </div>
                <div className="flex items-center">
                  <FaVideo size={30} className="text-blue-500 mr-1" />
                  <span className="text-sm">Video</span>
                </div>
                <div className="flex items-center ">
                  <IoCalendar size={30} className="text-amber-800 mr-1" />
                  <span className="text-sm">Evenement</span>
                </div>
                <div className="flex items-center">
                  <IoJournal size={30} className="text-orange-700 mr-1" />
                  <span className="text-sm">Rédiger un article</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-red-100 bg-slate-500 w-full h-80" />
        </div>
      </div>
    </main>
  );
}
