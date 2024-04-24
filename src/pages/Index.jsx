// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Input, Text, VStack, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  // Sample data for VC companies
  const vcData = [
    { name: "Northzone", investments: 120, capitalDeployed: "1.5B" },
    { name: "Creandum", investments: 95, capitalDeployed: "1.2B" },
    { name: "EQT Ventures", investments: 80, capitalDeployed: "900M" },
    { name: "Kinnevik", investments: 70, capitalDeployed: "850M" },
    { name: "Balderton Capital", investments: 65, capitalDeployed: "800M" },
    { name: "Index Ventures", investments: 60, capitalDeployed: "750M" },
    { name: "Atomico", investments: 55, capitalDeployed: "700M" },
    { name: "Accel", investments: 50, capitalDeployed: "650M" },
    { name: "Klarna Ventures", investments: 45, capitalDeployed: "600M" },
    { name: "Lakestar", investments: 40, capitalDeployed: "550M" },
    { name: "Sequoia Capital", investments: 35, capitalDeployed: "500M" },
    { name: "SoftBank Vision Fund", investments: 30, capitalDeployed: "450M" },
    { name: "Greylock Partners", investments: 25, capitalDeployed: "400M" },
    { name: "Andreessen Horowitz", investments: 20, capitalDeployed: "350M" },
    { name: "Bessemer Venture Partners", investments: 15, capitalDeployed: "300M" },
    { name: "Lightspeed Venture Partners", investments: 10, capitalDeployed: "250M" },
    { name: "Tiger Global Management", investments: 5, capitalDeployed: "200M" },
    { name: "Y Combinator", investments: 3, capitalDeployed: "150M" },
    { name: "500 Startups", investments: 2, capitalDeployed: "100M" },
    { name: "LocalGlobe", investments: 1, capitalDeployed: "50M" },
  ];

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading as="h1" size="xl">
          Top 20 Early Stage Investors in Sweden
        </Heading>
        <Input placeholder="Search VC" size="lg" icon={<FaSearch />} />
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
        {vcData.map((vc, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack align="stretch">
              <Text fontSize="2xl" fontWeight="bold">
                {vc.name}
              </Text>
              <Stat>
                <StatLabel>Investments Made</StatLabel>
                <StatNumber>{vc.investments}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Capital Deployed</StatLabel>
                <StatNumber>{vc.capitalDeployed} USD</StatNumber>
              </Stat>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
