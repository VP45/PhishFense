export const metadata = {
    title: "Dashboard",
    description: "Page description",
};

import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
export default function Home() {
    return (
        <>
            <Features />
            <FeaturesBlocks />
        </>
    );
}
