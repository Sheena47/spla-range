import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Image,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Main() {
  const [value, setValue] = useState(50);
  const [value2, setValue2] = useState(50);

  const [weapon , setWeapon] = useState(<Image src="weapons/60px-S3_Weapon_Main_Sloshing_Machine_Flat.png"  w='32px'/>)
  const [weapon2 , setWeapon2] = useState(<Image src="weapons/60px-S3_Weapon_Main_Sloshing_Machine_Flat.png"  w='32px'/>)

  function handleChange(newValue , newWeapon) {
    setValue(newValue);
    setWeapon(newWeapon);
  }

  function handleChange2(newValue2 , newWeapon2) {
    setValue2(newValue2);
    setWeapon2(newWeapon2);
  }

  function MenuItems({ weapon, value }) {
    return (
      <MenuItem onClick={() => handleChange(value , weapon)}>
        <Box d="flex" alignItems="center" justifyContent="space-between" w='100%'>
          {weapon}
        </Box>
      </MenuItem>
    );
  }

  function MenuItems2({ weapon2, value2 }) {
    return (
      <MenuItem onClick={() => handleChange2(value2 , weapon2)}>
        <Box d="flex" alignItems="center" justifyContent="space-between" w='100%'>
          {weapon2}
        </Box>
      </MenuItem>
    );
  }

  return (
    <Box h='100vh'>
      <Heading position='fixed' bg='white'>spla range checker</Heading>
      <Flex h='100vh' aline='center'>
      <Flex direction='column' justify='space-between' align='center' maxH='67vh' maxW='500px' m='auto'>
        <Box w='100vw'display='flex' justifyContent='space-around' maxW='500px'>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
              Select a weapon
            </MenuButton>
            <MenuList>
              <MenuItems value={25} weapon={<Image src="weapons/60px-S3_Weapon_Main_Splash-o-matic_Flat.png" w='32px' />}></MenuItems>
              <MenuItems value={50} weapon={<Image src="weapons/60px-S3_Weapon_Main_Sloshing_Machine_Flat.png" w='32px'/>}></MenuItems>
              <MenuItems value={100} weapon={<Image src="weapons/60px-S3_Weapon_Main_E-liter_4K_Flat.png" w='32px'/>}></MenuItems>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
              Select a weapon
            </MenuButton>
            <MenuList>
              <MenuItems2 value2={25} weapon2={<Image src="weapons/60px-S3_Weapon_Main_Splash-o-matic_Flat.png" w='32px'/>}></MenuItems2>
              <MenuItems2 value2={50} weapon2={<Image src="weapons/60px-S3_Weapon_Main_Sloshing_Machine_Flat.png" w='32px'/>}></MenuItems2>
              <MenuItems2 value2={100} weapon2={<Image src="weapons/60px-S3_Weapon_Main_E-liter_4K_Flat.png" w='32px'/>}></MenuItems2>
            </MenuList>
          </Menu>
        </Box>
        <Box w='100vw' maxW='500px' h='100vw' maxH='500px' transform='rotate(-90deg)' display='flex' flexDirection='column' justifyContent='space-around' bg='white'>
          <Progress value={value} w='100%' bg='white' />
          <Progress value={value2} w='100%' colorScheme='pink' bg='white' />
        </Box>
        <HStack w='100%'>
          <Flex justify='space-around' w='100%'>
            <Text>{weapon}</Text>
            <Text>{weapon2}</Text>
          </Flex>
        </HStack>
      </Flex>
      </Flex>
    </Box>
  );
}