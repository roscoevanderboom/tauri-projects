"use client";

import tweets from "@/tweets";
import { Box, Button, Container, Stack, TextInput } from "@mantine/core";
import { invoke } from "@tauri-apps/api";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const handleGreeting = async () => {
    let res: string = await invoke("greet", { name });
    setGreeting(res);
    tweets("success", res)
  };

  return (
    <Box p={12} component="main">
      <Container>
        <Stack gap="xl">
          <TextInput
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <Button onClick={handleGreeting}>Hello</Button>
          {greeting && <p>{greeting}</p>}
        </Stack>
      </Container>
    </Box>
  );
}
