import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Separator, Button } from "@radix-ui/themes";

export default function MyApp({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex height="100vh">
      <Box style={{ borderRight: '1px solid #E5E7EB', minWidth: '272px' }} p="4">
        <Flex direction="column" gap="4">
          <Box>
            <Image src="/logo.svg" alt="Note taking app Logo" width="95" height="28" />
          </Box>
          <Flex direction="column" gap="3">
            <Flex direction="column" gap="2">
              <Button variant="outline" asChild>
                <Link href="/all">All notes</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/archived">Archived notes</Link>
              </Button>
            </Flex>
            <Separator size="4" />
            <Box>2</Box>
          </Flex>
        </Flex>
      </Box>
      <Box p="4">
        {children}
      </Box>
    </Flex>
  );
}
