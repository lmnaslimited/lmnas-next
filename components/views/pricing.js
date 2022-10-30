import SectionContainer from "../sectionContainer";
import SectionHeader from "../sectionHeader";
import Example from "../tabExample";
import TabSection from "../tabSection";

export default function Pricing({pricingData}) {
    return (
        <SectionContainer id={'pricing'}>
            <SectionHeader header={'Our Pricing'} titleBegin={'Transparent'} titleEnd={'pricing. Pay as you grow.'}/>
            <Example pricingData={pricingData}/>
        </SectionContainer>
    )
}