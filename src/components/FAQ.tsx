import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <>
            <div className="flex justify-center text-6xl font-bold">
                <p>Frequently Asked Questions</p>
            </div>
            <div className="p-1 flex justify-center">
                <Accordion type="single" collapsible className="w-full max-w-3xl space-y-6 p-6 m-6">
                    <AccordionItem value="item-1" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full max-w-3xl space-y-6 p-6 m-6">
                    <AccordionItem value="item-1" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="p-2">
                        <AccordionTrigger className="text-white hover:text-gray-200 text-left font-normal">
                            Who can participate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-4">
                            Anyone can participate in our hackathon! Whether you're a beginner or an experienced developer,
                            students and professionals are all welcome to join and create amazing projects.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};

export default FAQ;