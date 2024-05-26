import { ExternalLinkIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Text,
  PopoverHeader,
  Stack,
} from "@chakra-ui/react";

export const AbilityPointAverageDescription = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          isRound
          variant="ghost"
          size="sm"
          colorScheme="gray"
          aria-label="説明"
          icon={<QuestionOutlineIcon />}
        />
      </PopoverTrigger>
      <PopoverContent padding="2" paddingTop="6">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack fontSize="sm">
            <Text>
              <Link href="https://stat.ink/" isExternal color="blue.500">
                stat.ink
                <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              の統計情報を基に、各ブキのルールとXパワー別のギアパワー平均を集計したチャートです。
              <br />
            </Text>
            <Text>
              凡例をクリックすると、そのルールのデータを非表示にすることができます。
            </Text>
            <Text>
              データポイントをホバーまたはタップすると、そのデータポイントのサンプルサイズとギアパワー平均を確認することができます。
              サンプルサイズが小さい場合は結果が信頼できない可能性があります。
            </Text>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
