import React, { useEffect } from 'react';
import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import cursor from "../../../assets/images/cursor.png";
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course';
import { deleteCourse } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';

const AdminCourses = () => {
  const dispatch = useDispatch();
  
  const {courses , lectures} = useSelector(state => state.course)

  const {loading , error , message} = useSelector(state => state.admin)

  
  const { isOpen, onClose, onOpen } = useDisclosure();
 
  const courseDetailsHandler = (courseId) => {
    dispatch(getCourseLectures(courseId ))
    onOpen();
  };

  const deleteButtonHandler = (courseId) => {
         dispatch(deleteCourse(courseId));
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
    // Replace with actual logic to delete the lecture
  };

  const addLectureHandler = (e, courseid, title, description, vedio) => {
    e.preventDefault();
    // You may want to use courseid, title, description, vedio in your logic
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllCourses())
    
  }, [dispatch ,error , message ])
  

  return (
    <Grid css={{
      cursor: `url(${cursor}) , default`
    }}
    minH={"100vh"}
    templateColumns={['1fr', '5fr 1fr']}>

    <Box p={['0', "8"]} overflow={"auto"} >
      <Heading
        textTransform={"uppercase"}
        children="All  Courses"
        my={"16"}
        textAlign={['center', 'left']}
      />

      <TableContainer w={["100vw", "full"]} >
        <Table variant={"simple"} size={"lg"}>
          <TableCaption> All Available courses in the database </TableCaption>
          <Thead>
            <Tr>
              <Th>Id </Th>
              <Th>Poster </Th>
              <Th>Title </Th>
              <Th>Category </Th>
              <Th>Creator </Th>
              <Th isNumeric>Views </Th>
              <Th isNumeric>Lectures </Th>
              <Th isNumeric>Action </Th>
            </Tr>
          </Thead>

          <Tbody>
            {courses.map(item => (
              <Row
                courseDetailsHandler={courseDetailsHandler}
                deleteButtonHandler={deleteButtonHandler}
                key={item._id}
                item={item}
                loading={loading}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CourseModal 
        isOpen={isOpen} 
        onClose={onClose} 
        id={"absc"}
        CourseTitle={"MERN Course"}
        deleteButtonHandler={deleteLectureButtonHandler} 
        addLectureHandler={addLectureHandler}
        lectures= {lectures}
        loading ={loading}
      />
    </Box>

    <Sidebar />
  </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteButtonHandler , loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td>{item.numOfVedios}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} >
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={"outline"} color={"purple.500"}
            isLoading = {loading}
            >
             
            View Lectures
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'} ml={2}
            isLoading = {loading}

            >
              
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
