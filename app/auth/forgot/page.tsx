import Image from "next/image";
import { Flex, Box, Card, Heading, Text, TextField, Button } from "@radix-ui/themes";

export default function LoginPage() {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box width="540px">
        <Card size="4">
          <Flex align="center" justify="center" direction="column" gap="4">
            <Box>
              <Image src="/logo.svg" alt="Note taking app Logo" width="95" height="28" />
            </Box>
            <Box style={{ alignSelf: "stretch" }}>
              <Heading as="h2" mb="2" align="center">Forgotten your password?</Heading>
              <Text as="p" align="center">Enter your email below, and we’ll send you a link to reset it.</Text>
            </Box>
            <Flex direction="column" gap="4" style={{ alignSelf: "stretch" }}>
              <Box>
                <Flex mb="1">
                  <Text
                    as="label"
                    htmlFor="email"
                    size="2"
                    weight="bold"
                  >
                    Email address
                  </Text>
                </Flex>
                <TextField.Root
                  placeholder="Enter your email"
                  id="email"
                />
              </Box>
              <Flex direction="column">
                <Button>Send Reset Link</Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
}
