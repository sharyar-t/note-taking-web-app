"use client";

import Link from "next/link";
import { Box, Flex, Separator, Link as RadixLink } from "@radix-ui/themes";

export default function Nav() {
  return (
    <Flex direction="column" gap="3">
      <Flex direction="column" gap="2">
        <Link href="/all" passHref legacyBehavior>
          <RadixLink weight="medium">
            All notes
          </RadixLink>
        </Link>
        <Link href="/archived" passHref legacyBehavior>
          <RadixLink weight="medium">
            Archived notes
          </RadixLink>
        </Link>
      </Flex>
      <Separator size="4" />
      <Box>2</Box>
    </Flex>
  )
}