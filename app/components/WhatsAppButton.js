import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppButton() {
  return (
    <div className="z-50 leading-[18px] font-[400] text-[15px] fixed bottom-[10%] right-4  text-[#000] text-center flex items-center  justify-center gap-[19px] underline cursor-pointer">
    {/* <div className="z-50 md:hidden text-base fixed bottom-[10%] right-4 font-bold text-primary text-center flex-col items-center  justify-center"> */}
      

      <div className="flex justify-center">
        <Link
          href="https://wa.me/2349055645316"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="p-2 text-5xl text-white rounded-full shadow-lg bg-[#0EA01D]" />
        </Link>
      </div>
      <div className="flex flex-col items-start justify-center text-container">
      <div>Need help?</div>
      <div>Chat with Us</div>
      </div>
      
    </div>
  );
}
/*
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/your-phone-number"
      className="fixed p-4 text-white transition duration-300 bg-green-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

*/
