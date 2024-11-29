// import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Box,
//   AccordionIcon,
//   Text,
// } from "@chakra-ui/react";

// const faqs = [
//   {
//     question: "How does Skyscanner work?",
//     answer:
//       "Skyscanner is a travel search engine that helps you find and compare flights from different airlines and travel agencies.",
//   },
//   {
//     question: "How can I find the cheapest flight using Skyscanner?",
//     answer:
//       "Use our flexible search options to compare prices across different dates and destinations. Set up price alerts to track fare changes.",
//   },
//   {
//     question: "What about car hire?",
//     answer:
//       "Skyscanner offers car rental comparisons from major providers. Search and compare prices to find the best deal for your trip.",
//   },
// ];

// export default function FAQ() {
//   return (
//     <Box w="full" maxW="xl" mx="auto" px={4} py={8}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         Customer Support FAQs
//       </Text>
//       <Accordion allowToggle>
//         {faqs.map((faq, index) => (
//           <AccordionItem key={index} border="none">
//             <h2>
//               <AccordionButton _expanded={{ bg: "blue.100", color: "blue.800" }}>
//                 <Box flex="1" textAlign="left" fontWeight="medium">
//                   {faq.question}
//                 </Box>
//                 <AccordionIcon />
//               </AccordionButton>
//             </h2>
//             <AccordionPanel pb={4}>
//               <Text color="gray.600">{faq.answer}</Text>
//             </AccordionPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </Box>
//   );
// }
