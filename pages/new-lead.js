import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import DiseaseTable from "../components/lead/DiseaseTable";
import { getLinkFieldData } from "../services/link_field.service";

const NewLead = () => {
  const [loading, setLoading] = useState(false);
  const [diseases, setDiseases] = useState([]);
  const [source, setSource] = useState(null);
  const [subStatus, setSubStatus] = useState(null);
  const toast = useToast({ position: "top" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData);
    axios
      .post("/api/lead", {
        disease_table: diseases,
        ...formJson,
        have_you_suffered_from_covid: formJson.have_you_suffered_from_covid
          ? 1
          : 0,
      })
      .then((res) => {
        // alert("Lead created successfully");
        toast({
          status: "success",
          title: "Lead created",
          description: `Lead has been created successfully`,
          duration: 3000,
          isClosable: true,
          onCloseComplete: window.location.reload(),
        });
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          toast({
            status: "error",
            title: "Unable to create lead",
            description: err.response.data.error,
            duration: 3000,
            isClosable: true,
          });
        } else if (
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          toast({
            status: "error",
            title: "Unable to create lead",
            description: err.response.data.message,
            duration: 3000,
            isClosable: true,
          });
        } else if (err.response.data._server_messages) {
          toast({
            status: "error",
            title: "Unable to create lead",
            description: err.response.data._server_messages,
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            status: "error",
            title: "Unable to create lead",
            description: "Something went wrong",
            duration: 3000,
            isClosable: true,
          });
        }
        setLoading(false);
      });
  };

  const handleLinkFieldFocus = async (field, setField, state) => {
    if (state) return;
    const [data, error] = await getLinkFieldData(field);
    setField(data);
  };

  return (
    <Box>
      <Head>
        <title>New Lead</title>
      </Head>
      <main>
        <Container
          as="form"
          onSubmit={handleSubmit}
          pb={10}
          maxW={"6xl"}
          minH={"100vh"}
        >
          <Accordion allowMultiple>
            <Flex justify={"space-between"} h={20} align={"center"} w={"full"}>
              <Heading>New Lead</Heading>
              <Button type="submit" isLoading={loading} colorScheme={"blue"}>
                Save
              </Button>
            </Flex>
            <Divider mb={5} />
            <Grid gap={5} templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
              <GridItem>
                <FormControl id="lead_owner">
                  <FormLabel>Lead Owner</FormLabel>
                  <Input
                    readOnly
                    placeholder="Lead Owner"
                    name="lead_owner"
                    value={"Administrator"}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="phone">
                  <FormLabel>Phone</FormLabel>
                  <Input placeholder="Phone" name="phone" required />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="status">
                  <FormLabel>Status</FormLabel>
                  <Select name="status">
                    <option value="Lead">Lead</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Clinical Enquiry">Clinical Enquiry</option>
                    <option value="Product Opportunity">
                      Product Opportunity
                    </option>
                    <option value="Clinical Opportunity">
                      Clinical Opportunity
                    </option>
                    <option value="Language Issue">Language Issue</option>
                    <option value="CallBack">CallBack</option>
                    <option value="Awaiting for AV">Awaiting for AV</option>
                    <option value="AV Rejected">AV Rejected</option>
                    <option value="Order Dispatch">Order Dispatch</option>
                    <option value="Clinic Visited">Clinic Visited</option>
                    <option value="Appointment Scheduled">
                      Appointment Scheduled
                    </option>
                    <option value="Franchise">Franchise</option>
                    <option value="Clinical Address">Clinical Address</option>
                    <option value="Junk Call">Junk Call</option>
                    <option value="Do Not Contact">Do Not Contact</option>
                    <option value="ENQUIRY">ENQUIRY</option>
                    <option value="Order Cancelled">Order Cancelled</option>
                    <option value="Order Verified">Order Verified</option>
                    <option value="Ready to Dispatch">Ready to Dispatch</option>
                    <option value="Yet to Ship">Yet to Ship</option>
                    <option value="SHIPPED">SHIPPED</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Not Interested">Not Interested</option>
                    <option value="Pending For Payment">
                      Pending For Payment
                    </option>
                    <option value="Discount Approval">Discount Approval</option>
                    <option value="AV Discount Approval">
                      AV Discount Approval
                    </option>
                    <option value="Dr Discount Approval">
                      Dr Discount Approval
                    </option>
                    <option value="AV Hold">AV Hold</option>
                    <option value="Address Verification">
                      Address Verification
                    </option>
                    <option value="Dr. Advice">Dr. Advice</option>
                    <option value="Dispatch">Dispatch</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Converted">Converted</option>
                    <option value="Do Not Contact">Do Not Contact</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="lead_name">
                  <FormLabel>Person Name</FormLabel>
                  <Input placeholder="Person Name" name="lead_name" required />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="email_id">
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email address"
                    name="email_id"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="gender">
                  <FormLabel>Gender</FormLabel>
                  <Select placeholder="Gender" name="gender">
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Other"}>Other</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="sub_status">
                  <FormLabel>Sub Status</FormLabel>
                  {/* <Input placeholder="Sub Status" name="sub_status" required /> */}
                  <Select
                    name="sub_status"
                    onFocus={() =>
                      handleLinkFieldFocus(
                        "Sub Status",
                        setSubStatus,
                        subStatus
                      )
                    }
                  >
                    {subStatus ? (
                      subStatus.map((i) => {
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
              </GridItem>
              <GridItem>
                <FormControl id="source">
                  <FormLabel>Source</FormLabel>
                  {/* <Input placeholder="Lead Source" name="source" /> */}
                  <Select
                    name="source"
                    onFocus={() =>
                      handleLinkFieldFocus("Lead Source", setSource, source)
                    }
                  >
                    {source ? (
                      source.map((i) => {
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
              </GridItem>
              <GridItem>
                <FormControl id="occupation_type">
                  <FormLabel>Occupation Type</FormLabel>
                  <Select name="occupation_type">
                    <option value={""}> </option>
                    <option value={"Sitting"}>Sitting</option>
                    <option value={"Field Job"}>Field Job</option>
                    <option value={"House Wife"}>House Wife</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="pincode">
                  <FormLabel>Pincode</FormLabel>
                  <Input placeholder="Pincode" name="pincode" />
                </FormControl>
              </GridItem>
            </Grid>
            <AccordionItem my={5}>
              <AccordionButton>
                <Heading size={"md"}>Personal Details</Heading>
                <AccordionIcon ml={"auto"} />
              </AccordionButton>
              <AccordionPanel>
                <Grid
                  gap={5}
                  templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
                >
                  <GridItem>
                    <FormControl id="age">
                      <FormLabel>Age</FormLabel>
                      <Input type="number" placeholder="Age" name="age" />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl id="weight">
                      <FormLabel>Weight</FormLabel>
                      <Input type="number" placeholder="Weight" name="weight" />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl id="height">
                      <FormLabel>Height</FormLabel>
                      <Select name="height">
                        <option value={""}> </option>
                        <option value="Less than 4 feet">
                          Less than 4 feet
                        </option>
                        <option value="4.0(Feet)-121(Cms)">
                          4.0(Feet)-121(Cms)
                        </option>
                        <option value="4.1(Feet)-124(Cms)">
                          4.1(Feet)-124(Cms)
                        </option>
                        <option value="4.2(Feet)-127(Cms)">
                          4.2(Feet)-127(Cms)
                        </option>
                        <option value="4.3(Feet)-129(Cms)">
                          4.3(Feet)-129(Cms)
                        </option>
                        <option value="4.4(Feet)-132(Cms)">
                          4.4(Feet)-132(Cms)
                        </option>
                        <option value="4.5(Feet)-134(Cms)">
                          4.5(Feet)-134(Cms)
                        </option>
                        <option value="4.6(Feet)-137(Cms)">
                          4.6(Feet)-137(Cms)
                        </option>
                        <option value="4.8(Feet)-142(Cms)">
                          4.8(Feet)-142(Cms)
                        </option>
                        <option value="4.9(Feet)-144(Cms)">
                          4.9(Feet)-144(Cms)
                        </option>
                        <option value="5.0(Feet)-152(Cms)">
                          5.0(Feet)-152(Cms)
                        </option>
                        <option value="5.1(Feet)-154(Cms)">
                          5.1(Feet)-154(Cms)
                        </option>
                        <option value="5.2(Feet)-157(Cms)">
                          5.2(Feet)-157(Cms)
                        </option>
                        <option value="5.3(Feet)-160(Cms)">
                          5.3(Feet)-160(Cms)
                        </option>
                        <option value="5.4(Feet)-162(Cms)">
                          5.4(Feet)-162(Cms)
                        </option>
                        <option value="5.5(Feet)-165(Cms)">
                          5.5(Feet)-165(Cms)
                        </option>
                        <option value="5.6(Feet)-167(Cms)">
                          5.6(Feet)-167(Cms)
                        </option>
                        <option value="5.7(Feet)-170(Cms)">
                          5.7(Feet)-170(Cms)
                        </option>
                        <option value="5.8(Feet)-172(Cms)">
                          5.8(Feet)-172(Cms)
                        </option>
                        <option value="5.9(Feet)-175(Cms)">
                          5.9(Feet)-175(Cms)
                        </option>
                        <option value="6.0(Feet)-182(Cms)">
                          6.0(Feet)-182(Cms)
                        </option>
                        <option value="More than 6.0">More than 6.0</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl id="blood_group">
                      <FormLabel>Blood Group</FormLabel>
                      <Select name="blood_group">
                        <option value="NA">NA</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl id="martial_status">
                      <FormLabel>Martial Status</FormLabel>
                      <Select name="martial_status">
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widow">Widow</option>
                        <option value="Others">Others</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={5}>
              <AccordionButton>
                <Heading size={"md"}>Disease</Heading>
                <AccordionIcon ml={"auto"} />
              </AccordionButton>
              <AccordionPanel>
                <DiseaseTable
                  diseases={diseases}
                  setDiseases={setDiseases}
                  handleLinkFieldFocus={handleLinkFieldFocus}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={5}>
              <AccordionButton>
                <Heading size={"md"}>Symptoms</Heading>
                <AccordionIcon ml={"auto"} />
              </AccordionButton>
              <AccordionPanel>
                <Textarea
                  name="symptom"
                  minH={44}
                  placeholder="Add symptoms here"
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={5}>
              <AccordionButton>
                <Heading size={"md"}>Covid Complications</Heading>
                <AccordionIcon ml={"auto"} />
              </AccordionButton>
              <AccordionPanel>
                <Checkbox name="have_you_suffered_from_covid">
                  Have you suffered from covid
                </Checkbox>
                <FormControl mt={5}>
                  <FormLabel>Post covid complications</FormLabel>
                  <Textarea
                    name="post_covid_complications"
                    minH={44}
                    placeholder="Post covid complications"
                  />
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={5}>
              <AccordionButton>
                <Heading size="md">Notes</Heading>
                <AccordionIcon ml={"auto"} />
              </AccordionButton>
              <AccordionPanel>
                <FormControl id="notes">
                  <FormLabel>Notes</FormLabel>
                  <Textarea name="notes" minH={44} />
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={5}>
              <AccordionButton>
                <Heading size="md">More information</Heading>
                <AccordionIcon ml={"auto"} />
              </AccordionButton>
              <AccordionPanel>
                <Grid
                  gap={5}
                  templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
                >
                  <GridItem>
                    <FormControl id="lead_type">
                      <FormLabel>Lead type</FormLabel>
                      <Select name="type">
                        <option value=""> </option>
                        <option value="Client">Client</option>
                        <option value="Client Partner">Client Partner</option>
                        <option value="Consultant">Consultant</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl id="request_type">
                      <FormLabel>Request type</FormLabel>
                      <Select name="request_type">
                        <option value=""> </option>
                        <option value="Product Enquiry">Product Enquiry</option>
                        <option value="Request for Information">
                          Request for Information
                        </option>
                        <option value="Suggestions">Suggestions</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
        <Divider my={10} />
      </main>
    </Box>
  );
};

export default NewLead;
