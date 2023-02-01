import React from 'react';
import { motion } from 'framer-motion';
import { Text, Heading, Flex, Box, Image } from '@chakra-ui/react';

const Products = ({ images }) => {
	return (
		<div className="outCarousel">
			<motion.div className="carousel" whileTap={{ cursor: 'grabbing' }}>
				<motion.div
					className="inner"
					drag="x"
					dragConstraints={{ right: 400, left: -400 }}
				>
					{images.map((el: any, index: any) => (
						<motion.div key={index} className="item">
							<Box w="356px" rounded="md" boxShadow="lg">
								<Image className="innerImg" src={el.img} w="100%" h="100%" alt={`logo ${el.bottom}`} />
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
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Products;
