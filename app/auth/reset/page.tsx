import Image from "next/image";
import { Flex, Box, Card, Heading, Text, TextField, Button } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons"

export default function ResetPage() {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box width="540px">
        <Card size="4">
          <Flex align="center" justify="center" direction="column" gap="4">
            <Box>
              <Image src="/logo.svg" alt="Note taking app Logo" width="95" height="28" />
            </Box>
            <Box style={{ alignSelf: "stretch" }}>
              <Heading as="h2" mb="2" align="center">Reset Your Password</Heading>
              <Text as="p" size="2" align="center">Choose a new password to secure your account.</Text>
            </Box>
            <Flex direction="column" gap="4" style={{ alignSelf: "stretch" }}>
              <Box>
                <Box mb="2">
                  <Text
                    as="label"
                    htmlFor="password"
                    size="2"
                    weight="bold"
                  >
                    New Password
                  </Text>
                  <TextField.Root id="password" />
                </Box>
                <Flex align="center" gap="2">
                  <InfoCircledIcon />
                  <Text size="2">At least 8 characters</Text>
                </Flex>
              </Box>
              <Box>
                <Text
                  as="label"
                  htmlFor="password"
                  size="2"
                  weight="bold"
                >
                  Confirm New Password
                </Text>
                <TextField.Root id="password" />
              </Box>
              <Flex direction="column">
                <Button>Reset Password</Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
}
