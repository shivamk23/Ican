import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa"
import { BiStar } from "react-icons/bi"
import { AiFillLock } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
export const MenuNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')

  return (
    <>

      <Button onClick={onOpen}>
      =
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Box display={"flex"} gap="3vw">
              <Box><Image w="10vw" src="navicon.png" /></Box>
              <Box>
                <Box ><Text fontSize={"4vw"} fontWeight={"bold"}>ICAN</Text></Box>
                <Box><Text fontSize={"3vw"} fontWeight={"700"}>icanenergydrink@gmail.com</Text></Box>
              </Box>
            </Box>

          </DrawerHeader>
          <DrawerBody>
            <Box display={"flex"} border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
              {/* <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} >
                <FaHandsHelping style={{ marginTop: "-15px" }} size="4vw" color="orangered" /></Box> */}
              <Box><Link style={{color:"#fff"}} onClick={onClose} to="/home"><Text >HOME</Text></Link></Box>
            </Box>



            <Box display={"flex"} border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
              {/* <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <CgProfile style={{ marginTop: "-15px" }} size="4vw" color="orangered" /></Box> */}
              <Box><Link style={{color:"#fff"}} onClick={onClose} to="/about"><Text>About Us</Text></Link></Box>
            </Box>

            <Box display={"flex"} border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
              {/* <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <BiStar style={{ marginTop: "-15px" }} size="4vw" color="orangered" /></Box> */}
              <Box><Link style={{color:"#fff"}} onClick={onClose} to="/patner"><Text >Patner With Us</Text></Link></Box>
            </Box>

            <Box display={"flex"} border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
              {/* <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <AiFillLock style={{ marginTop: "-15px" }} size="4vw" color="orangered" /></Box> */}
              <Box><Link style={{color:"#fff"}} onClick={onClose} to="/FAQ"><Text >FAQ</Text></Link></Box>
            </Box>

            <Box display={"flex"} border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
              {/* <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <BsTelephoneFill style={{ marginTop: "-15px" }} size="4vw" color="orangered" /></Box> */}
              <Box><Link style={{color:"#fff"}} onClick={onClose} to="contact"><Text >CONTACT US</Text></Link></Box>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}