import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Text, Heading, Box, Flex, Image, Icon } from '@chakra-ui/react';
import HoverMenu from './HoverMenu';
import Drawer from './Drawer';
import Carousel from './Carousel';

const Landingpage = () => {
	const carousel2 = [
		{
			img: '/images/1a.png',
			subtext: 'intibiome wellness daily intimate wash',
			bottom: 'wellness',
			color: '#389CD6',
		},
		{
			img: '/images/1b.png',
			subtext: 'intibiome active extra protection intimate wash',
			bottom: 'active',
			color: '#309D5F',
		},
		{
			img: '/images/1c.png',
			subtext: 'intibiome agecare dryness relief intimate wash',
			bottom: 'agecare',
			color: '#EE6381',
		},
	];
	return (
		<Box border="1px solid black">
			<Box>
				<Flex
					p={{ base: '25px 30px', md: 'none' }}
					justifyContent={{ base: 'space-between', md: 'center' }}
					h={{ base: '70px', md: '80px' }}
					w="100%"
					alignItems="center"
				>
					<Drawer />
					<Image
						alignSelf="center"
						mr={{ base: '5px', md: '420px' }}
						w={{ base: '143px', md: '195px' }}
						h={{ base: '58px', md: '79px' }}
						src="/images/headerLogo.png"
					/>
					<Icon
						mr={{ base: '5px', md: '-420px' }}
						w="24px"
						h="24px"
						as={FiSearch}
					/>
				</Flex>
				<HoverMenu />
				<Image
					display={{ base: 'none', md: 'block' }}
					mx="auto"
					src="/images/banner.png"
				/>
				<Image
					display={{ base: 'block', md: 'none' }}
					mx="auto"
					src="/images/banner2.png"
				/>
			</Box>

			<Box
				p="8px"
				mt={{ base: '40px', md: '80px' }}
				w={{ base: '392px', md: '550px' }}
				mx="auto"
			>
				<Heading
					fontSize={{ base: '31px', md: '39px' }}
					textAlign="center"
					color="#389CD6"
				>
					we're here to help
				</Heading>
				<Text
					fontSize={{ base: '16px', md: '20px' }}
					mt="40px"
					textAlign="center"
				>
					When it comes to caring for our most intimate areas, we’ve lost our
					connection.
				</Text>
				<Text
					fontSize={{ base: '16px', md: '20px' }}
					mb="16px"
					textAlign="center"
				>
					Embarrassed, unwilling, or unable to communicate with others, we’re
					needlessly neglecting the parts of our bodies that need it most.
				</Text>
				<Text fontSize={{ base: '16px', md: '20px' }} textAlign="center">
					We’re here to help. Providing you with the expertise, knowledge and
					products you need to feel confident in your personal care.
				</Text>
			</Box>

			<Image mx="auto" src="/images/icons.png" />

			<Box
				p="8px"
				mt={{ base: '40px', md: '80px' }}
				w={{ base: '392px', md: '550px' }}
				mx="auto"
			>
				<Heading
					fontSize={{ base: '31px', md: '39px' }}
					textAlign="center"
					color="#389CD6"
				>
					whatever your age. whatever your lifestyle. whatever your interests.
				</Heading>
				<Text mt="40px" mb="16px" textAlign="center">
					Co-created with gynaecologists, our revolutionary products have been
					expertly developed to support your intimate microbiome and pH balance,
					and strengthen overall natural health.
				</Text>
				<Text textAlign="center">
					As the experts in intimate hygiene, we want to bring discussion about
					intimate wellness care out of the dark and demystify the taboos that
					surround it.
				</Text>
			</Box>
			<Heading textAlign="center" m="120px 80px" color="#389CD6">
				our products
			</Heading>
			<Box display={{ base: 'none', md: 'block' }}>
				<Flex justifyContent="center">
					{carousel2.map((el: any, index) => (
						<div key={index} className="item">
							<Box w="356px" rounded="md" boxShadow="lg">
								<img className="innerImg" src={el.img} />
								<Box>
									<Text fontSize="20px" m="32px 24px">
										{el.subtext}
									</Text>
									<Flex
										mx="auto"
										justifyContent="center"
										alignItems="center"
										roundedBottom="md"
										w="356px"
										h="75px"
										bgColor={el.color}
									>
										<Heading color="white" fontSize="25px">
											{el.bottom}
										</Heading>
									</Flex>
								</Box>
							</Box>
						</div>
					))}
				</Flex>
			</Box>
			<Box display={{ base: 'block', md: 'none' }}>
				<Carousel images={carousel2} />
			</Box>
			<Image
				mx="auto"
				display={{ base: 'none', md: 'block' }}
				src={'/images/asset.png'}
			/>
			<Image
				mx="auto"
				display={{ base: 'block', md: 'none' }}
				src={'/images/bannerAnti.png'}
			/>
			<Box>
				<Heading
					fontSize="39px"
					textAlign="center"
					m="120px 80px"
					color="#389CD6"
				>
					keep up to date with our discoveries
				</Heading>
			</Box>
		</Box>
	);
};

export default Landingpage;
