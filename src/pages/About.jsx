import Title from "../components/Title";
import aboutImage from "../assets/images/about_img.png";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl  text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={aboutImage}
          alt="aboutImage"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Integrity, innovation, and customer satisfaction are at the heart of
            everything we do. We believe in building a community of happy
            customers and strive to make a positive impact by sourcing
            responsibly and supporting sustainable practices.{" "}
          </p>
          <p>
            . Founded with a mission to bring convenience and variety to your
            doorstep, we take pride in offering a diverse range of [mention
            product categories, e.g., fashion, electronics, home essentials,
            etc.].
          </p>
          <p>
            Our team is dedicated to ensuring that every customer enjoys a
            seamless, secure, and satisfying online shopping journey.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Quality assurance is a critical aspect of an e-commerce site,
            ensuring that every aspect of the platform delivers a seamless and
            reliable experience to users. It involves thorough testing of
            website functionality, such as smooth navigation, secure payment
            gateways, and fast loading times, to eliminate technical glitches
            and errors. Quality assurance also extends to the accuracy of
            product information, image quality, and order fulfillment processes
            to maintain customer trust. By regularly monitoring performance and
            addressing issues proactively, e-commerce sites can provide a
            consistent, user-friendly experience that encourages repeat visits,
            enhances customer satisfaction, and builds a strong reputation in
            the competitive online marketplace.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Convenience is one of the defining features of an e-commerce site,
            making it an essential part of modern shopping. With just a few
            clicks, customers can browse through a vast selection of products,
            compare prices, read reviews, and make purchases—all from the
            comfort of their homes. Unlike traditional shopping, e-commerce
            eliminates the need to travel, wait in long lines, or adhere to
            store hours, offering 24/7 accessibility. Additionally, features
            like personalized recommendations, quick search filters, and
            seamless payment options further enhance the shopping experience.
            This level of convenience has transformed how people shop, saving
            time and effort while providing greater flexibility and
            accessibility to consumers worldwide.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Exceptional customer service is the backbone of a successful
            e-commerce site, ensuring customers feel valued and supported
            throughout their shopping journey. It involves prompt and friendly
            assistance, whether through live chat, email, or phone support, to
            address inquiries, resolve issues, and provide personalized
            recommendations. Exceptional service extends to transparent
            communication about orders, hassle-free returns, and proactive
            updates on shipping statuses. By prioritizing customer satisfaction,
            an e-commerce site can build trust, foster loyalty, and create a
            positive shopping experience that keeps customers coming back. In a
            competitive market, going the extra mile to exceed customer
            expectations sets an e-commerce platform apart from the rest.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
