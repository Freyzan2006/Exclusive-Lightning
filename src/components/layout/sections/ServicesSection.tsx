const ServicesSection: React.FC = () => {
  return (
    <section className="w-full  flex flex-wrap items-center justify-center ">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[350px] w-full">
        <img src="ServiceImg/Services.png" alt="Services" />
        <h3 className="text-black text-2xl">Free And Fast Delivery</h3>
        <p className="text-black">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 max-w-[350px] w-full">
        <img src="ServiceImg/Services2.png" alt="Services" />
        <h3 className="text-black text-2xl">24/7 CUSTOMER SERVICE</h3>
        <p className="text-black">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 max-w-[350px] w-full">
        <img src="ServiceImg/Services3.png" alt="Services" />
        <h3 className="text-black text-2xl">MONEY BACK GUARANTEE</h3>
        <p className="text-black">We return money within 30 days</p>
      </div>
    </section>
  );
};

export default ServicesSection;
