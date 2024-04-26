// // import { extendTheme, Button, ChakraBaseProvider, Center, Flex, Link, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// // Assuming extendBaseTheme and theme are set up correctly
// const theme = extendTheme({
//     components: {
//         Button,
//     },
// });

// export const TsaNavbar = () => {
//     return (
//         <ChakraBaseProvider theme={theme}>
//             <Flex width={`100%`} justifyContent={`space-between`} alignItems={`center`} height={`5rem`} paddingInline={{ base: 4, xl: 0 }}>
//                 <Center gap={4}>
//                     <Link href={`/seller`} role={"link"}>
//                         <Image
//                             width={`7rem`}
//                             alt='logo'
//                             src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-black.png`}
//                         />
//                     </Link>
//                 </Center>
//                 <UnorderedList listStyleType={`none`} display={`flex`} gap={5}>
//                     <ListItem fontWeight={600}>About Us</ListItem>
//                     {/* course menu */}
//                     <ListItem fontWeight={600}>FAQs</ListItem>
//                     <ListItem fontWeight={600}>Contact Us</ListItem>
//                 </UnorderedList>
//                 {/* Auth Buttons */}
//                 {/* <Flex gap={5}>
//                     <TsaButton children={`Login`} />
//                     <TsaButton children={`Sign up`} />
//                 </Flex> */}
//             </Flex>
//         </ChakraBaseProvider>
//     );
// };

// // export const links = [
// //     {
// //         id: 1,
// //         name: `About Us`,
// //         path: `/about-us`,
// //         type: `link`,
// //     },
// //     {
// //         id: 2,
// //         name: `Courses`,
// //         path: ``,
// //         type: `dropdown`,
// //         subLinks: [
// //             { id: 1, name: `All`, path: `/explore` },
// //             { id: 2, name: `3D`, path: `/explore/3d` },
// //             { id: 3, name: `Audio`, path: `/explore/audio` },
// //             { id: 4, name: `Business/Finance`, path: `/explore/finance` },
// //             { id: 5, name: `Comics`, path: `/explore/comics` },
// //             { id: 6, name: `Design`, path: `/explore/design` },
// //             { id: 7, name: `Drawing/Painting`, path: `/explore/art` },
// //             { id: 8, name: `Education`, path: `/explore/education` },
// //         ],
// //     },
// //     {
// //         id: 3,
// //         name: `FAQ`,
// //         path: `/faq`,
// //         type: `link`,
// //     },
// //     {
// //         id: 3,
// //         name: `Contact Us`,
// //         path: `/contact-us`,
// //         type: `link`,
// //     },
// // ];

export const TsaNavbar = () => {
  return <div>index</div>;
};
