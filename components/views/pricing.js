import SectionContainer from "../sectionContainer";
import SectionHeader from "../sectionHeader";
import Example from "../tabExample";
import TabSection from "../tabSection";

export default function Pricing() {
    return (
        <SectionContainer>
            <SectionHeader header={'Our Pricing'} titleBegin={'Transparent'} titleEnd={'pricing. Pay as you grow.'}/>
            <Example/>
        </SectionContainer>
    )
}