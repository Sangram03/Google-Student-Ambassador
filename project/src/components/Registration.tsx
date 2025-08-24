import { QrCode, PlayCircle, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import * as Images from "../assets/asset";

const ReferralAccess = () => {
  return (
    <section
      id="referral"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Unlock Exclusive Access 🚀
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scan the QR code, watch the walkthrough video, and unlock{" "}
            <span className="font-semibold text-blue-600">
              Google Gemini Pro features
            </span>{" "}
            with my referral.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* QR Scanner */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <QrCode className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Scan to Unlock
            </h3>
            <p className="text-gray-600 mb-6">
              Scan this QR code with your phone to access exclusive referral offers 
              and join our AI community instantly.
            </p>
            <img
              src={Images.Scanner}
              alt="Referral QR"
              className="mx-auto max-w-[220px] w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Video Walkthrough */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-md">
              <PlayCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Watch How It Works
            </h3>
            <p className="text-gray-600 mb-6">
              See how to get started with the referral system and unlock your AI 
              journey with Gemini Pro.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/0BqEQfU2ueI"
                title="Unlock Premium AI Features: Video, Images & Priority Access!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Gemini Pro Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-md">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Google Gemini Pro Features 🔥
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Access to our most capable models and premium features",
                "Create high-quality videos with Veo models",
                "More access to Gemini features, including Deep Research",
                "5x more Audio Overviews and sources in NotebookLM",
                "Gemini in Gmail, Docs and more",
                "2 TB of total storage and extra premium benefits",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Gemini Pro is Better than Free ChatGPT 🤔
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Free ChatGPT */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-200 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-red-600 mb-4 text-center">
                Free ChatGPT (Limitations)
              </h4>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Limited access to advanced models",
                  "No video generation support",
                  "Restricted in-depth research",
                  "Lower priority in server response times",
                  "No integration with Gmail, Docs, or Drive",
                  "Minimal storage and benefits",
                ].map((limitation, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gemini Pro */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-green-700 mb-4 text-center">
                Google Gemini Pro (Advantages)
              </h4>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Latest multimodal AI with advanced reasoning",
                  "Create videos, images, and deep research",
                  "Priority access with faster responses",
                  "Integrated with Gmail, Docs, and Drive",
                  "Extra 2TB storage & premium Google perks",
                  "Ideal for students, creators, and professionals",
                ].map((advantage, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReferralAccess;
