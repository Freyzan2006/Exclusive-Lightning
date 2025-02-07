import AdvertisingSection from "@components/layout/sections/AdvertisingSection"
import BestSellingSection from "@components/layout/sections/BestSellingSection"
import CategorySection from "@components/layout/sections/CategorySection"
import FlashSalesSection from "@components/layout/sections/FlashSalesSection"
import NewArrivalSection from "@components/layout/sections/NewArrivalSection"
import OutProductsSection from "@components/layout/sections/OutProductsSection"
import ServicesSection from "@components/layout/sections/ServicesSection"

import Container from "@componentsLayout/Container"


const HomePage: React.FC = () => {
    return (
        <main className="mt-5 mb-5">
            <Container className = "flex flex-col gap-10">
                <FlashSalesSection />
                <CategorySection />
                <BestSellingSection />
                <AdvertisingSection />
                <OutProductsSection />
                <NewArrivalSection />
                <ServicesSection />


            </Container>
        </main>
    )
}

export default HomePage