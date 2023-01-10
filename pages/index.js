import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Map, NavigationControl } from "react-map-gl";
import Modal from "react-modal";

export default function Home() {
  let subtitle;
  const [showModal, setModal] = useState(false);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "90%",
      width: "300px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const umyu = "/umyu.jpg";
  return (
    <>
      <Head>
        <title>GIS</title>
        <meta name="description" content=" Geographical Information System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center font-semibold text-xl mb-5">Menu</div>
        <div
          style={{
            width: "100%",
            position: "relative",
            height: "200px",
            backgroundColor: "blue",
          }}
        >
          <Image src={umyu} layout="fill" />
        </div>
        {/* https://en.wikipedia.org/wiki/Umaru_Musa_Yar%27adua_University */}
        <Link href={"/account"} style={{ backgroundColor: "blue" }}>
          <div className="bg-green-500 px-3 text-center py-1 text-md rounded text-white hover:bg-green-600 my-2">
            Create Account
          </div>
        </Link>

        <a
          className=" ml-2 text-md bg-gray-500 px-3 py-2 rounded text-white hover:bg-gray-600 my-2"
          href="https://en.wikipedia.org/wiki/Umaru_Musa_Yar%27adua_University"
        >
          {" "}
          School Info{" "}
        </a>
        <button className="mx-2 bg-gray-300 px-3 py-1 text-md rounded text-black hover:bg-gray-400 my-2">
          Routes
        </button>
        <button className=" mx-2 bg-purple-300 px-3 py-1 text-md rounded text-black hover:bg-purple-400 my-2">
          Directions
        </button>
        <button className=" mx-2 bg-yellow-300 px-3 py-1 text-md rounded text-black hover:bg-yellow-400 my-2">
          Places
        </button>

        <div>
          <button
            onClick={() => setModal(false)}
            className="mt-2 bg-red-300 px-4 py-1 rounded hover:bg-red-100 hover:text-red-500"
          >
            Close Modal
          </button>
        </div>
      </Modal>
      <div className="bg-gray-50 w-full h-screen relative overflow-hidden">
        <header className="bg-blue-500 px-3 py-3 flex flex-row items-center justify-between">
          <h4 className="text-white text-xl">GIS</h4>
          <button
            onClick={() => setModal(!showModal)}
            className="bg-white px-2 py-2 hover:bg-blue-100"
          >
            <GrMenu color="white" size={20} />
          </button>
        </header>
        <Map
          mapboxAccessToken="pk.eyJ1IjoiaGFtemFzaGFkZWV6IiwiYSI6ImNsYmc0emFvZDAwNmczd21vNmE0NHJwdW4ifQ.Gh2H0Dk8CyXkZQM0tOGPZw"
          initialViewState={{
            longitude: 7.5734783,
            latitude: 12.8858107,
            zoom: 15,
          }}
          attributionControl={true}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <NavigationControl position="top-right" />
        </Map>
      </div>
    </>
  );
}
