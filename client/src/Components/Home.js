import React,{useEffect,useState} from 'react';
import {list} from "../utils/pollService";
import {useAuthContex} from "../contex/authProvider";
import { Box,SimpleGrid,Container,Button, Progress, Flex, Spacer,Grid,Center } from "@chakra-ui/react"

function Home(){
    const [polls, setPolls] = useState(null);
    const [errors, setErrors] = useState(null);
    const {isLoggedIn,setUser} = useAuthContex();

    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list()
            console.log(data,error)

            if (error){
                setErrors(error)
            }else {
                setPolls(data)
            }
        };
        fetchData();
    },[]);

    return(
        <Grid ml="11%"  templateColumns="repeat(5, 1fr)" gap={1}  mt="50px" maxW="200px" maxH="auto">
        {polls &&
                polls.map((polls)=>(
                    <Center key={polls.id}>
                        <Container  centerContent >
                            <Box mt="20px" boxShadow="base" bg="gray.50" w="350px" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                <Box color="gray.500"
                                     fontWeight="semibold"
                                     letterSpacing="wide"
                                     fontSize="xs"
                                     textTransform="uppercase"
                                     ml="2" p="3">
                                    <h3>{polls.questionName}</h3>
                                    <Box mt="10px" fontSize="sm" color="blue.400">
                                        <Flex>
                                            <Box width="70%">
                                                <p>{polls.answerOne}</p>
                                                <Progress value={polls.answerOneVal} />
                                            </Box>
                                            <Spacer/>
                                            <Button mt="10px" h="33px">Vote</Button>
                                        </Flex>
                                    </Box>
                                    <Box mt="10px" fontSize="sm" color="blue.400">
                                        <Flex>
                                            <Box width="70%">
                                                <p>{polls.answerTwo}</p>
                                                <Progress value={polls.answerTwoVal} />
                                            </Box>
                                            <Spacer/>
                                            <Button mt="10px" h="33px">Vote</Button>
                                        </Flex>
                                    </Box>
                                    <Box color="green.400" mt="15px" fontSize="10px">
                                        <p>Created by : {polls.user.email}</p>
                                        <p>Created : {polls.createdAt}</p>
                                    </Box>
                                    <Button mt="10px" colorScheme="blue"><a href={`/poll/${polls.id}`}>Answer Poll</a></Button>
                                </Box>
                            </Box>
                        </Container>
                    </Center>

                ))}
        </Grid>
    )
}

export default Home;