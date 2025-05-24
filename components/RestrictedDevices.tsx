import Image from "next/image";

const RestrictedDevices = () => {
  return (
    <div className="h-[100vh] bg-white items-center flex justify-center px-5 lg:px-0">
      <div className="w-[615px] text-center flex-col items-center justify-center gap-[100px]">
        <div className="mb-8 md:mb-[56px] flex flex-row justify-center">
          <div className="max-w-[312px] w-full h-[160px] relative flex justify-center items-center">
            <Image
              src="/404.png"
              alt="404"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <h3 className="text-4xl md:text-[56px] leading-[64px] text-[#1A1C16]">
            This website is currently optimized for mobile devices.
          </h3>
        </div>
        <div className="flex flex-col gap-6 mt-3">
          <div className="text-center">
            <p className="text-base leading-6 tracking-wider font-sans">
              The desktop version will be available soon. Thank you for your patience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictedDevices;
