import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const DiseaseTable = ({ diseases, setDiseases, handleLinkFieldFocus }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState(null);
  const nameRef = useRef();
  const yearsRef = useRef();
  const isPrimaryRef = useRef();
  const descriptionRef = useRef();

  const handleDelete = (i) =>
    setDiseases((old) => old.filter((item) => item.name != i.name));

  const handleAdd = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const years = yearsRef.current.value;
    const isPrimary = isPrimaryRef.current.checked;
    const description = descriptionRef.current.value;
    setDiseases([
      ...diseases,
      {
        disease: name,
        suffering_from_how_many_years: years,
        primary_problem: isPrimary ? 1 : 0,
        description,
      },
    ]);
    onClose();
  };

  return (
    <Box overflow={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Disease</Th>
            <Th>Suffering From how many years</Th>
            <Th>Primary Problem</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        {diseases.length > 0 && (
          <Tbody>
            {diseases.map((i) => (
              <Tr key={i.disease}>
                {/* <Td>{i.id}</Td> */}
                <Td>{i.disease}</Td>
                <Td>{i.suffering_from_how_many_years}</Td>
                <Td>
                  <Checkbox
                    value={i.primary_problem}
                    isChecked={i.primary_problem}
                  />
                </Td>
                <Td>
                  <ButtonGroup size={"sm"}>
                    <Button colorScheme={"red"} onClick={() => handleDelete(i)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
      {diseases.length == 0 && (
        <Center h={32}>
          <Text>
            Click{" "}
            <Link color={"blue.400"} onClick={onOpen}>
              <u>here</u>
            </Link>{" "}
            to add disease
          </Text>
        </Center>
      )}
      <Button size={"sm"} mt={5} onClick={onOpen}>
        Add Item
      </Button>
      <Modal
        size={"lg"}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        isCentered
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Add disease
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <VStack>
              <FormControl id="disease">
                <FormLabel>Disease</FormLabel>
                <Select
                  ref={nameRef}
                  name="disease"
                  required
                  onFocus={() =>
                    handleLinkFieldFocus("Diseases", setData, data)
                  }
                >
                  {data ? (
                    data.map((i) => {
                      return (
                        <option key={i.name} value={i.name}>
                          {i.name}
                        </option>
                      );
                    })
                  ) : (
                    <>
                      <option value={""}> </option>;
                      <option value="">Loading...</option>
                    </>
                  )}
                </Select>
              </FormControl>
              <FormControl id="years">
                <FormLabel>Suffering from how many years</FormLabel>
                <Input
                  ref={yearsRef}
                  name="suffering_from_how_many_years"
                  type={"number"}
                  placeholder="Years"
                  required
                />
              </FormControl>
              <FormControl id="isprimary">
                <Checkbox ref={isPrimaryRef} name="primary_problem" required>
                  Is Primary
                </Checkbox>
              </FormControl>
              <FormControl id="disease_description">
                <FormLabel>Description</FormLabel>
                <Textarea ref={descriptionRef} name="disease_description" />
              </FormControl>
              <ButtonGroup
                display={"flex"}
                justifyContent={"space-between"}
                w={"full"}
              >
                <Button onClick={onClose}>Cancel</Button>
                <Button colorScheme={"blue"} onClick={handleAdd}>
                  Add
                </Button>
              </ButtonGroup>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DiseaseTable;
