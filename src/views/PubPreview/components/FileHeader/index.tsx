import React from "react";
import { Flex, Box, Text, Tooltip, Button, Card } from "sriracha-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";

interface FileHeaderProps {
  title: string;
  currFile: any;
}

export default function FileHeader({ title, currFile }: FileHeaderProps) {
  async function exportMarkdownFile(file: any) {
    const blob = new Blob([file.body], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, `${file.slug}.md`);
  }

  return (
    <Flex stretch h="4rem" aic jcb>
      <Flex aic>
        <Box w="2rem" />
        <Text as="h2" bold size="xl">
          {title}
        </Text>
        <Text as="p" color="red6" ml="2rem">
          This is a published file. You cannot change or edit here, only
          preview.
        </Text>
        <Box w="2rem" />
      </Flex>
      <Flex>
        <Tooltip ttRight="7.4rem" ttTop="8.2rem">
          <Button
            as={Link}
            to={`/file/${currFile?.slug}`}
            orange
            p="0.5rem 0.8rem"
          >
            <FontAwesomeIcon icon="cog" />
          </Button>
          <div className="tooltip">
            <Card invert m="0">
              <Text>Go to editable file.</Text>
            </Card>
          </div>
        </Tooltip>
        <Tooltip ttRight="3rem" ttTop="8.2rem">
          <Button
            blue
            p="0.5rem 1rem"
            onClick={() => exportMarkdownFile(currFile)}
          >
            <FontAwesomeIcon icon="file-download" />
          </Button>
          <div className="tooltip">
            <Card invert m="0">
              <Text>Export as markdown file</Text>
            </Card>
          </div>
        </Tooltip>
        <Box w="0.5rem" />
      </Flex>
    </Flex>
  );
}
