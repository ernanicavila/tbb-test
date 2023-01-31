import React from 'react';
import { motion } from 'framer-motion';
import { Text, Heading, Flex, Box, Image } from '@chakra-ui/react';

const Carousel = ({ images }) => {
	return (
		<div className="outCarousel">
			<motion.div className="carousel" whileTap={{ cursor: 'grabbing' }}>
				<motion.div
					className="inner"
					drag="x"
					dragConstraints={{ right: 490, left: -400 }}
				>
					{images.map((el: any, index: any) => (
						<motion.div key={index} className="item">
							<Box w="356px" rounded="md" boxShadow="lg">
								<Image
									h="232px"
									w="100%"
									className="innerImg"
									src={el.img}
									alt={`image ${el.subtext}`}
								/>
								<Box>
									<Text fontSize="20px" p="16px">
										{el.subtext}
									</Text>
								</Box>
							</Box>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Carousel;
