
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

const Footer1: React.FC = () => {
  return (
    <footer className=" py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">
          
          {/* Left Side - Social */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Instagram className="text-red-500" size={20} />
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-sm text-gray-600">
                  helloaustralia.events
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Facebook className="text-red-500" size={20} />
              <div>
                <p className="font-medium">Facebook</p>
                <p className="text-sm text-gray-600">
                  helloaustralia.events
                </p>
              </div>
            </div>
          </div>

          {/* Center Logo + Tagline */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600 tracking-wide">
              NIRAVA
            </h2>
            <p className="text-sm font-medium mt-1">
              Wedding Celebrant
            </p>
            <p className="text-xs italic text-gray-500 mb-4">
              we make your wedding easy
            </p>

            <p className="text-gray-700 max-w-sm mx-auto text-sm leading-relaxed">
              Crafting unforgettable celebrations that tell your story,
              with artistry, precision, and heart.
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Phone className="text-red-500" size={20} />
              <div className="text-center md:text-right">
                <p className="font-medium">Telephone</p>
                <p className="text-sm text-gray-600">
                  +44 (0) 2038 66 55 88
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <Mail className="text-red-500" size={20} />
              <div className="text-center md:text-right">
                <p className="font-medium">E-Mail</p>
                <p className="text-sm text-gray-600">
                  hellonepal1212@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-center text-sm text-gray-500">
          © 2025 Nirava Wedding. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer1;