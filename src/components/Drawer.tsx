import React from 'react';
import {
	Box,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerContent,
	useDisclosure,
	Icon,
	Text,
	Heading,
} from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';
const SizeExample = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const check = !isOpen ? FiMenu : FiX;
	const menu = [
		'brand philosophy',
		'product technology',
		'all products',
		'intibiome wellness',
		'intibiome active',
		'intibiome active',
		'article 1',
		'article 2',
		'article 3',
		'faq',
		'contact us',
	];

	return (
		<Box display={{ base: 'block', md: 'none' }}>
			<Icon as={check} onClick={onOpen} />
			<Drawer isOpen={isOpen} placement="left" onClose={onClose} size="lg">
				<DrawerContent bgColor="#389CD6" mt="70px">
					<DrawerBody m="55px 40px">
						{menu.map((el) => (
							<Heading mb="40px" color="white" fontSize="16px">
								{el}
							</Heading>
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default SizeExample;
