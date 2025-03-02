import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Card, Heading, Text, TextField, Link as RadixLink, Button, Separator } from "@radix-ui/themes";

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
              <Heading as="h2" mb="2" align="center">Welcome to Note</Heading>
              <Text as="p" align="center">Please log in to continue</Text>
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
              <Box>
                <Flex align="center" justify="between" mb="1">
                  <Text
                    as="label"
                    htmlFor="password"
                    size="2"
                    weight="bold"
                  >
                    Password
                  </Text>
                  <Link href="forgot" passHref legacyBehavior>
                    <RadixLink size="2" weight="medium">Forgot password?</RadixLink>
                  </Link>
                </Flex>
                <TextField.Root
                  placeholder="Enter your password"
                  id="password"
                />
              </Box>
              <Flex direction="column">
                <Button>Login</Button>
              </Flex>
            </Flex>
            <Separator size="4" />
            <Flex direction="column" gap="2" style={{ alignSelf: "stretch" }}>
              <Text as="p" size="2" align="center">Or log in with:</Text>
              <Button variant="outline" color="gray">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                  <path fill="#0E121B" fillRule="evenodd" d="M20.838 14.718a9 9 0 0 0 .086-2.857.56.56 0 0 0-.557-.473h-7.805a.56.56 0 0 0-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 0 1 8.369-5.776.57.57 0 0 0 .73-.06l1.703-1.733a.56.56 0 0 0-.046-.832 8.9 8.9 0 0 0-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694-.167 5.108 3.927 9.302 8.995 9.302 4.383 0 8.037-3.14 8.838-7.29" clipRule="evenodd"/>
                </svg>
                Google
              </Button>
            </Flex>
            <Separator size="4" />
            <Box>
              <Text size="2">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" passHref legacyBehavior>
                  <RadixLink weight="medium">
                    Sign Up!
                  </RadixLink>
                </Link>
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
}
