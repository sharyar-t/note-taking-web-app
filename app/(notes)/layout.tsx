import Image from "next/image";
import { Flex, Box } from "@radix-ui/themes";
import Nav from "@/components/Nav";

export default function MyApp({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex height="100vh">
      <Box style={{ borderRight: '1px solid #E5E7EB', minWidth: '272px' }} p="4">
        <Flex direction="column" gap="4">
          <Box>
            <Image src="/logo.svg" alt="Note taking app Logo" width="95" height="28" />
          </Box>
          <Nav />
        </Flex>
      </Box>
      <Box p="4">
        {children}
      </Box>
    </Flex>
  );
}
