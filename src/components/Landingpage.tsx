import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
	Text,
	Heading,
	Box,
	Flex,
	Image,
	Icon,
	Button,
	Link,
} from '@chakra-ui/react';
import HoverMenu from './HoverMenu';
import Drawer from './Drawer';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import { RxDividerHorizontal, RxDividerVertical } from 'react-icons/rx';
import Head from 'next/head';

const Landingpage = () => {
	const carousel = [
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
	const carousel2 = [
		{
			img: '/images/2a.png',
			subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			img: '/images/2b.png',
			subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			img: '/images/2c.png',
			subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	];
	return (
		<Box>
			<Head>
				<meta
					name="description"
					content="website asked in a application test for The Broklyn Brothers application"
				/>
				<title>Antibiome - The Broklyn Brothers</title>
			</Head>
			<Box>
				<Flex
					p={{ base: '25px 30px', md: 'none' }}
					justifyContent={{ base: 'space-between', md: 'center' }}
					h={{ base: '70px', md: '80px' }}
					w="100%"
					maxWidth="1980px"
					alignItems="center"
				>
					<Drawer />
					<Image
						alignSelf="center"
						mr={{ base: '5px', md: '420px' }}
						w={{ base: '143px', md: '195px' }}
						h={{ base: '58px', md: '79px' }}
						src="/images/headerLogo.png"
						alt="logo antibiome"
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
					w="100%"
					h="100%"
					mx="auto"
					src="/images/banner.png"
					alt="banner antibiome"
				/>
				<Image
					display={{ base: 'block', md: 'none' }}
					mx="auto"
					w="100%"
					h="100%"
					src="/images/banner2.png"
					alt="banner antibiome"
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

			<Image
				mx="auto"
				w={{ base: '100%', md: '1132px' }}
				h="100%"
				src="/images/icons.png"
				alt="icons promote preserve protect"
			/>

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
					{carousel.map((el: any, index: any) => (
						<div key={`${index}${el.subtext}`} className="item">
							<Box w="356px" rounded="md" boxShadow="lg">
								<Image
									w="100%"
									className="innerImg"
									src={el.img}
									h="100%"
									alt={`logo ${el.subtext}`}
								/>
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
				<Carousel images={carousel} />
			</Box>
			<Box m="120px 0px">
				<Image
					mx="auto"
					w="100%"
					h="100%"
					display={{ base: 'none', md: 'block' }}
					src={'/images/asset.png'}
					alt="banner antiome"
				/>
				<Image
					w="100%"
					mx="auto"
					h="100%"
					display={{ base: 'block', md: 'none' }}
					src={'/images/bannerAnti.png'}
					alt="banner antiome"
				/>
			</Box>
			<Box>
				<Heading
					fontSize="39px"
					textAlign="center"
					m="120px 80px"
					color="#389CD6"
				>
					keep up to date with our discoveries
				</Heading>
				<Box display={{ base: 'block', md: 'none' }}>
					<Carousel2 images={carousel2} />
				</Box>
				<Box display={{ base: 'none', md: 'block' }}>
					<Flex justifyContent="center">
						{carousel2.map((el: any, index: any) => (
							<div key={index} className="item">
								<Box w="356px" rounded="md" boxShadow="lg">
									<Image
										h="232px"
										w="100%"
										className="innerImg"
										src={el.img}
										alt={`image of ${el.subtext}`}
									/>
									<Box>
										<Text fontSize="20px" p="16px">
											{el.subtext}
										</Text>
									</Box>
								</Box>
							</div>
						))}
					</Flex>
				</Box>
				<Flex
					m={{ base: '40px 80px', md: '85px 120px' }}
					justifyContent="center"
				>
					<Button w={{ base: '392px', md: '356px' }} colorScheme="blue">
						see more
					</Button>
				</Flex>
			</Box>
			<Box backgroundColor="#389CD6" w="100%">
				<Flex
					p="76px 90px"
					mx="auto"
					justifyContent="space-between"
					w={{ base: '100%', md: '800px' }}
					flexDir={{ base: 'column', md: 'row' }}
					alignItems="center"
				>
					<Link color="white" href="#">
						contact us
					</Link>
					<Icon
						color="white"
						display={{ base: 'none', md: 'flex' }}
						as={RxDividerVertical}
					/>
					<Icon
						color="white"
						display={{ base: 'flex', md: 'none' }}
						as={RxDividerHorizontal}
					/>
					<Link color="white" href="#">
						faq
					</Link>
					<Icon
						color="white"
						display={{ base: 'flex', md: 'none' }}
						as={RxDividerHorizontal}
					/>
					<Icon
						color="white"
						display={{ base: 'none', md: 'flex' }}
						as={RxDividerVertical}
					/>
					<Link color="white" href="#">
						site map
					</Link>
					<Icon
						color="white"
						display={{ base: 'none', md: 'flex' }}
						as={RxDividerVertical}
					/>
					<Icon
						color="white"
						display={{ base: 'flex', md: 'none' }}
						as={RxDividerHorizontal}
					/>
					<Link color="white" href="#">
						privacy policy
					</Link>
					<Icon
						color="white"
						display={{ base: 'none', md: 'flex' }}
						as={RxDividerVertical}
					/>
					<Icon
						color="white"
						display={{ base: 'flex', md: 'none' }}
						as={RxDividerHorizontal}
					/>
					<Link color="white" href="#">
						cookies policy
					</Link>
					<Icon
						color="white"
						display={{ base: 'none', md: 'flex' }}
						as={RxDividerVertical}
					/>
					<Icon
						color="white"
						display={{ base: 'flex', md: 'none' }}
						as={RxDividerHorizontal}
					/>
					<Link color="white" href="#">
						legal notice
					</Link>
				</Flex>
				<Flex
					justifyContent={{ base: 'center', md: 'space-between' }}
					flexDir={{ base: 'column', md: 'row' }}
					w={{ base: '90%', md: '1200px' }}
					alignContent="center"
					mx="auto"
					p="64px 90px"
				>
					<Image
						mb="100px"
						mx="auto"
						src="/images/logo.png"
						w="116px"
						h="29px"
						alt="logo u-labs"
					/>
					<Image
						mx="auto"
						src="/images/insta.png"
						w="42px"
						h="42px"
						alt="logo instagram"
					/>
				</Flex>
			</Box>
		</Box>
	);
};

export default Landingpage;
