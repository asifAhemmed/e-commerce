import exchangeIcon from "../assets/icons/exchange_icon.png";
import qualityIcon from "../assets/icons/quality_icon.png";
import supportIcon from "../assets/icons/support_icon.png";

const OurPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm, md:text-base text-gray-700">
            <div>
                <img src={exchangeIcon} className="w-12 m-auto mb-5" alt="exchangeIcon" />
                <p className="font-semibold">Easy Exchange Policy</p>
                <p className="text-gray-400">We offer hassle free exchange policy</p>
            </div>
            <div>
                <img src={qualityIcon} className="w-12 m-auto mb-5" alt="qualityIcon" />
                <p className="font-semibold">7 Days Return Policy</p>
                <p className="text-gray-400">We provide 7 days return policy</p>
            </div>
            <div>
                <img src={supportIcon} className="w-12 m-auto mb-5" alt="supportIcon" />
                <p className="font-semibold">Best Customer Support</p>
                <p className="text-gray-400">We provide 24/7 customer support</p>
            </div>
        </div>
    );
};

export default OurPolicy;