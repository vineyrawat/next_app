import {
  Box,
  Button,
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
} from "@chakra-ui/react";
import Head from "next/head";

const NewLead = () => {
  return (
    <Box>
      <Head>
        <title>New Lead</title>
      </Head>
      <main>
        <Container pb={10} maxW={"6xl"} minH={"100vh"}>
          <Flex justify={"space-between"} h={20} align={"center"} w={"full"}>
            <Heading>New Lead</Heading>
            <Button colorScheme={"blue"}>Save</Button>
          </Flex>
          <Divider mb={5} />
          <Grid gap={5} templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
            <GridItem>
              <FormControl id="lead_owner">
                <FormLabel>Lead Owner</FormLabel>
                <Input placeholder="Lead Owner" name="lead_owner" />
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
              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <Input placeholder="Email address" name="email" />
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
                <Input placeholder="Sub Status" name="sub_status" required />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="source">
                <FormLabel>Source</FormLabel>
                <Input placeholder="Lead Source" name="source" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="occupation_type">
                <FormLabel>Occupation Type</FormLabel>
                <Select placeholder="Occupation" name="occupation_type">
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
            <GridItem>
              <FormControl id="pincode">
                <FormLabel>Pincode</FormLabel>
                <Input placeholder="Pincode" name="pincode" />
              </FormControl>
            </GridItem>
          </Grid>
          <Divider my={5} />
          <Heading size={"md"}>Personal Details</Heading>
          <Divider my={5} />
          <Grid gap={5} templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
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
                  <option value="Less than 4 feet">Less than 4 feet</option>
                  <option value="4.0(Feet)-121(Cms)">4.0(Feet)-121(Cms)</option>
                  <option value="4.1(Feet)-124(Cms)">4.1(Feet)-124(Cms)</option>
                  <option value="4.2(Feet)-127(Cms)">4.2(Feet)-127(Cms)</option>
                  <option value="4.3(Feet)-129(Cms)">4.3(Feet)-129(Cms)</option>
                  <option value="4.4(Feet)-132(Cms)">4.4(Feet)-132(Cms)</option>
                  <option value="4.5(Feet)-134(Cms)">4.5(Feet)-134(Cms)</option>
                  <option value="4.6(Feet)-137(Cms)">4.6(Feet)-137(Cms)</option>
                  <option value="4.8(Feet)-142(Cms)">4.8(Feet)-142(Cms)</option>
                  <option value="4.9(Feet)-144(Cms)">4.9(Feet)-144(Cms)</option>
                  <option value="5.0(Feet)-152(Cms)">5.0(Feet)-152(Cms)</option>
                  <option value="5.1(Feet)-154(Cms)">5.1(Feet)-154(Cms)</option>
                  <option value="5.2(Feet)-157(Cms)">5.2(Feet)-157(Cms)</option>
                  <option value="5.3(Feet)-160(Cms)">5.3(Feet)-160(Cms)</option>
                  <option value="5.4(Feet)-162(Cms)">5.4(Feet)-162(Cms)</option>
                  <option value="5.5(Feet)-165(Cms)">5.5(Feet)-165(Cms)</option>
                  <option value="5.6(Feet)-167(Cms)">5.6(Feet)-167(Cms)</option>
                  <option value="5.7(Feet)-170(Cms)">5.7(Feet)-170(Cms)</option>
                  <option value="5.8(Feet)-172(Cms)">5.8(Feet)-172(Cms)</option>
                  <option value="5.9(Feet)-175(Cms)">5.9(Feet)-175(Cms)</option>
                  <option value="6.0(Feet)-182(Cms)">6.0(Feet)-182(Cms)</option>
                  <option value="More than 6.0">More than 6.0</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="weight">
                <FormLabel>Weight</FormLabel>
                <Input type="number" placeholder="Weight" name="weight" />
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
        </Container>
      </main>
    </Box>
  );
};

export default NewLead;
