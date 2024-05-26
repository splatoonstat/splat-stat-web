"use client";

import { Container, Heading, Select, Stack } from "@chakra-ui/react";
import { data } from "../data";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AbilityPointAverage } from "./AbilityPointAverage";

export const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const weapon = searchParams.get("weapon");
  const [selectedWeapon, setSelectedWeapon] = useState("");

  useEffect(() => {
    if (weapon) {
      setSelectedWeapon(weapon);
    }
  }, [weapon]);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newWeapon = e.target.value;
    setSelectedWeapon(newWeapon);

    const newParams = new URLSearchParams(searchParams);
    if (newWeapon) {
      newParams.set("weapon", newWeapon);
    } else {
      newParams.delete("weapon");
    }
    router.replace(`?${newParams.toString()}`);
  };

  return (
    <Container maxWidth="120em">
      <Stack spacing="6">
        <Heading as="h2" size="md">
          ルール × Xパワー別 ギアパワー平均
        </Heading>
        <Select
          placeholder="ブキを選択してください"
          value={selectedWeapon}
          onChange={handleSelectChange}
          maxWidth="96"
        >
          {data.master.weapons.map((weapon) => (
            <option key={weapon.id} value={weapon.id}>
              {weapon.name}
            </option>
          ))}
        </Select>

        <AbilityPointAverage weapon={selectedWeapon} />
      </Stack>
    </Container>
  );
};
