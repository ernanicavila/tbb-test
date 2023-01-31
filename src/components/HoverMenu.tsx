import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
	Text,
	Flex,
	Icon,
	useDisclosure,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const HoverMenu = () => {
	const {
		isOpen: isOpenAbout,
		onOpen: onOpenAbout,
		onClose: onCloseAbout,
	} = useDisclosure();
	const {
		isOpen: isOpenProducts,
		onOpen: onOpenProducts,
		onClose: onCloseProducts,
	} = useDisclosure();
	const {
		isOpen: isOpenHealth,
		onOpen: onOpenHealth,
		onClose: onCloseHealth,
	} = useDisclosure();

	return (
		<>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				bgColor="#389CD6"
				w="100%"
				h="49px"
				justifyContent="center"
				alignItems="center"
			>
				<Flex w="464px" justifyContent="space-between">
					<Menu isOpen={isOpenAbout}>
						<MenuButton onMouseEnter={onOpenAbout} onMouseLeave={onCloseAbout}>
							<Flex color="white" display="flex" alignItems="center">
								about us <Icon as={FiChevronDown} />
							</Flex>
						</MenuButton>
						<MenuList
							w="1920px"
							mr="600px"
							display="flex"
							onMouseEnter={onOpenAbout}
							onMouseLeave={onCloseAbout}
							backgroundColor="#9D8E8E"
						>
							<Flex w="450px" justifyContent="space-around" ml="414px">
								<Text color="white">brand philosophy</Text>
								<Text color="white">product technology</Text>
							</Flex>
						</MenuList>
					</Menu>

					<Menu isOpen={isOpenProducts}>
						<MenuButton
							onMouseEnter={onOpenProducts}
							onMouseLeave={onCloseProducts}
						>
							<Flex color="white" display="flex" alignItems="center">
								our products <Icon as={FiChevronDown} />
							</Flex>
						</MenuButton>
						<MenuList
							w="1920px"
							mr="600px"
							display="flex"
							onMouseEnter={onOpenProducts}
							onMouseLeave={onCloseProducts}
							backgroundColor="#9D8E8E"
						>
							<Flex w="650px" justifyContent="space-around" ml="414px">
								<Text color="white">all products</Text>
								<Text color="white">intibiome wellness</Text>
								<Text color="white">intibiome active</Text>
								<Text color="white">intibiome agecare</Text>
							</Flex>
						</MenuList>
					</Menu>

					<Menu isOpen={isOpenHealth}>
						<MenuButton
							onMouseEnter={onOpenHealth}
							onMouseLeave={onCloseHealth}
						>
							<Flex color="white" display="flex" alignItems="center">
								intimate health <Icon as={FiChevronDown} />
							</Flex>
						</MenuButton>
						<MenuList
							w="1920px"
							mr="600px"
							display="flex"
							onMouseEnter={onOpenHealth}
							onMouseLeave={onCloseHealth}
							backgroundColor="#9D8E8E"
						>
							<Flex w="450px" justifyContent="space-around" ml="414px">
								<Text color="white">article 1</Text>
								<Text color="white">article 2</Text>
								<Text color="white">article 3</Text>
								<Text color="white">faq</Text>
							</Flex>
						</MenuList>
					</Menu>

					<Text color="white">contact us</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default HoverMenu;
